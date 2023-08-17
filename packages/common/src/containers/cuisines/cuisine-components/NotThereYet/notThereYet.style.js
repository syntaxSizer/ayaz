import styled from 'styled-components';

const NotThereYetWrapper = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding-bottom: 20px;
  .section {
    margin: 70px 0;
    text-align: left;
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .title {
    letter-spacing: -1.4px;
    font-size: 27px;
    font-weight: 600;
    color: rgb(45, 49, 56);
  }
  .action {
    background-color: #002524;
    letter-spacing: 0.7px;
    color: #fff;
    text-transform: uppercase;
    margin-top: 32px;
    border-radius: 50px;
    padding: 25px 52px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
`;

export default NotThereYetWrapper;
