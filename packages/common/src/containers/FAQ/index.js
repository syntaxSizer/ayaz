import React from 'react';
import Heading from '../../layout/elements/Heading';
import Text from '../../layout/elements/Text';
import { 
    Accordion,
    AccordionBody,
    AccordionItem,
    AccordionHeader,
    AccordionTitle } from "../../components/Accordion";
import ContainerWrapper from './style';
import styled from 'styled-components';

const HeaderComponent = styled(Text)`
    font-weight: 800;
    padding-top: 20px;
    cursor: pointer;
    color: #202125;
    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`;

const BodyComponent = styled(Text)`
    font-size: 16px;
    color: #8F95A3;
    letter-spacing: 0.14px;
    line-height: 1.44;
    @media screen and (max-width: 767px) {
        font-size: 13px;
    }
`;

const FAQ = ({questions} = []) => {
  return (
    <ContainerWrapper>
        <section className="innerSection" itemScope itemType="https://schema.org/FAQPage">
            <AccordionHeader>
                <Heading className="header" content="Frequently asked questions" />
            </AccordionHeader>
            <Accordion>
            {
                questions.map(item=>(
                    <AccordionItem>
                        <AccordionTitle>
                            <HeaderComponent content={item.question} />
                        </AccordionTitle>
                        <AccordionBody>
                            <BodyComponent content={item.answer} />
                        </AccordionBody>
                    </AccordionItem>
                ))
            }
            </Accordion>
        </section>
    </ContainerWrapper>
  );
};

export default FAQ;