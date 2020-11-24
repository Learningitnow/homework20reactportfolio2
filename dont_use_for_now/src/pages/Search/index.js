import React, { useContext, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import ArticleContext from "../../utils/ArticleContext"

function Search() {
  const { search, title, url, error, setValue } = useContext(ArticleContext);

  // const [search, setSearch] = useState("Wikipedia");
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setValue('title', res.data[1][0]);
        setValue('url', res.data[3][0]);
      })
      .catch(err => setValue('error', err));
  }, [search]);

  const handleInputChange = event => {
    setValue('search', event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={title} url={url} />
      </Container>
    </div>
  );
}

export default Search;
