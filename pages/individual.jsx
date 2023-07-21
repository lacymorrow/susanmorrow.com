import Head from "next/head"

import Layout from '../components/Layout'

const Individual = () => <Layout>
	<Head>
		<title>Individual Therapy Charlotte NC</title>
		<meta name="description" content="Counseling for adults and young adults" />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Individual Therapy</h1>
					<blockquote>Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.</blockquote>
				</header>
				<span className="image main"><img src="/images/header-individual-2.jpg" alt="" /></span>

				<p>Individual therapy provides a supportive platform for introspection and personal growth. It encourages the exploration and processing of life experiences, thereby aiding in the cultivation of a more integrated and secure sense of self. As this sense of identity solidifies, the path towards a life that is reflective of your inherent values becomes increasingly evident.</p>
				<p>Our therapeutic approach is grounded in a variety of evidence-based methodologies, drawing from Emotionally Focused Therapy, Acceptance and Commitment Therapy (ACT), Cognitive Behavioral Therapy (CBT), Depth Psychology, Family Systems, Trauma-Informed, and Psychodynamic approaches. This eclectic approach ensures that our therapeutic strategies are tailored to best address your distinct needs and circumstances.</p>
				<p>Equipped with a robust set of resources, you will be empowered to navigate life&apos;s twists and turns with a renewed sense of confidence and assurance.</p>
				<h4>Providing support and guidance in:</h4>
				<div className="row">
					<div className="6u 12u(small)">
						<ul>
							<li>Relationship Issues</li>
							<li>Depression, Anxiety, Self Esteem</li>
							<li>Parenting</li>
							<li>Life Transitions</li>
							<li>Work–life issues</li>
							<li>Separation/Divorce</li>
						</ul>
					</div>
					<div className="6u 12u(small)">
						<ul>
							<li>Grief/Loss</li>
							<li>Addictions</li>
							<li>Family issues</li>
							<li>Dating issues</li>
							<li>Crisis Management</li>
						</ul>
					</div>
				</div>
				<p>Counseling for Adults, Older Teens, Young Adults.</p>
			</div>
		</section>
	</div>
</Layout>;

export default Individual;
