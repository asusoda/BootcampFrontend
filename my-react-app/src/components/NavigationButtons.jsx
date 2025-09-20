import React from "react";

/**
 * NavigationButtons component for turning pages in the story book
 * Provides previous/next navigation with page indicators
 */
const NavigationButtons = ({
  currentPage = 1,
  totalPages = 8,
  onPrevious,
  onNext,
  hasStory = false,
}) => {
  // Don't show navigation if there's no story
  if (!hasStory) return null;

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex items-center gap-4 bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={currentPage <= 1}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed 
                   transition-colors duration-200 flex items-center justify-center"
          title="Previous page"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Indicator */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">
            {currentPage} / {totalPages}
          </span>

          {/* Page Dots */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i + 1 === currentPage ? "bg-amber-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentPage >= totalPages}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed 
                   transition-colors duration-200 flex items-center justify-center"
          title="Next page"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavigationButtons;
