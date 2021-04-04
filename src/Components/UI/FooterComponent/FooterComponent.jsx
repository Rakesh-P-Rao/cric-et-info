import React from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

function FooterComponent() {
  return (
    <div className="footer fixed-bottom">
      <div className="row">
        <div className="col col-md-1">
          <p>footer</p>
        </div>
        <div className="col-md-1">
          <Link className="btn btn-danger" to={PAGE_URLS.ADMIN}>
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
