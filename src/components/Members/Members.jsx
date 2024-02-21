import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Members = () => {
	const memberList = [
		{
			img: "https://i.imgur.com/4uAKcSR.jpeg",
			name: "ratte",
			title: "boss & founder",
			description:
				"the boss, the ultimate f*cking twitter femboy - there's literally no one better.",
			twitter: "https://twitter.com/rattecs",
		},
		{
			img: "https://pbs.twimg.com/profile_images/1749560353699115008/GtIzq-I6_400x400.jpg",
			name: "ext",
			title: "founder",
			description:
				"20, lithuanian counter-strike shitter and upcoming prodigy.",
			twitter: "https://twitter.com/extcs2",
		},
		{
			img: "https://pbs.twimg.com/profile_images/1758303047162253312/seuvj7Ng_400x400.jpg",
			name: "nex",
			title: "founder",
			description:
				"23, scarlxrd, cs2 player and skin collector, level 5 faceit and mid peeking rat.",
			twitter: "https://twitter.com/Nexx_zz",
		},
	];

	return (
		<section className="members__wrapper">
			<Header />
			<div className="members__list">
				{memberList.map((item) => {
					return (
						<div className="member__container">
							<img src={item.img} alt="no image provided atm." />
							<h2>{item.name}</h2>
							<p>{item.title}</p>
							<p>{item.description}</p>
							<a href={item.twitter} target="_blank">
								twitter
							</a>
						</div>
					);
				})}
			</div>
			<Footer />
		</section>
	);
};
