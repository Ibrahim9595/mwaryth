import React from "react";
import { Tree } from "react-tech-tree";
import "./index.css";
import "react-tech-tree/dist/index.css";
const data = {
  nodes: [
    [
      {
        name: "effects_1",
        id: "A",
      },
      {
        name: "effects_1",
        id: "B",
      },
    ],
    [
      {
        name: "effects_4",
        id: "C",
      },
      {
        name: "effects_5",
        id: "D",
      },
      {
        name: "effects_6",
        id: "E",
      },
    ],
  ],
  links: [
    {
      from: "A",
      to: "C",
      type: "test",
    },
    {
      from: "A",
      to: "B",
    },
    {
      from: "A",
      to: "D",
    },
    {
      from: "A",
      to: "E",
    },
  ],
};

const MyNodeElement = ({ name, id }: any) => (
  <div style={{ width: "120px", height: "80px", border: "1px solid black" }}>
    {name}
    <button id={id} className="Node" onClick={() => console.log(id)}></button>
  </div>
);

const FamilyTree = () => {
  const { nodes, links } = data;
  return (
    <Tree
      id="text-tree"
      nodes={nodes}
      links={links}
      NodeElement={MyNodeElement}
    />
  );
};
export default FamilyTree;
