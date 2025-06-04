import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="d-flex justify-content-between mb-5">
			<nav className="navbar fixed-top bg-body-secondary p-2">
				<div className="container-fluid">
					<span>
						<Link className="navbar-brand" to="/">
							Movies
						</Link>
						<a className="navbar-brand" href="#">
							Features
						</a>
					</span>
					<span>
						<a className="navbar-brand" href="#">
							Login
						</a>

						<a className="navbar-brand" href="#">
							Register
						</a>
					</span>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
