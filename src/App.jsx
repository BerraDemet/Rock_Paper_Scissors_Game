import { useState, useEffect } from "react";

function App() {
  const [computerChoice, setComputerChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUseScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const arr = ["Rock", "Paper", "Scissors"];

  function generateComputerChoice() {
    const computerChoice = arr[Math.floor(Math.random() * arr.length)];
    setComputerChoice(computerChoice);
  }
  function generateUserChoice(choice) {
    setUserChoice(choice);
  }
  function generateResult() {
    if (computerChoice === userChoice) {
      setResult("It is a tie");
    }
    //  ROCK
    if (computerChoice === "Rock") {
      if (userChoice === "Paper") {
        setResult("You won");
        setUseScore(userScore + 1);
      } else if (userChoice === "Scissors") {
        setResult("You lost");
        setComputerScore(1);
        setComputerScore(computerScore + 1);
      }
    }

    //  PAPER
    if (computerChoice === "Paper") {
      if (userChoice === "Rock") {
        setResult("You lost");
        setComputerScore(computerScore + 1);
      } else if (userChoice === "Scissors") {
        setResult("You won");
        setUseScore(userScore + 1);
      }
    }

    // SCISSOSRS
    if (computerChoice === "Scissors") {
      if (userChoice === "Rock") {
        setResult("You won");
        setUseScore(userScore + 1);
      } else if (userChoice === "Paper") {
        setResult("You lost");
        setComputerScore(computerScore + 1);
      }
    }
  }
  useEffect(() => {
    if (computerChoice && userChoice) {
      generateResult();
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="container w-full max-w-full h-screen flex flex-col items-center gap-8  pt-20 bg-amber-200">
      <img className="w-24" src="logo.png" />
      <h1 className="text-center text-5xl font-bold font-bold tracking-widest">
        WELCOME TO <br></br>{" "}
        <span className="text-7xl">ROCK, PAPER, SCISSORS </span> <br></br>GAME
      </h1>
      {/* BUTTONS */}
      <div className="flex lg:flex-row sm:flex-col gap-8">
        {/* ROCK BUTTON */}
        <button
          id="rock"
          onClick={() => {
            generateComputerChoice();
            generateUserChoice("Rock");
          }}
          className="btn-primary basis-1/3"
        >
          <img className="w-7" src="./public/hand.png" />
          Rock
        </button>
        {/* PAPER BUTTON */}
        <button
          id="paper"
          className="btn-primary basis-1/3"
          onClick={() => {
            generateComputerChoice();
            generateUserChoice("Paper");
          }}
        >
          <img className="w-7" src="./public/hand-paper.png" />
          Paper
        </button>
        {/* SCISSORS BUTTON */}
        <button
          id="scissors"
          className="btn-primary basis-1/3"
          onClick={() => {
            generateComputerChoice();
            generateUserChoice("Scissors");
          }}
        >
          <img className="w-8" src="./public/scissors.png" />
          Scissors
        </button>
      </div>
      {/* CHOICE SECTION */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-center gap-8">
          <p className="text-3xl">Computer Choice</p>
          <span className="text-3xl text-violet-500 font-bold">
            {computerChoice}
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-8">
          <p className="text-3xl">Your Choice</p>
          <span className="text-3xl text-violet-500 font-bold">
            {userChoice}
          </span>
        </div>
      </div>
      {/* RESULTS */}
      <div className="results flex flex-col items-center gap-4">
        <p
          className={`text-3xl bg-orange-100 px-16 py-2 rounded-lg ${
            !result ? "hidden" : ""
          }`}
        >
          {result}
        </p>
        <div className="flex gap-32 text-3xl">
          <div className="flex flex-col items-center">
            <p className="flex flex-col items-center underline">Your Score</p>
            <span className="no-underline !no-underline"> {userScore} </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="flex flex-col items-center underline">
              Computer Score
            </p>
            <span className="no-underline !no-underline">
              {" "}
              {computerScore}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
