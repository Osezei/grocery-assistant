import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            className="flex container justify-between mt-2 mb-2"
          >
            <p className="text-xl text-white">{title}</p>
            <div className="flex justify-center">
              <button
                className="mx-2 text-blue-400 text-xl hover:text-white"
                type="button"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-600 text-xl hover:text-white"
                type="button"
                onClick={() => removeItem(id)}
              >
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
