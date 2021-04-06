import { Component, logout } from "react";

class Header extends Component {
  logout = () =>{
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    if (localStorage.getItem('token')) {
      var menu =
        <ul class="navbar-nav ml-auto navbar-center">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Futsal">Futsal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/Event">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/Community">Community</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="static/databaseimage/{{ user.tbluser.profilephoto }}" width="30" height="30" class="rounded-circle" />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/profile">Profile</a>
              <a class="dropdown-item " href="/" onClick={this.logout}>Log Out</a>
            </div>
          </li>
        </ul>
    }
    else {
      var menu =
        <ul class="navbar-nav ml-auto navbar-center">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Futsal">Futsal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/Event">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/Community">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link get-started" href="/login">Login</a>
          </li>
        </ul>
    }
    return (
      <div class="navigationbar">

        <nav class="navbar navbar-expand-lg fixed-top text-center">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src="assets/img/futsallogo.png" height="50" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

              <i class='bx bx-menu' style={{ color: "#009970" }}></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {menu}
            </div>
          </div>
        </nav>

      </div>

    )
  }
}
export default Header;