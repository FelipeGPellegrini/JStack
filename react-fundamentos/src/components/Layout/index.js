import React, { useEffect } from "react";
import { Link, BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Routes from "../../Routes";

import { Nav } from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123654864">Post</Link>
      </Nav>
      <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
