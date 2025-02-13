import "./styles.css";

function EllipesesBackground({ className }: { className?: string }) {
	return (
		<div className={`container ${className}`.trim()}>
			<div className="ellipse ellipse1" />
			<div className="ellipse ellipse2" />
		</div>
	);
}

export default EllipesesBackground;
