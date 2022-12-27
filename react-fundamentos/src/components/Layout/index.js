import React, { useEffect } from "react";
import { Link, BrowserRouter, useHistory } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../Routes";

import { Nav } from "./styles";

export default function Layout() {
  const history = useHistory();
  console.log(history);
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123654864">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
