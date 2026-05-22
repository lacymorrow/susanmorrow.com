import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
	<nav id="menu">
		<div className="inner">
			<ul className="links">
				<li><Link href="/" onClick={props.onToggleMenu}>Home</Link></li>
				<li><Link href="/about" onClick={props.onToggleMenu}>About</Link></li>
				<li><Link href="/individual" onClick={props.onToggleMenu}>Individual Therapy</Link></li>
				<li><Link href="/couples" onClick={props.onToggleMenu}>Couples Therapy</Link></li>
				<li><Link href="/family" onClick={props.onToggleMenu}>Family Counseling</Link></li>
				<li><Link href="/online" onClick={props.onToggleMenu}>Online Therapy</Link></li>
				<li><Link href="/coaching" onClick={props.onToggleMenu}>Life Coaching</Link></li>
				<li><Link href="/intensives" onClick={props.onToggleMenu}>Couples Intensives</Link></li>
			</ul>
			<ul className="actions vertical">
				<li><a href="#contact" onClick={props.onToggleMenu} className="button special fit">Contact</a></li>
			</ul>
		</div>
		<a className="close" onClick={props.onToggleMenu} href="#" aria-label="Close menu">Close</a>
	</nav>
)

Menu.propTypes = {
	onToggleMenu: PropTypes.func
}

export default Menu
