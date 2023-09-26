import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[200px] text-4xl font-semibold gap-5">
      <h2>Oops!!! </h2>
      <h2>404 Page Not Found </h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
