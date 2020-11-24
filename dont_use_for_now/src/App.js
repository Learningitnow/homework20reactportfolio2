import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import ArticleContext from "./utils/ArticleContext"

function App() {
  const [ articleInfo, setArticleInfo ]= useState({
    search: "Wikipedia",
    title: "Wikipedia Title",
    url: "www.test.com",
    error: "",
    username: "testuser",
    password: "testpassword",
    setValue: (name, value) => {
      // Remember, the setter method on state does not merge like this.setState does
      // We use the spread operator so that we [don't lose our onClick method whenever the state is updated.
      setArticleInfo({ ...articleInfo, [name]: value });
    }
  })
  document.title = "Wikipedia Searcher";
  return (
    <ArticleContext.Provider value={articleInfo}>
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/signup" component={Signup} value={articleInfo}/>
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </ArticleContext.Provider>
  );
}

export default App;
