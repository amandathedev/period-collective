const Stripe = require('stripe');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { amount, mode } = JSON.parse(event.body);

  if (!amount || amount < 1) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid amount' }) };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const amountInCents = Math.round(amount * 100);
  const origin = event.headers.origin || event.headers.referer || 'https://theperiodcollective.org';

  const lineItem = {
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Donation to The Period Collective',
        description: mode === 'subscription'
          ? 'Monthly donation — just $35 keeps a menstruator supplied for an entire year.'
          : 'One-time donation to support menstrual equity in Chicago.',
      },
      unit_amount: amountInCents,
      ...(mode === 'subscription' && {
        recurring: { interval: 'month' },
      }),
    },
    quantity: 1,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: mode === 'subscription' ? 'subscription' : 'payment',
      line_items: [lineItem],
      success_url: `${origin}/donate-success`,
      cancel_url: `${origin}/donate`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
