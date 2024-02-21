import { Navigation } from "./Navigation/Navigation";
import { Logo } from "../Logo/Logo";

export const Header = () => {
	return (
		<section className="header__wrapper">
			<Logo />
			<Navigation />
		</section>
	);
};
