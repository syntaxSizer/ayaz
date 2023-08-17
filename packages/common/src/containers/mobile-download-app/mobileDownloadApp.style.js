import styled from 'styled-components';

const DownloadAppBanner = styled.div`
  display: none;
  .header {
    font-size: 18px;
    margin-bottom: 17px;
    margin-top: 25px;
    color: #525356;
    text-align: center;
  }
  .apple {
    border: 1px solid rgba(217,219,224,0.5);
    cursor: pointer;
    height: 48px;
    width: 48px;
    border-radius: 30px;
    background: #fff;
  }

  .android {
    border: 1px solid rgba(217,219,224,0.5);
    cursor: pointer;
    height: 48px;
    width: 48px;
    border-radius: 30px;
    background: #fff;
  }
  .linksWrapper {
    display: flex;
    justify-content: center;
    border-bottom: 20px solid rgba(217,219,224,0.5);
    padding: 0 0 30px 0;
  }
  .linksWrapper > * {
    padding: 5px;
  }

  @media screen and (max-width: 768px) {
    display: initial;
  }
`;

export { DownloadAppBanner };
