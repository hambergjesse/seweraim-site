import { useState } from "preact/hooks";
import emailjs from "emailjs-com";

export const ApplyForm = () => {
	const [formData, setFormData] = useState({
		nickname: "",
		twitter: "",
		email: "",
		achievements: "",
		links: "",
	});

	const [errors, setErrors] = useState({});
	const [submissionStatus, setSubmissionStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateForm = () => {
		const newErrors = {};

		if (!formData.nickname.trim()) newErrors.nickname = "Nickname is required";
		else if (formData.nickname.length > 30)
			newErrors.nickname = "Nickname cannot exceed 30 characters";

		if (!formData.twitter.trim())
			newErrors.twitter = "Twitter handle is required";
		else if (formData.twitter.length > 30)
			newErrors.twitter = "Twitter handle cannot exceed 30 characters";

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email address is invalid";
		} else if (formData.email.length > 50) {
			newErrors.email = "Email cannot exceed 50 characters";
		}

		if (!formData.achievements.trim())
			newErrors.achievements = "Achievements are required";
		else if (formData.achievements.length > 500)
			newErrors.achievements = "Achievements cannot exceed 500 characters";

		if (!formData.links.trim()) newErrors.links = "Links are required";
		else if (formData.links.length > 100)
			newErrors.links = "Links cannot exceed 100 characters";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		// Check local storage for spam protection
		const lastSubmissionTime = localStorage.getItem("lastSubmissionTime");
		const currentTime = new Date().getTime();
		if (lastSubmissionTime && currentTime - lastSubmissionTime < 3600000) {
			// 1 hour = 3600000 ms
			setSubmissionStatus("You can only submit once every hour.");
			return;
		}

		setIsSubmitting(true);
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setSubmissionStatus("Application sent successfully!");
					setFormData({
						nickname: "",
						twitter: "",
						email: "",
						achievements: "",
						links: "",
					});
					localStorage.setItem("lastSubmissionTime", new Date().getTime());
					setIsSubmitting(false);
				},
				(error) => {
					setSubmissionStatus(
						"Failed to send application: " + JSON.stringify(error)
					);
					setIsSubmitting(false);
				}
			);
	};

	return (
		<form onSubmit={sendEmail}>
			<h1>Member Application</h1>
			<p>
				Here you can apply to be a part of SewerAimers. Take your time with your
				application and please include any sort of relevant experience or
				achievements from your entire gaming/aiming journey. Thank you.
			</p>
			<div>
				<label>Nickname</label>
				<input
					type="text"
					name="nickname"
					value={formData.nickname}
					onChange={handleChange}
					placeholder="Enter your nickname"
					required
					maxLength="30"
				/>
				{errors.nickname && <p className="error">{errors.nickname}</p>}
			</div>
			<div>
				<label>Twitter / X</label>
				<input
					type="text"
					name="twitter"
					value={formData.twitter}
					onChange={handleChange}
					placeholder="Enter your Twitter handle"
					required
					maxLength="30"
				/>
				{errors.twitter && <p className="error">{errors.twitter}</p>}
			</div>
			<div>
				<label>Email</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Enter your email address"
					required
					maxLength="50"
				/>
				{errors.email && <p className="error">{errors.email}</p>}
			</div>
			<div>
				<label>Past Achievements</label>
				<textarea
					name="achievements"
					value={formData.achievements}
					onChange={handleChange}
					placeholder="Describe your past achievements"
					rows="4"
					required
					maxLength="500"
				></textarea>
				{errors.achievements && <p className="error">{errors.achievements}</p>}
			</div>
			<div>
				<label>Any Links</label>
				<input
					type="text"
					name="links"
					value={formData.links}
					onChange={handleChange}
					placeholder="Enter any relevant links"
					required
					maxLength="100"
				/>
				{errors.links && <p className="error">{errors.links}</p>}
			</div>

			{/* Hidden inputs for EmailJS */}
			<input type="hidden" name="from_name" value={formData.nickname} />
			<input type="hidden" name="reply_to" value={formData.email} />
			<textarea
				name="message"
				value={`Twitter: ${formData.twitter}\nAchievements: ${formData.achievements}\nLinks: ${formData.links}`}
				style={{ display: "none" }}
			></textarea>

			<button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Application"}
			</button>
			{submissionStatus && (
				<p className="submission-status">{submissionStatus}</p>
			)}
		</form>
	);
};
