import Styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={Styles.header}>
      <a href="#" className={Styles.header_logo}>
        <img src="images/logo.svg" alt=""/>
      </a>
      <nav className={Styles.header_nav}>
        <ul>
          <li><a href="#">💬 TG</a></li>
          <li><a href="#">😊 VK</a></li>
          <li><a href="#">📺 YouTube</a></li>
        </ul>
      </nav>
    </header>
  );
}