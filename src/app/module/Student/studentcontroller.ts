import { Request, Response } from 'express';
import { StudentServices } from './student.services';
const createStudent = async (req: Request, res: Response) => {
  try {
    // service function will be called
    const studentData = req.body.student;
    const result = await StudentServices.createStudentInDB(studentData);
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    });
    // send respons
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error from controller', error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    // service function will be called
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      data: result,
    });
    // send respons
  } catch (error) {
    console.log('error from controller', error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const result = await StudentServices.getSingleStudentFromDB(
    req.params.studentId,
  );
  res.status(200).json({ success: true, data: result });
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
