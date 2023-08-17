import styled from 'styled-components';

const FeatureSectionWrapper = styled.div`
max-width: 1300px;
width: 100%;
margin:auto;
padding-top: 30px;
.rowWrapper {
    .headerWrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-top: 30px;
        border-bottom: 1px solid #f0f0f0;
        .header {
            font-family: Ayazona,'Helvetica Neue',Helvetica;
            font-size: 20px;
            letter-spacing: -0.64px;
            font-weight: 600;
            line-height: normal;
            order: 0;
            color: #000000;
        }
        .linkWrapper {
            color: #002524;
            font-size: 16px;
            font-weight: 600;
        }
        @media screen and (max-width: 768px) {
            .none {
                display: none;
            }
        }
    }
    .icon {
        padding: 4px;
    }
}
`;

export default FeatureSectionWrapper;