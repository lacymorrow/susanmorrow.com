import Head from "next/head"
import Image from 'next/image'

import Layout from '../components/Layout'

const Weekend = () => <Layout>
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
                <span className="image main"><Image src="/images/pic11.jpg" alt="" width={864} height={259} priority sizes="(max-width: 736px) 100vw, 75vw" style={{ width: '100%', height: 'auto' }} /></span>
                <p>If your relationship needs focused attention, you are experiencing strained communication, or even signs of distress, don’t leave your relationship untended. I offer a two-day, 8- hour, weekend intensive for couples. This in- person experience includes instruction, support, and guidance through progressive series of conversations. Each conversation takes couples a step forward, to rebuild intimacy for a lifetime of love.</p>
                <p>During covid-19 quarantine, in person couple intensives are on temporary hold. Contact me by email susan@susanmorrow.us to get on the waiting list for future dates. I appreciate your patience.</p>
            </div>
        </section>
    </div>
</Layout>;

export default Weekend;
