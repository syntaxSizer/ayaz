import React from 'react';
import PropTypes from 'prop-types';
 import Card from '../../../layout/elements/Card';
import Image from '../../../layout/elements/Image';
import Link from 'next/link';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Button from '../../../layout/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import GoogleImg from '../../../assets/image/app/google.svg';
import iOSImg from '../../../assets/image/app/apple.svg';
import DribbleImg from '../../../assets/image/app/dribbble.svg';
import MailchimpImg from '../../../assets/image/app/mailchimp.svg';
import BackgroundImg from '../../../assets/image/app/partner-bg.png';
import { BannerSquareShape, BannerCircleShape } from '../app.style';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  cardStyle2,
  cardStyle3,
  cardStyle4,
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
              title={<Heading {...title} className="sub-title" />}
              description={<Text {...description} />}
              button={<Link href="/security" ><a><Button title="LEARN MORE" className="btnapp" {...btnStyle} className="cta-btn"/> </a></Link>}
            />
          </div>
          <div className="col" {...col} {...cardArea}>
            <CounterUpArea>
                <Card className="card one" {...cardStyle}>
                  <Link href="https://appdistribution.firebase.dev/i/p2z8mHke" ><a target="_blank" rel="nofollow" >
                    {/* <Image src={GoogleImg} alt="Android" className="dimg"/> */}
                    <Text content="Android Devices Download" className="text-title" /></a>
                  </Link>
                </Card>
                <Card className="card two" {...cardStyle2}>
                  <Link href="" ><a >
                    {/* <Image src={iOSImg} alt="iOS" className="dimg"/> */}
                    <Text content="Apple Devices Download" /></a>
                  </Link>
                </Card>
                <Card className="card three" {...cardStyle3}>
                  <Link href="" ><a >
                    {/* <Image src={DribbleImg} alt="Chrome" className="dimg"/> */}
                    <Text content="Web Based Technology" className="text-title" /></a>
                  </Link>
                </Card>
                <Card className="card four" {...cardStyle4}>
                  <Link href="" ><a >
                    {/* <Image src={MailchimpImg} alt="Windows" className="dimg"/> */}
                    <Text content="Windows Devices Download" /></a>
                </Link>
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
    width: [1, 1, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: '53px 40px 35px',
    background: '#fff',
  },
  // Partner section title default style
  title: {
    content: 'Securely involve everyone',
    fontSize: '4.0625rem',
    fontWeight: '800',
    color: '#000000',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: '100%',
    textAlign: ['left'],
  },
  // Partner section description default style
  description: {
    content:
    'Every child is born full of creativity. Nurturing it is one of the most important things educators do. Creativity makes your students better communicators and problem solvers. It prepares them to thrive in today’s world — and to shape tomorrow’s. Get everyone involed, send home updates—and check read receipts—to increase participation.',
    fontSize: '16px',
    color: '#000000',
    lineHeight: '2.1',
    mb: '33px',
    textAlign: ['left'],
  },
  sectionSubTitle: {
    content: 'TRUSTED',
    as: 'span',
    textAlign: 'left',
    fontSize: '16px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: '#000',
    mb: '10px',
    textAlign: ['left'],
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
