import { Link } from "react-router";

import "./page.css";
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>This page is missing or you typed the wrong address</h1>
      <p>
        Return to the <Link to="/">home</Link> page
      </p>
    </div>
  );
}
