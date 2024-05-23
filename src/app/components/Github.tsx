import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col justify-between items-center max-w-full overflow-hidden bg-gradient-to-b from-purple-50 to-purple-100 w-full py-3 rounded-md shadow-md mt-6">
      <h1 className="text-3xl p-5 md:p-10 place-self-start">
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="mmh-masud-03"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="light"
        style={{ color: "#581170" }}
      />
    </div>
  );
}

export default Github;
