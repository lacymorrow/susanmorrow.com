import Head from "next/head"

import Layout from '../components/Layout'
import FAQ from '../components/FAQ'

const bellaFAQs = [
	{
		question: "Is Bella in every session?",
		answer: "No. She joins many of my in-person sessions at my Charlotte office, but not all of them. If you'd like her there, or would rather she wasn't, just let me know."
	},
	{
		question: "Can Bella join online sessions?",
		answer: "Bella works from the office, so she's only part of in-person sessions."
	},
	{
		question: "Do I have to interact with her?",
		answer: "Not at all. Some clients pet her the whole hour. Others barely notice she's there."
	}
];

const Bella = () => <Layout image="https://www.susanmorrow.us/images/bella.jpg">
	<Head>
		<title>Meet Bella | Canine-Assisted Therapy in Charlotte, NC | Susan Morrow, LCSW</title>
		<meta name="description" content="Bella is the dog who sits in on many of Susan Morrow's in-person therapy sessions in Charlotte, NC. She reads the room and settles in close when clients need comfort." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Meet Bella</h1>
					<blockquote>The calmest member of my Charlotte practice.</blockquote>
				</header>
				<span className="image right stack-small"><img src="/images/bella.jpg" alt="Bella, a fluffy cream-colored dog, looking at the camera" width="900" height="1200" /></span>

				<p>Bella sits in on many of my in-person sessions. She reads the emotional energy in a room better than most people do. When a client is anxious or grieving, she notices, gets up, and settles in close to them. Often that means lying at their feet. She doesn&apos;t ask for anything.</p>
				<p>A warm, steady animal nearby helps a lot of people relax, especially in a first session or when a conversation turns hard. Therapy works best when you feel safe, and Bella is good at that part.</p>

				<h2>How Bella helps in session</h2>
				<p>She stays close when something is hard, and she gives you a calm place to rest your attention when a moment feels like too much. She takes her cues from you, so you can pet her, talk to her, or let her nap.</p>

				<h2>Bella is always optional</h2>
				<p>Not everyone wants a dog in the room, and that&apos;s fine. If dogs make you uneasy or you have allergies, tell me when you reach out and Bella will sit that session out. You don&apos;t need to explain why.</p>

				<FAQ items={bellaFAQs} />

				<p>Want to meet Bella? Reach out to book an in-person session.</p>
				<ul className="actions">
					<li><a href="#contact" className="button special">Contact Susan</a></li>
				</ul>
			</div>
		</section>
	</div>
</Layout>;

export default Bella;
