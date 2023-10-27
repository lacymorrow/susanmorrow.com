
/*
Life Strategies, Successful Transitions, Navigating Relationships, Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.
Goal-focused Coping Tools. Individual Therapy. Life Coaching.
*/

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials';

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
					<Link href="/individual" className="link primary"></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-couples-2.jpg')` }}>
					<header className="major">
						<h3>Couples Therapy</h3>
						<p>Improved Communication, Intimacy, Pre-marital Counseling</p>
					</header>
					<Link href="/couples" className="link primary"></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-families.jpg')` }}>
					<header className="major">
						<h3>Family Therapy</h3>
						<p>Group support for family resilience through challenges</p>
					</header>
					<Link href="/family" className="link primary"></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-video.jpg')` }}>
					<header className="major">
						<h3>Connect remotely over video</h3>
						<p>Serving the greater NC area. Telehealth meetings on your schedule.</p>
					</header>
					<Link href="/online" className="link primary"></Link>
				</article>
			</section>

			<Testimonials />

			<section id="two">
				<div className="inner">
					<div className="row">
						<div className="4u 12u$(small)">
							<span className="image fit">
								<img src="/images/headshot-2023-chair.jpg" alt="Image of Susan Morrow" />
							</span>
						</div>
						<div className="8u 12u$(small)">
							<header className="major">
								<h2>Susan Morrow, MSW, LCSW</h2>
							</header>
							<h4>Professional therapy for you, and your most important relationships</h4>
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
											<a target="_blank" rel="noreferrer" href="https://www.psychologytoday.com/profile/51938" className="sx-verified-seal button special flex align-center">
												<img style={{ width: 'auto', maxWidth: '155px' }} src="/images/logo-psychology-today.svg" alt="Psychology Today Logo" />
											</a>
										</li>
									</ul>
								</div>
								<span className="image right" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2rem' }}>

									<a href="https://gottmanreferralnetwork.com/therapists/susan-morrow" style={{ border: 'none' }}><img alt="Susan Morrow's profile on the Gottman Referral Network" src="https://gottmanreferralnetwork.com/grn-badge-approved.png" style={{ width: '150px' }} /></a>
									<a href="https://iceeft.com/" style={{ display: "flex", flexDirection: 'column', alignItems: 'center', border: 'none' }}>
										<img src="/images/iceeft.png" alt="International Centre for Emotionally Focused Therapy Logo" style={{ width: '150px' }} />
										<sub><i>International Centre for Emotionally Focused Therapy</i></sub>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>

	</>
</Layout>;

export default Index;
