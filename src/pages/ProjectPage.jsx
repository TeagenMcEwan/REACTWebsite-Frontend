import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
// import image from "../image.png";
// import Logo from "./public/Logo.png";
// import { oneProject } from "../data";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  const token = window.localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  const deleteData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    history.push("/");
  };

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      {/* <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
            <li>
            ${pledgeData.amount} from {pledgeData.supporter}
            </li>
            );   
        })}
        </ul>}
      {<button type="edit" onClick={handleSubmit}>
        Edit{" "}
    </button> */}
      <button type="delete" onClick={deleteData}>
        Delete
      </button>
    </div>
  );
}

export default ProjectPage;

// ProjectImage needs to be here!!
