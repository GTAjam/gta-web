import React from "react";

const teamData = [{ name: "ABC" }];

const Team = () => {
  return (
    <div>
      <h1>Our Team</h1>
      {teamData.map((member) => (
        <Member name={member.name} />
      ))}
    </div>
  );
};

export default Team;