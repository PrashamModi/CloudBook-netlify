//Error: disabled attribute is not working
import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title[0], note.description[0], note.tag[0]);
    setNote({title:"", decription:"", tag:""});
    props.showAlert("Note Added Successfully", "success");
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="container my-3">
      <h1>Add A Note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onchange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onchange}
            minLength={3}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onchange}
            minLength={3}
            required
          />
        </div>

        <button
          // disabled={(note.title.length < 5 || note.description.length < 5)}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
