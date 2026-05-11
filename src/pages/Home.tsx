import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] text-center px-4">
      <p className="text-blue-400 text-sm mb-3">
        BSIT Student at University of Baguio 
      </p>

      <h1 className="text-5xl font-bold text-white mb-4">
        Hi, I'm Vejee Jon D. Olo-an
      </h1>

      <p className="text-gray-400 mb-8 max-w-md text-lg">
        Just trying to build things that matter.
      </p>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => navigate("/contacts")}
          className="border border-gray-700 text-gray-300 hover:text-white px-6 py-2 rounded-lg transition"
        >
          Contact Me
        </button>
      </div>
      <a
      
        href="https://github.com/20254844-dotcom"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-blue-400 transition text-sm"
      >
        To my GitHub
      </a>
    </div>
  );
}

export default Home;