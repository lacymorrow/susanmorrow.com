import Link from 'next/link'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'

/*
Life Strategies, Successful Transitions, Navigating Relationships, Help with Anxiety, Depression, Family Issues, Addictions, Trauma, and Loss.
Goal-focused Coping Tools. Individual Therapy. Life Coaching.

*/

export default () => (
    <Layout>
	    <Callout />
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/images/block-individual.jpg')`}}>
                        <header className="major">
                            <h3>Individual</h3>
                            <p>Life strategies. Relationships. Stress coping tools.</p>
                        </header>
                        <Link href="/individual"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-couples-2.jpg')`}}>
                        <header className="major">
                            <h3>Couples</h3>
                            <p>Develop a relationship that lasts through difficult times.</p>
                        </header>
                        <Link href="/couples"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-families-2.jpg')`}}>
                        <header className="major">
                            <h3>Family</h3>
                            <p>Online Family Group Therapy during the Covid crisis.</p>
                        </header>
                        <Link href="/family"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-video.jpg')`}}>
                        <header className="major">
                            <h3>Online Therapy</h3>
                            <p>Distance is no issue. Virtual meetings are available.</p>
                        </header>
                        <Link href="/video"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Meet Susan</h2>
                        </header>
                        <p>Susan uses EFT-rooted therapy with over 30 years in private practice. She has the experience, tools, and processes to get results. Susan provides services to individuals, couples, families, and groups. Cope with today's challenges, build a better future, and show up in each moment in your relationships.</p>
                        <ul className="actions">
                            <li><Link href="/about"><a className="button next">About Susan</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
