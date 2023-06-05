import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/" className="logo">
            Susan Morrow<strong>MSW, LCSW</strong>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="#">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
