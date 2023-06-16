import logo from './React-icon.svg';

export default function Header() {
    return (
      <>
        <nav className='navBar'>
          <div className='left'>
          <img src={logo} alt='' />
          <p>Taisho ichiban pro ltd.</p>
          </div>
          <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </>
    );
  }