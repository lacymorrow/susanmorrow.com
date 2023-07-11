import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Header = (props) => {
	const router = useRouter();

	return (
		<header id="header" className="alt">
			<Link href="/" className="logo">
				{/* Susan Morrow<strong>MSW, LCSW</strong> */}
				Charlotte Therapy
			</Link>
			<nav>
				<a className="menu-link" onClick={props.onToggleMenu} href="#" aria-label='Open/close Menu'>Menu</a>
			</nav>
		</header>
	)
}

Header.propTypes = {
	onToggleMenu: PropTypes.func
}

export default Header
