import { createContext } from "react";

const TabContext = createContext({
	currentActive: "1",
	toggle: () => {},
	getTogglerProps: () => {}
});

export default TabContext;
