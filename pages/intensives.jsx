import Head from "next/head"

import Layout from '../components/Layout'

const Intensives = () => <Layout>
    <Head>
        <title>Couples Intensives Charlotte NC | Susan Morrow, MSW, LCSW</title>
        <meta name="description" content="Intensive 4-hour couples therapy sessions in Charlotte, NC for marital crisis, pre-marital counseling, and relationship enrichment. Focused, evidence-based approach." />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Couples Intensives</h1>
                    <blockquote>Structured 4 Hours of Couples Therapy</blockquote>
                </header>
                <span className="image main"><img src="/images/header-couples-2.jpg" alt="Couples intensive therapy session for relationship repair and enrichment" /></span>
                <p>This is a helpful format for couples who have had a marital crisis and need focused attention on repair to their relationship, Pre-marital Couples, and Couples seeking Relationship Enrichment.</p>
            </div>
        </section>
    </div>
</Layout>;

export default Intensives;
