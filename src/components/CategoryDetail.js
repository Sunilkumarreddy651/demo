import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CategoryDetail.css'; // Import specific CSS file for CategoryDetail

function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const category = decodeURIComponent(location.pathname.split('/').pop()); // Decode category name
  const { details } = location.state || {};

  // Sample data for details; replace or expand as needed
  const categoryData = {
    'Frontend': [
      { name: 'React', definition: 'A JavaScript library for building user interfaces.', uses: 'Used for building single-page applications.', importantPoints: 'Component-based, Virtual DOM' },
      { name: 'Angular', definition: 'A TypeScript-based open-source web application framework.', uses: 'Used for building dynamic web apps.', importantPoints: 'Two-way data binding, Dependency injection' },
      { name: 'Vue.js', definition: 'A progressive framework for building user interfaces.', uses: 'Used for building user interfaces and single-page applications.', importantPoints: 'Reactive data binding, Component-based' },
      { name: 'HTML5', definition: 'The latest version of HTML.', uses: 'Used for structuring and presenting content on the web.', importantPoints: 'New elements and APIs, Improved semantic structure' },
      { name: 'CSS3', definition: 'The latest version of CSS.', uses: 'Used for styling and layout of web pages.', importantPoints: 'Flexbox, Grid layout, Animations' },
      { name: 'JavaScript', definition: 'A programming language for creating interactive web applications.', uses: 'Used for adding dynamic behavior to web pages.', importantPoints: 'Event-driven, Asynchronous programming' }
    ],
    'Backend': [
      { name: 'Node.js', definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.', uses: 'Used for building scalable network applications.', importantPoints: 'Non-blocking I/O, Event-driven' },
      { name: 'Express', definition: 'A minimal and flexible Node.js web application framework.', uses: 'Used for building web and mobile applications.', importantPoints: 'Middleware, Routing' },
      { name: 'Python', definition: 'A high-level programming language for general-purpose programming.', uses: 'Used for web development, data analysis, and more.', importantPoints: 'Readable syntax, Extensive libraries' },
      { name: 'Java', definition: 'A high-level, class-based, object-oriented programming language.', uses: 'Used for building cross-platform applications.', importantPoints: 'Platform-independent, Strongly typed' },
      { name: 'Ruby', definition: 'A dynamic, open-source programming language with a focus on simplicity and productivity.', uses: 'Used for web development, especially with Ruby on Rails.', importantPoints: 'Elegant syntax, Object-oriented' }
    ],
    'Data Storage': [
      { name: 'MongoDB', definition: 'A NoSQL database for modern applications.', uses: 'Used for storing unstructured data.', importantPoints: 'Document-oriented, Scalable' },
      { name: 'MySQL', definition: 'An open-source relational database management system.', uses: 'Used for storing structured data.', importantPoints: 'ACID-compliant, SQL' },
      { name: 'PostgreSQL', definition: 'An open-source object-relational database system.', uses: 'Used for managing large volumes of data.', importantPoints: 'Advanced features, Extensible' },
      { name: 'SQLite', definition: 'A self-contained, serverless, and zero-configuration database engine.', uses: 'Used for embedded applications and small to medium-sized data storage.', importantPoints: 'Lightweight, Fast' }
    ]
  };

  const items = categoryData[category] || [];

  return (
    <div className="category-detail">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>{category} Details</h1>
      <div className="details-container">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="category-item">
              <h2>{item.name}</h2>
              <p><strong>Definition:</strong> {item.definition}</p>
              <p><strong>Uses:</strong> {item.uses}</p>
              <p><strong>Important Points:</strong> {item.importantPoints}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryDetail;
