interface PanelItem {
	name: string;
	description: string;
	priority: "high" | "medium" | "low";
}

const Panel = (panelItems: Array<PanelItem>) => {
	return (
		<div>
			{panelItems.map((item, index) => (
				<div key={index}>
					<h1>{item.name}</h1>
					<h2>{item.description}</h2>
					<h4>Priority: {item.priority}</h4>
				</div>
			))}
		</div>
	);
};

export default { Panel };
