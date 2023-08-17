import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../layout/elements/Button';
import TextLoop from 'react-text-loop';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { Container, SearchLevel } from './styles';
import Image from '../../../layout/elements/Image';
import arrowRight from '../../../assets/image/app/arrowRight.svg';
import Router from 'next/router';
import GPlaceSearchBox from './AutoComplete';
import { setCookie } from '../../../data/store/utils/cookie';
import dishes from 'common/src/data/dishes';
import { useSelector, useDispatch } from 'react-redux';
import { setPageParams } from '../../../data/store/reducers/cart/actions';
import Box from '../../../layout/elements/Box';

export async function getStaticProps() {
  return {
    props: {
      dishes,
    },
  };
}

const DomainSection = ({
  sectionWrapper,
  searchInput,
  row,
  mWidth,
  btnStyle,
  iconPositionLeft = true,
  iconImgSrc = null,
  iconStyle = {},
  title,
  searching,
  BtnComponent,
  extraStyles = {},
  onlySearchBar = false,
  showButton = true,
  setOnLocationChange,
  newLocation,
  newAddress = false,
  loopWords = [dishes.map(w => w.name.toLowerCase() + '?')],
  fixedWord = 'Need',
  helperText = 'Get high-quality food & groceries delivered within 30 minutes.',
}) => {
  const [location, setLocation] = useState({});

  const ButtonComponent = BtnComponent ? (
    BtnComponent
  ) : (
    <Icon icon={chevronRight} />
  );

  React.useEffect(() => {
    setOnLocationChange && setOnLocationChange(location);
  }, [location]);

  const dispatch = useDispatch();
  const store = useSelector(({ _proxy }) => _proxy);

  const setLocationCockie = optlocation => {
    if (!!optlocation && optlocation.lat) {
      if (newAddress) {
        setLocation(optlocation);
        return;
      }
      setCookie('_store_p', optlocation);
      dispatch(
        setPageParams({
          page: 'store',
          params: { ...store.feed, location: optlocation },
        })
      );
      Router.push('/store');
    }
  };

  return (
    <Box {...{ ...sectionWrapper, ...extraStyles }}>
      <Container style={{ alignItems: searching }}>
        {!onlySearchBar ? (
          <>
            <h2 className="webTitle">
              <span>{fixedWord} </span>
              <TextLoop delay={5} interval={5000}>
                {loopWords}
              </TextLoop>
            </h2>
            <h2 className="mobileTitle">You need it. We get it.</h2>
            <h1 className="description">{helperText}</h1>
          </>
        ) : (
          false
        )}
        <Box className={`search-input  ${mWidth}`} {...row} {...extraStyles}>
          <GPlaceSearchBox
            iconPositionLeft={iconPositionLeft}
            iconStyle={iconStyle}
            iconImgSrc={iconImgSrc}
            location={newLocation}
            setLocation={setLocationCockie}
            style={searchInput}
          />

          {showButton ? (
            BtnComponent ? (
              <Button
                onClick={setLocationCockie}
                title={
                  BtnComponent ? (
                    <ButtonComponent location={location} />
                  ) : (
                    <Icon icon={chevron} />
                  )
                }
                {...btnStyle}
              />
            ) : (
              <Button
                style={{
                  borderStartEndRadius: '12px',
                  borderEndEndRadius: '12px',
                  color: 'rgb(10, 173, 10)',
                }}
                onClick={setLocationCockie}
                title={<Image src={arrowRight} alt="ayazona asset" />}
                {...btnStyle}
              />
            )
          ) : (
            false
          )}
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  sectionWrapper: PropTypes.object,
  searchInput: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  btnStyle: PropTypes.object,
};

DomainSection.defaultProps = {
  sectionWrapper: {
    flexBox: true,
    as: 'section',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden',
    maxWidth: '1300px',
    width: '100%',
    mb: '96px',
  },
  row: {
    flexBox: true,
    mb: 0,
  },
  searchInput: {
    width: '100%',
    color: '#202125',
    fontSize: '15px',
    border: '0',
    transition:
      'box-shadow 150ms ease-in-out,border-color 150ms 150ms,-webkit-box-shadow 150ms ease-in-out',
    margin: '40px auto',
  },
  btnStyle: {
    fontSize: '14px',
    fontWeight: '500',
    p: '14px',
    marginLeft: '-5px',
    width: '65px',
    borderStartEndRadius: '12px',
    borderEndEndRadius: '12px',
    backgroundColor: 'transparent',
    marginLeft: '-66px',
  },
};
export default DomainSection;
