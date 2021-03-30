import React from "react";
import * as FaIcons from "react-icons/fa";
import { Container, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer class="bg-black text-center text-white">
      <Container className="p-4">
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
        <div class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>
      </Container>
      <div class="text-center p-3">
        © 2021 Copyright <strong>CarWallet</strong>
      </div>
    </footer>
  );
}

export default Footer;
