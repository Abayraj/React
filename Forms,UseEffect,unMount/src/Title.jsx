import React, { useEffect } from "react";

export const Title = () => {
  useEffect(() => {
    let interval = setInterval(() => {
        console.log("mount");
      console.log("fetching data");
    }, 1000);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
      console.log("unmount");
    };
  }, []); // An empty dependency array ensures that the effect runs only once (on mount)

  return (
    <div>
      <h1>Welcome back</h1>
    </div>
  );
};
