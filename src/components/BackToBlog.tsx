import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BACK_TO_BLOG_PATH = "/resources/blogs";

type BackToBlogProps = {
  className?: string;
};

const BackToBlog = ({ className = "" }: BackToBlogProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(BACK_TO_BLOG_PATH);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={[
        "mt-6 inline-flex items-center gap-2 rounded-full bg-[#0055ff] px-4 py-2 text-sm font-medium text-white",
        "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        "transition-all duration-300 hover:bg-[#0044cc] group",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0055ff] focus-visible:ring-offset-2",
        className,
      ].join(" ")}
      aria-label="Back to blog list"
    >
      <ArrowLeft className="h-4 w-4 transition-all duration-300 group-hover:-translate-x-0.5" />
      Back to Blog
    </button>
  );
};

export default BackToBlog;
