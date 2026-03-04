import Head from "next/head";
import Layout from "../components/Layout";

const Family = () => (
	<Layout>
		<Head>
			<title>Family Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
			<meta
				name="description"
				content="Family therapy in Charlotte, NC to strengthen family bonds, improve communication, and navigate challenges together. Support for all family members with 30+ years of experience."
			/>
		</Head>

		<div className="pt-20">
			{/* Hero */}
			<section className="relative h-[40vh] min-h-[280px] overflow-hidden">
				<img
					src="/images/header-family-2.jpg"
					alt="Family therapy session helping families reconnect and build stronger relationships"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-charcoal/50" />
				<div className="relative h-full flex items-center justify-center text-center px-6">
					<div className="max-w-3xl">
						<h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
							Family Therapy
						</h1>
						<p className="text-white/80 text-lg max-w-2xl mx-auto">
							Support through family ruptures in challenging
							times. Re-establish and strengthen family bonds.
						</p>
					</div>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 md:py-24 px-6">
				<div className="max-w-3xl mx-auto">
					{/* Callout */}
					<div className="mb-12 p-8 bg-sage-50 rounded-2xl border border-sage-100">
						<p className="text-warm-gray-700 leading-relaxed italic">
							Develop support strategies for individual family
							members going through personal struggles. Become a
							family that supports the health and wellness of all
							members.
						</p>
					</div>

					<div className="space-y-6 text-warm-gray leading-relaxed">
						<p>
							With 30 years of experience as a licensed therapist,
							I have the training and a practical road map to lead
							you from stuck places of disconnection into a
							secure, loving bond. We will work together to build
							a sustainable bond, to help you to cope in this
							challenging world.
						</p>
						<p>
							Family therapy is about helping everyone in the
							family feel heard, understood, and supported.
							Instead of focusing on just one person, it looks at
							how the whole family works together. It gives you a
							safe space to talk through challenges, clear up
							misunderstandings, and strengthen your connections
							with one another.
						</p>
						<p>
							Along the way, families learn helpful skills &mdash;
							like how to communicate better, solve problems
							together, and handle stress or big life changes as a
							team. These tools don&apos;t just help right now;
							they prepare your family to face the future with
							more confidence and unity.
						</p>
						<p>
							In the end, family therapy is about building a
							stronger, healthier home where everyone can thrive.
						</p>
						<p>
							We now know how to build and protect close, healthy,
							loving relationships.
						</p>
					</div>
				</div>
			</section>
		</div>
	</Layout>
);

export default Family;
