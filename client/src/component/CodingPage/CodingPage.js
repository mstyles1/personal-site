import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CodingPage() {
  const [repos, setRepos] = useState([]);

  // Hardcoded data for the repositories (you can modify this to match your repos)
  const repoDetails = {
    "Cat-Adoption-Website-Sample": {
      photo: "../images/kitten-adoption.jpg", // Replace with your actual photo URL
      description: "A sample website for potential cat owners."
    },
    "Genuine-Gifs-Sample-Work": {
      photo: "../images/Gif-searcher.png", // Replace with your actual photo URL
      description: "A sample GIF search engine."
    },
    "Skate-Trivia-Sample": {
      photo: "../images/skater-quiz.png", // Replace with your actual photo URL
      description: "A sample quiz for skate trivia."
    },
    "Todo-List-Sample": {
      photo: "../images/todo-list.png", // Replace with your actual photo URL
      description: "A sample Todo-List maker."
    },
  };

  useEffect(() => {
    axios.get("https://api.github.com/users/mstyles1/repos")
      .then(response => {
        const repos = response.data;
        setRepos(repos);
      })
      .catch(error => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="coding-container">
      <a href="https://github.com/mstyles1/" target="_blank" rel="noopener noreferrer">
      <h2 className="coding-header">GitHub Portfolio</h2>
      </a>
      <ul className="repo-list">
        {repos.map(repo => {
          const details = repoDetails[repo.name]; // Get the hardcoded details for the repo
          return (
            <li key={repo.id} className="repo-item">
              <div className="repo-info">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                  {repo.name}
                </a>
                {details ? (
                  <>
                    <img src={details.photo} alt={repo.name} className="repo-photo" />
                    <p className="repo-description">{details.description}</p>
                  </>
                ) : (
                  <p className="repo-description">No description available for this repository.</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}