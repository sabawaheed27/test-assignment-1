import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => setQuizStarted(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Render LandingScreen only until quiz starts */}
      {!quizStarted ? (
        <LandingScreen onStart={handleStart} />
      ) : (
        // Placeholder for future quiz components
        <div></div>
      )}
    </div>
  );
};

export default App;
