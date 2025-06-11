import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom'; 
import '../global.css';

export default function LearnMore() {
  const { theme } = useTheme();

  const reviews = [
    "The structure of your application is rock solid. Your User and Thought models align perfectly with the challenge instructions, and your schema settings show a clear understanding of how to define relationships and enforce data integrity. Raven, these are the kinds of backend foundations that will serve you extremely well as you continue to grow as a developer.",
    "Fantastic job on your Module 13 React and TypeScript Challenge! Your application shows strong technical skill and attention to user experience. Raven, the way the candidate search feature loads and displays detailed user information is really well implemented, and the ability to save candidates and view them later adds great functionality that’s both practical and polished. Your clean UI and intuitive navigation make the app easy and enjoyable to use. Raven, the project closely follows the mock-up instructions and stands out in how thoughtfully it handles user interaction. To make your work shine even more, consider deploying the application so others can experience it firsthand, and update your README with any missing elements like the description, screenshot, or deployed link. Keep up the amazing work, Raven—your understanding of React and TypeScript really shows, and you're building toward something great!",
    "Your walkthrough video demonstrates how to use your application. Overall this was an excellent submission, well done!",
    "You’ve done an outstanding job on the TypeScript and OOP Challenge! Your application thoroughly meets all the technical requirements. The ability to choose between trucks, cars, and motorbikes, with unique prompts for trucks and motorbikes, demonstrates a solid understanding of object-oriented principles -Your repository is well-organized, adheres to best practices, and includes a high-quality README with a link to the walkthrough video. Your clear commit messages and overall attention to detail reflect your hard work throughout the project. This is a top-tier submission, and I’m confident you’ve earned an A+. Keep up the excellent work!.", 
    "Keep pushing your skills forward, Raven—you’re doing amazing and it shows in the quality of your work. Great job!",
    "You've done an excellent job creating an application that feels smooth to use and is easy to navigate. Raven, your attention to both functionality and user experience really stands out—it’s clear you’ve taken the time to thoughtfully build and organize your project.",
  ];

  return (
    <div className="learn-more-page" data-theme={theme}>
      <h1 className="learn-more-page__heading">Learn More About Me</h1>
      <p className="learn-more-page__text">
        I'm passionate about combining technical skills with business expertise. Whether it’s building responsive, user-friendly interfaces or analyzing data to drive decisions — I thrive on solving problems and creating efficient solutions.
      </p>

      <h2 className="learn-more-page__subheading">Fun Facts:</h2>
      <ul className="learn-more-page__list">
        <li>I’ve worked in jewelry, healthcare, and fashion sales.</li>
        <li>I completed a rigorous 6-month coding bootcamp at Rice University.</li>
        <li>I’m passionate about UI/UX and frontend development.</li>
        <li>My favorite tools right now: React, Tailwind, and Vite.</li>
      </ul>

      <h2 className="learn-more-page__subheading">RAVE(n)'s REVIEWS: Project Assignments Reviewed by TAs</h2>
      <div className="learn-more-page__reviews-grid">
        {reviews.map((comment, index) => (
          <div key={index} className="learn-more-page__review-card">
            <p className="learn-more-page__review-text">"{comment}"</p>
          </div>
        ))}
      </div>

      <p className="learn-more-page__closing">Thanks for stopping by!</p>
    </div>
  );
}
