import { FC } from "react";
import "./Footer.less";
import { PetFactsCom } from "./pet-facts-com/PetFactsCom";
import { Contact } from "./contact-us/Contact";
import { Brand } from "./brand/Brand";
import { Copyright } from "./copyright/Copyright";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-information">
        <PetFactsCom></PetFactsCom>
        <Brand></Brand>
        <Contact></Contact>
      </div>
      <div className="footer-copyright">
        <Copyright></Copyright>
      </div>
    </div>
  );
};
