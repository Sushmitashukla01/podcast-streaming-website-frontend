import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from "react-router-dom"
import '../styles/style.css';

function Nav(){
    return(
        <div>
        <Helmet>
        <title>Audioverse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./styles/style.css" />
      </Helmet>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="currentColor" class="bi bi-broadcast-pin" viewBox="0 0 16 16">
                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
          </svg>
          <span class="fs-4 mx-2 navhead">Audioverse.</span>
        </Link>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control searchbar" placeholder="Search Podcasts" aria-label="Search" />
          </form>
  
        <ul class="nav nav-pills">
          <li class="nav-item"><Link to="/home" class="nav-link navlink" aria-current="page">Home</Link></li>
          <li class="nav-item"><Link to="/about" class="nav-link navlink">About</Link></li>
          <li class="nav-item"><Link to="/contact" class="nav-link navlink">Contact</Link></li>
        </ul>
        <div className="mx-4 text-end">
            <Link to="/login-registrant" className="btn me-2 navlink login">Login</Link>
            <Link to="/create-registrant" className="btn navlink signup" style={{ textDecoration: 'none', color: 'red' }}>
                Sign-up
            </Link>
        </div>
        </header>
        </div>
    )

    
}
export default Nav;