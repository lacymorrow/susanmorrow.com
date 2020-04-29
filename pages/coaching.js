import Head from "next/head"

import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head>
            <title>Life Coaching</title>
            <meta name="description" content="Help with love, business, and family relationshps." />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Life Coaching</h1>
                        <blockquote>Help with love, business, and family relationshps.</blockquote>
                    </header>
                    <span className="image main"><img src="/images/pic11.jpg" alt="" /></span>
                    <p></p>
                </div>
            </section>
        </div>
    </Layout>
)
