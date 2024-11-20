import mongoose from 'mongoose';
import {
  BloodGroup,
  Gurdian,
  Student,
  UserName,
  LocalGurdian,
} from './student.interface';

// User schema
const UserSchema = new mongoose.Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

// Gurdian Schema
const GurdianSchma = new mongoose.Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  address: { type: String, required: true },
});

// Local Gurdian Schema
const LocalGurdianSchma = new mongoose.Schema<LocalGurdian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
  occupation: { type: String, required: true },
});
const StudentSchema = new mongoose.Schema<Student>({
  id: { type: String },
  name: UserSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: Object.values(BloodGroup),
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: GurdianSchma,
  localGuardian: LocalGurdianSchma,
  profileImg: { type: String },
  isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
});

// Creating model
const Students =
  mongoose.models.Students || mongoose.model<Student>('Students', StudentSchema);
export default Students;
