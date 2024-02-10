import {
  DB_RESPONSE_MESSAGE,
  ERROR_MESSAGE,
} from '@/helpers/constants/db.constants';
import {
  errorResponse,
  successResponse,
} from '@/helpers/utils/db.utils-method';
import Student from '@/models/StudentSchema';

export async function DELETE(
  request: Request,
  { params }: { params: { studentId: string } },
) {
  const { studentId } = params;
  try {
    const data = await Student.findByIdAndDelete(studentId);
    return successResponse(
      200,
      `${data.name} ${DB_RESPONSE_MESSAGE.STUDENT_DELETE_SUCCESSFULLY}`,
    );
  } catch (error: any) {
    return errorResponse(404, ERROR_MESSAGE[404]);
  }
}
