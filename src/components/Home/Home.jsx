import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Home = () => {
	const openDiscordLink = () => {
		window.open("https://discord.gg/HnWpt2WN49", "_blank");
	};

	return (
		<section className="home__wrapper">
			<Header />
			<div className="home__center">
				<h1>SEWER AIMERS</h1>
				<p>Improving Aim & Lifestyle</p>
				<button onClick={openDiscordLink}>INSTALL SEWERAIM</button>
			</div>
			<Footer />
		</section>
	);
};
