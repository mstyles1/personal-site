import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function CodingPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/mstyles1/repos")
      .then(response => setRepos(response.data))
      .catch(error => console.error("Error fetching repos:", error));
  }, []);
  
  return (
    <div>
      <h2>My GitHub Portfolio</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
