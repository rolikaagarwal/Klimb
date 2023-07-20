import "./style.css";
import { useState } from "react";
import { ChangeEvent } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const DefaultPage: React.FC = () => {
  const [apidata, setapiData] = useState();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    console.log("Selected file:", file);
    setSelectedFile(file);
  };
  const handleApi = async () => {
    try {
      if (!selectedFile) {
        alert("Please select a file.");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error fetching");
      }

      const result = await res.json();
      toast.success("Success! Your action was successful.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "custom-toast",
      });
      setapiData(result);
    } catch (err) {
      console.log(err);
    }
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
            <Link to="/Success">
              <button onClick={handleApi}>upload</button>
            </Link>
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
