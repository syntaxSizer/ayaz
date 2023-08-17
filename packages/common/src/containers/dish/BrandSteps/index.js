import React from 'react';
 import Text from '../../../layout/elements/Text';
import Image from '../../../layout/elements/Image';
import Heading from '../../../layout/elements/Heading';
import { ContainerWrapper, Wrapper} from './style';


const BrandSteps = () => {
  return (
    <ContainerWrapper>
        <Heading className="sectionHeader" content={`How to place an order`}/>
        <Wrapper>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/1.png" alt="ayazona asset"  />
                <div className="textWrapper">
                    <Text className="header" content="Search for “food near me”"/>
                    <Text className="description" content="Enter your address to find restaurants near you, browse the menu online, and choose what to eat." />
                </div>
            </div>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/2.png" alt="ayazona asset"  />
                <div className="textWrapper">
                    <Text className="header" content="Add menu items to bag"/>
                    <Text className="description" content="Once you've filled your bag with yummy food and set your delivery time, pay and check out in seconds." />
                </div>
            </div>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/3.png" alt="ayazona asset"  />
                <div className="textWrapper">
                    <Text className="header" content="Get food delivery and eat"/>
                    <Text className="description" content="After the restaurant confirms your order, sit back and wait for delivery of your food - and when it arrives, dig in." />
                </div>
            </div>
        </Wrapper>
    </ContainerWrapper>
  );
};

export default BrandSteps;