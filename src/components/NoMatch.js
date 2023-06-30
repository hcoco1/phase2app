import { Link } from "react-router-dom";

export function NoMatch() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "5px",
    fontFamily: "Arial",
    textAlign:'center',
  };
  return (
    <div>
      <h2 style={mystyle}>Nothing to see here!</h2>
      <p style={{textAlign:'center'}}>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
