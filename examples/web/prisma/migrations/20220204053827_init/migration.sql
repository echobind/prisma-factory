-- CreateTable
CREATE TABLE "Musician" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "Musician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "bandId" INTEGER,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BandToMusician" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Musician_email_key" ON "Musician"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BandToMusician_AB_unique" ON "_BandToMusician"("A", "B");

-- CreateIndex
CREATE INDEX "_BandToMusician_B_index" ON "_BandToMusician"("B");

-- AddForeignKey
ALTER TABLE "Musician" ADD CONSTRAINT "Musician_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BandToMusician" ADD FOREIGN KEY ("A") REFERENCES "Band"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BandToMusician" ADD FOREIGN KEY ("B") REFERENCES "Musician"("id") ON DELETE CASCADE ON UPDATE CASCADE;
