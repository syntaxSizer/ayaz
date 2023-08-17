import styled from 'styled-components';

const EssentialsWrapper = styled.div`
max-width: 1300px;
width: 100%;
background: #fff;
margin: 0 auto;
@media screen and (max-width: 1350px) {
  padding 60px 40px;
}
@media screen and (max-width: 800px) {
  padding 60px 15px;
}
.groceries {
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
.groceriesInner {
  align-items: center;
  height: 326px;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
}
.groceriesInfo {
  max-width: calc(50% - 16px);
  align-items: flex-start;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding-top: 28px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.groceriesTitle {
  font-size: 48px;
  letter-spacing: -1.8px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
  color: #000;
  width: 100%;
  margin: 0;
  @media screen and (max-width: 768px) {
    letter-spacing: -2.2px;
    text-align: center;
    color: #000;
    width: 100%;
    font-size: 32px;
    line-height: 40px;
  }
}
.groceriesCta {
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  transition: background-color 0.2s ease-in-out,color 0.2s ease-in-out;
  border-radius: 28px;
  background-color: #002524;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 48px;
  @media screen and (max-width: 768px) {
    width: 265px;
  }
}
.text {
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 23px;
  margin-top: 8px;
  line-height: 26px;
  color: #8F95A3;
  text-align: left;
  margin-top: 13px;
  @media screen and (max-width: 768px) {
    letter-spacing: 0.14px;
    font-weight: 400;
    margin-bottom: 23px;
    margin-top: 8px;
    line-height: 26px;
    color: #8F95A3;
    text-align: center;
  }
}
.sample {
  width: 50%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  li {
    flex: 0 0 33.333333%;
    padding: 8px;
    width: 152px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      padding: 6px;
      width: 114px;
    }
    a {
      background-color: #f7f7f8;
      border-radius: 12px;
      display: block;
      padding: 8px;
      transition: all .3s cubic-bezier(0.25,0.1,0.25,1);
      :hover {
        transform: scale(1.05);
      }
    }
  }
}
.top {
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
.extra {
  height: auto;
  padding-bottom: 100%;
}
.item {
  opacity: 1;
  position: absolute;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s linear 0s;
}
`;

export { EssentialsWrapper };
