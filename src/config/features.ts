import type { Feature } from "./types";
import { BsBook, BsLightningCharge } from "react-icons/bs";
import { PiExamLight } from "react-icons/pi";

export const features: Feature[] = [
	{
		title: "Temario actualizado",
		description: "Accede al temario actualizado de la última convocatoria. ¡Añadiremos más en futuras actualizaciones!",
		icon: PiExamLight,
	},
	{
		title: "Tests personalizados",
		description: "Crea tests a medida seleccionando temas específicos, número de preguntas y dificultad.",
		icon: BsLightningCharge,
	},
	{
		title: "Preguntas oficiales",
		description: "Accede a preguntas inspiradas directamente de exámenes reales anteriores.",
		icon: BsBook,
	},
];
