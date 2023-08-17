import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import Logo from '../../../layout/elements/UI/Logo';
import Container from '../../../components/UI/Container';
import FooterWrapper, {
  List,
  ListItem,
  HeaderSection,
  TermsSection,
} from './footer.style';
import logoSrc from '../../../assets/image/app/ayazona.svg';
import seedlingImg from '../../../assets/image/app/seedling.svg';
import footerLogo from '../../../assets/image/app/footerLogo.svg';
import freshLogo from 'common/src/assets/image/fresh/ayazona.svg';

import { essentialsData } from '../../../data/App/Footer';

const Footer = ({
  title,
  intro,
  outro,
  row,
  col,
  col2,
  rowOne,
  rowTwo,
  titleStyle,
  logoStyle,
  textStyle,
  copyrightMenu,
}) => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <span className="aboutDescription">
      {' '}
      {outro} Want to make a difference? Try our{' '}
      <a style={{ color: '#fff', textDecoration: 'underline' }} href="/ignite">
        Food Rescue Program
      </a>
      .
    </span>
  );
  const linkName = readMore ? 'Read Less' : 'Read More';
  return (
    <FooterWrapper>
      <Container>
        <div>
          <div className="rowOne">
            <div className="column logo">
              <Logo href="/" logoSrc={logoSrc} logoStyle={logoStyle} />
            </div>
            {essentialsData.menuWidget.map(c => (
              <div
                className={`${c.map(widget =>
                  widget.style ? 'social' : ''
                )} column`}
              >
                {c.map(widget => (
                  <div className="innerCol" key={widget.id}>
                    <Heading content={widget.title} {...titleStyle} />
                    <List>
                      {widget.menuItems.map(item => (
                        <ListItem key={`list__item-${item.id}${widget.id}`}>
                          <Link href={item.url}>
                            <a className="ListItem">
                              {item.logo ? (
                                <Image
                                  {...{ display: 'initial' }}
                                  src={freshLogo}
                                />
                              ) : null}
                              {item.text}
                              {item.icon ? (
                                <Image
                                  {...{ display: 'initial' }}
                                  src={seedlingImg}
                                />
                              ) : null}
                            </a>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                ))}
              </div>
            ))}
            <div className="privacy">
              <a className="lynk" href="/privacy#kenyan">
                <span>Privacy Information for Kenyans</span>
              </a>
            </div>
          </div>

          <div>
            <HeaderSection>
              <Heading
                className="subheader"
                style={{ margin: '0 0 8px' }}
                content={'WHERE WE DELIVER'}
              />
            </HeaderSection>
            <div className="rowOne">
              {essentialsData.locationWidget.map(c => (
                <div className="column">
                  {c.map(widget => (
                    <div className="innerCol" key={widget.id}>
                      <List>
                        {widget.menuItems.map(item => (
                          <ListItem key={`list__item-${item.id}${widget.id}`}>
                            <Link href={item.url}>
                              <a className="ListItem">{item.text}</a>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div {...rowTwo} className="copyrightClass">
            <div {...copyrightMenu} className="copyrightMenu">
              <Text className="aboutHeader" content={title} />
              <p className="aboutDescription">
                {intro}
                {readMore && extraContent}
                <a
                  className="read-more-link"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {linkName}
                </a>
              </p>
              <TermsSection>
                <Image src={footerLogo} />
              </TermsSection>
              <Link href="/terms">
                <a>
                  <Text content="TERMS" {...textStyle} />
                </a>
              </Link>
              <Link href="/privacy">
                <a>
                  <Text content="PRIVACY" {...textStyle} />
                </a>
              </Link>
              <Link href="/terms">
                <a>
                  <Text content="© 2022 AYAZONA" {...textStyle} />
                </a>
              </Link>
            </div>
          </div>
          {/* End of footer List column */}
        </div>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  rowOne: PropTypes.object,
  rowTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    m: 'auto',
    padding: '0 30px',
  },
  // Footer col one style
  rowTwo: {
    mb: ['0px'],
    flexBox: true,
    flexWrap: 'wrap',
    width: ['100%'],
  },

  // Footer col two style
  rowOne: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
    pb: '48px',
  },
  // Footer col default style
  col: {
    width: ['50%', '50%', '20%'],
    pl: '0px',
    pr: '15px',
  },
  col2: {
    width: ['50%', '50%', '25%'],
    pl: '0px',
    pr: '15px',
  },
  // widget title default style
  titleStyle: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    mt: '0px',
    mb: '0px',
  },
  // Default logo size
  logoStyle: {
    width: 'auto',
    mb: ['15px', 0],
  },
  // widget text default style
  textStyle: {
    color: '#8F95A3',
    fontSize: '12px',
    mb: '10px',
    mr: '10px',
    m: '0 5px',
    letterSpacing: '0.1em',
    fontWeight: '500',
    display: 'initial',
  },
  copyrightMenu: {
    flexBox: true,
    flexWrap: 'wrap',
    fontWeight: '500',
  },
  copyright: {
    ml: [0, 0, 0, 'auto', 'auto'],
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mt: '3px',
    fontWeight: '500',
  },
};

export default Footer;
