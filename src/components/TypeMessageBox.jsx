export default function TypeMessageBox() {
  return (
    <div className=" TypeMessageBox h-15  p-3 bg-gray-800 sticky bottom-0 z-50">
      <div className="flex items-center">
        <div className="p-2 text-gray-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="search-chat flex flex-grow p-2">
          <input
            className="input text-gray-700 dark:text-gray-200 text-sm p-5 focus:outline-none bg-gray-800  flex-grow rounded-l-md"
            type="text"
            placeholder="Type your message ..."
          />
          <div className="bg-gray-800 dark:text-gray-200  flex justify-center items-center pr-3 text-gray-400 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
