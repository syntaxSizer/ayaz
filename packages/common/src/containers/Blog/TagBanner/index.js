import React from 'react';
import Link from 'next/link';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import Wrapper from './style';
import { formateDate } from 'common/src/data/blog';

const DomainSection = ({post, tag=null}) => {
  return (
    <Wrapper>
        <div>
          <h1 className="tagHeader">{tag[0].toLocaleUpperCase() + tag.substr(1)}</h1>
        </div>
    </Wrapper>
  );
};

export default DomainSection;