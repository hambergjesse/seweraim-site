import { useState, useEffect } from "preact/hooks";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Tests = () => {
	const [gameStarted, setGameStarted] = useState(false);
	const [showRed, setShowRed] = useState(true);
	const [reactionTime, setReactionTime] = useState(null);
	const [greenAppearTime, setGreenAppearTime] = useState(null);
	const [leaderboard, setLeaderboard] = useState([]);

	const CALIBRATION_OFFSET = 80;

	const startGame = () => {
		setShowRed(true);
		const currentTime = performance.now();
		const appearTime = currentTime + Math.random() * 2000 + 1000; // Random time between 1 and 3 seconds from now.

		const timeout = appearTime - currentTime;
		setTimeout(() => {
			requestAnimationFrame(() => {
				setShowRed(false);
				setGreenAppearTime(performance.now()); // Set at the exact time of change
			});
		}, timeout);
	};

	const handleStartGame = () => {
		setReactionTime(null);
		setGameStarted(true);
		startGame();
	};

	const handleColorClick = () => {
		if (!gameStarted || showRed) {
			alert("Please start the game and wait for the green box to appear!");
			return;
		}

		requestAnimationFrame(() => {
			const endTime = performance.now();
			const rawReactionTime = endTime - greenAppearTime;
			const adjustedReactionTime = rawReactionTime - CALIBRATION_OFFSET;

			setReactionTime(adjustedReactionTime);
			setGameStarted(false);
			saveResult(adjustedReactionTime);
		});
	};

	const resetTest = () => {
		setShowRed(true);
		setReactionTime(null);
		setGameStarted(false);
	};

	const saveResult = (reactionTime) => {
		const currentTime = new Date();
		const options = { day: "2-digit", month: "2-digit", year: "numeric" };
		const formattedDate = currentTime
			.toLocaleDateString("en-EU", options)
			.split(/[-./]/)
			.reverse()
			.join("/");
		const result = {
			reactionTime,
			date: formattedDate,
		};
		const updatedLeaderboard = [...leaderboard, result]
			.sort((a, b) => a.reactionTime - b.reactionTime)
			.slice(0, 5);
		setLeaderboard(updatedLeaderboard);
		localStorage.setItem(
			"reactionTimeLeaderboard",
			JSON.stringify(updatedLeaderboard)
		);
	};

	const deleteResult = (index) => {
		const updatedLeaderboard = leaderboard.filter((_, i) => i !== index);
		setLeaderboard(updatedLeaderboard);
		localStorage.setItem(
			"reactionTimeLeaderboard",
			JSON.stringify(updatedLeaderboard)
		);
	};

	const clearLocalStorage = () => {
		if (
			confirm(
				"Are you sure you want to clear your leaderboard? This action cannot be undone."
			)
		) {
			localStorage.removeItem("reactionTimeLeaderboard");
			setLeaderboard([]);
		}
	};

	useEffect(() => {
		const storedLeaderboard = localStorage.getItem("reactionTimeLeaderboard");
		if (storedLeaderboard) {
			setLeaderboard(JSON.parse(storedLeaderboard));
		}
	}, []);

	return (
		<section className="tests__wrapper">
			<Header />
			<div className="tests__container">
				{!gameStarted && reactionTime === null && (
					<button onClick={handleStartGame}>Start Reaction Time Test</button>
				)}
				{(gameStarted || reactionTime !== null) && (
					<div
						className={showRed ? "color-box red" : "color-box green"}
						onClick={handleColorClick}
						role="button"
						tabIndex="0"
					></div>
				)}
				{reactionTime !== null && (
					<div className="reaction-time-display">
						<p>Your reaction time: {reactionTime.toFixed(2)} milliseconds</p>
					</div>
				)}
				{reactionTime !== null && (
					<button onClick={resetTest}>Reset Test</button>
				)}
				<div className="leaderboard__container">
					<h2>Your Top 5 Results</h2>
					<ul>
						{leaderboard.map((result, index) => (
							<li key={index}>
								<span>{`${result.date}`}</span> -
								<span>{`${result.reactionTime.toFixed(2)} milliseconds`}</span>
								<button onClick={() => deleteResult(index)}>X</button>
							</li>
						))}
					</ul>
					<button onClick={clearLocalStorage}>Clear Leaderboard</button>
				</div>
			</div>
			<Footer />
		</section>
	);
};
