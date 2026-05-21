import Head from "next/head"

import Layout from '../components/Layout'
import FAQ from '../components/FAQ'

const individualFAQs = [
	{
		question: "How do I know if I need therapy?",
		answer: "You do not need to be in crisis to benefit from therapy. If you find yourself stuck in patterns you cannot shift on your own, weighed down by anxiety, grief, or self-doubt, or navigating a transition that feels bigger than you expected, that is often a good time to reach out. A short conversation can help you decide whether it feels like the right step."
	},
	{
		question: "What types of therapy do you offer?",
		answer: "I draw on several evidence-based approaches and match them to what each person is working through. These include Emotionally Focused Therapy, Acceptance and Commitment Therapy (ACT), Cognitive Behavioral Therapy (CBT), depth psychology, family systems, trauma-informed, and psychodynamic approaches. The blend looks different for each client."
	},
	{
		question: "How often should I come to therapy?",
		answer: "Most clients start out weekly, which gives the work momentum and helps us build trust quickly. As things settle and you have the tools you need, sessions often move to every other week and eventually to a maintenance rhythm. We adjust the cadence together based on what is actually helpful for you."
	}
];

const Individual = () => <Layout>
	<Head>
		<title>Individual Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
		<meta name="description" content="Individual therapy in Charlotte, NC for anxiety, depression, trauma, and relationship issues. Evidence-based counseling with 30+ years experience." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Individual Therapy</h1>
					<blockquote>Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.</blockquote>
				</header>
				<span className="image main"><img src="/images/header-individual-2.jpg" alt="Individual therapy session in Charlotte, North Carolina" width="1200" height="600" /></span>

				<p>Individual therapy provides a supportive platform for introspection and personal growth. It encourages the exploration and processing of life experiences, thereby aiding in the cultivation of a more integrated and secure sense of self. As this sense of identity solidifies, the path towards a life that is reflective of your inherent values becomes increasingly evident.</p>
				<p>Our therapeutic approach is grounded in a variety of evidence-based methodologies, drawing from Emotionally Focused Therapy, Acceptance and Commitment Therapy (ACT), Cognitive Behavioral Therapy (CBT), Depth Psychology, Family Systems, Trauma-Informed, and Psychodynamic approaches. This eclectic approach ensures that our therapeutic strategies are tailored to best address your distinct needs and circumstances.</p>
				<p>Equipped with a robust set of resources, you will be empowered to navigate life&apos;s twists and turns with a renewed sense of confidence and assurance.</p>
				<h2>Providing support and guidance in:</h2>
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
				<p>Your first session is a collaborative conversation, not an evaluation. We spend time getting to know one another, exploring what has brought you to therapy, and establishing the kind of trust that makes meaningful work possible. Together we identify your goals and begin shaping a plan that is personalized to your specific circumstances—one that honors both your strengths and the areas where you are seeking support.</p>
				<p>Progress unfolds at a pace that feels right for you. Using a range of evidence-based approaches, we address the patterns and experiences that may be holding you back, building practical skills alongside deeper self-understanding. Throughout the process you have a consistent, supportive presence to help you stay grounded and move forward with greater clarity and confidence.</p>

				<FAQ items={individualFAQs} />
			</div>
		</section>
	</div>
</Layout>;

export default Individual;
