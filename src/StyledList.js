import React from "react";
import "./StyledList.css"; // Подключаем стили

const StyledList = ({ items }) => {
  return (
    <div className="styled-list-container">
      <h2 className="styled-list-title">Список элементов</h2>
      <ul className="styled-list">
        {items.map((item, index) => (
          <li key={index} className="styled-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StyledList;
