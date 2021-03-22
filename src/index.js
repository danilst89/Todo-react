import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';

// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			count: 0
// 		}
// 	}
//
// 	addCount = () => {
// 		this.setState(state => ({
// 			count: ++state.count,
// 		}));
// 	};
//
// 	render() {
// 		return (
// 			<div>
// 				<div>{this.state.count}</div>
// 				<button onClick={this.addCount} className='btn btn-secondary-outline'>Add count</button>
// 			</div>
// 		)
// 	}
// }
//
// const All = () => {
// 	return (
// 		<div>
// 			<WhoAmI name='V' surname='Bumaga' link='ar'/>
// 		</div>
// 	)
// };

ReactDOM.render(<App/>, document.getElementById('root')
);
