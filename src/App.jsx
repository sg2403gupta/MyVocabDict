import { useState } from "react";
import "./App.css";
import additionalWords from "./assets/JsFile";

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

function Heading() {
  return <h1>MyVocabSearch</h1>;
}

function SearchBar({ searchWord, setSearchWord, handleSearchBtn }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search word"
        className="search"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      ></input>
      <button className="btn" onClick={handleSearchBtn}>
        Search
      </button>
    </div>
  );
}

function DisplayWordMeaning({ foundWord }) {
  return (
    <div className="display">
      <p>Your word's meaning is given below</p>

      <div className="display-section">
        <strong>Word : </strong>
        <p>{foundWord.word}</p>
      </div>

      <div className="display-section">
        <strong>Part of Speech : </strong>
        <p>{foundWord.partOfSpeech}</p>
      </div>

      <div className="display-section">
        <strong>Meaning : </strong>
        <p>{foundWord.meaning}</p>
      </div>
    </div>
  );
}

function WordsList({ additionalWords }) {
  return (
    <div className="word-list">
      {additionalWords.map((item, i) => (
        <p key={i}>"{item.word}",</p>
      ))}
    </div>
  );
}
