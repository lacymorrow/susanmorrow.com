import Head from "next/head"

import Layout from '../components/Layout'

const Family = () => <Layout>
	<Head>
		<title>Family Therapy Charlotte NC | Susan Morrow, MSW, LCSW</title>
		<meta name="description" content="Family therapy in Charlotte, NC. Strengthen bonds, improve communication, and navigate challenges together with 30+ years experience." />
	</Head>

	<div id="main" className="alt">
		<section id="one">
			<div className="inner">
				<header className="major">
					<h1>Family Therapy</h1>
					<blockquote>Support through family ruptures in challenging times. <br />Re-establish and strengthen family bonds. Develop support strategies for individual family members going through personal struggles. Become a family that suports the health and wellness of all members.</blockquote>
				</header>
				<span className="image main"><img src="/images/header-family-2.jpg" alt="Family therapy session helping families reconnect and build stronger relationships" width="1200" height="600" /></span>
				<p>With 30 years of experience as a licensed therapist, I have the training and a practical road map to lead you from stuck places of disconnection into a secure, loving bond. We will work together to build a sustainable bond, to help you to cope in this challenging world.</p>
				<p>Family therapy is about helping everyone in the family feel heard, understood, and supported. Instead of focusing on just one person, it looks at how the whole family works together. It gives you a safe space to talk through challenges, clear up misunderstandings, and strengthen your connections with one another.</p>
				<p>Along the way, families learn helpful skills—like how to communicate better, solve problems together, and handle stress or big life changes as a team. These tools don’t just help right now; they prepare your family to face the future with more confidence and unity.</p>
				<p>In the end, family therapy is about building a stronger, healthier home where everyone can thrive.</p>
				<p>We now know how to build and protect close, healthy, loving relationships.</p>
				<p>Taking that first step can feel daunting, but reaching out for an initial consultation is simply an opportunity to ask questions, share what is happening at home, and get a sense of whether we are a good fit. You do not need to have everything figured out before calling—many people come in feeling unsure of where to begin, and that is perfectly okay. I am here to help you find a way forward together.</p>
			</div>
		</section>
	</div>
</Layout>;

export default Family;
