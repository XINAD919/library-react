import Link from "next/link";
import { useState } from "react";
import Hamburger from "./icons/Hamburger";

const Header = () => {
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
        {/* <div className='flex gap-4'>
          <Link href={`#${t("links.about")}`}>{t("aboutme")}</Link>
          <Link href={`#${t("links.projects")}`}>{t("projects")}</Link>
          <Link href={`#${t("links.skills")}`}>{t("skills")}</Link>
          <Link href={`#${t("links.contact")}`}>{t("contact")}</Link>
          <Link className='flex items-center' href='' locale={changeTo}>
            
        </div> */}
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
