import { SCHEMA_VALIDATION_MESSAGE } from '@/helpers/constants/db.constants';
import mongoose from 'mongoose';

export interface Student extends mongoose.Document {
  name: string;
  email: string;
  date_of_birth: Date;
  address: string;
  country: string;
}
const StudentSchema = new mongoose.Schema<Student>(
  {
    name: {
      type: String,
      required: [true, SCHEMA_VALIDATION_MESSAGE.NAME.REQUIRED],
      maxlength: [60, SCHEMA_VALIDATION_MESSAGE.NAME.MAX_LIMIT],
    },
    email: {
      type: String,
      required: [true, SCHEMA_VALIDATION_MESSAGE.EMAIL.REQUIRED],
      unique: true,
    },
    date_of_birth: {
      type: Date,
      required: [true, SCHEMA_VALIDATION_MESSAGE.DATE_OF_BIRTH.REQUIRED],
    },
    address: {
      type: String,
      required: [true, SCHEMA_VALIDATION_MESSAGE.ADDRESS.REQUIRED],
    },
    country: {
      type: String,
      required: [true, SCHEMA_VALIDATION_MESSAGE.COUNTRY.REQUIRED],
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export default mongoose.models.Students ||
  mongoose.model<Student>('Students', StudentSchema);
