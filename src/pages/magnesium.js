import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

// Styled Components
const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 5rem auto;
  margin-top: 100px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards;
  animation-delay: ${({ animationDelay }) => animationDelay || '0.5s'};
  transition: all 0.3s ease-in-out;
  will-change: transform, opacity;
  background: var(--navy);
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(2, 12, 27, 0.7);

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledSubtitle = styled.h2`
  color: var(--slate);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: var(--slate);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

// Additional styled components for new content
const StyledSectionTitle = styled.h3`
  color: var(--slate);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const StyledList = styled.ul`
  font-size: 1rem;
  color: var(--slate);
  line-height: 1.5;
  list-style-position: inside;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--light-navy);
  border-radius: 10px;
  box-shadow: 0px 10px 30px -5px rgba(2, 12, 27, 0.2);
`;

const StyledListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const DiscovearPage = ({ location }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <Layout location={location}>
      <Helmet title="Magnesium Alloys: Biodegradable Implant Innovations" />
      <StyledMainContainer
        style={{
          animationDelay: prefersReducedMotion ? '0s' : '0.5s',
          opacity: prefersReducedMotion ? 1 : 0,
        }}>
        <StyledTitle>Magnesium Alloys: The Future of Biodegradable Implant Materials</StyledTitle>
        <StyledSubtitle>Background</StyledSubtitle>
        <StyledParagraph>
          Biodegradable materials in biomedical implants are a transformative advancement,
          eliminating the need for secondary surgery for implant removal. They minimize treatment
          costs, reduce patient risks, and alleviate the discomfort associated with permanent
          implants.
        </StyledParagraph>
        <StyledParagraph>
          Magnesium (Mg) alloys, known for their biocompatibility, osteoconductivity,
          biodegradability, and mechanical properties akin to bone, are exemplary for such
          applications. Their biodegradability necessitates an understanding of the evolution of
          their mechanical properties within the body. This project examines the mechanical
          attributes of Mg alloy wires—ZX10 and WE43—pre and post in vivo corrosion, aimed at their
          use in fabricating 3D braided cables for sternal closures.
        </StyledParagraph>

        <StyledSectionTitle>Significance</StyledSectionTitle>
        <StyledParagraph>
          Our study highlights magnesium alloys as a significant material class for the future of
          biodegradable implants in essential load-bearing applications. A testament to this
          potential is the RemeOs trauma screw by Bioretec, composed of magnesium alloys and hybrid
          composites, which stands as the only FDA-approved biodegradable metal implant. The unique
          properties of these alloys could extend their applications to various orthopedic uses,
          including stents and craniofacial scaffolds. The Weihs lab's state-of-the-art equipment is
          pivotal in crafting these complex structures.
        </StyledParagraph>

        <StyledSectionTitle>Methods</StyledSectionTitle>
        <StyledParagraph>
          The methodology involves in vitro corrosion tests on both alloys. I have developed and 3D
          printed holders for the wire samples and fixtures for the MTS Machine to conduct
          quasi-static tensile testing. The data from these tests, including ultimate tensile
          strength, yield, modulus, stiffness, and ductility, provide insights into the physical
          properties of the alloys. Micro-CT imaging post-testing will investigate the surface
          morphology and breakage topologies, shedding light on pitting behavior and the presence of
          inclusions or intermetallics at these sites.
        </StyledParagraph>

        <StyledSectionTitle>Future Work</StyledSectionTitle>
        <StyledParagraph>
          Following the data analysis of single Mg alloy wire strands, the next phase will examine
          3D braided cables made from these wires, provided by Fort Wayne metals. Subjecting these
          cables to similar corrosion and tensile testing protocols will allow comparison with the
          single wire data, offering a comprehensive understanding of the mechanical properties of
          fabricated 3D structures.
        </StyledParagraph>

        <StyledSectionTitle>Presentations & Awards</StyledSectionTitle>
        <StyledParagraph>
          Recognitions include:
          <StyledList>
            <StyledListItem>
              Provost’s Undergraduate Research Award (PURA) - October 2023
            </StyledListItem>
            <StyledListItem>
              Presenter at JHU Department of Medicine and Whiting School of Engineering Research
              Retreat - Spring 2023
            </StyledListItem>
            <StyledListItem>
              Upcoming Presenter at PULSE Seminar Series - November 2023 (a collaborative event of
              Johns Hopkins University, Coppin State University, and Morgan State University)
            </StyledListItem>
          </StyledList>
        </StyledParagraph>
        <StyledButton to="/">Go Home</StyledButton>
      </StyledMainContainer>
    </Layout>
  );
};

DiscovearPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DiscovearPage;
