import { DB_RESPONSE_MESSAGE } from '@/helpers/constants/db.constants';
import Student from '@/models/StudentSchema';
import { customNextResponse } from '@/helpers/utils/db.utils-method';

export async function GET(request: Request) {
  try {
    const data = await Student.find({});
    return customNextResponse(200, {
      success: true,
      message: DB_RESPONSE_MESSAGE.STUDENTS_FOUND_SUCCESSFULLY,
      data,
    });
  } catch (error: any) {
    return customNextResponse(400, {
      message: `${error.message}`,
      success: false,
    });
  }
}
