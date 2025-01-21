import { Container, Ellipse1, Ellipse2 } from "./styles";

function EllipesesBackground({ className }: { className?: string }) {
	return (
		<Container className={className}>
			<Ellipse1 />
			<Ellipse2 />
		</Container>
	);
}

export default EllipesesBackground;
