import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledContent = styled.div`
  margin: 2rem 0;
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
      <StyledSubtitle>
        <strong>Background:</strong><br />
        Arthroscopic Biceps Tenodesis (ABT) holds great promise for patients suffering from biceps tendonitis, offering faster recovery and less post-operative pain. However, it's astonishingly underutilized due to the challenges associated with the existing surgical tools.
        Our team sees an opportunity to revolutionize ABT by developing a compact and efficient system tailored to the arthroscopic biceps space. This innovation has the potential to impact both clinicians and patients significantly.
      </StyledSubtitle>

      <StyledContent>
        <h3>Key user needs that our solution aims to address:</h3>
        <ul>
          <li>Compatibility: Surgeons need tools that are designed specifically for the arthroscopic biceps space. Our solution will provide instruments that fit this confined area, making the procedure smoother.</li>
          <li>Reduced Procedural Time: By streamlining the procedure with efficient tools, we can significantly decrease surgical time. This, in turn, will lead to reduced swelling in patients, lower costs, and increased operative capacity.</li>
          <li>Mitigated Fixation-Strength Related Failure: Success in ABT relies on secure fixation of the biceps tendon. Our solution will minimize the risk of fixation-strength related failures, ensuring better patient outcomes.</li>
        </ul>
        <p>The current market for ABT lacks a standardized solution. Most existing products were designed for different procedures, which opens a promising avenue for innovation. Our project aims to offer a dedicated solution that meets the specific needs of ABT, potentially setting a new standard for this surgical technique.</p>

        <h3>Potential Impacts</h3>
        <p>By addressing these user needs and bringing innovation to the ABT procedure, we anticipate several significant impacts:</p>
        <ul>
          <li>Enhanced Patient Outcomes: Shorter procedural times and improved fixation can lead to quicker patient recovery and better post-operative results. This is essential for patients who want to regain their quality of life as soon as possible.</li>
          <li>Reduced Healthcare Costs: Streamlining the procedure through efficiency can lower costs for both hospitals and patients. This will make ABT more accessible and affordable.</li>
          <li>Clinician Adoption: With a dedicated solution that makes their job easier and more efficient, we hope to encourage clinicians to adopt the arthroscopic method. This can lead to a broader acceptance of ABT in the medical community.</li>
          <li>Innovation in the Field: Our project can set a new standard for ABT procedures, inspiring other innovations in the field of orthopedic surgery.</li>
        </ul>

        <h3>Team:</h3>
        <p>I work with a team of 5 students sponsored by Johns Hopkins Biomedical Engineering. Our project mentors are from the Johns Hopkins University Biomedical Engineering Department, Johns Hopkins Medical Institution, and University of Maryland Medical Institution.</p>
      </StyledContent>

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
