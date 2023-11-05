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

const StyledTeamContainer = styled.div`
  margin-top: 2rem;
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
      <Helmet title="DiscovEAR: Endoscopic Eustachian Tube Assessment" />
      <StyledMainContainer
        style={{
          animationDelay: prefersReducedMotion ? '0s' : '0.5s',
          opacity: prefersReducedMotion ? 1 : 0,
        }}>
        <StyledTitle>
          DiscovEAR: A Novel Endoscopic System for Eustachian Tube Assessment
        </StyledTitle>
        <StyledSubtitle>Background</StyledSubtitle>
        <StyledParagraph>
          The Eustachian tube plays a crucial role in equalizing ear pressure and draining fluids.
          When its function is compromised, individuals can suffer from hearing loss, pressure pain,
          and tinnitus. Despite the prevalence of Eustachian tube dysfunction, affecting over 2
          million Americans annually, current diagnostic options remain limited, leading to
          uncertain treatment outcomes and potential worsening of conditions.
        </StyledParagraph>

        <StyledSectionTitle>Our Solution:</StyledSectionTitle>
        <StyledParagraph>
          In response to this challenge, we have developed DiscovEAR—a cutting-edge diagnostic
          system comprising a miniature endoscope, a specialized distal attachment, and a guide
          catheter, offering a direct view into the Eustachian tube for accurate assessments.
        </StyledParagraph>
        <StyledList>
          <StyledListItem>
            Miniature Endoscope: Selected for its superior imaging capabilities, commonly available
            in ENT clinics.
          </StyledListItem>
          <StyledListItem>
            Distal Attachment: Innovatively designed to clear the viewing area around the camera
            lens, enabling precise visualization within the Eustachian tube.
          </StyledListItem>
          <StyledListItem>
            Guide Catheter: Engineered for smooth insertion, ensuring the safety and ease of use for
            clinicians.
          </StyledListItem>
        </StyledList>
        <StyledParagraph>
          This integrated system has undergone rigorous validation through cadaver studies and is on
          its trajectory towards market readiness. Offering a unique capability for direct and
          detailed Eustachian tube assessment, DiscovEAR stands as the only viable option for such
          diagnostics, executable by a single clinician while prioritizing patient safety.
        </StyledParagraph>
        <StyledParagraph></StyledParagraph>
        <StyledSectionTitle>Team</StyledSectionTitle>
        <StyledTeamContainer>
          <StyledParagraph>
            The development of DiscovEAR is driven by a dedicated team of 8 students from Johns
            Hopkins Biomedical Engineering, supported by our esteemed mentors from the Johns Hopkins
            University Biomedical Engineering Department and Johns Hopkins Medical Institution. Our
            collective efforts have been acknowledged through several accolades, including our
            standing as Semifinalists in the 2022 Draper Competition for Collegiate Women
            Entrepreneurs.
          </StyledParagraph>
        </StyledTeamContainer>
        <StyledButton to="/">Go Home</StyledButton>
      </StyledMainContainer>
    </Layout>
  );
};

DiscovearPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DiscovearPage;
