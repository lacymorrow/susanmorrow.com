import Head from "next/head"

import Layout from '../components/layout'

export default () => (
    <Layout>
        <Head>
            <title>Individual Therapy</title>
            <meta name="description" content="Counseling for adults and young adults" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Individual Therapy</h1>
                        <blockquote>Counseling for adults and young adults</blockquote>
                    </header>
                    <span className="image main"><img src="/images/pic11.jpg" alt="" /></span>
                    <p>A rapidly changing culture routinely throws us curves. Stress is the new normal. Therapy gives you tools to sustain yourself, and offers a map to put your life back on course.</p>
                    <p>Help With Relationship Issues, Depression, Anxiety, Self Esteem, Parenting, Life Transitions, Stress, Work–life issues, Separation/Divorce, Grief/Loss, Addictions, Divorce Coaching, Family issues, Dating issues, Family Crisis Management.</p>
                    <p>One-on-one counseling for adolescents, adults, and people of any age or background.</p>
                </div>
            </section>
        </div>
    </Layout>
)
