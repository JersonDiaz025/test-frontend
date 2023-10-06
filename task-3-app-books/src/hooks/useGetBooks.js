import { useState, useEffect } from 'react';

const useBookSearch = (query) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching books', error);
        setLoading(false);
      });
  }, [query]);

  return { books, loading };
};

export default useBookSearch;
