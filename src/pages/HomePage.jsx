import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

<link
  href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
  rel="stylesheet"
></link>;

function HomePage() {
  //variables
  const [projectList, setProjectList] = useState([]);

  //methods
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
    // setProjectList(allProjects);
  }, []);

  //template

  return (
    <>
      <div id="tile">
        <h1>waSportsStars</h1>
      </div>
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </>
  );
}

export default HomePage;
