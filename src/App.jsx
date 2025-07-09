import { useState } from "react";
import "./App.css";
import additionalWords from "./assets/JsFile";
import { Heading } from "./components/Heading";
import { SearchBar } from "./components/SearchBar";
import { DisplayWordMeaning } from "./components/DisplayWordMeaning";
import { WordsList } from "./components/WordsList";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [foundWord, setFoundWord] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function handleSearchBtn() {
    if (searchWord.trim() === "") {
      alert("Please enter word to search.");
      return;
    }

    const wordFound = additionalWords.find(
      (newWord) => newWord.word.toLowerCase() === searchWord.toLowerCase()
    );

    if (wordFound) {
      setFoundWord(wordFound);
      setErrorMsg("");
    } else {
      setFoundWord(null);
      setErrorMsg("Please enter the word given in above list..");
    }
    setSearchWord("");
  }
  return (
    <div className="main-body">
      <Heading></Heading>
      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        handleSearchBtn={handleSearchBtn}
      ></SearchBar>
      <h2 style={{ marginTop: "20px" }}>Search words from the below list..</h2>
      <WordsList additionalWords={additionalWords}></WordsList>
      {foundWord ? (
        <DisplayWordMeaning foundWord={foundWord}></DisplayWordMeaning>
      ) : (
        <p className="error-msg">{errorMsg}</p>
      )}
    </div>
  );
}

export default App;
