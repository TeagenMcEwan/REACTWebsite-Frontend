import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function EditProjectForm() {
  //variables
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: true,
    //   date_created: "2020-09-09T20:31:00Z",
  });
  const { id } = useParams();

  const history = useHistory();
  const token = window.localStorage.getItem("token");

  //methods
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData((data) => ({
      ...data,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}/`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        body: JSON.stringify({
          title: projectData.title,
          description: projectData.description,
          goal: projectData.goal,
          image: projectData.image,
          is_open: projectData.is_open,
        }),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      postData()
        .then((response) => {
          history.push(`/project/${id}`);
          // console.log(response);
        })
        .catch((error) => {
          alert("There is an error in your request");
        });
    }
  };

  //template
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Project Title"
          onChange={handleChange}
          value={projectData.title}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          onChange={handleChange}
          value={projectData.description}
        />
      </div>
      <div>
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          id="goal"
          placeholder="Goal"
          onChange={handleChange}
          value={projectData.goal}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          placeholder="Image"
          onChange={handleChange}
          value={projectData.image}
        />
      </div>
      <div>
        <label htmlFor="is_open">Project Open:</label>
        <input
          type="checkbox"
          id="is_open"
          placeholder="is_open"
          onChange={handleChange}
          value={projectData.is_open}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}

export default EditProjectForm;
