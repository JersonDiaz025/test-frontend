import { useState, useEffect } from 'react';

const useBookSearch = (query) => {
  // State to store the fetched books
  const [books, setBooks] = useState([]);
  // State to indicate if data is being loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch books based on the provided query
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => response.json())
      .then(data => {
         // Update the state with the fetched book items
        setBooks(data.items);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching books', error);
        setLoading(false);
      });
  }, [query]); // Re-run this effect whenever the query changes

  return { books, loading };
};

export default useBookSearch;
