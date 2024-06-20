import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import AddProductDto from "./dtos/add-product.dto";
import DeleteProductDto from "./dtos/delete-product.dto";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCart(id: number) {
    return await this.prisma.cart
      .findUnique({ where: { userId: id } })
      .items({ include: { product: true } });
  }

  async add(data: AddProductDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId: data.userId },
    });

    return await this.prisma.cartItems.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: data.productId,
        },
      },
      update: {
        quantity: data.quantity,
      },
      create: {
        cart: {
          connect: {
            userId: data.userId,
          },
        },
        product: {
          connect: {
            id: data.productId,
          },
        },
        quantity: data.quantity,
      },
    });
  }

  async update(data: AddProductDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId: data.userId },
    });

    return await this.prisma.cartItems.update({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: data.productId,
        },
      },
      data: {
        quantity: data.quantity,
      },
    });
  }

  async remove(data: DeleteProductDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId: data.userId },
    });

    await this.prisma.cartItems.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: data.productId,
        },
      },
    });
  }
}
