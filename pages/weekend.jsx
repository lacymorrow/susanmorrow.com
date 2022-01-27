import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Couples Intensive Therapy</title>
            <meta name="description" content="Weekend intensive sessions are available for faster progress, scheduling convenience." />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Couples Intensive Therapy</h1>
                        <blockquote>Weekend intensive session are available for faster progress, scheduling convenience.</blockquote>
                    </header>
                    <span className="image main"><img src="/images/pic11.jpg" alt="" /></span>
                    <p>If your relationship needs focused attention, you are experiencing strained communication, or even signs of distress, don’t leave your relationship untended. I offer a two-day, 8- hour, weekend intensive for couples. This in- person experience includes instruction, support, and guidance through progressive series of conversations. Each conversation takes couples a step forward, to rebuild intimacy for a lifetime of love.</p>
					<p>During covid-19 quarantine, in person couple intensives are on temporary hold. Contact me by email susan@susanmorrow.us to get on the waiting list for future dates. I appreciate your patience.</p>
                </div>
            </section>
        </div>
    </Layout>
)
