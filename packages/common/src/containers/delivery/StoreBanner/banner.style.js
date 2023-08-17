import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .main {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    ul {
      margin-bottom: -12px;
      margin: 0px;
      padding: 0px;
      padding-top: 32px;
      list-style: none;
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
      @media screen and (max-width: 767px) {
        flex-wrap: nowrap;
      }
      li {
        margin: 0;
        margin-bottom: 12px;
        a {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          margin-right: 12px;
          border-radius: 12px;
          background: 0px center;
          border: 2px solid rgb(246, 247, 248);
          background-color: rgb(246, 247, 248);
          height: 56px;
          padding: 8px;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          outline: none !important;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          text-align: left;
        }
      }
    }
  }
  .image {
    height: 40px;
    width: 40px;
    margin-right: 12px;
    border-radius: 8px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    flex-wrap: wrap;
  }
  .img {
    width: 36px;
    height: 36px;
    display: inline-block;
    max-width: 100%;
    transform: translate3d(0px, 0px, 0px);
    object-fit: contain;
    object-position: center center;
    flex-shrink: 0;
  }
  .info {
    padding-right: 12px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    color: rgb(114, 118, 126);
  }
  .header {
    margin: 0;
    margin-top: 30px;
    color: #202125;
    padding: 0;
    font-size: 32px;
    font-family: BigHearted;
    line-height: 64px;
    text-align: left;
    transition: all 0.2s;
    position: relative;
    @media screen and (max-width: 768px) {
      line-height: normal;
      font-size: 25px;
      letter-spacing: -1.44px;
    }
  }
`;

export default Wrapper;
