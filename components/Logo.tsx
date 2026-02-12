import Image from "next/image";
import Link from "next/link";

export function                   Logo() {
  return (
    <Link href="/">
      <Image src="/logo_2.png" alt="" height={60} width={100} priority={true} />
    </Link>
  );
}
