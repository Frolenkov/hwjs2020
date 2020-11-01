function Header() {
  return (
    <header class="header">
            <div class="main-head">
                <div class="logo">
                    <a href="#" class="logo__text"><img src="img/logo.svg" alt="factor"/></a>
                </div>
                <nav class="main-nav">
                    <input class="menu-checkbox" id="checkbox" type="checkbox" />
                    <label class="menu-opener" for="checkbox">Menu</label>
                    <ul class="nav-list">
                        <li class="nav-list__item"><a href="#services">Services</a></li>
                        <li class="nav-list__item"><a href="#portfolio">Portfolio</a></li>
                        <li class="nav-list__item"><a href="#about">About</a></li>
                        <li class="nav-list__item"><a href="#contact">Contact</a></li>
                        <li class="nav-list__item nav-list__item--discuss"><a href="#contact-us">Discuss Your Idea</a></li>
                    </ul>
                </nav>
                <ul class="auth">
                    <li><a href="hello@digitfactor.com" class="auth__item">hello@digitfactor.com</a></li>
                </ul>
            </div>
        </header>
  );
}

export default Header;
