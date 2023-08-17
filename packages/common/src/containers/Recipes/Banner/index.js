import React from 'react';
 import Wrapper from './style';
import styled from 'styled-components';


const DomainSection = ({post}) => {

  const Hero = styled.div`
  background-size: cover;
  z-index: 10;
  width: 100%;
  height: 565px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: height 1s cubic-bezier(0.77, 0, 0.175, 1);
  background-image: url(${post.feature_image});
  @media screen and (max-width: 600px) {
    height: 200px;
  }
  `
  return (
      <Wrapper>
        <Hero />
        <div className="blur"/>
        <div className="di">
          <div className="content-container">
            <div className="title-container">
              <ol className="breadcrumb">
                <li><a href="/recipes">All recipes</a></li>
                <li><a>Healthy food</a></li>
                <li><a>Weekly</a></li>
                <li><a>Quick ideas</a></li>
                <li><a>{post.title}</a></li>
              </ol>
              <h1 className="title"><span>{post.title}</span></h1>
              <p className="author-name">Quick • Easy • Affordable</p>
            </div>
          </div>
        </div>
      </Wrapper>
  );
};

export default DomainSection;