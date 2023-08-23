import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Computer-Aided Design',
    'Data Analysis',
    'Excel',
    'Python',
    'RStudio',
    'Cell Culture',
    '3D Printing',
    'Biomedical Engineering',
    'NetSuite',
    'Materials Science',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Sneha, and I'm fervently driven by the fusion of biomedical
              engineering and transformative healthcare solutions. My academic voyage is anchored at
              Johns Hopkins University, where I'm exploring the intricacies of biomedical devices
              and biodegradable implants for orthopedics. Outside the classroom, my leadership stint
              with the MedTech Network has enriched me with hands-on experience in coordinating
              medtech career exploration programs. Simultaneously, my involvement in Alpha Kappa Psi
              and the Shakti Competitive Indian Classical Dance Team not only resonates with my
              cultural and philanthropic inclinations but also amplifies my skills in team
              collaboration and event management. The domains of research, dance, and community
              service, through roles at prestigious institutions like Kaiser Permanente,
              collectively sculpt my persona. Each endeavor enlightens me about the essence of
              innovation, leadership, and societal contribution.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of leading design initiatives at{' '}
              <a href="https://engineering.jhu.edu/">Johns Hopkins Whiting School of Engineering</a>
              , conducting research with the{' '}
              <a href="https://weihsgroup.jhu.edu/">Weihs Research Group</a>, and undertaking
              internships at esteemed organizations like
              <a href="https://www.rm.minaris.com/en/">Minaris Regenerative Medicine</a> and{' '}
              <a href="https://stemaway.com/">STEM-Away</a>. My primary concentration is Biomedical
              Engineering at Johns Hopkins University, complemented by my diverse experiences in
              corrosion research, computer-aided design, and bioinformatics. I take immense pride in
              my roles within <a href="https://akpsi.org/">Alpha Kappa Psi</a> and the Shakti
              Competitive Indian Classical Dance Team, which have been instrumental in shaping my
              leadership and teamwork abilities at the university.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
