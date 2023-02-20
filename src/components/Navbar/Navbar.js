import React, { useState } from 'react'
import * as S from "./Navbar.styles";

const Navbar = () => {
  const [showMenuBurger, setShowMenuBurger] = useState(false);

  const clickItemNav = item => {
    document.getElementById(item).scrollIntoView({behavior: "smooth"});
  }

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/avatar.jpg" alt="Logo Juan Portela"></S.ImageLogo>
        <div>
          <h1>Juan Portela</h1>
          <h2>Frontend developer</h2>
        </div>
      </S.ContainerLogo>
        
      <S.ContainerBurger onClick={() => setShowMenuBurger(!showMenuBurger)}>
        <S.BurgerMenu></S.BurgerMenu>
        <S.BurgerMenu></S.BurgerMenu>
        <S.BurgerMenu></S.BurgerMenu>
      </S.ContainerBurger>

      <S.ContainerItems showMenuBurger={showMenuBurger}>
        <p onClick={() => clickItemNav("about-me")}>About me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <S.Button onClick={() => clickItemNav("contact")}>🤙🏼 Contact me</S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  )
}

export default Navbar