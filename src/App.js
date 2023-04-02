import { useState } from "react";
import "./App.css";
import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";

function App() {
  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());
  const [solution, setSolution] = useState({
    word: "CALM",
    hint: "Your ideal mode when coding.",
  });
  const [score, setScore] = useState(100);

  function generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  function selectLetter(letter) {
    if (!letterStatus[letter]) {
      setLetterStatus({ ...letterStatus, [letter]: true });
      solution.word.includes(letter)
        ? setScore(score + 5)
        : setScore(score - 20);
    }
  }

  return (
    <div className="App">
      <Score key={score} score={score} />
      <Solution
        key={solution.word}
        letterStatus={letterStatus}
        solution={solution}
      />
      <Letters
        key="letters"
        letterStatus={letterStatus}
        onClickEvent={selectLetter}
      />
    </div>
  );
}

export default App;
