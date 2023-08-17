import React from 'react';
import PropTypes from 'prop-types';
 import Card from '../../../layout/elements/Card';
import Image from '../../../layout/elements/Image';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Button from '../../../layout/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import GoogleImg from '../../../assets/image/about/google.svg';
import iOSImg from '../../../assets/image/about/apple.svg';
import DribbleImg from '../../../assets/image/about/dribbble.svg';
import MailchimpImg from '../../../assets/image/about/mailchimp.svg';
import BackgroundImg from '../../../assets/image/about/partner-bg.png';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <PartnerHistoryWrapper id="partners">
      <Image
        src={BackgroundImg}
        className="backgroungImg"
        alt="backgroungImg"
      />
      <Container>
        <div className="row" {...row}>
          <div className="col" {...col} style={{ flexDirection: 'column' }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              button={<Button title="ABOUT" {...btnStyle} />}
            />
          </div>
          <div className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={GoogleImg} alt="Android" />
                <Text content="Android" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={iOSImg} alt="iOS" />
                <Text content="iOS" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={DribbleImg} alt="Chrome" />
                <Text content="Chrome" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={MailchimpImg} alt="Windows" />
                <Text content="Windows" />
              </Card>
            </CounterUpArea>
          </div>
        </div>
      </Container>
    </PartnerHistoryWrapper>
  );
};

// Partner style props
PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// Partner default style
PartnerHistory.defaultProps = {
  // Partner section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',

  },
  // Partner section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    background: '#fff',
  },
  // Partner section title default style
  title: {
    content: 'One education solution. All platforms.',
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '600',
    color: '#000000',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
    textAlign: ['center', 'left'],
  },
  // Partner section description default style
  description: {
    content:
      'From assignments to activities to closures, Lyoneer makes sure you get the information you need, when you need it, right on your phone..',
    fontSize: '16px',
    color: '#000000',
    lineHeight: '2.1',
    mb: '33px',
    textAlign: ['center', 'left'],
  },
  sectionSubTitle: {
    content: 'TRUSTED PLATFORMS',
    as: 'span',
    textAlign: 'left',
    fontSize: '18px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: 'rgb(186, 200, 209)',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;
