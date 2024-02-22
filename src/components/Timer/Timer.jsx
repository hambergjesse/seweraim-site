import { useState, useEffect } from "preact/hooks"; // Import useState and
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Timer = () => {
	const [timeElapsed, setTimeElapsed] = useState(0);

	useEffect(() => {
		const startTime = new Date("September 21, 2021").getTime();

		const updateTimer = () => {
			const currentTime = new Date().getTime();
			const elapsedTime = currentTime - startTime;
			setTimeElapsed(elapsedTime);
		};

		const timerInterval = setInterval(updateTimer, 1);

		return () => clearInterval(timerInterval);
	}, []);

	// Format elapsed time into days, hours, minutes, seconds, and milliseconds
	const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
	const seconds = Math.floor((timeElapsed / 1000) % 60);

	return (
		<section className="operationTimer__wrapper">
			<Header />
			<div className="operationTimer__container">
				<p>Time Elapsed Since Last CS Operation (September 21, 2021):</p>
				<p>
					{days} days, {hours} hours, {minutes} minutes, {seconds} seconds
				</p>
			</div>
			<Footer />
		</section>
	);
};
