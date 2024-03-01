import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div>
      <h1 className="text-3xl p-10">
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="mmh-masud-03"
        blockSize={15}
        blockMargin={5}
        // color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
