import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>This is copyright for Joejo @ {currentYear}</p>
    </footer>
  );
}

export default Footer;
