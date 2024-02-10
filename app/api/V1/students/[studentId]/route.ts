import {
  DB_RESPONSE_MESSAGE,
  ERROR_MESSAGE,
} from '@/helpers/constants/db.constants';
import {
  errorResponse,
  successResponse,
} from '@/helpers/utils/db.utils-method';
import Student from '@/models/StudentSchema';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { studentId: string } },
) {
  const { studentId } = params;
  try {
    const data = await Student.findById(studentId);
    return successResponse(
      200,
      DB_RESPONSE_MESSAGE.STUDENTS_FOUND_SUCCESSFULLY,
      data,
    );
  } catch (error: any) {
    return errorResponse(404, ERROR_MESSAGE[404]);
  }
}
