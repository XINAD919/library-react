import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getOneBook } from "@/utils/api";

const index = (props) => {
  const bookData = props.data;
  return <div className='flex h-screen'>
    <div className="flex flex-col">
    <h1>

    {bookData.title}
    </h1>
    <span>{bookData.author}</span>
    <span>{bookData.publicationDate}</span>
    <span>{bookData.synopsis}</span>
    <span>{bookData.publisher && !null}</span>
    <span>{bookData.genre}</span>
    <span>{bookData.quantity}</span>
    
    
    
    
    
    
    </div>

  </div>;
};

export default index;

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;

  console.log("🚀 ~ file: index.jsx:15 ~ getServerSideProps ~ id:", id);
  let data = {};
  await getOneBook(
    id,
    (res) => {
      data = res.data;
    },
    (err) => console.error(err)
  );

  console.log("🚀 ~ file: index.jsx:18 ~ getServerSideProps ~ data:", data);
  return {
    props: {
      data,
    },
  };
};
