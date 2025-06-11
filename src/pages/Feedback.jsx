import React, { useState } from 'react';
import '../global.css';

const Feedback = () => {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mgvyodee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: comment })
      });

      if (response.ok) {
        setSubmitted(true);
        setComment('');
      } else {
        alert('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-card">
        {!submitted ? (
          <>
            <h2 className="feedback-title">I would love to hear your feedback!</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
              <textarea
                value={comment}
                onChange={handleChange}
                placeholder="Share your thoughts..."
                rows="5"
                required
              />
              <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h3>Thank you for your feedback!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
