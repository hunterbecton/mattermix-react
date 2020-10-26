import React from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { apiGetSession, apiGetNewCustomerId } from '../../api/payment.js';
import H1 from '../Typography/H1';
// import H3 from '../Typography/H3';
// import Text from '../Typography/Text';
import Button from '../Button/Button';
import Layout from '../Layout/Layout';
import ProCard from './ProCard';
import ProLogo from './ProLogo';
import ProFeature from './ProFeature';
import FaqContainer from './FaqContainer';
import Faq from './Faq';
import MattermixLogo from '../../images/mattermix-logo.svg';

const ProContainer = styled.div`
  grid-column: 2 / span 12;

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const Pro = ({ children, price }) => {
  const history = useHistory();

  const { user } = useAuth();

  const handleCheckout = async () => {
    let customerId;

    // Create customer Id if user doesn't have one
    if (!user.customerId) {
      const customer = await apiGetNewCustomerId();

      customerId = customer.customerId;
    }

    if (user.customerId) {
      customerId = user.customerId;
    }

    const { session } = await apiGetSession(
      '5f930b1742a20800175c7b40',
      customerId,
      '/templates'
    );

    const sessionId = session.id;

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    // Handle error
    if (error) {
      toast.error('Could not redirect to checkout.');
    }
  };

  return (
    <Layout>
      <ProContainer>
        <ProLogo>
          <img src={MattermixLogo} alt='Mattermix Logo' />
          <p>PRO</p>
        </ProLogo>
        <ProCard>
          <H1>Unlock everything for $99 a year</H1>
          <div className='features__group'>
            <ProFeature>
              Unlimited access to a growing library of templates
            </ProFeature>
            <ProFeature>Early access to upcoming Pro features </ProFeature>
            <ProFeature>Help shape the future of the product </ProFeature>
          </div>
          <Button
            type='button'
            onClick={() => (user ? handleCheckout() : history.push('/login'))}
          >
            Get Pro
          </Button>
        </ProCard>
        <FaqContainer>
          <H1>Frequently asked questions</H1>
          <Faq
            question='Does Mattermix have a free tier?'
            answer='Mattermix offers several free templates that you can use at no cost.'
          />
          <Faq
            question='Can I get a get a refund if I don’t like my Pro subscription?'
            answer='Absolutely! You can request a refund up to 7 days after your purchase.'
          />
          <Faq
            question='How do you process your payments?'
            answer='Mattermix uses Stripe to securely process payments.'
          />
        </FaqContainer>
      </ProContainer>
    </Layout>
  );
};

export default Pro;
