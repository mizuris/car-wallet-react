import React from "react";
import * as FaIcons from "react-icons/fa";
import { Container, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-black text-center text-white">
      <Container className="p-3">
        <div className="mb-4">
          <Button
            href="https://www.facebook.com/"
            target="blank"
            className="m-1"
            variant="outline-light"
          >
            <FaIcons.FaFacebookF />
          </Button>
          <Button
            href="https://github.com/mizuris/car-wallet-react"
            target="blank"
            className="m-1"
            variant="outline-light"
          >
            <FaIcons.FaGithub />
          </Button>
          <Button
            href="https://www.linkedin.com/"
            target="blank"
            className="m-1"
            variant="outline-light"
          >
            <FaIcons.FaLinkedinIn />
          </Button>
        </div>
        <div className="footer-text">
          <p>App created with React and Bootstrap. Check social media and repository above!</p>
          <p>
            Author: <strong>Piotr Bątor.</strong>
          </p>
        </div>
      </Container>
      <div className="footer-text text-center p-3">
        © 2021 Copyright <strong>CarWallet</strong>
      </div>
    </footer>
  );
}

export default Footer;
