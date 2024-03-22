import { PrismaClient } from '@prisma/client';
import { dataCourses } from './data';
import {dataPrograms} from './Forfaits'
import { dataTeachers } from './TEACHERS';
import {SessionData} from './SessionData';
import { dataUser } from './Userdata';
import {LessonData} from './lesson'


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
  const teachers = await prisma.teacher.createMany({
    data: dataTeachers,
  });
  const sessions = await prisma.session.createMany({
    data: SessionData,
  });

  const users = await prisma.user.createMany({
    data: dataUser ,
  });
  const lessons = await prisma.lesson.createMany({
    data: LessonData  ,
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
