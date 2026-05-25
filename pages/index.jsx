
/*
Life Strategies, Successful Transitions, Navigating Relationships, Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.
Goal-focused Coping Tools. Individual Therapy. Life Coaching.
*/

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const homepageFAQs = [
	{
		question: "What should I expect in my first session?",
		answer: "Your first session is a conversation, not an evaluation. We spend time getting to know each other, talk through what brought you in, and start identifying what you want to work on. There is no homework or pressure—just space to share at your own pace and decide together whether we are a good fit."
	},
	{
		question: "How long are therapy sessions?",
		answer: "Individual sessions are typically 50 minutes. Couples and family sessions run 60 to 75 minutes, since more people in the room means more ground to cover. Longer intensive sessions can be arranged when the work calls for it."
	},
	{
		question: "Do you accept insurance?",
		answer: "I am an out-of-network provider and do not bill insurance directly. Many clients submit a superbill (which I provide) to their insurance for partial reimbursement under out-of-network mental health benefits. I recommend calling your insurance company to ask about your out-of-network outpatient mental health coverage before we begin."
	},
	{
		question: "What are your fees?",
		answer: "Fees vary by session type and length. Please reach out by phone or email and I will share current rates and discuss what makes sense for your situation."
	},
	{
		question: "How do I schedule an appointment?",
		answer: "The easiest way to get started is to call (704) 332-5153 or email susan@susanmorrow.us. We will set up a brief phone consultation so you can ask questions and we can find a session time that works for you."
	},
	{
		question: "Do you offer telehealth or online sessions?",
		answer: "Yes. I see clients both in person at my Charlotte office and over secure, HIPAA-compliant video. Telehealth is available to anyone living in North Carolina. Many clients mix in-person and online sessions depending on their schedule."
	}
];

const Index = () => <Layout>
	<>
		<Banner />

		<div id="main">
			<section id="one" className="tiles">
				<article style={{ backgroundImage: `url('/images/block-individual-3.jpg')` }}>
					<header className="major">
						<h3>Individual Therapy</h3>
						<p>Help for Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.</p>
					</header>
					<Link href="/individual" className="link primary"><span className="sr-only">Learn more about Individual Therapy</span></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-couples-2.jpg')` }}>
					<header className="major">
						<h3>Couples Therapy</h3>
						<p>Improved Communication, Intimacy, Pre-marital Counseling</p>
					</header>
					<Link href="/couples" className="link primary"><span className="sr-only">Learn more about Couples Therapy</span></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-families.jpg')` }}>
					<header className="major">
						<h3>Family Therapy</h3>
						<p>Group support for family resilience through challenges</p>
					</header>
					<Link href="/family" className="link primary"><span className="sr-only">Learn more about Family Therapy</span></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-video.jpg')` }}>
					<header className="major">
						<h3>Connect remotely over video</h3>
						<p>Serving the greater NC area. Telehealth meetings on your schedule.</p>
					</header>
					<Link href="/online" className="link primary"><span className="sr-only">Learn more about Online Therapy</span></Link>
				</article>
			</section>

			<Testimonials />

			<section id="two">
				<div className="inner">
					<div className="row">
						<div className="4u 12u$(small)">
							<span className="image fit">
								<img src="/images/headshot-2023-chair.jpg" alt="Susan Morrow, licensed clinical social worker in Charlotte NC" width="800" height="968" />
							</span>
						</div>
						<div className="8u 12u$(small)">
							<header className="major">
								<h2>Susan Morrow, MSW, LCSW</h2>
							</header>
							<h2>Professional therapy for you, and your most important relationships</h2>
							<p>Susan is a seasoned therapist who draws from an extensive background in evidence-based therapies and 30 years of clinical experience working with individuals and couples like you. Her model provides a strength-based, personalized approach to help you to:</p>
							<div style={{ display: 'flex' }}>
								<div>
									<ul>
										<li>Break free from negative patterns</li>
										<li>Unlock your potential with effective coping skills</li>
										<li>Build relationships that reduce - rather than create - stress</li>
									</ul>

									<ul className="actions flex">
										<li><Link href="/about" className="button next">About Susan</Link></li>
										<li>
											<a target="_blank" rel="noopener noreferrer" href="https://www.psychologytoday.com/profile/51938" className="sx-verified-seal button special flex align-center">
												<img style={{ width: 'auto', maxWidth: '155px' }} src="/images/logo-psychology-today.svg" alt="Susan Morrow on Psychology Today" width="155" height="50" />
											</a>
										</li>
									</ul>
								</div>
								<span className="image right" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2rem' }}>

									<a href="https://www.gottman.com/" target="_blank" rel="noopener noreferrer" style={{ border: 'none' }}><img alt="Gottman Institute approved therapist badge" src="https://gottmanreferralnetwork.com/grn-badge-approved.png" style={{ width: '150px' }} width="150" height="150" /></a>
									<a href="https://iceeft.com/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: 'column', alignItems: 'center', border: 'none' }}>
										<img src="/images/iceeft.png" alt="ICEEFT certified therapist" style={{ width: '150px' }} width="150" height="150" loading="lazy" />
										<sub><i>International Centre for Emotionally Focused Therapy</i></sub>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="three">
				<div className="inner">
					<FAQ items={homepageFAQs} />
				</div>
			</section>
		</div>

	</>
</Layout>;

export default Index;
