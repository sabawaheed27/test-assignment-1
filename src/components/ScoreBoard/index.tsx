interface ScoreBoardProps {
  answered: number;
  total: number;
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ answered, total, score }) => {
  return (
    <div
      role="status"
      className="p-6 border-2 border-blue-300 rounded-xl max-w-sm text-center mx-auto my-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold mb-2 text-blue-600">ScoreBoard</h3>
      <p className="text-lg font-semibold text-gray-700 mb-1">
        Answered: <span className="text-blue-500">{answered}/{total}</span>
      </p>
      <p className="text-lg font-semibold text-gray-700">
        Score: <span className="text-green-500">{score}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
