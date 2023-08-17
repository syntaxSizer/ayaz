import React from 'react';
import { ReviewsCardsWrapper } from './style';
import choose from 'common/src/assets/image/app/choose.png';
import monitor from 'common/src/assets/image/app/monitor.jpg';
import delivery from 'common/src/assets/image/app/delivery.jpg';
import { toast, Zoom } from 'react-toastify';
import Box from '../../../layout/elements/Box';

const ReviewsCards = () => {
  const alertUser = message =>
    toast.info(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      transition: Zoom,
      delay: 800,
    });
  return (
    <div>
      <ReviewsCardsWrapper id="services">
        <h2 className="title">Happy community</h2>
        <Box className="cardsHolder">
          <Box className="card" style={{ background: '#b0f0e9' }}>
            <Box className="top">
              <p className="info">
                I love that I can use the same service for my food and grocery
                order while giving back to the community!
              </p>
              <cite>~ Christine</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#ebcfd0' }}>
            <Box className="top">
              <p className="info">
                One of the best delivery service I’ve ever used in Nairobi,
                friendly riders, super fast, and good prices!
              </p>
              <cite>~ Juma</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#c9e8c1' }}>
            <Box className="top">
              <p className="info">
                Guys I have been couple of food deliveries and to be honest I
                like Ayazona, I love the app it's easy to use!
              </p>
              <cite>~ Youngjedi2579</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#e7ece6' }}>
            <Box className="top">
              <p className="info">
                Very good and fast service. The app interface is nice and clean,
                user friendly. Overall very good 5 🌟
              </p>
              <cite>~ Benedict</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#f5f0b2' }}>
            <Box className="top">
              <p className="info">
                So easy, and on the go! Love their local produce and riders
                always arrive with a smile. Couldn’t ask for more!
              </p>
              <cite>~ MaryAnne</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#b0f0e9' }}>
            <Box className="top">
              <p className="info">
                Fair prices and the food quality is superb. Easy to use and
                would definitely recommend.
              </p>
              <cite>~ Victor</cite>
            </Box>
          </Box>
          <Box className="card" style={{ background: '#c9e8c1' }}>
            <Box className="top">
              <p className="info">
                Affordable and better quality than my local shop. The app is
                also easy to use and works smoothly.
              </p>
              <cite>~ Mercy</cite>
            </Box>
          </Box>
        </Box>
      </ReviewsCardsWrapper>
    </div>
  );
};

export default ReviewsCards;
