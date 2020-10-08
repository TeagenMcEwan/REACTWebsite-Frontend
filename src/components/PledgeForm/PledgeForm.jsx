import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./PledgeForm.css";

function PledgeForm({ projectId }) {
  //variables
  const [pledge, setPledge] = useState({
    project_id: projectId,
    amount: 10,
    comment: null,
  });
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  //methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPledge((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(pledge),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData()
      .then((response) => {
        // history.push(`/project/${projectId}`);
        alert("Thanks for your pledge!");
        window.location.reload();
        // console.log(response);
      })
      .catch((error) => {
        alert("you have not completed the form");
      });
  };

  //template
  return (
    <div id="pledge">
      <form>
        <label htmlFor="amount">Pledge amount:</label>
        <input
          type="number"
          min={1}
          step={10}
          id="amount"
          placeholder="Pledge amount"
          onChange={handleChange}
          value={pledge.amount}
        />
        <label htmlFor="comment">Pledge comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Comment"
          onChange={handleChange}
          value={pledge.comment}
          required
        />

        <button type="submit" onClick={handleSubmit}>
          Pledge
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;
