/*
  Warnings:

  - Added the required column `expiresAt` to the `Coupons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupons" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
