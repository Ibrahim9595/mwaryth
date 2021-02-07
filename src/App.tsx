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
			<div className="form-container">
				<h3>{i18n.t('EDIT_DATA')}</h3>
				<NewNodeForm />
				<div>
					<FamilyTree />
				</div>
			</div>
		</div>
	);
}

export default App;
