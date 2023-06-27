
import { Link } from "react-router-dom";
function NavigationBar() {
    return(
        <nav>
        <Link className="linkNav" to="/"> Home </Link>
        <Link className="linkNav" to="properties/list"> Properties </Link>
      </nav>
    )
}
export default NavigationBar