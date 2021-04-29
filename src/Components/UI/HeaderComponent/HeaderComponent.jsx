import React from "react";
import { Link, withRouter } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import Logo from "../../../Images/Logo/logo.png"

function HeaderComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={Logo} width="50" height="50" alt="" />
          </Link>
          <Link className="navbar-brand" to="/">
            Cric@info
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={PAGE_URLS.HOME}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PAGE_URLS.TEAMS_VIEW}>
                  Teams
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stats
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={PAGE_URLS.RECORDS}>
                      Records
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={PAGE_URLS.ALL_PLAYERS}>
                      Players
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={PAGE_URLS.ALL_STADIUMS}>
                      Stadiums
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PAGE_URLS.SEARCH_PLAYER}>
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Gallery
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(HeaderComponent);
