
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
	<div>
		<Banner />

		<div id="main">
			<section id="one" className="tiles">
				<article style={{ backgroundImage: `url('/images/block-individual-3.jpg')` }}>
					<header className="major">
						<h3>Individual Therapy</h3>
						<p>Help for Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.</p>
					</header>
					<Link href="/individual"><a className="link primary"></a></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-couples-2.jpg')` }}>
					<header className="major">
						<h3>Couples Therapy</h3>
						<p>Improved Communication, Intimacy, Pre-marital Counseling</p>
					</header>
					<Link href="/couples"><a className="link primary"></a></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-families.jpg')` }}>
					<header className="major">
						<h3>Family Therapy</h3>
						<p>Group support for family resilience through challenges</p>
					</header>
					<Link href="/family"><a className="link primary"></a></Link>
				</article>
				<article style={{ backgroundImage: `url('/images/block-video.jpg')` }}>
					<header className="major">
						<h3>Telehealth Counseling</h3>
						<p>Serving the greater NC area. ideo meetings on your schedule.</p>
					</header>
					<Link href="/online"><a className="link primary"></a></Link>
				</article>
			</section>

			<Testimonials />

			<section id="two">
				<div className="inner">
					<div className="row">
						<div className="4u 12u$(small)">
							<span className="image fit">
								<img src="/images/headshot-glasses-ai.png" alt="Image of Susan Morrow" />
							</span>
						</div>
						<div className="8u 12u$(small)">
							<header className="major">
								<h2>Meet Susan Morrow</h2>
							</header>
							<h4>Are you seeking counseling, and looking for a therapist with solid experience?</h4>
							<p>I have 30 years of experience working with individuals, couples and families. If therapy is new for you, the most important factor in successful outcomes is having a “good fit” with your therapist. Seek out a therapist with a full reservoir of compassion, who can help you feel safe, empowered, and respected. My focus is on these essentials to good therapy, combined with the processes and master level clinical skills. It is my greatest privilege to work with the clients I see. I hope to meet you soon!</p>

							<span className="image right">
								<img src="/images/iceeft.png" alt="International Centre for Emotionally Focused Therapy Logo" />
								<sub><i>International Centre for Emotionally Focused Therapy</i></sub>
							</span>

							<ul className="actions flex">
								<li><Link href="/about"><a className="button next">About Susan</a></Link></li>
								<li>
									<a target="_blank" rel="noreferrer" href="https://www.psychologytoday.com/profile/51938" className="sx-verified-seal button special flex align-center">
										<img style={{ width: 'auto', maxWidth: '155px' }} src="/images/logo-psychology-today.svg" alt="Psychology Today Logo" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>

	</div>
</Layout>;

export default Index;
