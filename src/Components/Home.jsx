
import React from "react";

function Home() {
  const [selectedfile, setselectedFile] = React.useState(null);

  const handlefileChange = (event) => {
    const file = event.target.files[0];
    setselectedFile(file);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div
          className="
            w-full max-w-xl
            bg-white
            rounded-2xl
            border border-gray-200
            p-8 md:p-10
            shadow-4xl shadow-gray-400/40
            hover:shadow-2xl hover:shadow-gray-500/50
            transition-shadow duration-300
          "
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">
              Word to PDF Converter
            </h1>
            <p className="mt-2 text-gray-600 text-base">
              Upload your Word document and convert it into a high-quality PDF.
            </p>
          </div>

          {/* Upload Section */}
          <div className="flex flex-col items-center gap-6">
            {/* File Input */}
            <div className="w-full">
              <label
                htmlFor="fileInput"
                className="
                  block w-full cursor-pointer text-center
                  border-2 border-dashed border-gray-300
                  rounded-xl py-6
                  hover:border-gray-500
                  transition
                "
              >
                <span className="text-gray-700 font-medium">
                  {selectedfile
                    ? selectedfile.name
                    : "Click to upload a Word file"}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  (.doc or .docx)
                </p>
              </label>

              <input
                type="file"
                id="fileInput"
                accept=".doc,.docx"
                onChange={handlefileChange}
                className="hidden"
              />
            </div>

            {/* Action Button */}
            <button disabled={!selectedfile}
              className="
                w-full
                bg-green-500 text-white
                py-3 rounded-lg
                font-semibold
                cursor-pointer

                border-none
                outline-none
                appearance-none

                disabled:cursor-not-allowed
                disabled:bg-green-300 
                disabled:shadow-none

                hover:scale-[1.03]

                hover:bg-green-600 hover:shadow-md

                active:scale-[1.02]
                active:bg-green-700

                focus:outline-none
                focus:ring-0

                focus-visible:ring-2
                focus-visible:ring-green-400
                focus-visible:ring-offset-2

                transition-all
                duration-200
                ease-in-out
              "
            >
              Convert to PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
