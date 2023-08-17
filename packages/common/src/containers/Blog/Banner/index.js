import React from 'react';
import Link from 'next/link';
 import Text from '../../../layout/elements/Text';
import Image from 'next/image';
import Wrapper from './style';
import { formateDate } from 'common/src/data/blog';

const DomainSection = ({ post }) => {
  return (
    <a href={`/blog/${post.slug}`}>
      <Wrapper>
        <div className="textWrapper">
          <div>
            <h1 className="header">{post.title}</h1>
            <Text className="textBody" content={post.excerpt} />
            <Text
              className="date"
              content={`${formateDate(
                post.published_at || post.created_at
              )} • ${post.reading_time} MIN READ`}
            />
          </div>
          <Link href={`/blog/${post.slug}`}>
            <button className="btn">Read More</button>
          </Link>
        </div>
        <div className="img">
          <Image
            className="image"
            alt="media"
            layout="fill"
            src={post.feature_image}
          />
        </div>
      </Wrapper>
    </a>
  );
};

export default DomainSection;
