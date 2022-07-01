import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <p>{title}</p>
            <div>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
