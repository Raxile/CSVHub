import Student from '@/models/StudentSchema';
import { customNextResponse } from '@/helpers/utils/db.utils-method';
import { DB_RESPONSE_MESSAGE } from '@/helpers/constants/db.constants';

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const data = await Student.create(req);
    return customNextResponse(201, {
      message: DB_RESPONSE_MESSAGE.STUDENT_ADD_SUCCESSFULLY,
      success: true,
      data,
    });
  } catch (error: any) {
    return customNextResponse(400, {
      message: `${error.message}`,
      success: false,
    });
  }
}
