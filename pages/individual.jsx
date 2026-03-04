import Head from "next/head";
import Layout from "../components/Layout";

const Individual = () => (
	<Layout>
		<Head>
			<title>Individual Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
			<meta
				name="description"
				content="Individual therapy in Charlotte, NC for anxiety, depression, trauma, addiction, and relationship issues. Evidence-based counseling for adults and young adults with over 30 years of experience."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/header-individual-2.jpg"
					alt="Individual therapy session in Charlotte, North Carolina"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div>
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Individual Therapy
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Help with Anxiety, Depression, Family Issues,
							Addictions, Trauma, and Loss.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							Individual therapy provides a supportive platform
							for introspection and personal growth. It encourages
							the exploration and processing of life experiences,
							thereby aiding in the cultivation of a more
							integrated and secure sense of self. As this sense
							of identity solidifies, the path towards a life that
							is reflective of your inherent values becomes
							increasingly evident.
						</p>
						<p>
							Our therapeutic approach is grounded in a variety of
							evidence-based methodologies, drawing from
							Emotionally Focused Therapy, Acceptance and
							Commitment Therapy (ACT), Cognitive Behavioral
							Therapy (CBT), Depth Psychology, Family Systems,
							Trauma-Informed, and Psychodynamic approaches. This
							eclectic approach ensures that our therapeutic
							strategies are tailored to best address your
							distinct needs and circumstances.
						</p>
						<p>
							Equipped with a robust set of resources, you will be
							empowered to navigate life&apos;s twists and turns
							with a renewed sense of confidence and assurance.
						</p>
					</div>

					{/* Support Areas */}
					<div className="mt-12 p-8 bg-sand rounded-2xl">
						<h3 className="font-serif text-xl text-charcoal mb-6">
							Providing support and guidance in:
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
							{[
								"Relationship Issues",
								"Grief/Loss",
								"Depression, Anxiety, Self Esteem",
								"Addictions",
								"Parenting",
								"Family issues",
								"Life Transitions",
								"Dating issues",
								"Work\u2013life issues",
								"Crisis Management",
								"Separation/Divorce",
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
						<p className="mt-6 text-sm text-warm-gray">
							Counseling for Adults, Older Teens, Young Adults.
						</p>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Individual;
