import React from "react";

interface IAuthor {
  author: {
    name: string;
    bio: string;
    photo: {
      url: string;
    };
  };
}

const Author: React.FC<IAuthor> = ({ author }) => {
  return (
    <div>
      <h2>{author.name}</h2>{" "}
    </div>
  );
};

export default Author;
