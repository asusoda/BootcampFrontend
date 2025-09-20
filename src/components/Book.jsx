import React from "react";

/**
 * Book component that displays story content on left page and image on right page
 * Uses a book-like layout with shadow effects for depth
 */
const Book = ({
  leftContent = "",
  rightImage = "",
  currentPage = 1,
  totalPages = 8,
}) => {
  return (
    <div className="flex justify-center items-center min-h-full w-full bg-black p-8">
      {/* Book Container */}
      <div className="relative">
        {/* Book Shadow */}
        <div className="absolute inset-0 bg-gray-800 rounded-lg transform rotate-1 opacity-20"></div>

        {/* Main Book */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200 w-[90vw] h-[80vh] max-w-6xl max-h-[800px]">
          <div className="flex h-full">
            {/* Left Page - Content */}
            <div className="w-1/2 h-full p-12 border-r border-gray-200 bg-gradient-to-br from-white to-gray-50">
              <div className="h-full flex flex-col">
                {/* Page Header */}
                <div className="flex justify-between items-center mb-6 text-base text-gray-500">
                  <span>Page {currentPage * 2 - 1}</span>
                  <span className="text-xs bg-amber-100 px-2 py-1 rounded-full">
                    {currentPage}/{totalPages}
                  </span>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto flex items-center justify-center">
                  {leftContent ? (
                    <div
                      className="text-gray-800 leading-relaxed text-base font-serif"
                      dangerouslySetInnerHTML={{
                        __html: leftContent
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(
                            /##\s*(.*?)(?=\n|$)/g,
                            '<h3 class="text-lg font-bold mb-3 text-amber-700">$1</h3>'
                          ),
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <p className="text-center">
                        Enter a story prompt to begin
                        <br />
                        your magical adventure!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Page - Image */}
            <div className="w-1/2 h-full p-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="h-full flex flex-col">
                {/* Page Header */}
                <div className="flex justify-between items-center mb-6 text-base text-gray-500">
                  <span className="text-xs bg-blue-100 px-2 py-1 rounded-full">
                    Illustration
                  </span>
                  <span>Page {currentPage * 2}</span>
                </div>

                {/* Image Area */}
                <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  {rightImage ? (
                    <img
                      src={rightImage}
                      alt={`Story illustration for page ${currentPage}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm">Image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Book Spine Effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 to-gray-400 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
