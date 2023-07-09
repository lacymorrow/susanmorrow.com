import Head from "next/head"
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

const About = () => <Layout>
	<Head>
		<title>About Susan Morrow</title>
		<meta name="description" content="With over 30 years in private practice, Susan Morrow has a solid base of experience and advanced professional education to provide well regarded psychotherapy, consultation, coaching, and training services to individuals, couples, families." />
	</Head>

	<div>
		<BannerLanding />

		<div id="main">
			<section id="one">
				<div className="inner">
					<header className="major">
						<h2>30 Years in Private Practice</h2>
					</header>

					<p>Susan Morrow is a NC-licensed clinical social worker, with extensive experience and training in evidence-based models in individual, couples therapy, and marriage and family therapy. She has advanced level training with both the Gottman Institute and with the International Centre for Excellence in Emotionally Focused Therapy, and had supervision with Dr. Sue Johnson, the founder of Emotionally Focused Therapy. She has assisted at Hold Me Tight weekends for couples in San Francisco, including a couples weekend for 100 couples!</p>
					<p>Susan is an active member in professional organizations devoted to continuing education for therapists. She currently serves on the board of the Carolinas Group Therapy Society. CGPS provides clinical training for therapists, supports and advocates for accessible and affordable mental health services for all. CGPS actively addresses inclusion and diversity issues, such as racism. Susan was a founding member of the Carolinas Center for Emotionally Focused Therapy, served many years on the board, and co-chaired their strategic planning committee.
						<br />Susan is a certified supervisor for therapists pursuing clinical social work licensure in NC.</p>
					<p>Susan has worked in in-patient and out-patient agency clinical settings, has delivered parenting programs for families of at-risk teenagers, and has provided counseling integrating psychotherapy with spirituality, from a Jungian perspective She has spoken at local and national conferences on mental health and wellness topics, and published papers on the connection between biology and psychology.</p>
					<p>Susan is a former competitive runner, mindfulness meditation practitioner, visual artist, and nature lover.  She brings compassion, insight and humor into the therapy journey.</p>

				</div>
			</section>
			<section id="two" className="spotlights">
				<section>
					<div className="image"><Image src="/images/headshot-glasses-ai.png" alt="" /></div>
					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Education/Training</h3>
							</header>
							<ul>
								<li>East Carolina University BS School of Health and Human Performance</li>
								<li>University of Georgia MSW School of Social Work</li>
								<li>Post Graduate Externship in Family Therapy</li>
								<li>The Gottman Institute – Advanced level training in Marital Therapy</li>
								<li>The International Centre for Excellence in Emotionally Focused Therapy – Advanced level training in Couples Therapy. </li>
								<li>Robbins-Madannes Coaching Institute – Coach Training</li>
								<li>Supervision in Depth Psychology</li>
								<li>ACT – Acceptance and Commitment Therapy Training</li>
							</ul>
						</div>
					</div>
				</section>
				<section>

					<a className="image"><Image src="/images/photo-about-beach-2.jpg" alt="" /></a>

					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Professional Affiliations</h3>
							</header>
							<ul>
								<li>Lifetime member, International Centre for Excellence in Emotion Focused Couples Therapy</li>
								<li>Founding board member, Carolinas Center for Emotionally Focused Therapy</li>
								<li>Past President, South Central Piedmont Chapter of Marriage and Family Therapists</li>
								<li>National Association of Social Workers</li>
								<li>Professional Member, Mental Health America</li>
								<li>Member of the Academy of Certified Social Workers</li>
								<li>NC Training Supervisor for Clinical Social Work Licensure</li>
								<li>Charlotte Friends of Jung, former board member</li>
							</ul>
						</div>
					</div>
				</section>
				<section>

					<a className="image"><Image src="/images/photo-city-couple.jpg" alt="" /></a>

					<div className="content">
						<div className="inner">
							<header className="major">
								<h3>Publications</h3>
							</header>
							<ul>
								<li>“The Biology of Behavior” in <i>Behavioral Medicine: A Social Worker’s Guide</i> John Wodarski, Ed.</li>
								<li><i>The Integrated Behavioral Health Service Delivery System Model</i> with Wodarski, J.S., Wodarski, L.A., Nixon, S.C., and Mackie, C. (1991)</li>
							</ul>
						</div>
					</div>

				</section>
			</section>
		</div>

	</div>
</Layout>;

export default About;
