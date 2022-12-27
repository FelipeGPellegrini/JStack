import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }
  render() {
    console.log(this.queryParams.get("nome"));
    return <h1>Post page</h1>;
  }
}

/*
export default function Home() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  console.log(params);
  console.log(queryParams.get("nome"));

  return <h1>Post</h1>;
}
*/
