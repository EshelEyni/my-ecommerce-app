import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <div className="min-h-screen bg-slate-100 py-10 w-lvw flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full text-center h-fit">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-4">404</h1>

        <p className="text-lg text-slate-600 mb-2">Page not found</p>

        <p className="text-sm text-slate-500 mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <button
          onClick={goHome}
          className="rounded-lg bg-blue-400 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-700 "
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};
