import Head from "next/head";
import Layout from "../components/Layout";

const Intensives = () => (
	<Layout>
		<Head>
			<title>
				Couples Intensives Charlotte NC | Susan Morrow, MSW, LCSW
			</title>
			<meta
				name="description"
				content="Intensive 4-hour couples therapy sessions in Charlotte, NC for marital crisis, pre-marital counseling, and relationship enrichment. Focused, evidence-based approach."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/header-couples-2.jpg"
					alt="Couples intensive therapy session for relationship repair and enrichment"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div>
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Couples Intensives
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Structured 4 hours of focused couples therapy
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							This is a helpful format for couples who have had a
							marital crisis and need focused attention on repair
							to their relationship, pre-marital couples, and
							couples seeking relationship enrichment.
						</p>
					</div>

					{/* Who it's for */}
					<div className="mt-12 p-8 bg-sand rounded-2xl">
						<h3 className="font-serif text-xl text-charcoal mb-6">
							Ideal for
						</h3>
						<div className="space-y-3">
							{[
								"Couples experiencing a marital crisis needing focused repair",
								"Pre-marital couples preparing for a lasting partnership",
								"Couples seeking relationship enrichment and deeper connection",
							].map((item, i) => (
								<div
									key={i}
									className="flex items-start gap-3 text-warm-gray"
								>
									<div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-2.5" />
									<span>{item}</span>
								</div>
							))}
						</div>
					</div>

					{/* CTA */}
					<div className="mt-8 text-center">
						<a
							href="#contact"
							className="inline-flex items-center px-6 py-3 bg-sage text-white font-medium rounded-full hover:bg-sage-600 transition-colors"
						>
							Schedule Your Intensive
						</a>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Intensives;
