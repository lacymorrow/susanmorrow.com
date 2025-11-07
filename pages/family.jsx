import Head from "next/head"

import Layout from '../components/Layout'

const Family = () => <Layout>
	<Head>
		<title>Family Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
		<meta name="description" content="Family therapy in Charlotte, NC to strengthen family bonds, improve communication, and navigate challenges together. Support for all family members with 30+ years of experience." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Family Therapy</h1>
					<blockquote>Support through family ruptures in challenging times. <br />Re-establish and strengthen family bonds. Develop support strategies for individual family members going through personal struggles. Become a family that suports the health and wellness of all members.</blockquote>
				</header>
				<span className="image main"><img src="/images/header-family-2.jpg" alt="Family therapy session helping families reconnect and build stronger relationships" /></span>
				<p>With 30 years of experience as a licensed therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
				<p>Family therapy is about helping everyone in the family feel heard, understood, and supported. Instead of focusing on just one person, it looks at how the whole family works together. It gives you a safe space to talk through challenges, clear up misunderstandings, and strengthen your connections with one another.</p>
				<p>Along the way, families learn helpful skills—like how to communicate better, solve problems together, and handle stress or big life changes as a team. These tools don’t just help right now; they prepare your family to face the future with more confidence and unity.</p>
				<p>In the end, family therapy is about building a stronger, healthier home where everyone can thrive.</p>
				<p>We now know how to build and protect close, healthy, loving relationships.</p>
			</div>
		</section>
	</div>
</Layout>;

export default Family;
