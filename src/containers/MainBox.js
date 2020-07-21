import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
	state = {
		show_this: 'profile',
	};

	changePage = e => {
		this.setState({
			show_this: e,
		});
	};
	changeSelected = selected => {
		this.setState({
			selected: selected,
		});
	};

	render() {
		let detailsToDisplay;

		switch (this.state.selected) {
			case 'profile':
				detailsToDisplay = <Profile />;
				break;
			case 'photo':
				detailsToDisplay = <Photos />;
				break;
			case 'cocktail':
				detailsToDisplay = <Cocktails />;
				break;
			case 'pokemon':
				detailsToDisplay = <Pokemon />;
				break;
			default:
				detailsToDisplay = null;
				break;
		}

		return (
			<div>
				<MenuBar
					changePage={this.changePage}
          show_this={this.state.show_this}
          changeSelected={this.changeSelected}
				/>
				{detailsToDisplay}
			</div>
		);
	}
}

export default MainBox
