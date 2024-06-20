import { HttpException, Injectable } from "@nestjs/common";
import CreateOrderDto from "./dtos/create-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
import UpdateStatusDto from "./dtos/update-status.dto";
import ApplyCouponDto from "./dtos/apply-coupon.dto";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder({ userId }: CreateOrderDto) {
    return await this.prisma.$transaction(async (prisma) => {
      const items = await prisma.cartItems.findMany({
        where: {
          cart: {
            userId: userId,
          },
        },
        include: {
          product: true,
        },
      });

      if (items.length === 0) {
        throw new HttpException("Cart is empty", 400);
      }

      const order = await prisma.orders.create({
        data: {
          user: {
            connect: { id: userId },
          },
          amount: items.reduce(
            (acc, item) => acc + item.quantity * item.product.price,
            0
          ),
        },
      });

      const orderItems = items.map((item) => ({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
      }));

      await prisma.orderDetails.createMany({
        data: orderItems,
      });

      await prisma.cartItems.deleteMany({
        where: {
          cart: {
            userId: userId,
          },
        },
      });

      return order;
    });
  }

  async updateStatus(id: number, { status }: UpdateStatusDto) {
    const order = await this.prisma.orders.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    if (!order) {
      throw new HttpException("Order not found", 404);
    }

    return order;
  }

  async orderDetails(id: number) {
    const order = await this.prisma.orders.findUnique({
      where: {
        id,
      },
      include: {
        orderDetails: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!order) {
      throw new HttpException("Order not found", 404);
    }

    return order;
  }

  async applyCoupon({ orderId, code }: ApplyCouponDto) {
    return await this.prisma.$transaction(async (prisma) => {
      const order = await prisma.orders.findUnique({
        where: {
          id: orderId,
        },
      });

      if (!order) {
        throw new HttpException("Order not found", 404);
      }

      const coupon = await prisma.coupons.findFirst({
        where: {
          code,
        },
      });

      if (!coupon) {
        throw new HttpException("Coupon not found", 404);
      }

      if (coupon.expiresAt < new Date()) {
        throw new HttpException("Coupon expired", 400);
      }

      const newOrder = await prisma.orders.update({
        where: {
          id: orderId,
        },
        data: {
          amount: order.amount - order.amount * (coupon.discount / 100),
          discounted: true,
        },
      });

      return newOrder;
    });
  }
}
