import React, {useState} from 'react';
 import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';

const defaultFields = {
  name: null,
  phone: null,
  email: null,
  message: null,
}
const FeatureSection = () => {
  const [formData, setFormData] = useState({...defaultFields})
  const validateData = (items) => {
    let valid = true;
    items.forEach(element => {
      if (!element || !element.trim().length) {
        valid = false;
      }
    });
    return valid;
  }
  const submitMessage = () => {
    if (validateData(Object.values(formData))) {
      // send me to mars
    }

  }
  return (
    <FeatureSectionWrapper>
      <Container className="wrapper">
          <div className="contactDetails">
            <h1 className="title">Contact Us</h1>
            <h2 className="header subheader" style={{paddingTop: "35px"}}>Need help with your order?</h2>
            <p>Visit <a href="https://help.ayazona.com/kb/en/customer-help" >Customer Support Page</a></p>
            <h2 className="header subheader">General Inquiries</h2>
            <div className="address">
                <div className="content">
                  <span className="count">1</span>
                  <span className="text">6th Floor, Senteu Plaza, <br />Galana Rd، Kilimani, <br />Nairobi, KENYA</span>
                </div>
                <div className="content">
                  <span className="count">2</span>
                  <span className="text">P.O. Box 54326 - 00200, <br />Nairobi, KENYA <br />Email: <a href="mailto:info@ayazona.com">info@ayazona.com</a></span>
                </div>
            </div>
            <h2 className="header subheader">Business inquiries</h2>
            <p>Email: <a href="mailto:partners@ayazona.com">partners@ayazona.com</a></p>
            <h2 className="header subheader">Media inquiries</h2>
            <p>Email: <a href="mailto:info@ayazona.com">info@ayazona.com</a></p>
            <h2 className="header subheader" style={{paddingTop: "35px"}}>Legal &amp; Privacy Inquiries</h2>
            <div className="address">
                <div className="content">
                  <span className="count">1</span>
                  <span className="text">P.O. Box 54326 - 00200, <br />Nairobi, KENYA <br />Attention: Legal Department</span>
                </div>
                <div className="content">
                  <span className="count">2</span>
                  <span className="text">P.O. Box 54326 - 00200, <br />Nairobi, KENYA <br />Attention: Privacy Department</span>
                </div>
            </div>
          </div>
      </Container>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
