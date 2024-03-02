import {Link, useRouteError } from "react-router-dom";
import "./CSS/Error.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="ErrorPage">
      <div className="OopsStyple">
        <h1 className="ErrroHeading">Oops!</h1>
      </div>
      <div className="Errormessage">
        <h2>
          {error.status} - {error.statusText}
        </h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <button  className="LinkButton"><Link to="/dev.blogwiki"  className="LinkText">GO TO HOMEPAGE</Link></button>
      </div>
    </div>
  );
}
