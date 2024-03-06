import { NextResponse } from 'next/server'
import { getContents, type Contents } from '@/firestore/collections/contents'
import { type ErrorResponseData, SuccessResponseData } from '@oxcyn/response'

export async function GET(): Promise<
  NextResponse<SuccessResponseData<Contents, {}> | ErrorResponseData>
> {
  try {
    const { data, metadata } = await getContents()

    return NextResponse.json({
      kind: 'oxcyn#contents',
      code: 200,
      data,
      metadata,
    })
  } catch (e) {
    return NextResponse.json({
      code: 400,
      message: 'Failed to get contents.',
      errors: [],
    })
  }
}
