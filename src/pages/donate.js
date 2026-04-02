import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import { useSiteSettings } from '../context/SiteSettingsContext';
import '../scss/donate.scss';

const PRESET_AMOUNTS = [10, 25, 50, 100];

const DonatePage = () => {
  const settings = useSiteSettings();
  const monthlyCalloutText = settings.monthlyCalloutText || 'Just $35 keeps a menstruator supplied for an entire year.';
  const [mode, setMode] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const effectiveAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : null);

  const handlePreset = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setSelectedAmount(newMode === 'subscription' ? 35 : null);
    setCustomAmount('');
    setError('');
  };

  const handleSubmit = async () => {
    if (!effectiveAmount || effectiveAmount < 1) {
      setError('Please enter an amount of at least $1.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: effectiveAmount, mode }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Donate" />
        <div className="site-wrap">
          <div className="donate-page">
            <div className="frequency-toggle" role="group" aria-label="Donation frequency">
              <button
                className={mode === 'one-time' ? 'active' : ''}
                onClick={() => handleModeSwitch('one-time')}
                aria-pressed={mode === 'one-time'}
              >
                Give Once
              </button>
              <button
                className={mode === 'subscription' ? 'active' : ''}
                onClick={() => handleModeSwitch('subscription')}
                aria-pressed={mode === 'subscription'}
              >
                Give Monthly
              </button>
            </div>

            {mode === 'subscription' && (
              <div className="monthly-callout">
                <strong>{monthlyCalloutText}</strong>
                Your monthly gift makes a sustained, year-round impact.
              </div>
            )}

            <span className="amount-label">
              {mode === 'subscription' ? 'Monthly amount' : 'Donation amount'}
            </span>

            {mode === 'one-time' && (
              <div className="preset-amounts" role="group" aria-label="Preset donation amounts">
                {PRESET_AMOUNTS.map(amount => (
                  <button
                    key={amount}
                    className={selectedAmount === amount ? 'active' : ''}
                    onClick={() => handlePreset(amount)}
                    aria-pressed={selectedAmount === amount}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            )}

            {mode === 'subscription' && (
              <div className="preset-amounts" role="group" aria-label="Preset monthly amounts">
                {[35, 50, 75, 100].map(amount => (
                  <button
                    key={amount}
                    className={selectedAmount === amount ? 'active' : ''}
                    onClick={() => handlePreset(amount)}
                    aria-pressed={selectedAmount === amount}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            )}

            <div className="custom-amount-wrapper">
              <div className="custom-input-row">
                <span aria-hidden="true">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder={mode === 'subscription' ? 'Other monthly amount' : 'Other amount'}
                  value={customAmount}
                  onChange={handleCustomChange}
                  aria-label="Custom donation amount in dollars"
                />
              </div>
            </div>

            <button
              className="blue-button donate-submit"
              onClick={handleSubmit}
              disabled={loading || !effectiveAmount}
            >
              {loading
                ? 'Redirecting…'
                : `Donate${effectiveAmount ? ` $${effectiveAmount}${mode === 'subscription' ? '/mo' : ''}` : ''}`}
            </button>

            {error && <p className="donate-error" role="alert">{error}</p>}

            <p className="secure-note">🔒 Secure payment via Stripe</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DonatePage;
