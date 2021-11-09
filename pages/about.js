import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
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

                        <p>Susan Morrow is a NC-licensed therapist with 30 years in a private practice. She has postgraduate advanced training with the Gottman Institute (Seattle, WA) and the International Centre for Excellence in Emotionally Focused Therapy (Ottawa, CA).  She is enthusiastic about helping people to develop more resilient lives and more effective relationships at home and in the world.</p>
						<p>In addition to her work with individuals, couples, families and groups, Susan has spoken at National conferences, published papers, has provided trainings, and is active in professional organizations. She is certified as a clinical supervisor for social work licensure.</p>
						<p>Susan is a lifetime member of the International Centre for Excellence in Emotionally Focused Therapy and was a founding member of the Carolina Center for EFT. She co-chairs the strategic planning committee, which is currently helping EFT therapists to proactively address societal racism. Susan also serves on the board of the Carolina Group Therapy Association. CGPA provides group therapy training for clinicians, and provides support and advocacy to make mental health services accessible and affordable to the public.</p>
						<p>Susan is a former competitive runner, hiker, visual artist, and mindfulness meditation practitioner.</p>

                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <div className="image"><img src="/images/headshot.jpg" alt="" /></div>
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

                        <a className="image"><img src="/images/photo-about-beach-2.jpg" alt="" /></a>

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

                        <a className="image"><img src="/images/photo-city-couple.jpg" alt="" /></a>

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
    </Layout>
)
