import React from 'react';
import PropTypes from 'prop-types';
 import Container from '../../../components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from '../../../data/App/TestimonialSlider';
import SliderDes from '../sliderDescription';
import Image1 from '../../../assets/image/app/6.png';
import Image2 from '../../../assets/image/app/2.jpg';
import Image3 from '../../../assets/image/app/5.jpg';
import Image4 from '../../../assets/image/app/testi.jpg';
import Image5 from '../../../assets/image/app/1.jpeg';

const images = [
  {
    thumbnail: `${Image1}`,
    description: <SliderDes data={data.testimonials[0]} />,
  },
  {
    thumbnail: `${Image2}`,
    description: <SliderDes data={data.testimonials[1]} />,
  },
  {
    thumbnail: `${Image3}`,
    description: <SliderDes data={data.testimonials[2]} />,
  },
  {
    thumbnail: `${Image4}`,
    description: <SliderDes data={data.testimonials[3]} />,
  },
  {
    thumbnail: `${Image5}`,
    description: <SliderDes data={data.testimonials[4]} />,
  },
];

const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle }) => {
  return (
    <div
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
        <div className="testimonialDesWrapper">
          <ImageGallery
            items={images}
            originalClass="Testimonial-img"
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      </Container>
    </div>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    content: 'CLIENT TESTIMONIAL',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#002524',
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
