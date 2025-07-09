export function WordsList({ additionalWords }) {
  return (
    <div className="word-list">
      {additionalWords.map((item, i) => (
        <p key={i}>"{item.word}",</p>
      ))}
    </div>
  );
}
