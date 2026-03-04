import Head from "next/head";
import Layout from "../components/Layout";

const Couples = () => (
	<Layout>
		<Head>
			<title>Couples Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
			<meta
				name="description"
				content="Expert couples therapy in Charlotte, NC using Emotionally Focused Therapy and Gottman Method. Restore intimacy, improve communication, and build lasting relationships. 30+ years experience."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/header-couples-2.jpg"
					alt="Couples therapy session helping partners reconnect and improve communication"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div className="max-w-3xl">
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Couples Therapy
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Develop a lasting, secure bond that provides joy
							through life&apos;s triumphs, and shelter through
							tough times.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					{/* Expertise callout */}
					<div className="mb-12 p-8 bg-sage-50 rounded-2xl border border-sage-100">
						<p className="text-warm-gray-700 leading-relaxed italic">
							Help for deeper communication, intimacy, marital
							crisis, and marital enrichment. My 30 years
							experience working with couples, advanced training
							in both attachment-based couple therapy &mdash;
							Emotionally Focused Therapy (EFT) with the Gottman
							Institute, puts your relationships in safe hands.
						</p>
					</div>

					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							Even the most distressed couples can restore their
							love relationships to renewed intimacy and marital
							satisfaction. I use the most highly regarded,
							evidence-based couples therapy approach available in
							North America. Based on 40 years of research by
							esteemed marriage expert John Gottman, PhD (The
							Gottman Institute, University of Washington) and the
							couples therapy processes of
							Emotionally-Focused Therapy developed by eminent
							attachment science researcher, Sue Johnson, PhD.
						</p>
						<p>
							With many years of experience as a couples
							therapist, I have the training and a practical road
							map to lead you from stuck places of disconnection
							into a secure, loving bond. We will work together to
							build a sustainable bond, to help you to cope in
							this challenging world.
						</p>
						<p>
							Most marital distress comes from disconnection,
							communication problems, physical intimacy issues,
							broken trust, old hurts, stem from fissures in the
							couples basic attachment bond. I have a road map to
							take you out of these stuck places and into a more
							responsive, attuned, engaged relationship.
						</p>
						<p>
							We now know how to build and protect close, healthy,
							loving relationships. Emotionally Focused Couples
							Therapy provides practical, focused navigation to
							lead you out of these stuck places of disconnection
							into a secure, loving bond. Our primary attachment
							bonds are crucial to our survival as a species.
						</p>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Couples;
