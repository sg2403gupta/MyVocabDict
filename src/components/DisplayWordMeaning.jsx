export function DisplayWordMeaning({ foundWord }) {
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
