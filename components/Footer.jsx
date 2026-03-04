import Link from "next/link";

const Footer = () => (
	<footer className="bg-charcoal text-white/80">
		<div className="max-w-6xl mx-auto px-6 py-16">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{/* Brand */}
				<div>
					<Link href="/" className="inline-block">
						<span className="font-serif text-2xl text-white">
							Susan Morrow
						</span>
						<span className="block text-sm text-white/50 mt-1">
							MSW, LCSW
						</span>
					</Link>
					<p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
						Over 30 years providing compassionate, evidence-based
						therapy in Charlotte, NC.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
						Services
					</h4>
					<nav className="flex flex-col gap-2.5">
						<Link
							href="/individual"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Individual Therapy
						</Link>
						<Link
							href="/couples"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Couples Therapy
						</Link>
						<Link
							href="/family"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Family Therapy
						</Link>
						<Link
							href="/online"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Online Therapy
						</Link>
						<Link
							href="/coaching"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Life Coaching
						</Link>
						<Link
							href="/intensives"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							Couples Intensives
						</Link>
					</nav>
				</div>

				{/* Contact */}
				<div>
					<h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
						Contact
					</h4>
					<div className="flex flex-col gap-3">
						<a
							href="tel:+17043325153"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							(704) 332-5153
						</a>
						<a
							href="mailto:susan@susanmorrow.us"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							susan@susanmorrow.us
						</a>
						<a
							href="https://www.google.com/maps/place/429+E+Worthington+Ave,+Charlotte,+NC+28203/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-white/60 hover:text-white transition-colors"
						>
							429 E. Worthington Ave. Suite 2
							<br />
							Charlotte, NC 28203
						</a>
					</div>

					{/* Social Links */}
					<div className="flex gap-4 mt-6">
						<a
							href="https://www.linkedin.com/in/centercharlottepsychotherapy/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/40 hover:text-white transition-colors"
							aria-label="LinkedIn"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<a
							href="https://www.facebook.com/susan.morrow.148"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/40 hover:text-white transition-colors"
							aria-label="Facebook"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
						</a>
						<a
							href="https://www.yelp.com/biz/charlotte-therapy-and-counseling-susan-morrow-msw-lcsw-acsw-charlotte"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white/40 hover:text-white transition-colors"
							aria-label="Yelp"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.054 1.073 1.073 0 01-.694 1.657zm-2.227 5.996a1.073 1.073 0 01-1.657-.694l-1.434-4.994c-.276-.961.8-1.74 1.63-1.176l4.308 2.905c.622.42.722 1.27.206 1.596a9.194 9.194 0 01-3.053 2.363zm-5.406 2.893a1.073 1.073 0 01-1.794-.174l-2.456-4.584c-.476-.89.368-1.862 1.276-1.47l4.71 2.022c.703.302.88 1.165.366 1.666a9.186 9.186 0 01-2.102 2.54zM7.29 14.1l-4.71-2.022c-.703-.302-.88-1.165-.366-1.666a9.186 9.186 0 012.102-2.54 1.073 1.073 0 011.794.174l2.456 4.584c.476.89-.368 1.862-1.276 1.47zM10.345 3.879a1.072 1.072 0 011.596.206l2.905 4.308c.564.83-.216 1.906-1.176 1.63L8.675 8.59a1.073 1.073 0 01-.694-1.657 9.194 9.194 0 012.364-3.054z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="mt-12 pt-8 border-t border-white/10 text-center">
				<p className="text-sm text-white/40">
					&copy; {new Date().getFullYear()} Susan Morrow, MSW, LCSW |
					Therapy in Charlotte, NC
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
