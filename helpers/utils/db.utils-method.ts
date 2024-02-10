import { NextResponse } from 'next/server';

export const customNextResponse = (code: number, response: Object) =>
  NextResponse.json({ ...response, code }, { status: code });

export const successResponse = (
  code: number,
  message: string,
  data: any = null,
  metadata: object | null = null,
) => customNextResponse(code, { message, data, success: true, metadata });

export const errorResponse = (code: number, message: string) =>
  customNextResponse(code, { message, success: false });

export const generateMetaData = (
  page: number,
  limit: number,
  totalData: number,
  totalPage: number,
) => ({ page, limit, totalData, totalPage });
