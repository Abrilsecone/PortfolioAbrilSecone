import React from 'react';

const GitHubLink = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default GitHubLink;
