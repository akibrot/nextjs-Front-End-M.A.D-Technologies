import Link from "next/link";
import { GiCircleClaws } from "react-icons/gi";
function NavBar() {
  return (
    <div
      className="flex items-center leading-6  justify-between px-[3.5rem]
    "
    >
      
      <div className="text-white text-4xl flex">
        <p className="font-bold pl-5">E</p>
        <GiCircleClaws />
        <p >FF</p>
      </div>
      <div className="my-10 text-white  flex gap-6 uppercase text-sm items-center font-Roboto font-bold mr-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Publications</Link>
        <Link href={"/"}>Partners</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
    </div>
  );
}

export default NavBar;
