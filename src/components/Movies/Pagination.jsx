import React from "react";

function Pagination({handlePrev, handleNext, pageNum, totalPages}) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-center items-center space-x-4">
      <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer">
        Previous
      </button>
      <div className="font-bold px-4 py-2 rounded-lg">
        {pageNum}
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer">
        Next
      </button>
      <div className="text-gray-700">Page {pageNum} of {totalPages}</div>
    </div>
  );
}

export default Pagination;
