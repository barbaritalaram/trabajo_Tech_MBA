import { Outlet, Link } from 'react-router-dom';

//import github from '../../assets/github.svg';
import innovasphere from '../../assets/innovasphere.svg';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.headerTitleContainer}>
            <h3 className={styles.headerTitle}>InnovaSphere | CardioPath</h3>
          </Link>
          <nav>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavLeftMargin}>
                <a
                  href="https://github.com/barbaritalaram/trabajo_Tech_MBA/"
                  target={'_blank'}
                  title="Github repository link"
                  rel="noreferrer"
                >
                  <img
                    src={innovasphere}
                    alt="InnovaSphere logo"
                    aria-label="Azure OpenAI JavaScript Github repository link"
                    width="40px"
                    height="40px"
                    className={styles.innovasphereLogo}
                  />
                </a>
              </li>
            </ul>
          </nav>
          <h5 className={styles.headerRightText}>
            <i>Se puede nacer y vivir con un corazón diferente</i>
          </h5>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
