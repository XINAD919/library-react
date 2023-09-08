import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ books }) => {
  return (
    <div className='flex flex-wrap w-full items-center gap-4'>
      {books.map((el) => (
        <Link
          className='w-52 md:w-72 rounded-md shadow-md bg-[#3333] border-b-2 border-[#FF277E] hover:bg-[#ff4a93] '
          href={`/books/${el.id}`}
          key={el.id}
        >
          <div className='flex flex-col px-4 py-3 '>
            <Image
              className='self-center'
              src={""}
              alt={"dafault image"}
              width={200}
              height={200}
            />
            <span>{el.title}</span>
            <span>{el.author}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookCard;
