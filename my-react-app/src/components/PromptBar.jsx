import React, { useState } from "react";

/**
 * PromptBar component for entering story prompts
 * Features a modern input design with generate button
 */
const PromptBar = ({ onGenerate, isLoading = false }) => {
  const [prompt, setPrompt] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onGenerate(prompt.trim());
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full">
      <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          {/* Input Field */}
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your story idea... (e.g., 'A brave little mouse on a magical adventure')"
            className="flex-1 px-4 py-3 text-gray-700 bg-transparent outline-none placeholder-gray-400 min-w-0"
            disabled={isLoading}
          />

          {/* Generate Button */}
          <button
            type="submit"
            disabled={!prompt.trim() || isLoading}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium 
                     hover:from-amber-600 hover:to-orange-600 disabled:from-gray-300 disabled:to-gray-400 
                     disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 min-w-fit"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                  ></circle>
                  <path
                    fill="currentColor"
                    className="opacity-75"
                    d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Generate
              </>
            )}
          </button>
        </form>
      </div>

      {/* Loading Message */}
      {isLoading && (
        <div className="text-center mt-3">
          <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm inline-block">
            Creating your magical story and illustrations...
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptBar;
