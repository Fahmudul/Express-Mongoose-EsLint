/* eslint-disable no-unused-vars */

export enum BloodGroup {
  A_PLUS = 'A+',
  A_MINUS = 'A-',
  B_PLUS = 'B+',
  B_MINUS = 'B-',
  AB_PLUS = 'AB+',
  AB_MINUS = 'AB-',
  O_PLUS = 'O+',
  O_MINUS = 'O-',
}
// Gurdian type
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGurdian = {
  name: string;
  contactNo: string;
  address: string;
  occupation: string;
};

export interface Student {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  bloodGroup?: BloodGroup;
  presentAddress: string;
  permanentAddress: string;
  emergencyContactNo: string;
  guardian: Gurdian;
  localGuardian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
}
