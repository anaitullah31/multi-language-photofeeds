import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <Image
        className="max-w-25 h-auto md:max-w-41.25"
        src="/logo.png"
        alt="Lws"
        height={50}
        width={45}
      />
      <span className="font-bold text-2xl uppercase">PhotoFeed</span>
    </Link>
  );
};

export default Logo;
