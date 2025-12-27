import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      className={
        `fixed right-4 bottom-6 z-50 flex items-center justify-center rounded-full p-3 transition-transform duration-200 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand ` +
        (visible
          ? "opacity-100 scale-100 pointer-events-auto bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          : "opacity-0 scale-75 pointer-events-none bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
