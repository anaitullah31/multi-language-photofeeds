import Image from "next/image";
import { getDictionary } from "./dictionaries/dictionaries";
import PhotoList from "../components/PhotoList";
import { getBaseUrl } from "@/app/lib/getBaseUrl";

export default async function Home() {
  const response = await fetch(`${getBaseUrl()}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
