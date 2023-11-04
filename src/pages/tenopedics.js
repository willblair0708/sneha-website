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
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
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
        <strong>Background:</strong>
        <br />
        Arthroscopic Biceps Tenodesis (ABT) holds great promise for patients suffering from biceps
        tendonitis, offering faster recovery and less post-operative pain. However, it's
        astonishingly underutilized due to the challenges associated with the existing surgical
        tools. Our team sees an opportunity to revolutionize ABT by developing a compact and
        efficient system tailored to the arthroscopic biceps space. This innovation has the
        potential to impact both clinicians and patients significantly.
      </StyledSubtitle>
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
