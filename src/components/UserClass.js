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
        avatar_url: "https://dummy-photo.com",
      },
    };

    console.log(this.props.name + "Child constructor");
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

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount called");
  }

  render() {
    const { name, location, url, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Github repository:{url} </h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * ---- MOUNTING --------
 *
 * Constructor (dummy)
 * Render (dummy)
 *   <HTML page>
 * Component Did Mount
 *    < Make an API call>
 *    < this.setState >
 *
 * Note : Once "setState" is called, it triggers the reconciliation cycle.When this happens, accoding to diagram Update cycle begins
 *
 * ---- UPDATE --------
 *
 * render(API data)
 *     <HTML page loaded (new API data)>
 * Component Did update
 *
 */
