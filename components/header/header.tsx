import { Anchor } from "../ui/Anchor";
import styles from "./header.style";

const Header = () => {
  return (
    <styles.header>
      <styles.container>
        <div>
          <img width="180" src="logo.webp" alt="" />
        </div>
        <nav>
          <styles.nav>
            <li>
              <Anchor activeClassName="active" href="/">
                Home
              </Anchor>
            </li>
            <li>
              <Anchor activeClassName="active" href="/about">
                About Us
              </Anchor>
            </li>
            <li>
              <Anchor activeClassName="active" href="/vehicles">
                Vehicles
              </Anchor>
            </li>
            <li>
              <Anchor activeClassName="active" href="/services">
                Services
              </Anchor>
            </li>
          </styles.nav>
        </nav>
      </styles.container>
    </styles.header>
  );
};

export default Header;
