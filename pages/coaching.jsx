import Head from "next/head";
import Layout from "../components/Layout";

const Coaching = () => (
	<Layout>
		<Head>
			<title>Life Coaching Charlotte NC | Susan Morrow, MSW, LCSW</title>
			<meta
				name="description"
				content="Goal-focused life coaching in Charlotte, NC for relationships, business, and personal growth. Action-oriented strategies to overcome obstacles and achieve success."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/pic11.jpg"
					alt="Life coaching session for personal and professional growth"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div>
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Life Coaching
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Help with love, business, and family relationships.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							Bring a renewed desire for your best life, and
							collaboratively we will customize an action plan to
							get you on the path to the life you want. I offer
							goal focused, strategic intervention, and positive
							psychology strategies to address blocks to your
							success in relationships, work, and life.
						</p>
						<p>
							Coaching is different from therapy, in that it is
							more specifically action and future oriented, rather
							than psychodynamically processing early and current
							influences, with change efforts based on new
							insights and thought processes. If you have
							questions I am happy to discuss the best approach to
							your situation. I offer personal coaching,
							relationship coaching, family business coaching, and
							divorce coaching.
						</p>
					</div>

					{/* Services */}
					<div className="mt-12 p-8 bg-sand rounded-2xl">
						<h3 className="font-serif text-xl text-charcoal mb-6">
							Coaching Services
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{[
								"Personal Coaching",
								"Relationship Coaching",
								"Family Business Coaching",
								"Divorce Coaching",
							].map((item, i) => (
								<div
									key={i}
									className="flex items-center gap-3 text-warm-gray"
								>
									<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
									<span>{item}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Coaching;
