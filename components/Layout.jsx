import React from "react";
import Head from 'next/head'
import { withRouter } from 'next/router'


import ReactGA from 'react-ga';

import Header from './Header'
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

        if (!this.state.gaInit) {
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
        const personSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Susan Morrow",
            "jobTitle": "Licensed Clinical Social Worker",
            "honorificSuffix": "MSW, LCSW",
            "email": "susan@susanmorrow.us",
            "telephone": "(704) 332-5153",
            "url": "https://susanmorrow.us",
            "image": "https://susanmorrow.us/images/headshot-2023-2.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "429 E. Worthington Ave. Suite 2",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28203",
                "addressCountry": "US"
            },
            "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Georgia",
                "department": "School of Social Work"
            },
            "hasOccupation": {
                "@type": "Occupation",
                "occupationLocation": {
                    "@type": "City",
                    "name": "Charlotte",
                    "addressRegion": "NC"
                },
                "skills": [
                    "Psychotherapy",
                    "Couples Therapy",
                    "Family Therapy",
                    "Individual Therapy",
                    "Emotionally Focused Therapy",
                    "Gottman Method",
                    "Acceptance and Commitment Therapy"
                ]
            },
            "knowsAbout": [
                "Psychotherapy",
                "Couples Therapy",
                "Family Therapy",
                "Individual Therapy",
                "Emotionally Focused Therapy",
                "Gottman Method",
                "Marriage and Family Therapy",
                "Clinical Social Work"
            ],
            "memberOf": [
                {
                    "@type": "Organization",
                    "name": "National Association of Social Workers"
                },
                {
                    "@type": "Organization",
                    "name": "International Centre for Excellence in Emotion Focused Couples Therapy"
                },
                {
                    "@type": "Organization",
                    "name": "Carolinas Center for Emotionally Focused Therapy"
                },
                {
                    "@type": "Organization",
                    "name": "Carolinas Group Therapy Society"
                }
            ]
        };

        const healthProfessionalSchema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://susanmorrow.us/#person",
            "name": "Susan Morrow",
            "additionalType": "https://schema.org/HealthProfessional",
            "jobTitle": "Licensed Clinical Social Worker",
            "honorificSuffix": "MSW, LCSW",
            "email": "susan@susanmorrow.us",
            "telephone": "(704) 332-5153",
            "url": "https://susanmorrow.us",
            "image": "https://susanmorrow.us/images/headshot-2023-2.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "429 E. Worthington Ave. Suite 2",
                "addressLocality": "Charlotte",
                "addressRegion": "NC",
                "postalCode": "28203",
                "addressCountry": "US"
            },
            "medicalSpecialty": [
                "Psychotherapy",
                "Couples Therapy",
                "Family Therapy",
                "Individual Therapy",
                "Clinical Social Work"
            ],
            "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                    "@type": "Organization",
                    "name": "North Carolina Board of Social Work"
                }
            }
        };

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Susan Morrow MSW, LCSW - Therapy Charlotte, NC</title>
                    <meta name="description" content="Online sessions available! Over 30 years in private practice, Susan Morrow has a solid base of experience providing therapy, consultation, coaching, and training services to individuals, couples, and families." />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthProfessionalSchema) }}
                    />
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
