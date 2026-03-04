import { useState, useRef, useEffect, useCallback } from "react";

const ERROR_STATUS =
	"Something went wrong, please try again or email me at susan@susanmorrow.us";
const CAPTCHA_ERROR =
	"Please complete the CAPTCHA challenge before submitting.";

const Contact = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		message: "",
		phone: false,
		address: false,
	});
	const [turnstileToken, setTurnstileToken] = useState(null);
	const [turnstileReady, setTurnstileReady] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isError, setIsError] = useState(false);
	const [status, setStatus] = useState("");
	const turnstileContainerRef = useRef(null);
	const turnstileWidgetIdRef = useRef(null);

	const renderTurnstile = useCallback((retries = 0) => {
		const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
		if (!siteKey) {
			console.warn(
				"[Contact] Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY, form will work without CAPTCHA"
			);
			return;
		}

		if (
			typeof window !== "undefined" &&
			window.turnstile &&
			turnstileContainerRef.current
		) {
			try {
				turnstileWidgetIdRef.current = window.turnstile.render(
					turnstileContainerRef.current,
					{
						sitekey: siteKey,
						callback: (token) => {
							setTurnstileToken(token);
							setTurnstileReady(true);
						},
						"expired-callback": () => {
							setTurnstileToken(null);
						},
						"error-callback": () => {
							console.warn(
								"[Contact] Turnstile widget error, form will work without CAPTCHA"
							);
							setTurnstileToken(null);
							setTurnstileReady(false);
						},
					}
				);
				setTurnstileReady(true);
			} catch (err) {
				console.warn(
					"[Contact] Turnstile render failed, form will work without CAPTCHA:",
					err.message
				);
			}
		} else if (retries < 20) {
			setTimeout(() => renderTurnstile(retries + 1), 250);
		} else {
			console.warn(
				"[Contact] Turnstile script failed to load, form will work without CAPTCHA"
			);
		}
	}, []);

	useEffect(() => {
		renderTurnstile();
	}, [renderTurnstile]);

	const handleInputChange = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCheck = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
	};

	const handleReset = () => {
		setValues({
			name: "",
			email: "",
			message: "",
			phone: false,
			address: false,
		});
		setTurnstileToken(null);
		setIsSubmitting(false);
		setIsError(false);
		setStatus("");

		try {
			if (window.turnstile && turnstileWidgetIdRef.current !== null) {
				window.turnstile.reset(turnstileWidgetIdRef.current);
			}
		} catch (err) {
			console.warn("[Contact] Turnstile reset failed:", err.message);
		}
	};

	const postForm = async (e) => {
		e.preventDefault();

		if (turnstileReady && !turnstileToken) {
			setIsError(true);
			setStatus(CAPTCHA_ERROR);
			return;
		}

		setIsSubmitting(true);
		setStatus("Sending your message...");
		setIsError(false);

		try {
			const response = await fetch("/api/send-email", {
				body: JSON.stringify({
					...values,
					turnstileToken,
				}),
				headers: { "Content-Type": "application/json" },
				method: "POST",
			});

			if (response.status >= 200 && response.status < 300) {
				const result = await response.json();
				if (result?.message) {
					setIsSubmitting(false);
					setIsError(false);
					setStatus("Your message was sent successfully");
					setTurnstileToken(null);

					try {
						if (
							window.turnstile &&
							turnstileWidgetIdRef.current !== null
						) {
							window.turnstile.reset(
								turnstileWidgetIdRef.current
							);
						}
					} catch (err) {
						console.warn(
							"[Contact] Turnstile reset failed:",
							err.message
						);
					}
				} else {
					throw new Error("Unexpected response");
				}
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error("[sendmail] Error sending mail:", error);
			setIsSubmitting(false);
			setIsError(true);
			setStatus(ERROR_STATUS);
		}
	};

	return (
		<section id="contact" className="bg-sand py-20 md:py-28">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
						Schedule an Appointment
					</h2>
					<p className="text-warm-gray max-w-xl mx-auto">
						Take the first step toward a more fulfilling life. Reach
						out today for a confidential consultation.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
					{/* Form */}
					<div className="lg:col-span-3">
						<form onSubmit={postForm} className="space-y-5">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-charcoal mb-1.5"
									>
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										value={values.name}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-warm-gray-300/50 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-charcoal mb-1.5"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										value={values.email}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 rounded-xl border border-warm-gray-300/50 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							{/* Honeypot fields */}
							<div
								className="hidden"
								aria-hidden="true"
								tabIndex={-1}
							>
								<label htmlFor="phone">Phone</label>
								<input
									type="text"
									name="phone"
									id="phone"
									value={values.phone || ""}
									onChange={handleInputChange}
									tabIndex={-1}
									autoComplete="off"
								/>
							</div>
							<div
								className="hidden"
								aria-hidden="true"
								tabIndex={-1}
							>
								<label htmlFor="address">Address</label>
								<input
									type="checkbox"
									name="address"
									id="address"
									value="address"
									onChange={handleCheck}
									tabIndex={-1}
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-charcoal mb-1.5"
								>
									Message
								</label>
								<textarea
									name="message"
									id="message"
									rows="5"
									value={values.message}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 rounded-xl border border-warm-gray-300/50 bg-white text-charcoal placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors resize-none"
									placeholder="How can I help you?"
								/>
							</div>

							<div ref={turnstileContainerRef} />

							<div className="flex items-center gap-4">
								<button
									type="submit"
									disabled={isSubmitting}
									className="px-8 py-3 bg-sage text-white font-medium rounded-full hover:bg-sage-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors inline-flex items-center"
								>
									{isSubmitting ? (
										<>
											Sending
											<span className="spinner" />
										</>
									) : (
										"Send Message"
									)}
								</button>
								<button
									type="button"
									onClick={handleReset}
									className="px-6 py-3 text-warm-gray font-medium rounded-full border border-warm-gray-300/50 hover:border-warm-gray-300 hover:text-charcoal transition-colors"
								>
									Clear
								</button>
							</div>

							{status && (
								<p
									className={`text-sm font-medium ${
										isError
											? "text-red-600"
											: "text-sage-600"
									}`}
								>
									{isError && "Error: "}
									{status}
								</p>
							)}
						</form>
					</div>

					{/* Contact Info */}
					<div className="lg:col-span-2 space-y-8">
						<a
							href="mailto:susan@susanmorrow.us"
							className="block group"
						>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-sage"
									>
										<rect
											x="2"
											y="4"
											width="20"
											height="16"
											rx="2"
										/>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-charcoal mb-0.5">
										Email
									</h3>
									<span className="text-warm-gray text-sm group-hover:text-sage-600 transition-colors">
										susan@susanmorrow.us
									</span>
								</div>
							</div>
						</a>

						<a href="tel:+17043325153" className="block group">
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-sage"
									>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-charcoal mb-0.5">
										Phone
									</h3>
									<span className="text-warm-gray text-sm group-hover:text-sage-600 transition-colors">
										(704) 332-5153
									</span>
								</div>
							</div>
						</a>

						<a
							href="https://www.google.com/maps/place/429+E+Worthington+Ave,+Charlotte,+NC+28203/@35.2084558,-80.8575031,17z/"
							target="_blank"
							rel="noopener noreferrer"
							className="block group"
						>
							<div className="flex items-start gap-4">
								<div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="text-sage"
									>
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div>
									<h3 className="text-sm font-semibold text-charcoal mb-0.5">
										Office
									</h3>
									<span className="text-warm-gray text-sm group-hover:text-sage-600 transition-colors">
										429 E. Worthington Ave. Suite 2
										<br />
										Charlotte, NC 28203
									</span>
								</div>
							</div>
						</a>

						<div className="pt-4 border-t border-warm-gray-300/30">
							<p className="text-sm text-warm-gray leading-relaxed">
								Office hours: Monday &ndash; Friday, 9am &ndash; 5pm
							</p>
							<p className="text-sm text-warm-gray leading-relaxed mt-2">
								Evening appointments available upon request.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
