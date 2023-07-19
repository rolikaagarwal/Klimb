import "./style.css";
import { useState } from "react";
import { ChangeEvent } from "react";
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
          <div>
            <span>File Icon</span>
            <span>{selectedFile.name}</span>
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
