import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePaymentSubmission = async (paymentMethod) => {
    try {
      // Call your backend server to create a payment intent
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm the payment intent using Stripe.js
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Payment successful
      console.log('Payment successful:', result.paymentIntent);
      // Redirect to a success page or show a success message to the user
    } catch (error) {
      // Handle error
      console.error('Payment failed:', error.message);
      // Show error message to the user
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      handlePaymentSubmission(paymentMethod);
    }
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="card-element">Credit or debit card</label>
          <div id="card-element" className="card-element">
            <CardElement options={{ style: cardElementStyle }} />
          </div>
          {error && <div className="error">{error}</div>}
        </div>
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  );
};

const cardElementStyle = {
  base: {
    fontSize: '16px',
    color: '#32325d',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#fa755a',
  },
};

export default PaymentForm;
