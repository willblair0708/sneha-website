import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
// import coverImage from '../images/cover-tenopedics.jpg'; // Ensure you have an image at this path

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: 1.1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 10px;
`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 30px; // Adjust as needed
`;

const StyledSection = styled.section`
  margin-bottom: 20px; // Adjust as needed
`;

const StyledParagraph = styled.p`
  margin-bottom: 5px;
`;

const StyledList = styled.ul`
  list-style: inside disc;
  padding: 0;
  margin-bottom: 10px; // Adjust as needed
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledTeamContainer = styled.div`
  margin-top: 20px; // Adjust as needed
`;

const StyledTeamTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 10px;
`;

const StyledTeamText = styled.p`
  margin-bottom: 10px;
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
  }, []);

  const content = (
    <StyledMainContainer className="fillHeight">
      <StyledTitle>Tenopedics Project</StyledTitle>

      <StyledSection>
        <StyledSubtitle>Background</StyledSubtitle>
        <StyledParagraph>
          Arthroscopic Biceps Tenodesis (ABT) holds great promise for patients suffering from biceps
          tendonitis, offering faster recovery and less post-operative pain. However, it's
          astonishingly underutilized due to the challenges associated with the existing surgical
          tools.
        </StyledParagraph>
        <StyledParagraph>
          Our team sees an opportunity to revolutionize ABT by developing a compact and efficient
          system tailored to the arthroscopic biceps space. This innovation has the potential to
          impact both clinicians and patients significantly.
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <StyledSubtitle>Key User Needs</StyledSubtitle>
        <StyledList>
          <StyledListItem>
            Compatibility: Surgeons need tools that are designed specifically for the arthroscopic
            biceps space.
          </StyledListItem>
          <StyledListItem>
            Reduced Procedural Time: Streamlining the procedure with efficient tools can
            significantly decrease surgical time.
          </StyledListItem>
          <StyledListItem>
            Mitigated Fixation-Strength Related Failure: Secure fixation of the biceps tendon is
            crucial for ABT success.
          </StyledListItem>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <StyledSubtitle>Potential Impacts</StyledSubtitle>
        <StyledList>
          <StyledListItem>
            Enhanced Patient Outcomes: Improved fixation and shorter procedural times can lead to
            quicker patient recovery.
          </StyledListItem>
          <StyledListItem>
            Reduced Healthcare Costs: More efficient procedures can lower costs for hospitals and
            patients.
          </StyledListItem>
          <StyledListItem>
            Clinician Adoption: A dedicated solution can encourage wider adoption of ABT among
            clinicians.
          </StyledListItem>
          <StyledListItem>
            Innovation in the Field: Our project could set a new standard for ABT procedures.
          </StyledListItem>
        </StyledList>
      </StyledSection>

      <StyledTeamContainer>
        <StyledTeamTitle>Team</StyledTeamTitle>
        <StyledTeamText>
          I work with a team of 5 students sponsored by Johns Hopkins Biomedical Engineering. Our
          project mentors are from the Johns Hopkins University Biomedical Engineering Department,
          Johns Hopkins Medical Institution, and University of Maryland Medical Institution.
        </StyledTeamText>
      </StyledTeamContainer>

      <StyledHomeButton to="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Tenopedics Project" />

      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  );
};

TenopedicsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TenopedicsPage;
