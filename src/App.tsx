import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { NewNodeForm } from "./forms/NewNodeForm";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <div className="form-container">
        <h3>{i18n.t("EDIT_DATA")}</h3>
        <NewNodeForm
          data={{}}
          handleSubmit={(data) => {
            console.log(data);
            return Promise.resolve();
          }}
        />
      </div>
      <div className="tree">TEST</div>
    </div>
  );
}

export default App;
