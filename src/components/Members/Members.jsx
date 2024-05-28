import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Members = () => {
	const memberCategories = [
		{
			title: "founders",
			list: [
				{
					img: "https://i.imgur.com/mBmiJpj.png",
					name: "ratte",
					title: "boss & founder",
					description: "sewer king, the main man.",
					twitter: "https://twitter.com/rattecs",
				},
				{
					img: "https://i.imgur.com/GMZOJyH.jpeg",
					name: "ext",
					title: "founder",
					description: "20, lithuanian counter-strike goat.",
					twitter: "https://twitter.com/extcs2",
				},
				{
					img: "https://i.imgur.com/zqTcTgp.jpeg",
					name: "nex",
					title: "founder",
					description: "23, scarlxrd, cs2 player and skin collector.",
					twitter: "https://twitter.com/Nexx_zz",
				},
			],
		},
		{
			title: "originals",
			list: [
				{
					img: "https://i.imgur.com/h6Sa4FJ.jpeg",
					name: "baker",
					title: "sewer og",
					description: "cs enjoyer, cavalier clothing - founder.",
					twitter: "https://twitter.com/BayKaru",
				},
				{
					img: "https://i.imgur.com/7k5J7un.jpeg",
					name: "jude",
					title: "sewer og",
					description: "cs2 streamer, cars, peripherals & green enjoyer.",
					twitter: "https://twitter.com/JudeCS2",
				},
				{
					img: "https://i.imgur.com/G3oUr6Q.jpeg",
					name: "lsh",
					title: "sewer og",
					description: "swedish young gun.",
					twitter: "https://twitter.com/lordshitheads",
				},
			],
		},
		{
			title: "members",
			list: [
				{
					img: "https://i.imgur.com/56SnJwN.jpeg",
					name: "nakki",
					title: "sewer aimer",
					description: "19, finnish aimer boy.",
					twitter: "https://twitter.com/nakkifps",
				},
				{
					img: "https://i.imgur.com/mWbqSDW.jpeg",
					name: "lxr",
					title: "sewer aimer",
					description: "jamaican cs goat",
					twitter: "https://twitter.com/LxRcs_",
				},
			],
		},
	];

	const renderMemberList = (members) =>
		members.map((item) => (
			<div className="member__container">
				<img src={item.img} alt="no image provided atm." />
				<h2>{item.name}</h2>
				<p>{item.title}</p>
				<p>{item.description}</p>
				<a href={item.twitter} target="_blank">
					twitter
				</a>
			</div>
		));

	return (
		<section className="members__wrapper">
			<Header />
			{memberCategories.map((category) => (
				<>
					<h1>{category.title}</h1>
					<div className="members__list">{renderMemberList(category.list)}</div>
				</>
			))}
			<Footer />
		</section>
	);
};
