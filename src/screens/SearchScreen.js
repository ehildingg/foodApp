import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsbyPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchtermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      <ScrollView>
        <ResultsList results={filterResultsbyPrice('$')} title="Billigt" />
        <ResultsList results={filterResultsbyPrice('$$')} title="Medium" />
        <ResultsList results={filterResultsbyPrice('$$$')} title="Lyxigt" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
  },
});

export default SearchScreen;
