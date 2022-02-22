import Hero from "./Hero";
import Navbar from "./Navbar";

const Layout = props => (
  <div className="Layout" >
    <Navbar />
    <Hero />
    <div className="Content">
      {props.children}
    </div>
  </div>
);

export default Layout;