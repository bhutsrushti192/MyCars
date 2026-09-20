// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         <Link to="/" className="logo">
//           🚗 <span>CarValue</span>
//         </Link>

//         <div className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/buy">Buy Cars</Link>
//           <Link to="/sell">Sell Your Car</Link>
//           <Link to="/valuation">Value My Car</Link>
//           <Link to="/how-it-works">How It Works</Link>
//         </div>

//         <Link to="/valuation" className="nav-button">
//           Get Valuation
//         </Link>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        {/* <Link to="/" className="logo">
          <span className="logo-icon">🚘</span>
          <span className="logo-text">MyCars</span>
        </Link> */}
      <Link to="/" className="logo">
          <img
            src="/mycars-logo.png"
            alt="MyCars"
            className="logo-image"
          />
        </Link>
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/buy">Buy Cars</Link>
          <Link to="/sell">Sell Your Car</Link>
          <Link to="/valuation">Value My Car</Link>
          <Link to="/how-it-works">How It Works</Link>
        </div>

        {/* Button */}
        <Link to="/valuation" className="nav-button">
          Get Valuation
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;