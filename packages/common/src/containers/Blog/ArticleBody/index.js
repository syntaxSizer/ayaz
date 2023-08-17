import React from 'react';
import Text from '../../../layout/elements/Text';
import FeatureSectionWrapper from './style';
import { formateDate } from 'common/src/data/blog';
import Image from '../../../layout/elements/Image';


const Body = ({ post }) => {
  return (
    <FeatureSectionWrapper>
      <Image className="postImg" alt="media" src={post.feature_image} />
      <h1 className="postTitle">{post.title}</h1>
      <Text
        className="date"
        content={`${formateDate(post.published_at || post.created_at)} • ${
          post.reading_time
        } MIN READ`}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </FeatureSectionWrapper>
  );
};

export default Body;
