import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Individual</h3>
                            <p>Life strategies. Relationships. Coping tools for stress.</p>
                        </header>
                        <Link href="/individual"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Couples</h3>
                            <p>Develop a relationship that lasts through difficult times.</p>
                        </header>
                        <Link href="/couples"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Families</h3>
                            <p>Family Business Coaching, Relationship Coaching, Life Coaching.</p>
                        </header>
                        <Link href="/families"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Life Coaching</h3>
                            <p>Help with love, business, and family relationshps.</p>
                        </header>
                        <Link href="/coaching"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Couples Weekend</h3>
                            <p>Weekend intensive session are available for faster progress, scheduling convenience.</p>
                        </header>
                        <Link href="/weekend"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Video Therapy</h3>
                            <p>Distance is no issue. Virtual meetings are available.</p>
                        </header>
                        <Link href="/remote"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Meet Susan</h2>
                        </header>
                        <p>EFT-rooted therapy with over 30 years in private practice. I have the experience, tools, and processes to get results. I provide services to individuals, couples, families, and groups. Cope with today's challenges, build a better future, and show up in each moment in your relationships.</p>
                        <ul className="actions">
                            <li><Link href="/about"><a className="button next">About Susan</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
