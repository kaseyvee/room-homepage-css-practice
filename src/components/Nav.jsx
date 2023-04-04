import { useState, useEffect } from 'react';

function Nav() {
  const [mobileNavAnimation, setMobileNavAnimation] = useState("");

  function handleNavToggle() {
    if (mobileNavAnimation === "slideIn") {
      return setMobileNavAnimation("slideOut");
    }
    return setMobileNavAnimation("slideIn");
  }

  return (
    <header className='nav'>
      <div className='nav_main'>
        <div
          className='nav_main_menu-open'
          onClick={handleNavToggle}
        >
          <img src='icon-hamburger.svg' alt='open mobile navigation menu' />
        </div>

        <div className='nav_main_logo-container'>
          <img
            src='logo.svg'
            alt='logo'
          />
        </div>

        <div className='nav_main_list'>
          <a href='' className='nav_main_list_item'>home</a>
          <a href='' className='nav_main_list_item'>shop</a>
          <a href='' className='nav_main_list_item'>about</a>
          <a href='' className='nav_main_list_item'>contact</a>
        </div>
      </div>

      {mobileNavAnimation && <div className='nav_mobile-overlay'>
        {mobileNavAnimation === "slideIn" && <div className='nav_mobile-overlay_background'></div>}

        <div
          className='nav_mobile-overlay_main'
          style={{
            animation: `${mobileNavAnimation} 300ms ease-in-out forwards`
          }}
        >
          <div
            className='nav_mobile-overlay_main_menu-close'
            onClick={handleNavToggle}
          >
            <img
              src='icon-close.svg'
              alt='close mobile nagvigation menu'
            />
          </div>

          <div className='nav_mobile-overlay_main_list'>
            <a href='' className='nav_mobile-overlay_main_list_item'>home</a>
            <a href='' className='nav_mobile-overlay_main_list_item'>shop</a>
            <a href='' className='nav_mobile-overlay_main_list_item'>about</a>
            <a href='' className='nav_mobile-overlay_main_list_item'>contact</a>
          </div>
        </div>
      </div>}
    </header>
  );
}

export default Nav;