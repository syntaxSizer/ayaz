import React from 'react';
 import Text from '../../../layout/elements/Text';
import Image from '../../../layout/elements/Image';
import { ContainerWrapper, Wrapper} from './style';


const Steps = () => {
  return (
    <ContainerWrapper>
        <Wrapper>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/1.png" alt="ayazona asset"  />
                <div className="textWrapper">
                    <Text className="header" content="Get where"/>
                    <Text className="description" content="Browse menus from your affordable local eateries." />
                </div>
            </div>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/2.png"  alt="ayazona asset" />
                <div className="textWrapper">
                    <Text className="header" content="Get what"/>
                    <Text className="description" content="Select what you want to eat. Submit your order." />
                </div>
            </div>
            <div className="container">
                <Image className="imageWrapper" src="https://cdn.ayazona.com/web-assets/img/3.png" alt="ayazona asset"  />
                <div className="textWrapper">
                    <Text className="header" content="#getAyazona"/>
                    <Text className="description" content="Get the door, recieve your order and enjoy your food!" />
                </div>
            </div>
        </Wrapper>
    </ContainerWrapper>
  );
};

export default Steps;