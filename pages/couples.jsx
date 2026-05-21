import Head from "next/head"
import Image from 'next/image'

import Layout from '../components/Layout'
import FAQ from '../components/FAQ'

const couplesFAQs = [
	{
		question: "How long does couples therapy typically take?",
		answer: "Most couples I work with see meaningful change within 12 to 20 weekly sessions, though every relationship is different. Some couples come in for a focused tune-up over a few months; others stay longer to work through deeper patterns. We talk about pace and goals openly so you always know where things stand."
	},
	{
		question: "What if my partner doesn't want to come to therapy?",
		answer: "That happens more often than you might think. We can start with individual sessions focused on your relationship and the changes you want to see. Sometimes that shifts the dynamic enough that a hesitant partner becomes curious about joining. Even when they never come in, individual work on the relationship can still make a real difference."
	},
	{
		question: "What is Emotionally Focused Therapy (EFT)?",
		answer: "EFT is an evidence-based couples therapy developed by Dr. Sue Johnson, grounded in attachment science. It helps couples recognize the negative cycles that keep them stuck, understand the deeper emotions underneath their reactions, and build the kind of secure connection that protects a relationship through stress and conflict. I have advanced training and assisted at Hold Me Tight weekends led by Dr. Johnson."
	},
	{
		question: "What is the Gottman Method?",
		answer: "The Gottman Method is built on more than 40 years of research by Drs. John and Julie Gottman on what makes relationships succeed or fail. It gives couples practical tools for managing conflict, deepening friendship, and turning toward each other instead of away. I draw on advanced Gottman Institute training alongside EFT to match the approach to each couple."
	}
];

const Couples = () => <Layout>
	<Head>
		<title>Couples Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
		<meta name="description" content="Couples therapy and marriage counseling in Charlotte, NC. Emotionally Focused Therapy and Gottman Method to restore intimacy, rebuild trust, and improve communication." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Couples Therapy in Charlotte, NC</h1>
					<blockquote>Develop a lasting, secure bond that provides joy through life&apos;s triumphs, and shelter through tough times. Help for deeper communication, intimacy, marital crisis, and marital enrichment. My 30 years experience working with couples, advanced training in both attachment-based couple therapy - Emotionally Focused Therapy (EFT) with the Gottman Institute, puts your relationships in safe hands.</blockquote>
				</header>
				<span className="image main"><Image src="/images/header-couples-2.jpg" alt="Couples therapy session helping partners reconnect and improve communication" width={1440} height={433} priority sizes="(max-width: 736px) 100vw, 75vw" style={{ width: '100%', height: 'auto' }} /></span>
				<p>Even the most distressed couples can restore their love relationships to renewed intimacy and marital satisfaction. I use the most highly regarded, evidence–based couples therapy approach available in North America. Based on 40 years of research by esteemed marriage expert John Gottman, PhD (The Gottman Institute, University of Washington) and the couples therapy processes of Emotionally–Focused Therapy developed by eminent attachment science researcher, Sue Johnson, PhD.</p>
				<p>With many years of experience as a couples therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
				<p>Most marital distress comes from disconnection, communication problems, physical intimacy issues, broken trust, old hurts, stem from fissures in the couples basic attachment bond. I have a road map to take you out of these stuck places and into a more responsive, attuned, engaged relationship.</p>
				<p>We now know how to build and protect close, healthy, loving relationships. Emotionally Focused Couples Therapy provides practical, focused navigation to lead you out of these stuck places of disconnection into a secure, loving bond. Our primary attachment bonds are crucial to our survival as a species. If you are ready to invest in your relationship, I invite you to reach out and schedule a consultation today.</p>

				<FAQ items={couplesFAQs} />
			</div>
		</section>
	</div>
</Layout>;

export default Couples;
