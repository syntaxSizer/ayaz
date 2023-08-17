import React from 'react';
 import { Wrapper, Section } from './styles';
import Text from '../../../layout/elements/Text';
import { Map } from 'common/src/containers/App/GeoLocation';

const Info = ({ isOpen, restaurant, data }) => {
  const { RestaurantTiming } = restaurant;
  const [isAvailable, setIsOpen] = React.useState(parseInt(data.open));
  let lastOrderTime = RestaurantTiming[
    RestaurantTiming.length - 1
  ].closing_time.split(':');
  lastOrderTime = `${lastOrderTime[0]}:${lastOrderTime[1]}`;
  return (
    <>
      {isOpen && (
        <Section>
          <div className="divide" />
          <Wrapper>
            <div className="timeData">
              <div className="header">
                <Text className="left" content="Open Hours" />
                <Text
                  className="right"
                  content={`${!isAvailable ? `Not available for orders`: `Order delivery until ${lastOrderTime} PM`}`}
                />
              </div>
              <div className="divide" />
              {RestaurantTiming.map(time => {
                let opening = time.opening_time.split(':');
                opening = `${opening[0]}:${opening[1]} AM`;
                let closing = time.closing_time.split(':');
                closing = `${closing[0]}:${closing[1]} PM`;
                return (
                  <div className="timeWrapper">
                    <span>{time.day}</span>
                    <span>{`${opening}-${closing}`}</span>
                  </div>
                );
              })}
            </div>
            <div className="mapView">
              <Map
                zoom={17}
                disableInterections={true}
                restaurants={[restaurant]}
                center={
                  !!restaurant
                    ? restaurant.RestaurantLocation
                    : { long: 11.5015246, lat: 3.8303023 }
                }
              />
            </div>
          </Wrapper>
        </Section>
      )}
    </>
  );
};

export default Info;
