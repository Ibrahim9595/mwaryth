import Tree from "react-d3-tree";
import React from "react";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart: RawNodeDatum = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  return (
    <div
      id="treeWrapper"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Tree
        data={orgChart}
        orientation="vertical"
        onNodeClick={(node) => console.log(node)}
        
      />
    </div>
  );
}
