import React, { useState } from "react";
import projectData from "./projectData.js";

const DataContext = React.createContext(projectData);

function DataContextProvider(props) {
	const [data, setData] = useState({ projectData, currentProject: 0 });

	return (
		<DataContext.Provider value={[data, setData]}>
			{props.children}
		</DataContext.Provider>
	);
}

export { DataContextProvider, DataContext };
