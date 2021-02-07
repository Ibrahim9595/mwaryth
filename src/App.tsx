import React, { useState } from "react";
import { NewNodeForm } from "./forms/NewNodeForm";
import { useTranslation } from "react-i18next";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Graph } from "./components/graph";
import { Select } from "./components/FormInputs";

const { nodes, edges } = {
  nodes: [
    {
      id: 1,
      name: "Test",
      wealth: 0,
      isAlive: false,
      married: false,
      gender: "",
      x: 100,
      y: 100,
      type: "empty",
    },
  ],
  edges: [] as any,
};

function App() {
  const [selectedNode, selectNode] = useState({} as any);
  const [nodesState, updateNodes] = useState(nodes);
  const [edgesState, updateEdges] = useState(edges);

  const { i18n } = useTranslation();

  return (
    <div className="App">
      <div className="tree">
        <Graph
          nodes={nodesState}
          edges={edgesState}
          onEditNode={(data) => {
            if (data) {
              selectNode(data as any);
            } else {
              selectNode({});
            }
          }}
        />
      </div>
      {Object.keys(selectedNode).length ? (
        <div className="form-container">
          <h3>{i18n.t("EDIT_DATA")}</h3>
          <NewNodeForm
            data={selectedNode}
            addNode={({ relation, id }) => {
              const newId = Date.now();
              updateEdges([
                ...edgesState,
                { relation, source: id, type: "emptyEdge", target: newId },
              ]);

              updateNodes([
                ...nodesState,
                {
                  name: "Test",
                  wealth: 0,
                  isAlive: false,
                  married: false,
                  gender: "",
                  type: "empty",
                  x: selectedNode.x + 150,
                  y: selectedNode.y + 150,
                  id: newId,
                },
              ]);
            }}
            handleSubmit={(data) => {
              console.log("DATA_ID", data.id);
              const foundNode = nodesState.findIndex(
                (el) => el.id === (selectedNode as any).id
              );
              if (foundNode !== -1) {
                updateNodes([
                  ...Object.assign(nodesState, {
                    [foundNode]: { ...selectedNode, ...data },
                  }),
                ]);
                selectNode({});
              }
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
