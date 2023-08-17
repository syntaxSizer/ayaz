import styled from 'styled-components';

const wrapper = styled.div`
    position: absolute;
    z-index: 1;
    padding: 8px;
    color: #fff;
    transition: all .2s;
    .iconItem {
        transition: all .2s;
        &:hover {
            transform: scale(1.4);
        }
    }
    &:hover .tooltip {
        visibility: visible;
        transition-delay: 1s;
        z-index: 9999;
    }
    .css-14tnk7q {
        position: relative;
        :hover {
            color: #ffd30a;
        }
    }
    .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: #fff;
        color: #000;
        font-size: 14px;
        text-align: center;
        margin-bottom: 12px;
        border-radius: 6px;
        padding: 5px;
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
        box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08);
      }
`

export default wrapper;