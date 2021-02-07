import React from 'react';
import { Tree } from 'react-tech-tree';
import './index.css';
import 'react-tech-tree/dist/index.css';
import treeData from './data/tree.json';

const MyNodeElement = ({ name, id }: any) => (
    <button id={id} className="Node" onClick={() => {}}>
		{name}
	</button>
);

const FamilyTree = () => {
    const { nodes, links } = treeData;
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
