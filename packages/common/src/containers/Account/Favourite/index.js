import React from 'react';
import Container from './style';
import Divider from 'common/src/containers/restaurants/Divider';
import Text from '../../../layout/elements/Text';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../../data/Account'
import Card from './Card'
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
  .images {
    background-color: rgb(247,247,248);
    object-fit: cover;
    border-radius: 12px;
    transition: opacity 0.4s linear 0s;
  }
  .cardWrapper {
    background: #fff;
    margin-top: 55px;
    border-radius: 0;
    margin-left: 36px;
    width: calc(33.33333333333333% - 24px);
    flex: 0 1 calc(33.33333333333333% - 24px);
    transition: all .25s;
    cursor: pointer;

    :nth-of-type(3n + 1) {
      margin-left: 0;
    }
    :hover {
      box-shadow: 0 0 0 8px #f2f2f5;
      border-radius: 12px;
      background-color: #f2f2f5;
    }
    a {
      color: #202125;
      display: unset;
    }
    .info {
      overflow: hidden;
      
      padding: 10px 0 0;
      width: auto;
    }
    .rest-badges {
      display: flex;
      flex-wrap: wrap;
    }
    .restaurant-info__badge {
      max-width: calc(100% - 16px);
      height: 20px;
      margin-top: 8px;
      padding: 2px 4px;
      border-radius: 0px;
      background-color: rgb(242, 242, 245);
      color: rgb(94, 94, 97);
      font-weight: normal;
      font-size: 13px;
      line-height: 1.275;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      margin: 8px 8px 0 0;
      margin-right: 0;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .rest-badge__icon {
      width: 14px;
      height: 16px;
      margin-right: 4px;
    }
    .text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      letter-spacing: 0.14px;
      letter-spacing: 0.14px;
      font-weight: 400;
      line-height: 24px;
      color: rgb(143, 149, 163);
      font-size: 15px;
      line-height: 1.335;
      margin: 0;
    }
    .header {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      font-weight: 600;
      font-size: 17px;
      line-height: 1.295;
      margin-bottom: 5px;
    }

    @media screen and (max-width: 1059px) and (min-width: 768px) {
      width: calc(50% - 12px);
      flex: 0 0 calc(50% - 12px);
      margin-left: 24px !important;
      :nth-of-type(2n + 1) {
        margin-left: 0 !important;
      }
    }
    
    @media screen and (max-width: 767px) {
      flex: 1 1 100%;
      margin-left: 8px;
      width: calc(100% - 16px);
      margin-top: 25px;
      margin-left: 0 !important;
      :nth-of-type(2n + 1) {
        margin-left: 0 !important;
      }
    }
  }
`

const Section = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user, favouriteItems } = useSelector(({auth})=> auth);

    React.useEffect(()=>{
        isLoggedIn && dispatch(fetchFavorites(user.user_id))
    }, []);
    
    return (
        <Container>
            <div className="sectionHeader">
              <div className="innerSection">
                <div className="mainHeader">
                  <h1 className="title">My Favorites</h1>
                </div>
              </div>
            </div>
            <div className="tabWrapper">
            <Wrapper>

              {!!favouriteItems && favouriteItems.length ? <>{
                favouriteItems.map(r=>(<Card restaurant={r} />))}</>
                :<div style={{paddingTop: '50px', paddingBottom: '50px', textAlign: 'center'}} className="emptyWrapper textCenter">
                    <Text className="noHeader" content="You haven‘t set any favorites yet!" />
                    <Text className="noDescription" content="Your favorites will appear here." />
                </div>}
            </Wrapper>
            </div>
        </Container>
    )
}
export default Section