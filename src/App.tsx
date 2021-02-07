import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { NewNodeForm } from './forms/NewNodeForm';
import { useTranslation } from 'react-i18next';
import FamilyTree from './components/FamilyTree';

function App() {
	const { i18n } = useTranslation();
	return (
		<div className="App">
			<FamilyTree />
		</div>
	);
}

export default App;
