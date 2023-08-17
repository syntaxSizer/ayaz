import React from 'react';
import PropTypes from 'prop-types';
 import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';

import ContainerWrapper from './banner.style';
import imageSrc from '../../../assets/image/app/seedling.svg'

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <ContainerWrapper>
      <div className="innerNav">
        <nav>
          <span className="navActive">
            <span>Ignite Labs</span>
          </span>
        </nav>
        <nav>
          <ul className="navRightItems">
            <li><a><span>Giving Back</span></a></li>
            <li><a><span>Blog</span></a></li>
            <li><a><span>Contacts</span></a></li>
          </ul>
        </nav>

      </div>
    </ContainerWrapper>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object,
};

DomainSection.defaultProps = {
};

export default DomainSection;
