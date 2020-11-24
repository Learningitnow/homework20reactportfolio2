import React, { useState } from "react"
import Header from "./components/Header"
import Thumbnail from "./components/Thumbnail"
import Bio from "./components/Bio"

function App() {
  const [ profile, setProfile ]= useState( {
    userid: "234334",
    username: "Elwin",
    location: "Toronto",
    info: "Welcome to my page. I am a software developer. I live in Toronto",
    thumbnail: "https://d.newsweek.com/en/full/1519172/brown-bear.jpg",
    thumbnailCaption: "I can be a bear when I need to",
    time: "6:00PM"
  } )

  return (
    <div className="App">
      <Header profile={profile} />


      <div class="card">
        <Thumbnail thumbnail={profile.thumbnail} caption={profile.thumbnailCaption} />
        <Bio userid={profile.userid} info={profile.info} username={profile.username}  />
      </div>
    </div>
  )
}

export default App;