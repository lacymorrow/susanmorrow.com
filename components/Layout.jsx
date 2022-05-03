import React from "react";
import Head from 'next/head'
import { withRouter } from 'next/router'


import ReactGA from 'react-ga';

import Header from './Header'
import Callout from './Callout'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            gaInit: false
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);

        const trackingId = "UA-247410-12";

        if(!this.state.gaInit) {
	        ReactGA.initialize(trackingId, {
	        		debug: true,
	                gaOptions: { cookieDomain: 'auto' }
	        	});
	        this.setState({ gaInit: true })
        }

        ReactGA.pageview(window.location.pathname + window.location.search);

    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Susan Morrow MSW, LCSW - Therapy Charlotte, NC</title>
                    <meta name="description" content="Online sessions available! Over 30 years in private practice, Susan Morrow has a solid base of experience providing therapy, consultation, coaching, and training services to individuals, couples, and families." />
                </Head>

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default withRouter(Layout)
