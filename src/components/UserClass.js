import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      //   count2: 2,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };

    //console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Component did mount called");
    const data = await fetch("https://api.github.com/users/nikhilrkul");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, url } = this.state.userInfo;
    // console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Github repository:{url} </h4>
      </div>
    );
  }
}

export default UserClass;
