import React from "react";
import { NewNodeForm } from "./forms/NewNodeForm";
import { useTranslation } from "react-i18next";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Tree from "./components/Tree";

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <div className="tree">
        <Tree />
      </div>
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
    </div>
  );
}

export default App;
