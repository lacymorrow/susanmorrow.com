import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>About Susan Morrow</title>
            <meta name="description" content="About Susan Morrow, MSW, LCSW" />
        </Head>

        <div>
            <BannerLanding />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>30 yrs in EFT-based counseling</h2>
                        </header>
                        <p>I offer individual therapy, couples counseling, pre-marital counseling, family therapy, and individual/couples distance coaching. My work is informed by depth psychology, strategic and family systems therapy, emotionally focused and attachment science, positive psychology, and mindfulness-based cognitive therapy approaches.</p>
                        <p>My approach provides you the support to help you to establish goals and actions for positive outcomes for your life and your relationships. I use the most effective, research-based methods available.</p>
                        <p>With over 30 years in private practice, I have a solid base of experience and advanced professional education to provide well regarded psychotherapy, consultation, coaching, and training services to individuals, couples, families. I also offer professional supervision.</p>
                        <p>If you travel extensively, live, or work outside of the Charlotte area, I am available for remote individual and couples coaching services worldwide.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Education/Training</h3>
                                </header>
                                <ul>
                                	<li>University of Georgia, MSW</li>
                                	<li>Post graduate Extenship in Family Therapy, United Family Services</li>
                                	<li>Gottman Institute</li>
                                	<li>International Center for Excellence in Emotionally Focused Therapy</li>
                                	<li>Robbins-Maddanes Coaching Training</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Professional Affiliations</h3>
                                </header>
                                <ul>
                                	<li>Founding board member, Carolinas Center for Emotionally Focused Therapy</li>
                                	<li>Past President, South Central Piedmont Chapter of Marriage and Family Therapists</li>
                                	<li>Lifetime member, International Centre for Excellence in Emotion Focused Couples Therapy</li>
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
                        <Link href="/generic">
                            <a className="image"><img src="/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
