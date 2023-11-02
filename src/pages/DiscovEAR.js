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

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const DiscovEARPage = ({ location }) => {
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
      <StyledTitle>DiscovEAR: A novel endoscopic system for eustachian tube assessment</StyledTitle>
      <StyledSubtitle>
        <strong>Background:</strong><br />
        There's a passage that connects your nasopharynx and your middle ear called the Eustachian tube, and it equalizes the pressure and drains out fluids by naturally expanding and collapsing. If this Eustachian tube stops working, people can experience loss of hearing, painful pressure, and tinnitus.

        Currently, over 2 million Americans seek treatment for Eustachian tube dysfunction every year. However, the Eustachian tube is difficult to access, and there’s currently no direct diagnostic method. Without a clear understanding of the patient’s Eustachian tube, doctors are left blind to the specific conditions that could determine whether a treatment would be successful. The results of this are serious, with 36% of those who undergo the promising balloon dilation treatment losing therapeutic benefit within only 7 months, and nearly 10% developing an even more serious condition.
      </StyledSubtitle>

      <StyledContent>
        <p><strong>Our solution:</strong></p>
        <ul>
          <li>We have designed an innovative solution system, which incorporates a miniature endoscope, distal attachment, and guide catheter.</li>
          <li>The miniature endoscope was selected for its promising imaging capability and wide distribution in ENT’s offices.</li>
          <li>Our distal attachment opens the lumen around the endoscopic camera, allowing a clear view into the Eustachian tube so that ENT doctors are able to make informed diagnoses for their patients.</li>
          <li>Finally, the guide catheter provides easy insertion, creating a system that is safe and simple for Doctors to use.</li>
        </ul>
        <p>The complete system has been validated in a cadaver study and we are currently working to make it market ready. Compared to other potential diagnostic methods, our solution is the only one that can directly access the Eustachian tube and provide sufficient detail for a correct diagnosis and treatment. Meanwhile, our product can be operated by a single clinician and preserving patient safety.</p>

        <h3>Team:</h3>
        <p>I work with a team of 8 students sponsored by Johns Hopkins Biomedical Engineering. Our project mentors are from the Johns Hopkins University Biomedical Engineering Department, and Johns Hopkins Medical Institution. Our team has been recognized in a variety of internal and external presentations and received the title of Semifinalists in the 2022 Draper Competition for Collegiate Women Entrepreneurs.</p>
      </StyledContent>

      <StyledHomeButton to="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="DiscovEAR: A novel endoscopic system for eustachian tube assessment" />

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

DiscovEARPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DiscovEARPage;
