import css from './AppBar.module.css';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

export default function AppBar() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <img src="/logo.svg" className={css.logo} alt="Logo" />
      </Link>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={makeNavLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
