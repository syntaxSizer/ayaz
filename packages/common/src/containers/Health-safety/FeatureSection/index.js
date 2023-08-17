import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureBlock from '../../../components/FeatureBlock';
import data from '../../../data/About/pageContent';
import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';
import Button from '../../../layout/elements/Button';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  a {
    text-decoration: underline;
  }
  background-color: yellow;
  color: #202125;
`;
const FeatureSection = ({
  row,
  col,
  paragraph,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <Container>
        <div className="mainBox">
          <div className="callToAction">
            <Heading content="Stay Safe" />
            <Text content="Protect yourself and others during this unprecedented time." />
            <Link href="https://help.ayazona.com" target="_blank" rel="nofollow">
              <Button title="Learn more" />
            </Link>
          </div>
          <div {...row} className="row">
            <div>
              <Heading {...{fontSize: 40, textAlign: "center"}}content={'Our measures to keep you safe | COVID-19'} />
              <p style={paragraph}>
              Ayazona is following closely and implementing local governments guidelines to stay abreast of the changes taking place due to COVID-19. You might have some questions about keeping your food and products safe during this unprecedented time.
              </p>
              <p style={paragraph}>
              Our number one priority has, and always will be, the health and wellness of our fleet, restaurants, stores, and customers. This is why we take CDC compliance seriously and regularly adhere to their latest guidance on sanitation and cleanliness.
              </p>
            </div>
           
              <div>
                <Heading content="Important things to know." />
                  <p style={paragraph}>
                    <b>
                      Your food will be delivered safely: </b> COVID-19 is not foodborne or food-transmitted, as confirmed by numerous health specialists. We have updated our platform to limit human-to-human contact during food delivery, by introducing cashless measures and safe drop off mechanisms. Now whatever you order can be conveniently and safely left at your door. To use this new feature, download the latest app version order as normal and select your delivery preference before checking out. We are continuing to work with our Ayazona Fleet, restaurants, and stores to share the latest guidance from the CDC and ensure proper food handling, temperature control, and efficient deliveries all of which are critical to how we responsibly operate our platform. We are working in partnership with local health officials to balance new guidance with expanded delivery and pickup options. Many of you are working remotely or dealing with school closures. That’s why we're offering reduced delivery fees—often during peak lunch hours—making on-demand delivery more accessible during this challenging time.
                    </p>
                  <p style={paragraph}>
                    <b>Your Ayazona Fleet is getting support: </b>
                     We have launched Ayazona Fleet Health Measures. These are health measures to help protect the fleet members during the delivery period. We are also working with restaurants and stores to ensure that the fleet members stay safe during this difficult time. Where necessary we have put in place measures to prevent further operations, if these operations are deemed to endanger the lives of the customers, the fleet members or the teams working at the restaurants and stores. We are adapting to the needs of our Ayazona Fleet by gathering direct feedback from on-demand workers. And are continuing to bring new programs to support them online, in real-time.
                  </p>
                  <p style={paragraph}>
                    <b>Your meals are being prepared with care: </b>
                    Local government continue to advise restaurants to prepare your delivery and pickup orders consistent with the Department of Public Health’s protocols and guidelines. Our <a href="/ignite">Ignite Labs</a> team provides a way for restaurants with excess food to donate leftovers to local shelters, students, and the elderly.
                  </p>
                  <p style={paragraph}>We expect the situation to continue to evolve and we will keep you in the loop along the way. By coming together and following trusted guidelines and recommendations, we can all play an important part in keeping our Ayazona community healthy and safe while helping support your local restaurants and businesses.</p>
              </div>
          </div>
        </div>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  paragraph: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['30px', '30px', '30px', '56px'],
  },
  paragraph: {
    margin: '0 0 24px',
    letterSpacing: '.14px',
    color: '#8f95a3',
    lineHeight: '1.6',
  },
  // sub section default style
  sectionSubTitle: {
    content: 'MISSION',
    as: 'span',
    display: 'block',
    fontSize: '18px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: 'rgb(186, 200, 209)',
    mb: '10px',
    textAlign: ['center'],
  },
  // section title default style
  sectionTitle: {
    content: 'The values that guide everything we do',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    textAlign: ['center'],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    width: '620px',
  },
  // feature col default style
  col: {
    width: [1, 1 / 1.5],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['20px', '20px', '20px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    border: '1px solid rgba(36, 74, 117,0.1)',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '600',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48',
  },
};

export default FeatureSection;
