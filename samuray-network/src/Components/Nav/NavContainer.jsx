import Nav from "./Nav";
import { connect } from "react-redux";

// export default function NavContainer(props) {
//   return <Nav />;
// }

let mapStateToProps = (state) => {
  return {
    friends: state.nav.friends,
  };
};
let mapDispatchToProps = () => {
  return {};
};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;
