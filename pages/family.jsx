import Head from "next/head"

import Layout from '../components/Layout'

const Family = () => <Layout>
	<Head>
		<title>Family Therapy Charlotte NC</title>
		<meta name="description" content="Counseling for adults and young adults" />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Family Therapy</h1>
					<blockquote>Support through family ruptures in challenging times. <br />Re-establish and strengthen family bonds. Develop support strategies for individual family members going through personal struggles. Become a family that suports the health and wellness of all members.</blockquote>
				</header>
				<span className="image main"><img src="/images/header-family-2.jpg" alt="" /></span>
				<p>Build Stronger family bonds. Provide support for individual family members while going through personal struggles. Become a family that suports the health and wellness of all members.</p>
				<p>With 30 years of experience as a licensed therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
				<p>Most marital distress comes from disconnection, communication problems, physical intimacy issues, broken trust, old hurts, stem from fissures in basic attachment bonds. I have a road map to take you out of these stuck places and into a more responsive, attuned, engaged relationship.</p>
				<p>We now know how to build and protect a close, healthy, loving relationships.</p>
			</div>
		</section>
	</div>
</Layout>;

export default Family;
