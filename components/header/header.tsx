import { Anchor } from "../ui/Anchor";

const Header = () => {
  return (
    <header>
      <div>
        <div></div>
        <nav>
          <ul>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
