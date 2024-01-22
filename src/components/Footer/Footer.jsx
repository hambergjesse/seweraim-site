import { XIcon } from "../Icons/XIcon";
import { DiscordIcon } from "../Icons/DiscordIcon";

export const Footer = () => {
	return (
		<section className="footer__wrapper">
			<div className="footer__socials">
				<a href="https://twitter.com/SewerAimers" target="_blank">
					<XIcon />
				</a>
				<a href="https://discord.gg/HnWpt2WN49" target="_blank">
					<DiscordIcon />
				</a>
			</div>
		</section>
	);
};
