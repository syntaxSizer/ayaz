import React from 'react';
import Wrapper from './style.js';
import Box from '../../../../layout/elements/Box';
import Heading from '../../../../layout/elements/Heading';
import Link from '../../../../layout/elements/Link';
import styled from 'styled-components';
import API from 'common/src/data/restaurants';
import Image from 'next/image';
import { scroll } from '../../../../utils';
import ContentLoader from 'react-content-loader'

// I am not happy about the media query on this...
const ImageContainer = styled.div`
  background-color: transparent;
  transition: opacity 0.4s linear 0s;
  position: relative;
  height: 355px;
  width: 100%;
  @media screen and (max-width: 1300px) and (min-width: 1280px) {
    height: 335px;;
  }
  @media screen and (max-width: 1280px) and (min-width: 1250px) {
    height: 325px;
  }
  @media screen and (max-width: 1250px) and (min-width: 1200px) {
    height: 312px;
  }
  @media screen and (max-width: 1200px) and (min-width: 1145px) {
    height: 302px;
  }
  @media screen and (max-width: 1145px) and (min-width: 1100px) {
    height: 285px;
  }
  @media screen and (max-width: 1101px) and (min-width: 1059px) {
    height: 270px;
  }
  @media screen and (max-width: 1059px) and (min-width: 980px) {
    height: 260px;
  }
  @media screen and (max-width: 980px) and (min-width: 970px) {
    height: 255px;
  }
  @media screen and (max-width: 970px) and (min-width: 940px) {
    height: 248px;
  }
  @media screen and (max-width: 940px) and (min-width: 920px) {
    height: 240px;
  }
  @media screen and (max-width: 920px) and (min-width: 901px) {
    height: 235px;
  }
  @media screen and (max-width: 900px) and (min-width: 850px) {
    height: 220px;
  }
  @media screen and (max-width: 850px) and (min-width: 835px) {
    height: 215px;
  }
  @media screen and (max-width: 835px) and (min-width: 800px) {
    height: 205px;
  }
  @media screen and (max-width: 800px) and (min-width: 768px) {
    height: 197px;
  }
  @media screen and (max-width: 767px) and (min-width: 755px) {
    height: 415px;
  }
  @media screen and (max-width: 756px) and (min-width: 735px) {
    height: 405px;
  }
  @media screen and (max-width: 736px) and (min-width: 715px) {
    height: 390px;
  }
  @media screen and (max-width: 716px) and (min-width: 680px) {
    height: 375px;
  }
  @media screen and (max-width: 680px) {
    height: 360px;
  }
  @media screen and (max-width: 655px) {
    height: 350px;
  }
  @media screen and (max-width: 640px) {
    height: 335px;
  }
  @media screen and (max-width: 640px) {
    height: 320px;
  }
  @media screen and (max-width: 580px) {
    height: 290px;
  }
  @media screen and (max-width: 540px) {
    height: 265px;
  }
  @media screen and (max-width: 500px) {
    height: 260px;
  }
  @media screen and (max-width: 450px) {
    height: 230px;
  }
  @media screen and (max-width: 441px) {
    height: 210px;
  }
  @media screen and (max-width: 375px) {
    height: 185px;
  }
  @media screen and (max-width: 350px) {
    height: 155px;
  }
  .images {
    background: #fafafa;
    object-fit: contain;
  }
`;

export default ({ header, longLat }) => {
  let mounted = false;
  const [sliders, setPromos] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() => {
    mounted = true;
    setIsloading(true);

    API.getPromoSlides(longLat).then(data => {
      if (mounted) {
        setPromos(data.map(r => r.AppSlider));
        setIsloading(false);
      }
    });
    return _ => {
      mounted = false;
    };
  }, []);

  const reference = React.useRef(null);

  return (
    <Wrapper>
     {sliders.length > 0 ? (
        <div>
          <div>
            <div className="headerWrapper">
              <div className="track" />
              <Heading className="heading" content={header} />
              <div className="info">
                Local affordable restaurants, cuisines, or dishes.
              </div>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <div className="left" onClick={()=> scroll("left", reference)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{flexShrink: '0'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2071 7.29289C14.5976 7.68342 14.5976 8.31658 14.2071 8.70711L10.9142 12L14.2071 15.2929C14.5976 15.6834 14.5976 16.3166 14.2071 16.7071C13.8166 17.0976 13.1834 17.0976 12.7929 16.7071L8.79289 12.7071C8.60536 12.5196 8.5 12.2652 8.5 12C8.5 11.7348 8.60536 11.4804 8.79289 11.2929L12.7929 7.29289C13.1834 6.90237 13.8166 6.90237 14.2071 7.29289Z" fill="#191919"></path></svg>
            </div>
          <div ref={reference} className="sliderWrapper">
          {isLoading ? (
              <>
              <ContentLoader className="cardWrapper" height={350}>
                <rect x="3" y="3" rx="0" ry="0" width="500" height="320" />
                <rect x="6" y="190" rx="0" ry="0" width="119" height="9" />
                <rect x="4" y="215" rx="0" ry="0" width="271" height="9" />
              </ContentLoader>
              <ContentLoader className="cardWrapper" height={350}>
                <rect x="3" y="3" rx="0" ry="0" width="500" height="320" />
                <rect x="6" y="190" rx="0" ry="0" width="119" height="9" />
                <rect x="4" y="215" rx="0" ry="0" width="271" height="9" />
              </ContentLoader>
              </>
            ) : (
            (sliders || []).map(slider => {
              return (
                <div className="cardWrapper">
                  <Link href={`/${slider.url}?id=c${slider.id}327hd${slider.id}036TdCJTIyYWRkcmV${slider.id}zcyUyMiUzQSUyMlNhdh${slider.id}eiunUcslgdaduwqyBUnlPe${slider.id}hbewlnfoeowubIExiqonufThf`}>
                    <ImageContainer>
                      <Image
                        className="images"
                        layout="fill"
                        src={`https://r.cdn.ayazona.com/${slider.image}`}
                        alt={''}
                      />
                    </ImageContainer>
                  </Link>
                </div>
              );
            })
            )}
            </div>
            <div className="right" onClick={()=> scroll("right", reference)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{flexShrink: '0'}}><path fill-rule="evenodd" clip-rule="evenodd" d="M9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.3946 11.4804 15.5 11.7348 15.5 12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071Z" fill="#191919"></path></svg>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </Wrapper>
  );
};
