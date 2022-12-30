import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (initialSearchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: initialSearchTerm,
          location: 'Gothenburg',
        },
      });
      setErrorMessage('');
      setResults(response.data.businesses);
    } catch (e) {
      console.log('Error: ' + e);
      setErrorMessage('Something went wrong, please try again later');
    }
  };

  useEffect(() => {
    searchApi('Taco');
  }, []);

  return [searchApi, results, errorMessage];
};
