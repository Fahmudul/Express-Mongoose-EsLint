import Students from './student.model';
import { Student } from './student.interface';

const createStudentInDB = async (student: Student) => {
  const result = await Students.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Students.find({});
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Students.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentInDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB
};
