import BookCard from "@/components/BookCard";
import PublicLayout from "@/components/PublicLayout";
import { getBooks } from "@/utils/api";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      await getBooks(
        (res) => {
          setBooks(res.data);
        },
        (err) => console.error(err)
      );
    };
    fetchBooks();
  }, []);

  return <div className="">
      <BookCard books={books}/>
    </div>
  
};

export default Home;
