import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CartController } from "./modules/cart/cart.controller";
import { UsersController } from "./modules/users/users.controller";
import { OrdersController } from "./modules/orders/orders.controller";
import { ProductsController } from "./modules/products/products.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env.local",
    }),
  ],
  controllers: [
    AppController,
    CartController,
    UsersController,
    OrdersController,
    ProductsController,
  ],
  providers: [],
})
export class AppModule {}
