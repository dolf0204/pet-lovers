-- CreateTable
CREATE TABLE "PetAdopter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "pet" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PetAdopter_email_key" ON "PetAdopter"("email");
