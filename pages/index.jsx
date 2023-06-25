
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
						<p>Serving the greater NC area. ideo meetings on your schedule.</p>
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
								<img src="/images/headshot-2023.png" alt="Image of Susan Morrow" />
							</span>
						</div>
						<div className="8u 12u$(small)">
							<header className="major">
								<h2>Susan Morrow, MSW, LCSW</h2>
							</header>
							<h4>Professional therapy for you, and your most important relationships</h4>
							<p>Embark on a transformative journey with Susan, a highly trained and experienced therapist. With 30 years of expertise and a commitment to successful outcomes, she guides individuals, couples, and families through life's challenges. Susan seamlessly combines mindfulness-based CBT, Emotionally Focused Therapy, Gottman Method Marriage Counseling, and other proven techniques. In a compassionate and collaborative environment, she helps clients break free from negative patterns, foster deep connections, overcome obstacles, and unlock full potential. Build a brighter future with Susan as your guide.</p>

							<span className="image right">
								<img src="/images/iceeft.png" alt="International Centre for Emotionally Focused Therapy Logo" />
								<sub><i>International Centre for Emotionally Focused Therapy</i></sub>
							</span>

							<ul className="actions flex">
								<li><Link href="/about" className="button next">About Susan</Link></li>
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

	</>
</Layout>;

export default Index;
