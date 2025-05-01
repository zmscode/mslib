export type PanelItem = {
	name: string;
	description: string;
	priority: "high" | "medium" | "low";
	attachments?: Array<string>;
	thumbnail?: string;
};

type PanelProps = {
	panelItems: Array<PanelItem>;
};

export const Panel = (props: PanelProps) => {
	return (
		<div
			style={{
				maxWidth: "900px",
				margin: "0 auto",
				padding: "2rem",
				fontFamily: "Georgia, serif",
			}}
		>
			{props.panelItems.map((item, index) => (
				<div
					key={index}
					style={{
						background: "#fff",
						borderRadius: "8px",
						padding: "1.5rem",
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
						borderLeft: "5px solid #87bc74",
					}}
				>
					<h1
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
							gap: "1.5rem",
							textAlign: "center",
						}}
					>
						{item.name}
					</h1>
					<h2
						style={{
							color: "#333",
							marginTop: 0,
							marginBottom: "0.5rem",
							fontSize: "1.6rem",
						}}
					>
						{item.description}
					</h2>
					<h4
						style={{
							color: "#555",
							lineHeight: 1.5,
							margin: 0,
							fontSize: "1.1rem",
						}}
					>
						Priority: {item.priority}
					</h4>
				</div>
			))}
		</div>
	);
};

export default { Panel };
