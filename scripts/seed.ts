const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

export async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "All" },
        { name: "NextJS" },
        { name: "ReactJS" },
        { name: "NodeJS" },
        { name: "Python" },
        { name: "MongoDB" },
        { name: "Prisma" },
        { name: "Tailwind CSS" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();