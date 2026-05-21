import Head from "next/head"
import Image from 'next/image'

import Layout from '../components/Layout'

const Couples = () => <Layout>
	<Head>
		<title>Couples Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
		<meta name="description" content="Couples therapy and marriage counseling in Charlotte, NC. Emotionally Focused Therapy and Gottman Method to restore intimacy, rebuild trust, and improve communication." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Couples Therapy</h1>
					<blockquote>Develop a lasting, secure bond that provides joy through life&apos;s triumphs, and shelter through tough times. Help for deeper communication, intimacy, marital crisis, and marital enrichment. My 30 years experience working with couples, advanced training in both attachment-based couple therapy - Emotionally Focused Therapy (EFT) with the Gottman Institute, puts your relationships in safe hands.</blockquote>
				</header>
				<span className="image main"><Image src="/images/header-couples-2.jpg" alt="Couples therapy session helping partners reconnect and improve communication" width={1200} height={600} priority sizes="(max-width: 736px) 100vw, 75vw" style={{ width: '100%', height: 'auto' }} /></span>
				<p>Even the most distressed couples can restore their love relationships to renewed intimacy and marital satisfaction. I use the most highly regarded, evidence–based couples therapy approach available in North America. Based on 40 years of research by esteemed marriage expert John Gottman, PhD (The Gottman Institute, University of Washington) and the couples therapy processes of Emotionally–Focused Therapy developed by eminent attachment science researcher, Sue Johnson, PhD.</p>
				<p>With many years of experience as a couples therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
				<p>Most marital distress comes from disconnection, communication problems, physical intimacy issues, broken trust, old hurts, stem from fissures in the couples basic attachment bond. I have a road map to take you out of these stuck places and into a more responsive, attuned, engaged relationship.</p>
				<p>We now know how to build and protect close, healthy, loving relationships. Emotionally Focused Couples Therapy provides practical, focused navigation to lead you out of these stuck places of disconnection into a secure, loving bond. Our primary attachment bonds are crucial to our survival as a species. If you are ready to invest in your relationship, I invite you to reach out and schedule a consultation today.</p>
			</div>
		</section>
	</div>
</Layout>;

export default Couples;
