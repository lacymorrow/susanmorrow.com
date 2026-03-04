import Head from "next/head";
import Layout from "../components/Layout";

const About = () => (
	<Layout>
		<Head>
			<title>About Susan Morrow, MSW, LCSW | Charlotte Therapist</title>
			<meta
				name="description"
				content="Meet Susan Morrow, a licensed clinical social worker with over 30 years of experience providing therapy in Charlotte, NC. Specialized in Emotionally Focused Therapy, Gottman Method, and evidence-based approaches for individuals, couples, and families."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/photo-about-beach.jpg"
					alt="About Susan Morrow"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<h1 className="font-serif text-4xl md:text-5xl text-white">
						About Susan Morrow
					</h1>
				</div>
			</section>

			{/* Intro */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
						30 Years in Private Practice
					</h2>

					<div className="space-y-5 text-warm-gray leading-relaxed">
						<p>
							Susan Morrow is a NC-licensed clinical social
							worker, with extensive experience and training in
							evidence-based models in individual, couples
							therapy, and marriage and family therapy. She has
							advanced level training with both the Gottman
							Institute and with the International Centre for
							Excellence in Emotionally Focused Therapy, and had
							supervision with Dr. Sue Johnson, the founder of
							Emotionally Focused Therapy. She has assisted at
							Hold Me Tight weekends for couples in San Francisco,
							including a couples weekend for 100 couples!
						</p>
						<p>
							Susan is an active member in professional
							organizations devoted to continuing education for
							therapists. She currently serves as Co-President of
							the{" "}
							<a
								href="https://carolinasgps.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sage-600 underline decoration-sage/30 hover:decoration-sage transition-colors"
							>
								Carolinas Group Psychotherapy Society
							</a>
							. CGPS provides clinical training for therapists,
							supports and advocates for accessible and affordable
							mental health services for all. CGPS actively
							addresses inclusion and diversity issues, such as
							racism. Susan was a founding member of the Carolinas
							Center for Emotionally Focused Therapy, served many
							years on the board, and co-chaired their strategic
							planning committee.
						</p>
						<p>
							Susan is a certified supervisor for therapists
							pursuing clinical social work licensure in NC.
						</p>
						<p>
							Susan has worked in in-patient and out-patient
							agency clinical settings, has delivered parenting
							programs for families of at-risk teenagers, and has
							provided counseling integrating psychotherapy with
							spirituality, from a Jungian perspective. She has
							spoken at local and national conferences on mental
							health and wellness topics, and published papers on
							the connection between biology and psychology.
						</p>
						<p>
							Susan is a former competitive runner, mindfulness
							meditation practitioner, visual artist, and nature
							lover. She brings compassion, insight and humor into
							the therapy journey.
						</p>
					</div>
				</div>
			</section>

			{/* Education */}
			<section className="py-16 md:py-24 px-6 bg-sand">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						<div>
							<img
								src="/images/headshot-2023-2.jpg"
								alt="Susan Morrow smiling"
								className="rounded-2xl shadow-lg w-full"
							/>
						</div>
						<div>
							<h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
								Education & Training
							</h3>
							<ul className="space-y-3">
								{[
									"East Carolina University BS School of Health and Human Performance",
									"University of Georgia MSW School of Social Work",
									"Post Graduate Externship in Family Therapy",
									"The Gottman Institute \u2013 Advanced level training in Marital Therapy",
									"The International Centre for Excellence in Emotionally Focused Therapy \u2013 Advanced level training in Couples Therapy",
									"Robbins-Madannes Coaching Institute \u2013 Coach Training",
									"Supervision in Depth Psychology",
									"ACT \u2013 Acceptance and Commitment Therapy Training",
								].map((item, i) => (
									<li
										key={i}
										className="flex items-start gap-3 text-warm-gray"
									>
										<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-2.5" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Affiliations */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						<div className="order-2 lg:order-1">
							<h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
								Professional Affiliations
							</h3>
							<ul className="space-y-3">
								{[
									{
										text: "Lifetime member, International Centre for Excellence in Emotion Focused Couples Therapy",
										href: "https://iceeft.com/",
									},
									{
										text: "Founding board member, Carolinas Center for Emotionally Focused Therapy",
									},
									{
										text: "Past President, South Central Piedmont Chapter of Marriage and Family Therapists",
									},
									{
										text: "National Association of Social Workers",
										href: "https://www.socialworkers.org/",
									},
									{
										text: "American Group Psychotherapy Association",
										href: "https://www.agpa.org/",
									},
									{
										text: "Co-President, Carolinas Group Psychotherapy Society",
										href: "https://carolinasgps.org/",
									},
									{
										text: "Professional Member, Mental Health America",
									},
									{
										text: "Member of the Academy of Certified Social Workers",
									},
									{
										text: "NC Training Supervisor for Clinical Social Work Licensure",
									},
									{
										text: "Charlotte Friends of Jung, former board member",
									},
								].map((item, i) => (
									<li
										key={i}
										className="flex items-start gap-3 text-warm-gray"
									>
										<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-2.5" />
										{item.href ? (
											<a
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sage-600 underline decoration-sage/30 hover:decoration-sage transition-colors"
											>
												{item.text}
											</a>
										) : (
											<span>{item.text}</span>
										)}
									</li>
								))}
							</ul>
						</div>
						<div className="order-1 lg:order-2">
							<img
								src="/images/block-about-4.png"
								alt="Professional affiliations and certifications"
								className="rounded-2xl shadow-lg w-full"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Publications */}
			<section className="py-16 md:py-24 px-6 bg-sand">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						<div>
							<img
								src="/images/block-about-1.jpg"
								alt="Publications and research contributions"
								className="rounded-2xl shadow-lg w-full"
							/>
						</div>
						<div>
							<h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
								Publications
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-3 text-warm-gray">
									<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-2.5" />
									<span>
										&ldquo;The Biology of Behavior&rdquo; in{" "}
										<em>
											Behavioral Medicine: A Social
											Worker&apos;s Guide
										</em>{" "}
										John Wodarski, Ed.
									</span>
								</li>
								<li className="flex items-start gap-3 text-warm-gray">
									<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-2.5" />
									<span>
										<em>
											The Integrated Behavioral Health
											Service Delivery System Model
										</em>{" "}
										with Wodarski, J.S., Wodarski, L.A.,
										Nixon, S.C., and Mackie, C. (1991)
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default About;
