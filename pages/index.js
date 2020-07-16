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
                    <article style={{backgroundImage: `url('/images/block-individual-2.jpg')`}}>
                        <header className="major">
                            <h3>Individual Therapy</h3>
                            <p>Life strategies. Relationships. Stress coping tools.</p>
                        </header>
                        <Link href="/individual"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-couples-2.jpg')`}}>
                        <header className="major">
                            <h3>Couples Therapy</h3>
                            <p>Develop a relationship that lasts through difficult times.</p>
                        </header>
                        <Link href="/couples"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-families-2.jpg')`}}>
                        <header className="major">
                            <h3>Family Therapy</h3>
                            <p>Online Family Group Therapy during the Covid crisis.</p>
                        </header>
                        <Link href="/family"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/images/block-video.jpg')`}}>
                        <header className="major">
                            <h3>Online Therapy</h3>
                            <p>Virtual meetings are available.</p>
                        </header>
                        <Link href="/online"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                    	<div className="row">
                    	    <div className="6u 12u$(small)">
                    	        <span className="image fit"><img src="/images/headshot.jpg" alt="Image of Susan Morrow" /></span>
                    	    </div>
                    	    <div className="6u 12u$(small)">
                    	        <header className="major">
                    	            <h2>Meet Susan Morrow</h2>
                    	        </header>
                    	        <p>Cope with today's challenges, build a better future, and be present for each moment in your relationships.</p>
                    	        <p>Susan Morrow is a calming, comforting presence with over 25 years experience in private practice. She received post-graduate, advanced training from well-regarded training institutes, in the most relevant therapy approaches that will give you the results you need. She will collaborate with you to design a plan of actions that will serve your best life. Susan has worked in a variety of clinical settings, offering services to individuals, couples, families and groups.</p>
                    	        <span className="image right"><img src="/images/iceeft.png" alt="International Centre for Emotionally Focused Therapy Logo" /></span>
                    	        <p>Susan is a lifetime member of the International Centre for Emotionally Focused Therapy, and is currently co-chairing a Stategic Planning/ Diversity Committee for the Carolinas region, helping the Carolinas Center to pro-actively address societal racism.</p>


                    	        <ul className="actions">
                    	            <li><Link href="/about"><a className="button next">About Susan</a></Link></li>
                    	        </ul>
                    	    </div>
                    	</div>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
