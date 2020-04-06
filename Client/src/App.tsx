import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		values: [],
	};

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/values`)
			.then((response) => {
				this.setState({
					values: response.data,
				});
			});
	}

	render() {
		return (
			<div>
				<Header as='h2'>
					<Icon name='users' />
					<Header.Content>Reactivities</Header.Content>
				</Header>
				<List>
					{this.state.values.map((value: any) => (
						<List.Item key={value.id}>{value.name}</List.Item>
					))}
				</List>
			</div>
		);
	}
}

export default App;
