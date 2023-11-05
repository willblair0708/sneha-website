import React, { useState, useEffect } from 'react';
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
`;

const StyledSubtitle = styled.h2`
  color: var(--slate);
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: var(--slate);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
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
`;

const StyledList = styled.ul`
  font-size: 1rem;
  color: var(--slate);
  line-height: 1.5;
  list-style-position: inside;
  margin-bottom: 2rem;
`;

const StyledListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const StyledTeamContainer = styled.div`
  margin-top: 2rem;
`;

const TenopedicsPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <Layout location={location}>
      <Helmet title="Tenopedics Project" />
      <StyledMainContainer
        style={{ 
          animationDelay: prefersReducedMotion ? '0s' : '0.5s',
          opacity: prefersReducedMotion ? 1 : 0
        }}
      >
        <StyledTitle>Tenopedics Project</StyledTitle>
        <StyledSubtitle>Background</StyledSubtitle>
        <StyledParagraph>
          Arthroscopic Biceps Tenodesis (ABT) holds great promise for patients suffering from biceps
          tendonitis, offering faster recovery and less post-operative pain. However, it's
          astonishingly underutilized due to the challenges associated with the existing surgical
          tools.
        </StyledParagraph>
        <StyledSectionTitle>Key user needs:</StyledSectionTitle>
        <StyledList>
          <StyledListItem>Compatibility: Surgeons need tools that are designed specifically for the arthroscopic biceps space. Our solution provides instruments that fit this confined area, making the procedure smoother.</StyledListItem>
          <StyledListItem>Reduced Procedural Time: Streamlining the procedure with efficient tools can significantly decrease surgical time, leading to reduced swelling, lower costs, and increased operative capacity.</StyledListItem>
          <StyledListItem>Mitigated Fixation-Strength Related Failure: Our solution minimizes the risk of fixation-strength related failures, ensuring better patient outcomes.</StyledListItem>
        </StyledList>
        
        <StyledSectionTitle>Potential Impacts:</StyledSectionTitle>
        <StyledParagraph>
          By addressing these user needs and bringing innovation to the ABT procedure, we anticipate several significant impacts:
        </StyledParagraph>
        <StyledList>
          <StyledListItem>Enhanced Patient Outcomes: Shorter procedural times and improved fixation can lead to quicker patient recovery and better post-operative results.</StyledListItem>
          <StyledListItem>Reduced Healthcare Costs: Efficiency can lower costs for hospitals and patients, making ABT more accessible and affordable.</StyledListItem>
          <StyledListItem>Clinician Adoption: A dedicated solution that facilitates the clinician's work and increases efficiency can encourage broader acceptance of ABT.</StyledListItem>
          <StyledListItem>Innovation in the Field: Our project may set a new standard for ABT procedures, inspiring further innovations in orthopedic surgery.</StyledListItem>
        </StyledList>
        
        <StyledSectionTitle>Team:</StyledSectionTitle>
        <StyledTeamContainer>
          <StyledParagraph>
            I work with a team of 5 students sponsored by Johns Hopkins Biomedical Engineering. Our project mentors are from the Johns Hopkins University Biomedical Engineering Department, Johns Hopkins Medical Institution, and University of Maryland Medical Institution.
          </StyledParagraph>
        </StyledTeamContainer>
        <StyledButton to="/">Go Home</StyledButton>
      </StyledMainContainer>
    </Layout>
  );
};

TenopedicsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TenopedicsPage;
