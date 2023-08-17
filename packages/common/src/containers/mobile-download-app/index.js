import React from 'react';
import Heading from '../../layout/elements/Heading';
import Link from '../../layout/elements/Link';
import { DownloadAppBanner } from './mobileDownloadApp.style';

import android from '../../assets/image/app/android.svg';
import apple from '../../assets/image/app/appple.svg';

const MobileDownloadApp = ({ titleStyle}) => {
  return (
    <div>
      <DownloadAppBanner>
        <Heading
          className="header"
          content={'Download Ayazona'}
          {...titleStyle}
        />
        <div className="linksWrapper">
          <Link href="#"><button className="apple"><img src={apple}  alt="ayazona asset" /></button></Link>
          <Link href="#"><button className="android"><img src={android}  alt="ayazona asset" /></button></Link>
        </div>
      </DownloadAppBanner>
    </div>
  );
};

export default MobileDownloadApp;
