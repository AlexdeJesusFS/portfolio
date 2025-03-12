// src/components/Footer/Footer.tsx
import { useMediaQuery } from "react-responsive";
import computerMp4 from "../../assets/videos/computer.mp4";
import computerWebm from "../../assets/videos/computer.webm";
import { EmailIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import styles from "./styles.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  const gitgubAccount = "https://github.com/AlexdeJesusFS";
  const emailAccount = "mailto:alexjesus864@gmail.com";
  const whatsappMessage =
    "whatsapp://send?text=Ei, olha esse portfolio que incrível! url aqui";
  const linkedinAccount = "https://www.linkedin.com/in/alexdejesusfs/";

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 990px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 991px)" });

  return (
    <>
      {(isTablet || isDesktop) && (
        <footer className={styles.container}>
          <div className={styles.copyrightContainer}>
            <p className={styles.copyright}>
              © {currentYear} Alex de Jesus. All rights reserved.
            </p>
          </div>

          <video muted autoPlay loop className={styles.computer}>
            <source src={computerWebm} type="video/webm" />
            <source src={computerMp4} type="video/mp4" />
          </video>

          <div className={styles.rightSide}>
            <h6>Fale comigo e compartilhe!</h6>
            <div className={styles.contactsContainer}>
              <GithubIcon className={styles.github} href={gitgubAccount} />
              <LinkedinIcon
                className={styles.linkedin}
                href={linkedinAccount}
              />
              <WhatsappIcon
                className={styles.whatsapp}
                href={whatsappMessage}
              />
              <EmailIcon className={styles.email} href={emailAccount} />
            </div>
          </div>
        </footer>
      )}

      {isMobile && (
        <footer className={styles.container}>
          <div className={styles.rightSide}>
            <h6>Fale comigo e compartilhe!</h6>
            <div className={styles.contactsContainer}>
              <GithubIcon className={styles.github} href={gitgubAccount} />
              <LinkedinIcon
                className={styles.linkedin}
                href={linkedinAccount}
              />
              <WhatsappIcon
                className={styles.whatsapp}
                href={whatsappMessage}
              />
              <EmailIcon className={styles.email} href={emailAccount} />
            </div>
          </div>

          <div className={styles.copyrightContainer}>
            <p className={styles.copyright}>
              © {currentYear} Alex de Jesus. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
