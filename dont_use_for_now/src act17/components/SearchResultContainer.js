import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

function SearchResultContainer(){
  const [ search, setSearch ] = useState("")
  const [ results, setResults ] = useState([])

  useEffect( function(){
    searchGiphy("kittens");
  }, [])
    
  async function searchGiphy( query ){
    const res = await API.search(query)

    setResults( res.data.data )
  };

  function handleInputChange( event ){
    const { name, value }= event.target;
    if( name=='search' )
      setSearch( value )
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  function handleFormSubmit( event ){
    event.preventDefault();
    searchGiphy( search );
  };

  return (
    <div>
      <SearchForm
        search={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <ResultList results={results} />
    </div>
  );
}

export default SearchResultContainer;
