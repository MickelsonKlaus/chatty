import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref={true}>
            <a href=""></a>
          </Link>
        </li>
      </ul>
    </nav>
  );
  
}
