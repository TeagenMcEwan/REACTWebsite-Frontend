import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";

function ProjectPage() {
  const [projectData, setProjectData] = useState({
    loading: true,
    pledges: [],
  });
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

  if (projectData.loading) {
    return "Loading ...";
  }

  return (
    <div>
      <img src={projectData.image} />
      <h2>{projectData.title}</h2>
      <h3>{projectData.owner}</h3>
      <h3>{projectData.goal}</h3>
      <h4>{projectData.description}</h4>
      <h4>
        Created at:{" "}
        {projectData.date_created ? projectData.date_created.substr(0, 10) : ""}
      </h4>
      <h4>{`Status: ${projectData.is_open}`}</h4>
      {projectData.pledges.length > 0 ? <h3>Pledges:</h3> : null}
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              ${pledgeData.amount} from {pledgeData.supporter}
              <br />
              {pledgeData.comment}
            </li>
          );
        })}
      </ul>

      <PledgeForm projectId={id} />
      <hr />
      <button>
        <Link to={`/editproject/${id}`}>Edit</Link>
      </button>
      <button type="delete" onClick={deleteData}>
        Delete
      </button>
    </div>
  );
}

export default ProjectPage;
