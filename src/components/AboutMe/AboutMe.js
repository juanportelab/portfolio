import React from 'react'
import * as S from './AboutMe.Styles';
import logoGithub from '../../svg/github.svg';
import logoFacebook from '../../svg/facebook.svg';
import logoInstagram from '../../svg/instagram.svg';
import logoYouTube from '../../svg/youtube.svg';

const AboutMe = () => {
  
  const socialNetworks =[
    {
        name: "GitHub",
        link: "https://github.com/juanportelab",
        logo: logoGithub
    },
    {
        name: "Facebook",
        link: "https://facebook.com",
        logo: logoFacebook
    },
    {
        name: "Instagram",
        link: "https://instagram.com",
        logo: logoInstagram
    },
    {
        name: "Youtube",
        link: "https://youtube.com",
        logo: logoYouTube
    }
  ];


  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Juan Portela</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) =>(
              <a key={index} href={network.link} target="_blank" rel="noreferrer">
                <img src={network.logo} alt={network.name}></img>
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="../img/foto_perfil.jpeg" alt="Juan Portela, Frontend developer"></img>
        </S.ContainerImage>
      </S.ContainerFlex>      
    </S.ContainerAboutMe>
  )
}

export default AboutMe