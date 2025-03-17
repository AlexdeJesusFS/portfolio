import clickButtonSound from "../../assets/sounds/buttonClicking.wav";
import HeaderButton from "./Button";
import { AboutIcon, ChatIcon, ConstructIcon } from "./icons";
import styles from "./styles.module.scss";

function Header() {
  function clickSound() {
    const audio = new Audio(clickButtonSound);
    audio.play();
  }

  return (
    <header className={styles.container}>
      <div className={styles.leftSide}>
        <HeaderButton href="/" className={styles.headerTitle}>
          Alex de Jesus
        </HeaderButton>
      </div>
      <div className={styles.menu}>
        <HeaderButton className={styles.hideMobileButton} href="#sobre" onClick={clickSound}>
          Sobre
          {
            <span className={styles.iconContainer}>
              <AboutIcon />
            </span>
          }
        </HeaderButton>
        <HeaderButton className={styles.hideMobileButton} href="#projetos" onClick={clickSound}>
          Projetos
          {
            <span className={styles.iconContainer}>
              <ConstructIcon />
            </span>
          }
        </HeaderButton>
        <HeaderButton href="#fale_comigo" onClick={clickSound}>
          Fale comigo
          {
            <span className={styles.iconContainer}>
              <ChatIcon />
            </span>
          }
        </HeaderButton>
      </div>
    </header>
  );
}

export default Header;
