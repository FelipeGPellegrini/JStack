import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/home/index";
import Posts from "./pages/Posts/index";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1, position: "absolute" },
    leave: { opacity: 0, position: "absolute" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
