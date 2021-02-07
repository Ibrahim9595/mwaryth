import {
  GraphView, // required
} from "react-digraph";
import { IFormData } from "../../forms/NewNodeForm";

type Node = {
  id: string | number;
  type: string;
  x: number;
  y: number;
} & IFormData;

interface Edge {
  target: string | number;
  source: string | number;
  type: string;
  title?: string;
}

const NODE_KEY = "id"; // Allows D3 to correctly update DOM
const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      shapeId: "#empty", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor">
            {" "}
          </circle>
        </symbol>
      ),
    },
  },
};

export const Graph: React.FC<{
  nodes: Node[];
  edges: Edge[];
  onEditNode: (node: Node) => any;
}> = ({ nodes, edges, onEditNode }) => {
  const NodeTypes = GraphConfig.NodeTypes;
  const NodeSubtypes = GraphConfig.NodeSubtypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  return (
    <GraphView
      nodeKey={NODE_KEY}
      nodes={nodes}
      edges={edges}
      nodeTypes={NodeTypes}
      nodeSubtypes={NodeSubtypes}
      edgeTypes={EdgeTypes}
      renderNodeText={(props) => {
        return (
          <foreignObject x="-100" y="-30" width="200" height="50">
            <div className="node">
              <p className="job-title">
                {props?.name +
                  (props?.wealth
                    ? (props.relation ? `(  ${props?.relation} )` : "") +
                      `(${props.wealth}$)`
                    : "") || "None"}
              </p>
              {props ? (
                <>
                  <p>
                    {props.gender || ""} {props.isAlive ? "live" : "dead"}
                  </p>
                </>
              ) : (
                ""
              )}
            </div>
          </foreignObject>
        );
      }}
      onSelectNode={(d) => onEditNode(d as any)}
    />
  );
};
