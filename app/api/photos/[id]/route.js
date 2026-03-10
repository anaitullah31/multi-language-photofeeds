import { getPhotoById } from "@/app/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const { id } = await params;
  const data = await getPhotoById(id);
  return NextResponse.json(data);
}
