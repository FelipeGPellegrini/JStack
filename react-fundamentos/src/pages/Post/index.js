import React from "react";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  handleNavigate = () => {
    this.props.history.push("/posts");
  };
  render() {
    console.log(this.queryParams.get("nome"));
    return (
      <>
        <button onClick={this.handleNavigate}>
          Voltar para a lista de posts
        </button>
        <h1>Post page</h1>
      </>
    );
  }
}
