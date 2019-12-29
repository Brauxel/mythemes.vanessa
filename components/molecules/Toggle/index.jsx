import { Component } from "react";
import PropTypes from "prop-types";
import { callAll } from "../../../helpers/utilities";

class Toggle extends Component {
	static defaultProps = {
		initialOn: false,
		onReset: () => {},
		stateReducer: (state, changes) => changes
	};

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { on: this.props.initialOn };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	/*
		- This function serves as our state reducer
		- It calls the set state after filtering the changes through the state reducer passed by the parent
	*/
	internalSetState(changes, callback) {
		this.setState(state => {
			// handles function set state calls
			const changesObject =
				typeof changes === "function" ? changes(state) : changes;

			const reducedState = this.props.stateReducer(state, changesObject) || {};

			return Object.keys(reducedState).length ? reducedState : null;
		}, callback);
	}

	toggle = () => {
		this.internalSetState(
			({ on }) => ({ on: !on }),
			() => {
				this.props.onToggle(this.state.on);
			}
		);
	};

	reset = () => {
		this.internalSetState(this.initialState, () => {
			this.props.onReset(this.initialState);
		});
	};

	getTogglerProps = ({ onClick, ...props }) => ({
		"aria-expanded": this.state.on,
		onClick: callAll(onClick, this.toggle),
		...props
	});

	getStateAndHelpers() {
		return {
			on: this.state.on,
			toggle: this.toggle,
			reset: this.reset,
			getTogglerProps: this.getTogglerProps
		};
	}

	render() {
		return this.props.children(this.getStateAndHelpers());
	}
}

Toggle.propTypes = {
	onToggle: PropTypes.func,
	children: PropTypes.func.isRequired,
	initialOn: PropTypes.bool.isRequired,
	onReset: PropTypes.func.isRequired,
	stateReducer: PropTypes.func.isRequired
};

export default Toggle;
