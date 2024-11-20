import express from 'express';
import { StudentController } from './studentcontroller';
const router = express.Router();

// Controller function will be called from here
router.post('/create-student', StudentController.createStudent);
router.get('/get-all-students', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
export const StudentRoutes = router;
