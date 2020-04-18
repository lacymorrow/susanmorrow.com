import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/individual"><a><span onClick={props.onToggleMenu}>Individual Therapy</span></a></Link></li>
                <li><Link href="/couples"><a><span onClick={props.onToggleMenu}>Couples Therapy</span></a></Link></li>
                <li><Link href="/family"><a><span onClick={props.onToggleMenu}>Family Counseling</span></a></Link></li>
                <li><Link href="/remote"><a><span onClick={props.onToggleMenu}>Live Video Sessions</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>

                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>Landing Page</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>Generic Page</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Elements Page</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Contact</a></li>
                <li><a href="#" className="button fit">Emergency</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="#">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
