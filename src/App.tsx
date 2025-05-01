import { PanelItem, Panel } from "./components/custom/Panel";
import "./App.css";

const panelItems: Array<PanelItem> = [
	{
		name: "Task One",
		description: "This is a low priority task",
		priority: "low",
	},
	{
		name: "Task Two",
		description: "This is a medium priority task",
		priority: "medium",
	},
	{
		name: "Task Three",
		description: "This is a high priority task",
		priority: "high",
	},
];

function App() {
	return (
		<div>
			<Panel panelItems={panelItems}></Panel>
		</div>
	);
}

export default App;
