"use client";

export default function Drawer() {
  function closeNav() {
    const mySidenav = document.getElementById("mySidenav");
    const main = document.getElementById("main");

    if (mySidenav && main) {
      mySidenav.style.width = "0";
      main.style.marginLeft = "0";
    }
  }

  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}
