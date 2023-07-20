import "./style.css";
import { useState, ChangeEvent } from "react";
const SuccessPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOption = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div>
        <h3>Add candidate to Database or pipeline </h3>
        <p>select format:</p>
        <div>
          <label>
            <input
              type="radio"
              value="naukri.com"
              checked={selectedOption === "naukri.com"}
              onChange={handleOption}
            />
            naukri.com
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="klimb"
              checked={selectedOption === "klimb"}
              onChange={handleOption}
            />
            klimb
          </label>
          <br />
        </div>
      </div>
      <div className="success">
        <h1>Thank You!</h1>
        <p>File uploaded successfully</p>
        <p>Your records will be uploaded shortly</p>
        <p>Email will be sent to you once the progress is completed</p>
        <p>Please contact hello@klimb.io if you need further assistance</p>
      </div>
    </>
  );
};

export default SuccessPage;

