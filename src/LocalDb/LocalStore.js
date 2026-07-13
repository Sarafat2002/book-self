// Read List
export const getAllReadlistDb = () => {
  const data = localStorage.getItem("bookStore");

  if (data) {
    return JSON.parse(data);
  }

  return [];
};

export const addLocalReadlist = (book) => {
  const allBooks = getAllReadlistDb();

  const isExist = allBooks.find(
    (item) => item.bookId === book.bookId
  );

  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem("bookStore", JSON.stringify(allBooks));
  }
};

// Wishlist
export const getWishlistDb = () => {
  const data = localStorage.getItem("wishlistStore");

  if (data) {
    return JSON.parse(data);
  }

  return [];
};

export const addLocalWishlist = (book) => {
  const allWishBooks = getWishlistDb();

  const isExist = allWishBooks.find(
    (item) => item.bookId === book.bookId
  );

  if (!isExist) {
    allWishBooks.push(book);
    localStorage.setItem("wishlistStore", JSON.stringify(allWishBooks));
  }
};