import React from 'react';
import * as S from './Projects.styles';
import { projectsPortfolio } from './ProjectsData';
import logoGitHub from '../../svg/github.svg';
import logoWebSite from '../../svg/website.svg';

const Projects = () => {
  return (
    <S.ContainerProjects id="projects">
      <S.Title>
        Some of <span><br></br>My projects</span>
      </S.Title>
      <S.ContentProject>
        {projectsPortfolio.map((project, index) =>(
          <S.ProjectContent key={index}>
            <S.TitleProject>{project.title}</S.TitleProject>
            <S.ContainerImage>
              <img src={project.image} alt={project.title} loazy="true"></img>
            </S.ContainerImage>
            <S.ContainerTech>
              {project.techs.map((tech, index) =>(
                <div key={index}>
                  <img src={tech.src} alt={tech.name}></img>
                  <p>{tech.name}</p>
                </div>
              ))}
            </S.ContainerTech>
            <S.Description>{project.description}</S.Description>
            <S.ContainerFooter>
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <img src={logoGitHub} alt={project.description}></img>
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noreferrer">
                  <img src={logoWebSite} alt={project.description}></img>
                </a>
              )}
            </S.ContainerFooter>
          </S.ProjectContent>
        ))}
      </S.ContentProject>
    </S.ContainerProjects>
  )
}

export default Projects