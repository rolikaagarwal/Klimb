// import "./style.css";
// import { useState, ChangeEvent } from "react";
// const SuccessPage: React.FC = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const handleOption = (event: ChangeEvent<HTMLInputElement>): void => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <>
//       <div>
//         <h3>Add candidate to Database or pipeline </h3>
//         <p>select format:</p>
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="naukri.com"
//               checked={selectedOption === "naukri.com"}
//               onChange={handleOption}
//             />
//             naukri.com
//           </label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               value="klimb"
//               checked={selectedOption === "klimb"}
//               onChange={handleOption}
//             />
//             klimb
//           </label>
//           <br />
//         </div>
//       </div>
//       <div className="success">
//         <h1>Thank You!</h1>
//         <p>File uploaded successfully</p>
//         <p>Your records will be uploaded shortly</p>
//         <p>Email will be sent to you once the progress is completed</p>
//         <p>Please contact hello@klimb.io if you need further assistance</p>
//       </div>
//     </>
//   );
// };

// export default SuccessPage;
import "./style.css";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
const DefaultPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  return (
    <div className="default">
      {selectedFile ? (
        <div className="container">
          <div className="fileuploaded">
            <p>
              <BsFillCloudUploadFill className="uploadicon" />
            </p>
            <p>{selectedFile.name}</p>
          </div>
          <div >
            <p className="points">web support upto 1000 records in a file</p>
            <p className="points">maximum support file size is 5mb</p>
            <p className="points">Name and Email are mandatory</p>
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="fileInput">
            Instruction: Click here to attach an Excel file
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default DefaultPage;
