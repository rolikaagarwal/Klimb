import "./style.css";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
type responseType = {
  message : string,
}
const DefaultPage: React.FC = () => {
  const [apidata, setapiData] = useState();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log("Selected file:", file);
    setSelectedFile(file);
  };
 const handleApi = async() => {
  const response = await fetch ("/api/upload", {
    method : 'POST'
  })
  if(!response.ok){
    throw new Error("API Failed")
  }
  const data:responseType = await response.json()  ;
  
 }

  return (
    <div className="default">
      {selectedFile ? (
        <div className="container">
          <div className="fileuploaded">
            <p>
              <BsFillCloudUploadFill className="uploadicon" />
            </p>
            <p>{selectedFile.name}</p>
            <button onClick={handleApi}>upload</button>
          </div>
          <div>
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
