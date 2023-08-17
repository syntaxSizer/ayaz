import React, { useState } from 'react';
import Container from './style';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../../../data/store/reducers/auth/actions';


const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  @media screen and (max-width: 990px) {
    padding-top: 0;
  }
  .anime {
    height: 250px;
    @media screen and (max-width: 667px) {
      height: 180px;
    }
  }
`

const Section = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(({auth})=> auth);

    React.useEffect(()=>{
        isLoggedIn && dispatch(fetchFavorites(user.user_id))
    }, []);
    const [copySuccess, setCopySuccess] = useState('');
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);

    const copyToClipBoard = async copyMe => {
      try {
        await navigator.clipboard.writeText(copyMe);
        setCopySuccess('Copied');
      } catch (err) {
        setCopySuccess('');
      }
    };

    const How = () => {
      return (
        <div className="how">
          <button className="butt"><span>How do referral codes work?</span></button>
        </div>
      );
    };

    const ref = React.useRef(null);
    React.useEffect(() => {
      import('@lottiefiles/lottie-player');
    });
    
    return (
        <Container>
            <div className="sectionHeader">
              <div className="innerSection">
                <div className="mainHeader">
                  <h1 className="title">Earn Ayazona Credits</h1>
                  <p className="description">Give Ayazona discounts to your friends and family</p>
                </div>
              </div>
            </div>
            <div className="tabWrapper">
            <Wrapper>
              <div style={{paddingBottom: '50px', textAlign: 'center'}} className="emptyWrapper textCenter">
                <lottie-player
                  id="secondLottie"
                  ref={ref}
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets8.lottiefiles.com/packages/lf20_moQNlY.json"
                  class="anime"
                />
                <div className="content">
                  <span className="count">1</span>
                  <span className="text">Copy your Ayazona code and share it with your friends.</span>
                </div>
                <div className="content">
                  <span className="count">2</span>
                  <span className="text">Your friends will get <strong>KES 150</strong> in Ayazona credits when they use your code to join Ayazona and place their first order.</span>
                </div>
                <How />
                <button className="referral">
                  <div className="innermod">
                    <div className="code">
                      <span className="codeName">Your referral code</span>
                      <span className="actualCode">{user.referral_code}</span>
                    </div>
                    <div onClick={() => copyToClipBoard(user.referral_code)} className="precopy">
                      <div className="copied"><span>{copySuccess}</span></div>
                      <div onClick={onClick} className="copy">
                        { showResults ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path fill="#1fc70a" d="M9.5 18a.502.502 0 01-.354-.146l-6-6a.502.502 0 01.708-.708L9.5 16.793 20.146 6.146a.502.502 0 01.708.708l-11 11A.502.502 0 019.5 18"></path><path fill="none" d="M-3-6h24v24H-3z"></path></svg> : <svg viewBox="0 0 19 20" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 9h-3a.5.5 0 000 1H18v9H1v-9h2.5a.5.5 0 000-1h-3a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zM5.187 5.891a.502.502 0 01-.078-.704l4-5c.005-.005.014-.007.019-.014A.495.495 0 019.5 0c.15 0 .28.069.372.173.005.007.014.009.019.014l4 5A.502.502 0 0113.5 6a.5.5 0 01-.391-.188L10 1.926V14.5a.5.5 0 01-1 0V1.926L5.891 5.812a.502.502 0 01-.704.079z" fill="currentColor" fill-opacity="0.64"></path></svg> }
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </Wrapper>
            </div>
        </Container>
    )
}
export default Section