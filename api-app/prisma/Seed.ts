import { PrismaClient } from '@prisma/client';
import { dataCourses } from './data';
import {dataPrograms} from './Forfaits'


// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const courses = await prisma.course.createMany({
    data: dataCourses,
  });
  const programs = await prisma.program.createMany({
    data: dataPrograms,
  });
  

  console.log('seeded');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
