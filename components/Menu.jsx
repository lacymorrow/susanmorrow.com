import PropTypes from 'prop-types'
import Link from 'next/link'

// <li><Link href="/documents"><a><span onClick={props.onToggleMenu}>Documents</span></a></Link></li>
const Menu = (props) => (
	<nav id="menu">
		<div className="inner">
			<ul className="links">
				<li><Link href="/"><span onClick={props.onToggleMenu}>Home</span></Link></li>
				<li><Link href="/about"><span onClick={props.onToggleMenu}>About</span></Link></li>
				<li><Link href="/individual"><span onClick={props.onToggleMenu}>Individual Therapy</span></Link></li>
				<li><Link href="/couples"><span onClick={props.onToggleMenu}>Couples Therapy</span></Link></li>
				<li><Link href="/family"><span onClick={props.onToggleMenu}>Family Counseling</span></Link></li>
				{/* <li><Link href="/intensives"><a><span onClick={props.onToggleMenu}>Couples Intensives</span></a></Link></li> */}
			</ul>
			<ul className="actions vertical">
				<li><a href="#contact" onClick={props.onToggleMenu} className="button special fit">Contact</a></li>
				{/* <li>
                    <Link href="/covid">
                        <a onClick={props.onToggleMenu} className="button fit">COVID-19 Care</a>
                    </Link>
                </li> */}
			</ul>
		</div>
		<a className="close" onClick={props.onToggleMenu} href="#" aria-label="Close menu">Close</a>
	</nav>
)

Menu.propTypes = {
	onToggleMenu: PropTypes.func
}

export default Menu
