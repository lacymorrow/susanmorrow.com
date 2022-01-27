import Head from "next/head"

import Layout from '../components/Layout'

const Documents = () => <Layout>
    <Head>
        <title>Download Forms and Documents</title>
        <meta name="description" content="Download Forms and Documents" />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Download Forms and Documents</h1>
                </header>
                <ul>
                    <li>
                        <a href="">Form1</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</Layout>;

export default Documents;
