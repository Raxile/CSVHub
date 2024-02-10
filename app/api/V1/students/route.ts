import { DB_RESPONSE_MESSAGE } from '@/helpers/constants/db.constants';
import Student from '@/models/StudentSchema';
import {
  errorResponse,
  generateMetaData,
  successResponse,
} from '@/helpers/utils/db.utils-method';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get('limit')) || 10;
    const page = Number(searchParams.get('page')) || 0;
    const skip = page * limit;

    const data = await Student.find({})
      .skip(skip >= 0 ? skip : 0)
      .limit(limit);
    const totalData = await Student.countDocuments({});

    return successResponse(
      200,
      DB_RESPONSE_MESSAGE.STUDENTS_FOUND_SUCCESSFULLY,
      data,
      generateMetaData(page, limit, totalData, Math.ceil(totalData / limit)),
    );
  } catch (error: any) {
    return errorResponse(400, error.message);
  }
}
