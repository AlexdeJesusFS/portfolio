export interface ITypewriterProps {
	prefix: string;
	phrases: string[]; // Lista de frases
	typeSpeed: number; // Velocidade da digitação (ms)
	backSpeed: number; // Velocidade para apagar (ms)
	loop: boolean; // Se a animação repete
	backDelay: number;
	startDelay: number;
}
