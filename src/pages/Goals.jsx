import React from "react";
import { GoGoal } from "react-icons/go";
import { useTheme } from "../context/ThemeContext";
import Sidebar from "../components/Sidebar";
import "../global.css";

const Goals = () => {
  return (
    <div className="page-container">

      {/* Main content */}
      <div className="content">
        <h1 className="page-title">
          <GoGoal size={30} /> Career Goals
        </h1>

        <p className="intro-text">
          I'm passionate about building clean, efficient, and scalable web
          applications. Here are my current professional goals as I work toward
          securing a rewarding position in a forward-thinking company.
        </p>

        <ul className="goals-list">
          <li>📈 Land a front-end or full-stack developer role at a dynamic tech company.</li>
          <li>🤝 Collaborate on team-based projects to strengthen agile workflow experience.</li>
          <li>🧠 Continuously learn and master modern frameworks like React, Next.js, and Node.js.</li>
          <li>🎨 Enhance UI/UX design skills to deliver polished, user-focused applications.</li>
          <li>📊 Contribute to code reviews and open-source projects to grow technical and leadership abilities.</li>
          <li>🌐 Stay up-to-date with industry trends and best practices in web development.</li>
          <li>🚀 Build and maintain a professional portfolio showcasing real-world project experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default Goals;
