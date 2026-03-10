import Image from "next/image";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return <div>{dictionary.followers}</div>;
}
