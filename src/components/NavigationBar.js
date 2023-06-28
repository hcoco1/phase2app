import { Link } from "react-router-dom";

function NavigationBar() {
    return(
        <nav>
        <Link className="linkNav" to="/"> Home </Link>
        <Link className="linkNav" to="properties/list"> Properties </Link>
        <Link className="linkNav" to="contact"> Contact </Link>
      </nav>
    )
}
export default NavigationBar