import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="new-task-details">Details</label>
      <input
        type="text"
        id="new-task-details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="new-task-category">Category</label>
      <select
        id="new-task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
