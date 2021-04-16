import React, { createContext, useState, useContext } from "react";

const MyBooksContext = createContext({
  myBooks: [],
  addToMyBooks: () => {},
});

export const BooksList = ({ children }) => {
  const [myBooks, setMyBooks] = useState([]);

  const addToMyBooks = (book) => {
    setMyBooks([...myBooks, book]);
  };

  return (
    <MyBooksContext.Provider
      value={{
        myBooks,
        setMyBooks,
        addToMyBooks,
      }}
    >
      {children}
    </MyBooksContext.Provider>
  );
};

export const MyBooksConsumer = MyBooksContext.Consumer;

export const useMyBooks = () => {
  return useContext(MyBooksContext);
};
