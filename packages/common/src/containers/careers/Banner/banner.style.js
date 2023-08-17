import styled from 'styled-components';

export const ContainerWrapper = styled.div`
display: flex;
max-width: 1300px;
flex-direction: column;
width: 100%;
animation: animation-os2n7p 0.6s cubic-bezier(0.165,0.84,0.44,1);
margin: auto;
@media  screen and (max-width: 1300px) {
  max-width: 616px;
}
@media  screen and (max-width: 767px) {
  padding-left: 20px;
  padding-right: 20px;
}
.innerNav {
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 37px;
}
.navSection {
  font-size: 14px;
  letter-spacing: -0.1px;
  color: #000;
  line-height: 1.5;
  padding-bottom: 1px;
  border-bottom: 4px solid #fff934;
  font-size: 16px;
}
.navMore {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
}
.link {
  font-size: 16px;
  letter-spacing: -0.1px;
  color: #8f95a3;
  line-height: 1.5;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 24px;
  }
}
.header-wrapper {
  margin-top: 104px;
  margin-bottom: 72px;
  font-size: 96px;
  letter-spacing: -5.2px;
  font-weight: 500;
  line-height: 1;
  @media  screen and (max-width: 900px) {
    margin-top: 121px;
    margin-bottom: 66px;
    font-size: 72px;
    letter-spacing: -3.9px;
  }
}
`;

export default ContainerWrapper;
