import { getAllPhotos } from "@/app/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllPhotos();
  const filtered = data.map(({ id, title, url, tags }) => ({
    id,
    title,
    url,
    tags,
  }));

  return NextResponse.json(filtered);
}
