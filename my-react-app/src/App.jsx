import { useState } from "react";
import Book from "./components/Book";
import PromptBar from "./components/PromptBar";
import NavigationButtons from "./components/NavigationButtons";
import Particles from "./components/ui/particles";

/**
 * Main App component for the Story Generator
 * Manages story state, page navigation, and API communication
 */
function App() {
  // Story state management
  const [story, setStory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // API base URL - adjust if your backend runs on different port
  const API_BASE_URL = "http://localhost:8000";

  /**
   * Generate story from user prompt
   * Calls backend API and updates story state
   */

  /**
   * Navigate to previous page
   */

  /**
   * Navigate to next page
   */

  // Get current page content and image

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black">
        <div className="relative z-10">
          {/* Error Message */}
          {error && (
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30">
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg shadow-lg">
                <p>{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="ml-2 text-red-800 hover:text-red-900 font-bold"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* title of the app */}
        <div className="mb-8 text-center">
          <h1 className="text-7xl font-bold text-white-800">Story Generator</h1>
        </div>

        {/* Main Book Display */}
        <div className="relative">
          <Book
            leftContent={content}
            rightImage={image}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>

        {/* Navigation Buttons */}
        <NavigationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
          hasStory={!!story}
        />

        {/* Prompt Input Bar */}
        <PromptBar onGenerate={handleGenerateStory} isLoading={isLoading} />

        {/* Footer */}
        <footer className="fixed bottom-2 right-4 text-xs text-gray-400">
          Powered by Gemini AI
        </footer>
      </div>
    </>
  );
}

export default App;
