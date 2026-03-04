import Head from "next/head";
import Layout from "../components/Layout";

const Online = () => (
	<Layout>
		<Head>
			<title>
				Online Therapy & Telehealth Charlotte NC | Susan Morrow, MSW,
				LCSW
			</title>
			<meta
				name="description"
				content="Professional online therapy and telehealth services for NC residents. Secure video and phone sessions for individual, couples, and family therapy. Flexible scheduling available."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/header-video.jpg"
					alt="Online therapy session via secure video conferencing"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div>
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Online Therapy
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Remote counseling for the digital age
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							We live our lives in a digital age. While in person
							time is comforting and desirable, it&apos;s at times
							not practical.
						</p>
						<p>
							I am available to work with you through online or
							telephone services to optimize our therapy progress.
							Online therapy uses the same process you might
							expect at in-person meetings. If for some reason we
							are unable to meet in-person, I provide these
							services to help you get the support you need.
						</p>
						<p>
							I am licensed in NC, and am available to NC
							residents for online individual, couples, and family
							therapy.
						</p>
						<p>
							If you live outside the NC area, I am available for
							individual and relationship coaching services.
						</p>
						<p>
							If you desire lasting love and stronger bonds,
							contact me today to get started.
						</p>
					</div>

					{/* CTA */}
					<div className="mt-12 p-8 bg-sage-50 rounded-2xl border border-sage-100 text-center">
						<h3 className="font-serif text-xl text-charcoal mb-3">
							Ready to get started?
						</h3>
						<p className="text-warm-gray mb-6">
							Online therapy is available for NC residents.
							Coaching services available nationwide.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center px-6 py-3 bg-sage text-white font-medium rounded-full hover:bg-sage-600 transition-colors"
						>
							Schedule a Session
						</a>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Online;
