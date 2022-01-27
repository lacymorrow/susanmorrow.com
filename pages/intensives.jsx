import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Couples Intensives</title>
            <meta name="description" content="Develop a relationship that lasts through difficult times." />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Couples Intensives</h1>
                        <blockquote>Structured 4 Hours of Couples Therapy</blockquote>
                    </header>
                    <span className="image main"><img src="/images/header-couples-2.jpg" alt="" /></span>
                    <p>This is a helpful format for couples who have had a marital crisis and need focused attention on repair to their relationship, Pre-marital Couples, and Couples seeking Relationship Enrichment.</p>
                </div>
            </section>
        </div>
    </Layout>
)
