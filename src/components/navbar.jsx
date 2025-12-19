import "./navbar.css";

export default function Navbar() {
  const openMenu = () => {
    const menu = document.querySelector(".Mobile");
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
  };
  return (
    <nav id="navbar">
      <div className="Desktop">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contactaaaaaaaaaa</a>
      </div>
      <div className="Mobile">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contactaaaaaaaaaa</a>
      </div>
      <button className="buttonMobile" onClick={openMenu}>
        $
      </button>
    </nav>
  );
}
