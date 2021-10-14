
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="/"><img className="my-in" id="avatar" src="img/default.jpg" alt="NA" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto size">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="add-post">Add Post</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="about">About</a>
                    </li>                   
                    <li className="nav-item active">
                        <a className="nav-link" href="PayPal">Pay Now</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="User">Add-detail</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="Contact">Contact</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="Sign-in">{<i className="fa fa-google" aria-hidden="true"></i>}</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="FacebookSign-in">{<i className="fa fa-facebook-official" aria-hidden="true"></i>}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;