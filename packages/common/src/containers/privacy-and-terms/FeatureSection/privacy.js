import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Container from '../../../components/UI/Container';
import {TextStyle, FeatureSectionWrapper, Main} from './featureSection.style';


const FeatureSection = ({
  sectionHeader,
  sectionSubTitle,
}) => {
  return (
    <FeatureSectionWrapper>
      <Main>
        <Container>
          <h1 className="title">Privacy Policy</h1>
          <Text {...sectionSubTitle} content="Last Updated: February 27, 2021"/>
          <Text {...{...sectionSubTitle, ...{fontSize: '20px', mt:'40px'}}} content="At Ayazona, your privacy is important to us. In this Privacy Policy, we tell you what information we collect, share with others, and how we use it." />
          <h2>Scope of this Privacy Policy</h2>
          <TextStyle>Ayazona (“Ayazona,” “we,” “our,” and/or “us”) values the privacy of individuals who use our website and mobile apps (collectively, our “Platform”). This privacy policy (the “Privacy Policy”) explains how we collect, use, and share information from Ayazona's users (“Users”). It applies to our customers (“Customers”), individuals who deliver products requested by Customers through our Platform (“Couriers”), anyone who signs up to become a Courier (“Prospective Couriers”), businesses selling products through our Platform (“Merchants”), and other partners who use our Platform to facilitate delivery of products (“Partners”). By using the Platform, you agree to the Privacy Policy and any future amendments and additions. Your use of our Platform is also subject to our <Link href="/terms">
            <a>Terms of Service.</a>
            </Link>
          </TextStyle>
          <h3>1. Information You Provide Directly to Us</h3>
          <TextStyle>
            <h4>1.1. Information Provided by Customers</h4>
          </TextStyle>
          <TextStyle>
            <strong>Sign Up and Profile Information.</strong> When you sign up and/or place an order through Ayazona as a Customer, you provide us with information, including, but not limited to your name, email address, physical address, and phone number. If you sign up using your Facebook account, we receive information including your name and email address. After registration, Customers can add multiple delivery addresses to their profile. You may be required to provide us with a photograph
          </TextStyle>
          <TextStyle>
            <strong>Payment Information.</strong> When you add a payment card to your Ayazona account, a third-party payments service provider receives your card information. We do not store full payment card information on our servers.
          </TextStyle>
          <TextStyle>
            <h4>1.2. Information Provided by Prospective and Active Couriers</h4>
          </TextStyle>
          <TextStyle>
            <strong>Sign Up and Profile Information.</strong> When you sign up to become a Courier, you provide us certain information, including, but not limited to your legal name, National ID Number, date of birth, email address, physical address, phone number, photo, driver’s license information, vehicle information, and car insurance information. We share this information with third-party providers who initiate background check reports on you. Additional information about the third parties who run the background checks is provided in Section 3.2 below. We may also collect information from you after sign up as is necessary to effectively operate the Platform.
          </TextStyle>
          <TextStyle>
            <strong>Payment Information.</strong> We receive Couriers’ bank account and tax information to provide payment and for tax reporting purposes.
          </TextStyle>
          <TextStyle>
            <h4>1.3. Information Provided by Merchants and Partners</h4>
          </TextStyle>
          <TextStyle>
            <strong>Profile Information.</strong>A Merchant who signs up for our Platform provides us with certain information, including, but not limited to the business’s physical address, hours, and product information, including product details and price.
          </TextStyle>
          <TextStyle>
            <strong>Payment Information. </strong> We may receive Merchants’ bank account information to provide payment.
          </TextStyle>
          <TextStyle>
            <h4>1.4. Information Provided by All Users</h4>
          </TextStyle>
          <TextStyle>
            <strong>Communications.</strong> If you contact us directly, we may receive additional information about you. For example, when you contact our Customer Support team, we will receive your name, email address, and the contents of any message or attachments that you may send to us, as well as any other information you choose to provide.
          </TextStyle>
          <h3>2. Other Information We Collect Through Your Use of the Platform</h3>
          <TextStyle>
            <strong>Location and Sensor Information.</strong>We receive a Customer’s location information when you’re using the Ayazona app, including when the app is in use in the foreground or background. We may continuously collect location information and other motion-generated or orientation-generated mobile sensor data from Couriers and Prospective Couriers when the Ayazona app is in use in the foreground or background in order to personalize the app experience, assist in finding available markets and/or available delivery opportunities, offer delivery incentives, track the progress and completion of deliveries, and other similar purposes. We also use this information for analytics purposes. For information on your choices for sharing location information, please consult Section 7 on Your Choices
          </TextStyle>
          <TextStyle>
          <strong>Referrals.</strong> You may be able to refer Ayazona to friends and other contacts. To help you do this, we may request and you can grant us access to your mobile device address book. You can then direct us to send referral text messages or referral emails to contacts you select in your address book. We will use the data from your address book only to process your referral. By sending a referral, you also consent to Ayazona sending your public profile image to the contacts you select to receive a referral link.
          </TextStyle>
        
          <TextStyle>
            <strong>Device Information.</strong> We receive information from Users’ devices, including IP address, web browser type, mobile operating system version, phone carrier and manufacturer, unique device identifiers, and, if you register with your Facebook account, your Facebook identifier.
          </TextStyle>

          <TextStyle>
            <strong>Usage Information.</strong> We automatically receive information about your interactions with our Platform, such as the pages or other content you view, the products you search for or purchase, and the dates and times of your visits, to help us understand how you use our Platform, help us improve our Platform, and provide you information about our Platform, Merchants, and Partners.
          </TextStyle>

          <TextStyle>
            <strong>Call and Text Information.</strong> We work with one or more third parties to facilitate phone calls and text messages between Customers and Couriers who are delivering the Customers’ products. We receive information about these communications including the date and time of the call or text message, the parties’ phone numbers, and the content of the text messages. We do not record or have access to the content of the phone calls
          </TextStyle>

          <TextStyle>
            <strong>User Feedback.</strong> Customers and Couriers may be able to rate and review each other at the end of every delivery. Customers may be able to see a Courier’s aggregate ratings during a delivery. After a delivery, we may share feedback or comments that Customers provide with Couriers and/or Merchants, but we will not identify the Customer. We may also share with Couriers their aggregate ratings. Customers may also provide us information and feedback related to your experience on the Platform, including, but not limited to order reviews, merchant reviews and merchant ratings.
          </TextStyle>

          <TextStyle>
            <strong>Information from Cookies and Similar Technologies.</strong> We and our service providers collect information through the use of “cookies” and similar technologies to understand how you navigate through and interact with our Platform, to learn what content is popular, for authentication and advertising purposes, and to save your preferences. Cookies are small text files that web servers place on your device; they are designed to store basic information and to help websites and apps recognize your browser. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be accessed every time you use our Platform. We also use cookies for data analytics purposes, including from Google Analytics. You can find more information on how Google uses data from these cookies at google.com/policies/privacy/partners. To prevent Google Analytics from using your information for analytics, you may install the Google Analytics Opt-Out Browser Add-on. You should consult your web browser to modify your cookie settings. Please note that if you delete or choose not to accept cookies from us, you may be missing out on certain features of our Platform.
          </TextStyle>

          <h3>3. Information We Receive from Third Parties</h3>

          <TextStyle>
            <h4>3.1. Information We Receive About Customers</h4>
          </TextStyle>

          <TextStyle>
            <strong>Partners.</strong> If you make a purchase through one of our Partners that offers delivery via Ayazona, we receive information about your purchase, including your name, phone number, the product you purchased, and the delivery location.
          </TextStyle>

          <TextStyle>
            <h4>3.2. Additional Information We Receive About Prospective and Active Couriers</h4>
          </TextStyle>

          <TextStyle>
            <strong>Background Information on Couriers.</strong> Ayazona works with third-party providers to perform driving record and criminal background checks on Prospective and active Couriers, and in some instances these third parties provide Prospective and active Couriers’ records to Ayazona as part of the background check process.
          </TextStyle>

          <TextStyle>
            <h4>3.3. Information From Affiliates and Non-Affiliated Third Parties</h4>
          </TextStyle>

          <TextStyle>
            We may collect information about you or others through Ayazona affiliates or through non-affiliated third parties. For example, you may be able to access the Platform through a social networking account, such as Facebook. If you access the Platform through your Facebook account, you may allow us to have access to certain information in your Facebook profile. This may include your name, profile picture, gender, networks, and/or email address and other information you allow to be imported from Facebook, which is controlled in your Facebook privacy settings.
          </TextStyle>

          <TextStyle>
            Social networking sites, such as Facebook, have their own policies for handling your information. For a description of how these sites may use and disclose your information, including any information you make public, please consult the sites' privacy policies. We have no control over how any third-party site uses or discloses the personal information it collects about you.
          </TextStyle>

          <TextStyle>
            We may also collect information about you or others through non-affiliated third parties. For example, to the extent permitted by law, we may, in our sole discretion, ask for and collect supplemental information from third parties, such as information about your credit from a credit bureau, or information to verify your identity or trustworthiness, or for other fraud or safety protection purposes. We may combine information that we collect from you through the Platform with information that we obtain from such affiliated and non-affiliated third parties and information derived from any other products or services we provide.
          </TextStyle>

          <h3>4. How We Use Information We Collect</h3>

          <TextStyle>
            <h4>4.1. Uses of Information Collected from All Users</h4>
          </TextStyle>

          <TextStyle>We may use the information we collect from all Users to:</TextStyle>
          <ul>
            <li>Provide, improve, expand, and promote our Platform and other services;</li>
            <li>Analyze how you use our Platform;</li>
            <li>Communicate with you, either directly or through one of our service providers, including for marketing and promotional purposes;</li>
            <li>Facilitate transactions, deliveries, and payments;</li>
            <li>Respond to customer support questions or your requests;</li>
            <li>Conduct research;</li>
            <li>Find and prevent fraud;</li>
            <li>Resolve disputes, to protect ourselves and other Users, and to enforce any legal terms that govern your use of the Platform; and</li>
            <li>Respond to any issues that may arise during deliveries.</li>
          </ul>
          <TextStyle>
            We may aggregate and/or de-identify information collected through the Platform. We may use de-identified or aggregated data for any purpose, including without limitation for research and marketing purposes and may also share such data with any third parties, including without limitation, advertisers, promotional partners, sponsors, event promoters, and/or others.
          </TextStyle>

          <TextStyle>
            <h4>4.2. Additional Uses of Prospective and Active Courier Information</h4>
          </TextStyle>

          <TextStyle>
            Additionally, we use information from Prospective and active Couriers for the following purposes related to the Platform: (1) determining whether to grant a Prospective Courier access to receive delivery opportunities through our Platform, and (2) sending emails and text messages to Prospective and active Couriers regarding their Ayazona sign up, available deliveries, incentives and other opportunities, and additional information about our Platform.
          </TextStyle>

          <TextStyle>
            <h4>4.3. Additional Uses of Merchant Information</h4>
          </TextStyle>

          <TextStyle>
            Additionally, we use the information we collect from Merchants to notify you about orders, deliveries, and returns, and for other administrative and marketing purposes, including via text message, push notifications, phone calls, and emails.
          </TextStyle>
          <h3>5. How Ayazona Shares Information It Collects From Users</h3>
          <TextStyle>
            <h4>5.1. Sharing between Customers and Couriers</h4>
          </TextStyle>

          <TextStyle>
            When Couriers are offered delivery opportunities, they may be able to see the Customer’s delivery location. Once a Courier accepts a delivery request from a Customer, the Customer can see the Courier’s first name and last initial and the Courier can see the Customer’s first name and last initial. A Customer is also able to see a Courier’s photo, aggregate rating, and other information to identify the Courier, including, but not limited to the Courier’s license plate, and color, make, and model of vehicle. During a delivery, the Customer in some instances is able to see the Courier’s real-time location, and the Courier may be able to see the Customer’s delivery address and/or real-time location. During a delivery, Customers and Couriers are able to call and text each other. Customer and Courier phone numbers are masked and, only in rare instances, may they be able to see the other’s phone number. As described above, Customers are able to see a Courier’s aggregate ratings during a delivery. After a delivery, we may share feedback or comments that a Customer provides with a Courier, but we will not identify the Customer. We may also share with Couriers their aggregate ratings.
          </TextStyle>

          <TextStyle>
            <h4>5.2. Sharing between Couriers and Merchants</h4>
          </TextStyle>

          <TextStyle>
            Before a Courier picks up the delivery from the Merchant and/or Partner and during the delivery, the Merchant and/or Partners may be able to see the Courier’s real-time location.
          </TextStyle>

          <TextStyle>
            <h4>5.3. Sharing between Customers and Merchants</h4>
          </TextStyle>

          <TextStyle>
            We may share your name, phone number, email address, and/or any physical address associated with your account or any delivery, with the Merchants from whom you’ve placed orders. Merchants may also have access to your public profile image, your feedback, and order information, including your purchase history and other information related to your orders with the particular Merchant. Such information provided to Merchants is not subject to this Privacy Policy, but instead is subject to Merchant’s own privacy policies which may allow Merchant to, among other things, send you marketing communications and other promotional content
          </TextStyle>

          <TextStyle>
            <h4>5.4. Service Providers</h4>
          </TextStyle>

          <TextStyle>
            We share your information with service providers that perform services on our behalf, including all of the uses described in Section 4 above.
          </TextStyle>

          <TextStyle>
            <h4>5.5. Other Sharing</h4>
          </TextStyle>

          <TextStyle>
            We may share your information with third parties in the following cases:
          </TextStyle>
          <ul>
            <li>Where disclosure is required or appropriate in order to comply with laws, regulations, legal process, or a governmental request;
            </li>
            <li>With law enforcement officials, government authorities, or third parties, if we think doing so is necessary to protect the rights, property, or safety of Ayazona, our Users, or the public;</li>
            <li>To protect the security or integrity of our Platform;</li>
            <li>To enforce our agreements, policies, and <Link href="/terms"><a>Terms of Service</a></Link>;</li>
            <li>To respond to an emergency which we believe in good faith requires us to disclose information to assist in preventing the death or serious bodily injury of any person;</li>
            <li>To investigate and defend ourselves or others against any third-party claims or allegations;</li>
            <li>To provide information about the use of our Platform to Couriers, Merchants, Partners, or potential business partners in aggregated or de-identified form that cannot reasonably be used to identify you;</li>
            <li>While negotiating or in relation to a business transaction, such as a merger, sale of assets, or bankruptcy;</li>
            <li>Whenever you consent to the sharing, including without limitation when you use the social features of the Platform to (1) review, rate, and/or provide feedback on Merchants which will be available for viewing by other Users; (2) share the orders, you’ve made through the Platform with other Users, including, but not limited to any designated favorite orders; and/or (3) share your favorite Merchants or lists of Merchants with other Users; and;</li>
            <li>When you share certain information related to orders with other Users or non-Users, including, but not limited to (a) your cart; (b) the fees associated with your Order (e.g. to split payment with others); and/or (c) the estimated time of delivery and progress of your Order.</li>
          </ul>

          <h3>6. Advertising Partners</h3>

          <TextStyle>Third parties whose products or services are accessible or marketed via the Platform may also place cookies or other tracking technologies on your computer, mobile phone, or other device to collect information about your use of the Platform in order to (a) inform, optimize, and serve marketing content based on past visits to our websites and other sites and (b) report how our marketing content impressions, other uses of marketing services, and interactions with these marketing impressions and marketing services are related to visits to our websites. We also allow other third parties (e.g., ad networks and ad servers such as Google Analytics, DoubleClick, and others) to serve tailored marketing to you and to access their own cookies or other tracking technologies on your computer, mobile phone, or other device you use to access the Platform. We neither have access to, nor does this Privacy Policy govern, the use of cookies or other tracking technologies that may be placed on your computer, mobile phone, or other device you use to access the Platform by non-affiliated, third-party ad technology, ad servers, ad networks or any other non-affiliated third parties. Those parties that use these technologies may offer you a way to opt out of targeted advertising as described below. You may receive tailored advertising on your computer through a web browser. Cookies may be associated with de-identified data linked to or derived from data you voluntarily have submitted to us (e.g., your email address) that we may share with a service provider in hashed, non-human-readable form.</TextStyle>
          <TextStyle>
            If you are interested in more information about tailored browser advertising and how you can generally control cookies from being put on your computer to deliver tailored marketing, you may visit the Network Advertising Initiative's Consumer Opt-Out Link and/or the Digital Advertising Alliance's Consumer Opt-Out Link to opt-out of receiving tailored advertising from companies that participate in those programs. To opt out of Google Analytics for Display Advertising or customize Google Display Network ads, you can visit the Google Ads Settings page. Please note that to the extent advertising technology is integrated into the Platform, you may still receive advertising content even if you opt out of tailored advertising. In that case, the advertising content will just not be tailored to your interests. Also, we do not control any of the above opt-out links and are not responsible for any choices you make using these mechanisms or the continued availability or accuracy of these mechanisms. If your browsers are configured to reject cookies when you visit this opt-out page, or you subsequently erase your cookies, use a different computer or change web browsers, your NAI or DAA opt-out may no longer be effective. Additional information is available on NAI's and DAA's websites, accessible by the above links.
          </TextStyle>
          <h3>7. Your Choices</h3>
          <TextStyle>In addition to other choices described in this Privacy Policy and in the Platform, you have other choices regarding your information:</TextStyle>
          <TextStyle>
            <strong>Profile Information.</strong> You can update your profile information through your profile settings. If you need to change the email address associated with your account, please contact us via our <Link href="/contact"> <a> Contacts Center</a></Link>.
          </TextStyle>

          <TextStyle>
            <strong>Location Information.</strong> While you can prevent your device from sharing location information at any time through your device’s operating system settings, Customer and Courier location is core to our Platform and without it, you may not be able to successfully use our Platform.
          </TextStyle>

          <TextStyle>
            <strong>Email Subscriptions. </strong>
            You can always unsubscribe from our promotional emails via the link provided in the emails. Even if you opt out from receiving promotional messages from us, you will continue to receive administrative messages from us.
          </TextStyle>
          <TextStyle>
            <strong>Account Deletion.</strong> If you would like to delete your Ayazona account, please contact us through our <Link href="/contact"> <a> Contacts Center</a></Link> with your request. If you choose to delete your account, we will delete it for you, but may retain your account information to collect any fees owed, resolve disputes, troubleshoot problems, analyze usage of the Platform, assist with any investigations, prevent fraud, enforce our <Link href="/terms"><a>Terms of Service</a></Link>, or take other actions as required or permitted by law and/or regulations.
          </TextStyle>

          <h3>8. Third-Party Links</h3>

          <TextStyle>
            Our Platform may contain links to other websites, products, or services that we do not have control over. Please be aware that we are not responsible for the privacy practices of such third parties. We encourage you to read their privacy policies before giving them your information.
          </TextStyle>

          <h3>9. Data Security</h3>
          <TextStyle><strong>We are committed to protecting your information. Even though we take precautions to protect Users’ data, no security measures can be 100% secure, and we cannot guarantee the security of Users’ data.</strong></TextStyle>
          <h3>10. Children’s Privacy</h3>
          <TextStyle>
            Ayazona is not directed to children, and we do not knowingly collect personal information from children under 13. If you believe that a child under the age of 13 has given us personal information, please contact us via our <Link href="/contact"><a>Contacts Center.</a></Link>
          </TextStyle>

          <h3>11. Do-Not-Track Disclosure</h3>
          <TextStyle>
            We are committed to providing you with meaningful choices about the information collected on our Platform for third party purposes. That is why we have provided links (above) to the NAI "Consumer Opt-Out" link, the DAA opt-out link, and a Google opt-out link. However, we do not currently recognize or respond to browser-initiated Do-Not-Track signals, as the Internet industry is currently still working on Do-Not-Track standards, implementations and solutions.
          </TextStyle>
          <h3 id="kenyan">12. Privacy Information for Kenyan Residents</h3>
          <TextStyle>Under the Kenyan Privacy and Data Protection Policy 2018, and subject to exceptions, Kenyan residents have certain rights regarding their data, including:</TextStyle>
          <ul>
            <li>The right to know the categories of Personal Information we’ve collected and the categories of sources from which we got the information.</li>
            <li>The right to know the business purposes for sharing Personal Information.</li>
            <li>The right to access the specific pieces of Personal Information we’ve collected and the right to delete your information.</li>
            <li>The right to object decisions solely based on automated processing circumstances such as automated processing, publication/ processing of sensitive personal data profiling which produces legal effects or significantly affects data subject; </li>
            <li>The right to complain (as would be appropriate to the controller, processor or regulator).</li>
            <li>The right to object the processing of their data for directmarketing purposes; </li>
            <li>The right to be forgotten/ the right to erasure will require mechanisms to be put in place to ensure this right;</li>
            <li>The right to appropriate security safeguards in cross border transfer of personal data;</li>
          </ul>
          <TextStyle>As a Kenyan resident, you may exercise your right to know or your right to deletion by visiting the help center. We require you to log into your account so that we verify your identity prior to accessing or deleting your information. You may also designate an authorized agent to make a request to know or a request to delete. We do not currently have a reasonable method of verifying the identity of non-registered users to a reasonable degree of certainty, as we do not maintain enough personal information to enable us to verify non-registered users with sufficient certainty. Thus, we cannot honor the access or deletion requests of non-registered users at this time.</TextStyle>
          <h3>13. Consent to Transfer</h3>
          <TextStyle>Our computer systems are currently based in the United Kingdom, so your personal data will be processed by us in the United Kingdom, where data protection and privacy regulations may not offer the same level of protection as in other parts of the world. If you create an account with the Platform as a visitor from Kenya or outside the United Kingdom, by using the Platform, you agree to this Privacy Policy and you consent to the transfer of all such information to the United Kingdom, which may not offer a level of protection equivalent to that required in certain other countries, and to the processing of that information as described in this Privacy Policy.</TextStyle>
          <h3>14. Changes to Our Privacy Policy</h3>
          <TextStyle>
            We may make changes to this Privacy Policy from time to time. If we make any changes, we will notify you by revising the "Last Updated" date at the top of this Privacy Policy. If we make any material changes, we will let you know through the Platform, by email, or other communication. We encourage Users to read this Privacy Policy periodically to stay up-to-date about our privacy practices. As long as you use the Platform, you are agreeing to this Privacy Policy and any updates we make to it.
          </TextStyle>
          <h3>15. Contact Information</h3>
          <TextStyle>
          Feel free to contact us at any time with any questions or comments about this Privacy Policy, your personal information, our use and sharing practices, or your choices regarding your information by contacting us at our <Link href="/contact"><a>Contact Center</a></Link>.
          </TextStyle>
        </Container>
      </Main>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionSubTitle: PropTypes.object,

};

FeatureSection.defaultProps = {
  sectionHeader: {
    fontSize: '65px',
  },
  sectionSubTitle: {
    display: 'block',
    fontSize: '16px',
    letterSpacing: '0.14px',
    color: 'rgb(186, 200, 209)',
    m: '0 0 24px',
    color: '#000000',
  },
};

export default FeatureSection;
