import React, { Component } from "react";
import PropTypes from "prop-types";
import AccordionHeaderComp from "./styles";
import CrossIcon from "../../atoms/CrossIcon/";
import FlexContainer from "../../containers/FlexContainer/";

class AccordionHeader extends Component {
	static defaultProps = {
		stateReducer: (state, changes) => changes
	};

	// Any time I use a string as an identifier for a type,
	// I prefer to give it a variable name. That way folks who
	// want to reference the type can do so using variable which
	// will help mitigate the problems of indirection.
	static stateChangeTypes = {
		toggle: "__toggle_toggle__"
	};

	componentDidUpdate(prevProps, prevState) {
		console.log("accordion header rendder");
	}
	// let's add a function that can determine whether
	// the a prop is controlled. Call it `isControlled`.
	isControlled(prop) {
		return this.props[prop] !== undefined;
	}

	// We'll also need a `getState` method here that returns a
	// state object that has state from both internal state (`this.state`)
	// as well as external state (`this.props`).
	getState(state = this.state) {
		return Object.entries(state).reduce((combinedState, [key, value]) => {
			if (this.isControlled(key)) {
				combinedState[key] = this.props[key];
			} else {
				combinedState[key] = value;
			}

			return combinedState;
		}, {});
	}

	// Lets define and initial state that can be used to initiate the reset the system, this makes large initial states easy to control in one place.
	initialState = { isOpen: this.getState({ isOpen: false }).isOpen };

	/*
    	- We can make use of @babel/plugin-proposal-class-properties that is set in .babelrc to avoid declaring the state and super(props) in the class constructor as is the usual norm
  	*/
	state = this.initialState;

	internalSetState = (changes, callback) => {
		let allChanges;

		this.setState(
			state => {
				const combinedState = this.getState(state);

				// handles function set state calls
				const changesObject =
					typeof changes === "function" ? changes(combinedState) : changes;

				// apply state reducer
				allChanges =
					this.props.stateReducer(combinedState, changesObject) || {};

				// remove the type so it's not set into state
				// We've disabled linting for the next line but remember to not make this the norm, the line below is an edge case
				const { actionType: ignoredType, ...onlyChanges } = allChanges; // eslint-disable-line

				// Next, since we allow for both controlled props and a stateReducer, we need to seperate out only the non controlled props
				// Important, we reduce combinedState and not onlyChanges as it is data returned from the stateReducer, we need to keep the focus on the localised data
				const nonControlledChanges = Object.keys(combinedState).reduce(
					(newChanges, stateKey) => {
						if (!this.isControlled(stateKey)) {
							newChanges[stateKey] = Object.prototype.hasOwnProperty.call(
								onlyChanges,
								stateKey
							)
								? onlyChanges[stateKey]
								: combinedState[stateKey];
						}

						return newChanges;
					},
					{}
				);

				console.log("nonControlledChanges", nonControlledChanges);

				return Object.keys(nonControlledChanges || {}).length
					? nonControlledChanges
					: null;
			},
			() => {
				// In the setState callback, we first fire the prop of the parent component with the current set of state changes and the current state
				if (typeof this.props.onStateChange === "function")
					this.props.onStateChange(allChanges);
				if (typeof callback === "function") callback();
			}
		);
	};

	toggle = ({ actionType = CrossIcon.stateChangeTypes.toggle } = {}) => {
		const { id } = this.props;
		this.internalSetState(
			({ isOpen }) => ({ actionType, isOpen: !isOpen }),
			() => {
				if (typeof this.props.onClick === "function") this.props.onClick(id);
			}
		);
	};

	getStateAndHelpers() {
		return { ...this.getState() };
	}

	render() {
		console.log("initialState", this.initialState);
		const { children } = this.props;
		const { isOpen } = this.state;

		return (
			<AccordionHeaderComp onClick={this.toggle}>
				<FlexContainer
					styles={{
						display: "flex",
						alignContent: "center",
						justifyContent: "space-between"
					}}
				>
					{children} <CrossIcon isOpen={isOpen} />
				</FlexContainer>
			</AccordionHeaderComp>
		);
	}
}

AccordionHeader.propTypes = {
	as: PropTypes.string,
	styles: PropTypes.object,
	mobileLandscapeStyles: PropTypes.object,
	iPadPortraitStyles: PropTypes.object,
	iPadLandscapeStyles: PropTypes.object,
	onClick: PropTypes.func,
	stateReducer: PropTypes.func,
	onStateChange: PropTypes.func,
	isOpen: PropTypes.bool,
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element
	]).isRequired
};

export default AccordionHeader;
