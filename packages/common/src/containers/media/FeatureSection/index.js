import React from 'react';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';
import Button from '../../../layout/elements/Button';


const FeatureSection = () => {
  return (
    <FeatureSectionWrapper id="services">
      <Container>
        <div className="row">
          <div className="rowInnerBlock">
            <Heading className="title" content="About Ayazona."/>
            <Text content="Ayazona is a Kenyan startup making access to food more affordable for everyone in cities across Kenya with a dream to expand throughout Africa. The Ayazona app connects the consumers with the affordable eateries in their localities. Team Ayazona is starting by empowering communities to affordably shop locally with less to no wait times, prevent food wastes, and empower businesses through our API to offer delivery, but we see this as just the beginning of connecting Africa with the emerging possibilities."/>
          </div>
          <div {...{mt: '70px'}} className="rowInnerBlock">
            <Text content="Ayazona believes that our African cities, our towns, our communities are our responsibility to build. Ayazona is transforming the way food and merchandise is moved around cities across Africa - by making it more affordable to our customers, while helping local corner kitchen compete in the market." />
            <Link href="/contact">
              <Button className="btn" title="CONTACT US"/>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="rowInnerBlock">
            <Heading className="download-title" content="Download Media Kit &amp; Brand Assets."/>
            <Text content="The media kit contains logos and brand guidelines." />
            <Link href="https://cdn.ayazona.com/web-assets/media/ny/Ayazona-MediaKit.zip">
              <Button className="btn" title="DOWNLOAD ZIP"/>
            </Link>
          </div>
          <div className="rowInnerBlock">
            <Image src="https://cdn.ayazona.com/web-assets/media/ny/media-asset.png" alt="ayazona asset" />
          </div>
        </div>
      </Container>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
