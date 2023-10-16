import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent : Component did mount called");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>This is about page</h1>
        <h3>This is react series</h3>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User
        name={"Nikhil Kulkarni (function)"}
        location={"Dharwad (function)"}
        twitter={"@nikhilrkulkarn2"}
      /> */}
        <UserClass
          name={"Nikhil Kulkarni (class)"}
          location={"Dharwad (class)"}
          twitter={"@nikhilrkulkarn2"}
        />
      </div>
    );
  }
}

export default About;

/**
 * - Parent Constructor
 * - Parent render
 *
 *    - Nikhil Constructor
 *    - Nikhil render
 *
 *    - Elon Musk Constructor
 *    - Elon Mush render
 *
 *     < DOM UPDATED - IN SINGLE BATCH >
 *    - Nikhil Component Did mount
 *    - Elong Musk Component Did mount
 * - Parent Component did mount
 *
 */
