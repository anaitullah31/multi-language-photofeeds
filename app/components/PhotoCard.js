import Link from "next/link";
import Image from "next/image";

const PhotoCard = ({ photo }) => {
  return (
    <Link
      className="group block rounded-lg overflow-hidden relative cursor-pointer"
      href={`/photos/${photo.id}`}
    >
      <Image src={photo.url} alt={photo.title} width={700} height={700} />
      <div className="absolute bottom-0 w-full text-center bg-black/50 py-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
        <h4 className="text-white font-semibold text-base lg:text-lg">
          {photo.title}
        </h4>
      </div>
    </Link>
  );
};

export default PhotoCard;
