/*
  Warnings:

  - You are about to drop the column `completeddAt` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `todo` table. All the data in the column will be lost.
  - Added the required column `text` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "completeddAt",
DROP COLUMN "title",
ADD COLUMN     "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "text" TEXT NOT NULL;
