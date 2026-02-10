import "./FormStyle.css";
export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal_content">
          {/* <h1>The Form Has Been Successfully</h1> */}
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Successfully :)"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
