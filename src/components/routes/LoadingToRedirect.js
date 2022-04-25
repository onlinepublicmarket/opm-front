import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(1);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push("/");
    // cleanup
    return () => clearInterval(interval);
  }, [count,history]);

  return (
    <div className="container p-5 text-center">
      <p><h2>Unauthorized Access, Redirecting you in {count} second</h2></p>
    </div>
  );
};

export default LoadingToRedirect;