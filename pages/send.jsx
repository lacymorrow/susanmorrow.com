import Head from "next/head"

import Layout from '../components/Layout'

const Upload = () => <Layout>
    <Head>
        <title>Send Files</title>
        <meta name="description" content="Securely upload files and documents" />
    </Head>

    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Upload Files</h1>
                </header>
                <p>You may drag and drop files below to securely send files and documents to our servers.</p>
                <p>Files are uploaded automatically, there is no need to provide your information or click &ldquo;Send&rdquo;</p>
                <p>Please notify <a href="mailto:susan@susanmorrow.us">susan@susanmorrow.us</a> if you are unable to upload for any reason.</p>
                {/* <Uppy /> */}
            </div>
        </section>
    </div>
</Layout>;

export default Upload;
