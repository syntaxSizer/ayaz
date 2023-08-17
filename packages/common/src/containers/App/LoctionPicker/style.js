import styled from 'styled-components';

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  .locationLabel {
    position: abslote;
    text-transform: uppercase;
    color: #878789;
    font-size: 12px;
  }
  input,
  textarea {
    margin-top: 4px;
    padding: 4px 2px;
    width: 100%;
    border-radius: 1px;
    border: solid 1px #ccc;
    line-height: normal;
    appearance: none;
    ::placeholder {
      color: #afafb0;
    }
  }
  input {
    padding: 11px;
    box-shadow: none;
    background: #fff;
    border: 1px solid rgba(32, 33, 37, 0.12);
    border-radius: 2px;
    font-size: 1rem;
    color: rgba(32, 33, 37, 0.87);
    appearance: none;
  }
  .input-group {
    padding: 20px 0 0;
  }
  label {
    color: #afafb0;
    font-size: 14px;
    padding: 4px 0;
  }
  .textArea {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0.5rem 0.625rem;
    background: #fff;
    border: 1px solid rgba(32, 33, 37, 0.12);
    border-radius: 2px;
    font-size: 1rem;
    color: rgba(32, 33, 37, 0.87);
    resize: vertical;
    appearance: none;
  }
  .row {
    display: flex;
    justify-content: space-between;

    .closeBtn {
      background: #ededee;
      border-radius: 50px;
      padding: 8px;
      cursor: pointer;
    }
    .header {
      font-weight: 600;
      font-size: 20px;
      letter-spacing: -0.5px;
    }
  }
  .button {
    color: #fff;
    border: none;
    outline: none;
    font-size: 12px;
    font-family: BigHearted;
    letter-spacing: 0px;
    background-color: #002524;
    border-radius: 28px;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: background-color 150ms ease-out, color 150ms ease-out;
    padding: 1rem 1.5rem;
    margin-left: 8px;
    border-color: transparent;
    width: 100%;
    height: 56px;
    line-height: normal;
    text-transform: uppercase;
  }

  .btn-group {
    margin: 4px 0;
    .btn {
      background: #fff;
      border: 1px solid #ccc;
      cursor: pointer;
      width: calc(100% / 3);
      ::hover {
        outline: 1;
      }
    }
    .btn-odd {
      border-right: none;
      border-left: none;
    }
    .btn-options-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
  .btn-wrapper {
    margin-top: 12px;
    justify-content: flex-end;
    .btn {
      margin: 0 4px;
    }
  }
`;

export default Container;
