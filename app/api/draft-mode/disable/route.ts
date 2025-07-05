// src/app/api/draft-mode/disable/route.ts

import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	//await (await draftMode()).disable()
	const mode = await draftMode()
	mode.disable()

	return NextResponse.redirect(new URL('/', request.url))
}
