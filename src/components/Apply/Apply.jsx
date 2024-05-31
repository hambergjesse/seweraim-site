import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ApplyForm } from "./ApplyForm/ApplyForm";

export const Apply = () => {
	return (
		<section className="apply__wrapper">
			<Header />
			<div className="apply__center">
				<ApplyForm />
			</div>
			<Footer />
		</section>
	);
};
