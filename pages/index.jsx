import Link from "next/link";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

const services = [
	{
		title: "Individual Therapy",
		description:
			"Help for Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.",
		image: "/images/block-individual-3.jpg",
		href: "/individual",
	},
	{
		title: "Couples Therapy",
		description:
			"Improved Communication, Intimacy, Pre-marital Counseling",
		image: "/images/block-couples-2.jpg",
		href: "/couples",
	},
	{
		title: "Family Therapy",
		description:
			"Group support for family resilience through challenges",
		image: "/images/block-families.jpg",
		href: "/family",
	},
	{
		title: "Online Therapy",
		description:
			"Serving the greater NC area. Telehealth meetings on your schedule.",
		image: "/images/block-video.jpg",
		href: "/online",
	},
];

const Index = () => (
	<Layout>
		{/* Hero */}
		<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
			<img
				src="/images/banner.jpg"
				alt="Peaceful therapy environment"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-charcoal/55" />
			<div className="relative text-center px-6 max-w-3xl mx-auto pt-20">
				<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight animate-fade-in">
					<span className="inline">Build stronger relationships.</span>{" "}
					<span className="inline">Lead a more fulfilling life.</span>
				</h1>
				<p className="mt-6 text-lg md:text-xl text-white/80 font-light leading-relaxed animate-fade-in-delay">
					Personalized, Compassionate Therapy Services for
					Individuals, Couples, and Families.
				</p>
				<div className="mt-10 animate-fade-in-delay-2">
					<a
						href="#contact"
						className="inline-flex items-center px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-sage-600 transition-colors text-lg"
					>
						Make an Appointment
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							className="ml-2"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</section>

		{/* Services Grid */}
		<section className="py-20 md:py-28 px-6 bg-cream">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-14">
					<h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
						How I Can Help
					</h2>
					<p className="text-warm-gray max-w-xl mx-auto">
						Evidence-based therapy tailored to your unique needs and
						circumstances.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service) => (
						<Link
							key={service.href}
							href={service.href}
							className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<h3 className="font-serif text-xl text-charcoal mb-2">
									{service.title}
								</h3>
								<p className="text-warm-gray text-sm leading-relaxed">
									{service.description}
								</p>
								<span className="inline-flex items-center text-sage font-medium text-sm mt-4 group-hover:gap-2 gap-1 transition-all">
									Learn more
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>

		{/* Testimonials */}
		<Testimonials />

		{/* About Section */}
		<section className="py-20 md:py-28 px-6 bg-cream">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
					{/* Image */}
					<div className="lg:col-span-2">
						<div className="relative">
							<img
								src="/images/headshot-2023-chair.jpg"
								alt="Susan Morrow, MSW, LCSW"
								className="rounded-2xl shadow-lg w-full max-w-sm mx-auto lg:max-w-none"
							/>
							<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage/10 rounded-2xl -z-10" />
						</div>
					</div>

					{/* Content */}
					<div className="lg:col-span-3">
						<h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
							Susan Morrow, MSW, LCSW
						</h2>
						<p className="text-sage font-medium mb-6">
							Professional therapy for you, and your most
							important relationships
						</p>
						<p className="text-warm-gray leading-relaxed mb-6">
							Susan is a seasoned therapist who draws from an
							extensive background in evidence-based therapies and
							30 years of clinical experience working with
							individuals and couples like you. Her model provides
							a strength-based, personalized approach to help you
							to:
						</p>
						<ul className="space-y-3 mb-8">
							<li className="flex items-start gap-3 text-warm-gray">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									className="text-sage flex-shrink-0 mt-0.5"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								Break free from negative patterns
							</li>
							<li className="flex items-start gap-3 text-warm-gray">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									className="text-sage flex-shrink-0 mt-0.5"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								Unlock your potential with effective coping
								skills
							</li>
							<li className="flex items-start gap-3 text-warm-gray">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									className="text-sage flex-shrink-0 mt-0.5"
								>
									<polyline points="20 6 9 17 4 12" />
								</svg>
								Build relationships that reduce &mdash; rather
								than create &mdash; stress
							</li>
						</ul>

						<div className="flex flex-wrap gap-4 mb-8">
							<Link
								href="/about"
								className="inline-flex items-center px-6 py-3 bg-sage text-white font-medium rounded-full hover:bg-sage-600 transition-colors"
							>
								About Susan
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
									className="ml-2"
								>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.psychologytoday.com/profile/51938"
								className="inline-flex items-center px-6 py-3 border border-warm-gray-300/50 text-charcoal font-medium rounded-full hover:border-warm-gray-300 transition-colors"
							>
								<img
									src="/images/logo-psychology-today.svg"
									alt="Psychology Today"
									className="h-5 w-auto"
								/>
							</a>
						</div>

						{/* Credentials */}
						<div className="flex flex-wrap items-center gap-6 pt-6 border-t border-sand">
							<a
								href="https://gottmanreferralnetwork.com/therapists/susan-morrow"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<img
									alt="Susan Morrow's profile on the Gottman Referral Network"
									src="https://gottmanreferralnetwork.com/grn-badge-approved.png"
									className="h-20 w-auto"
								/>
							</a>
							<a
								href="https://iceeft.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
							>
								<img
									src="/images/iceeft.png"
									alt="International Centre for Emotionally Focused Therapy"
									className="h-16 w-auto"
								/>
								<span className="text-xs text-warm-gray italic">
									International Centre for EFT
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Index;
