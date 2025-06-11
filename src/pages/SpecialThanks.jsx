import React from 'react';
import { PiHandHeartDuotone } from 'react-icons/pi';
import '../global.css';

export default function SpecialThanks() {
  return (
    <div className="page-container">
      <div className="content">
        <h1 className="special-thanks-heading">
          <PiHandHeartDuotone size={30} /> Special Thanks
        </h1>

        <p className="intro-text">
          I'd like to express my sincere gratitude to the Rice University
          administration staff and instructional team for their incredible support
          and guidance throughout my learning journey. Your dedication and mentorship
          have made a lasting impact on my growth as a developer.
        </p>

        <ul className="thanks-list">
          <li>John Brown — Instructor</li>
          <li>Alex Sigala — Teaching Assistant</li>
          <li>Rene Trevino — Teaching Assistant</li>
          <li>Diego Mars — Teaching Assistant</li>
        </ul>

        <p className="closing-text">
          Thank you for your commitment to fostering new talent and building a community
          of passionate, capable developers.
        </p>
      </div>
    </div>
  );
}