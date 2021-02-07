import React from 'react';
import { Tree } from 'react-tech-tree';
import 'react-tech-tree/dist/index.css';

const nodes = [
	[
		{ id: 'A0', name: 'A' },
		{ id: 'B0', name: 'B' },
	],
];
const links = [{ from: 'A0', to: 'B0' }];

const FamilyTree = () => {
	return <Tree nodes={nodes} links={links} />;
};
export default FamilyTree;
