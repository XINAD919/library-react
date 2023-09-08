import Link from "next/link";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className='md:w-11/12 md:mx-auto md:py-3'>
      <div className='md:flex hidden justify-between items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='flex rounded-full h-12 w-12'>
            <Link href='/' className='flex items-center gap-2'>
              <h1>Library</h1>
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          {router && router.pathname === "/books/[id]/edit" ? null : router &&
            router.pathname === "/books/[id]" ? (
            <Link
              className='bg-[#FF277E] rounded-md text-[#EEEE] px-4 py-3'
              href={`/books/${id}/edit`}
            >
              Editar libro
            </Link>
          ) : (
            <Link
              className='bg-[#FF277E] rounded-md text-[#EEEE] px-4 py-3'
              href={`/books/new`}
            >
              Agregar nuevo libro
            </Link>
          )}
        </div>
      </div>
      <HeaderMovile />
    </div>
  );
};
const HeaderMovile = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='md:hidden sm:flex mx-2 w-11/12 '>
      <div className='flex justify-between  items-center w-full min-w-fit relative'>
        <div className='flex rounded-full h-12 w-12'>
          <Link href='/' className='flex items-center gap-2'>
            <h1>Library</h1>
          </Link>
        </div>
        <div className='flex flex-row-reverse gap-4'>
          <Hamburger onClick={toggler} />
        </div>
      </div>
      <div className={`${toggleMenu ? "hidden" : ""} top-14 w-full absolute`}>
        <div className='flex flex-col items-center text-left'>
          <span>item 1</span>
          <span>item 2</span>
          <span>item 3</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
