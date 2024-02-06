import { NextResponse } from 'next/server';

export const customNextResponse = (code: number, response: Object) =>
  NextResponse.json({ ...response, code }, { status: code });
