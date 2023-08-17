import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    margin-left: 138px;
    margin-top: 25px;
    max-width: 280px;
    @media screen and (max-width: 441px) {
        margin-left: 90px;
        max-width: 230px;
        width: 230px;
        display: none;
    }
    @media screen and (max-width: 350px) {
        max-width: 220px;
        width: 220px;
        margin-right: 30px;
    }
    @media screen and (max-width: 280px) {
        margin-left: 50px;
        margin-top: 15px;
        max-width: 200px;
        width: 200px;
    }
    .ais-SearchBox { 
        background: transparent;
        margin-bottom: 15px;
        .ais-SearchBox-input {
            background-color: transparent;
            border: none; 
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            font-family: Ayazona,'Helvetica Neue',Helvetica;
            color: ${({textColor})=> textColor || '#000'};
            width: 220px;
            font-size: 16px;
            &[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
            &[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
            &[type="search"]::-webkit-search-decoration,
            &[type="search"]::-webkit-search-cancel-button,
            &[type="search"]::-webkit-search-results-button,
            &[type="search"]::-webkit-search-results-decoration { display: none; }
            &::placeholder {
                color: ${({searchColor})=> searchColor || '#000'};
            }
            @media screen and (max-width: 768px) {
                width: 180px;
            }
            @media screen and (max-width: 441px) {
                width: 150px;
                font-size: 14px;
            }
            @media screen and (max-width: 350px) {
                width: 120px;
            }
        }
    }
    .ais-Stats {
        background: white;
    }
    .ais-SearchBox-form {
        @media screen and (max-width: 441px) {
            max-width: 230px;
            width: 230px;
        }
        @media screen and (max-width: 350px) {
            max-width: 220px;
            width: 220px;
        }
        @media screen and (max-width: 280px) {
            max-width: 200px;
            width: 200px;
        }
    }
    .ais-SearchBox-submit {
        float: left;
        padding-top: 5px;
    }
    .ais-SearchBox-reset,
    .ais-SearchBox-submit {
        background: transparent;
        border: unset;
        cursor: pointer;
    }
    .ais-SearchBox-submitIcon {
        width: 14px;
        height: 14px;
        @media screen and (max-width: 350px) {
            width: 12px;
            height: 12px;
        }
    }
    .ais-SearchBox-submitIcon,
    .ais-SearchBox-resetIcon {
        fill: ${({textColor})=> textColor || '#000'};
    }
`;

const ResultWrapper = styled.div`
    background-color: #fff;
    box-shadow: rgba(16,25,30,.08) 0 1px 4px 0;
    max-width: 300px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    z-index: 9999 !important;
    @media screen and (max-width: 441px) {
        max-width: 230px;
        width: 230px;
    }
    @media screen and (max-width: 350px) {
        max-width: 220px;
        width: 220px;
        margin-right: 30px;
    }
    @media screen and (max-width: 280px) {
        max-width: 200px;
        width: 200px;
    }
    .hit-name {
        padding: 12px 15px;
        margin-bottom: .5em;
        float: left;
        font-size: 14px;
        letter-spacing: -.16px;
        font-weight: 500;
        color: #2d3138;
    }
    .hit-description {
        margin-top: 5px;
        font-size: 12px!important;
        letter-spacing: 0.14px;
        font-weight: 400;
        line-height: normal;
        color: rgb(143, 149, 163);
    }
    .ais-Hits {
        z-index: 9999;
        padding-bottom: 18px;
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.08);
    }
    .image {
        width: 40px;
        height: 40px;
        margin: 12px
    }

    .ais-Results-item {
        border: none;
        box-shadow: none;
        margin-left: 0;
    }
`;

export {
    Wrapper,
    ResultWrapper
};
