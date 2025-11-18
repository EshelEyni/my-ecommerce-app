import { useNavigate } from "react-router-dom";

export const GoHomeButton = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate("/");
  };

  return (
    <button
      onClick={onGoBack}
      className="mb-6 inline-flex items-center gap-2rounded-lg bg-slate-200 px-4 py-2text-sm font-medium text-slate-700 transitionhover:bg-slate-300 hover:text-slate-900"
    >
      Go To Home Page
    </button>
  );
};
