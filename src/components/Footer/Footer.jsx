import Styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.dis_flex}>
        <a href="#" className={Styles.footer_logo}>
          <img src="images/footer logo.svg" alt=""/>
        </a>
        <nav className={Styles.footer_nav}>
          <ul>
            <li><a href="#">💬 TG</a></li>
            <li><a href="#">😊 VK</a></li>
            <li><a href="#">📺 YouTube</a></li>
          </ul>
        </nav>
      </div>
      <p className={Styles.copyright}>КРОССЫ И ТОЧКА ® 2023</p>
    </footer>
  );
}