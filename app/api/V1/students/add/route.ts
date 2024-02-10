import Student from '@/models/StudentSchema';
import {
  errorResponse,
  successResponse,
} from '@/helpers/utils/db.utils-method';
import {
  DB_RESPONSE_MESSAGE,
  ERROR_MESSAGE,
} from '@/helpers/constants/db.constants';

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const data = await Student.create(req);
    return successResponse(
      201,
      DB_RESPONSE_MESSAGE.STUDENT_ADD_SUCCESSFULLY,
      data,
    );
  } catch (error: any) {
    return errorResponse(500, ERROR_MESSAGE[500]);
  }
}
