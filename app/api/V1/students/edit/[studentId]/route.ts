import {
  DB_RESPONSE_MESSAGE,
  ERROR_MESSAGE,
} from '@/helpers/constants/db.constants';
import {
  errorResponse,
  successResponse,
} from '@/helpers/utils/db.utils-method';
import Student from '@/models/StudentSchema';

export async function PUT(
  request: Request,
  { params }: { params: { studentId: string } },
) {
  const { studentId } = params;
  const req = await request.json();
  try {
    const data = await Student.findByIdAndUpdate(studentId, req);
    return successResponse(
      200,
      DB_RESPONSE_MESSAGE.STUDENT_UPDATED_SUCCESSFULLY,
      data,
    );
  } catch (error: any) {
    return errorResponse(500, ERROR_MESSAGE[500]);
  }
}
