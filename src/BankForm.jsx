import { useState } from "react";
import "./FormStyle.css";
import Modal from "./Modal";
export default function BankForm() {
  const [errorMessage , setErrorMessage] = useState(null)
  const [showModel, setShowModel] = useState(false);
  const [BankForm, setBankForm] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    salary: "",
    isEmployee: false,
  });

  function hendleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null)
    const {age ,phoneNumber} = BankForm ;
    if(age < 18 || age > 100 ){
       setErrorMessage("the age is not all ")
    }else if(phoneNumber.length < 10 || phoneNumber.length > 12 ){
         setErrorMessage("Phone Number Fromat is lncorrect")
    }
    setShowModel(true);

  }

  const btnDisabled =
    BankForm.name === "" || BankForm.age === "" || BankForm.phoneNumber === "";

  function handleDivClick() {
    if (showModel) {
      setShowModel(false);
    }
  }

  return (
    <>
      <div
        className="flex"
        style={{ flexDirection: "column" }}
        onClick={handleDivClick}
      >
        <form
          id="loan-form"
          className="flex"
          style={{ flexDirection: "column" }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label> Name: </label>

          <input
            type="text"
            value={BankForm.name}
            onChange={(event) => {
              setBankForm({ ...BankForm, name: event.target.value });
            }}
          />

          <label>phoneNumber:</label>
          <input
            type="text"
            value={BankForm.phoneNumber}
            onChange={(event) =>
              setBankForm({ ...BankForm, phoneNumber: event.target.value })
            }
          />

          <label>Age:</label>

          <input
            type="text"
            value={BankForm.age}
            onChange={(event) => {
              setBankForm({ ...BankForm, age: event.target.value });
            }}
          />

          <label>Are you an employee:</label>

          <input
            type="checkbox"
            checked={BankForm.isEmployee}
            onChange={(event) => {
              setBankForm({ ...BankForm, isEmployee: event.target.checked });
            }}
          />

          <label>salary:</label>

          <select
            onChange={(event) => {
              setBankForm({ ...BankForm, salary: event.target.value });
            }}
            value={BankForm.salary}
          >
            <option>100</option>
            <option>500</option>
            <option>1000</option>
          </select>

          <button
            id="submat-loan-btn"
            className={btnDisabled ? "disabled" : ""}
            onClick={hendleFormSubmit}
            disabled={btnDisabled}
          >
            submat
          </button>
        </form>
        <Modal isVisible={showModel} errorMessage={errorMessage} />
      </div>
    </>
  );
}
