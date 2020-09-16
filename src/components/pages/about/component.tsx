import React from 'react'
import { color } from '../../../theme'

export const AboutPage = () => <div className="about-page-content-wrapper">
    <h1 >About</h1>
    <div>
        <p>Hey! My name is Ignas, and this is my project for learning purposes</p>
        <p>Frontend developed using these technologies:</p>
        <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
        </ul>
        <p>Backend developed using these technologies:</p>
        <ul>
            <li>AdonisJs</li>
        </ul>
    </div>
    <style jsx>
        {`
          .about-page-content-wrapper {
            padding: 40px;
            max-width: 70%;
            width: 100%;
            border-radius: 8px;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 600)},
              ${color('grey', 800)}
            );
            margin-bottom: auto;
            margin-top: 100px;
            box-shadow: 20px 20px 40px black;
          }
          h1 {
            text-align: center;
            color: ${color('grey', 200)};
          }
          p {
            color: ${color('grey', 200)};
          }
          li { 
            color: ${color('grey', 200)};
          }
        `}
    </style>
</div>
