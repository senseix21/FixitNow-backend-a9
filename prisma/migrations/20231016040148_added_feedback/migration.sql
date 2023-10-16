-- CreateTable
CREATE TABLE "userFeedback" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userFeedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userFeedback" ADD CONSTRAINT "userFeedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
