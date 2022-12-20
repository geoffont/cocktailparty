import React from "react";
import "./style.css";
import logo from "../../images/logos/logo-api.png";
import image from "../../images/logos/1001cocktails.png";
import image1 from "../../images/logos/facebook-cocktail.png";
import image2 from "../../images/logos/verreBallon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="textfooter">
        <h4>Crée par Nelly, Sandra, Geoffroy</h4>
        <h4>L'abus d'alcool est dangereux pour la santé !</h4>
      </div>
      <div className="lien-footer">
        <div className="logo-flex">
          Lefooding
          <a
            href="https://lefooding.com/recherche/bar/place/france-8172"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={image2} alt="logo cocktail" />
          </a>
        </div>
        <div className="logo-flex">
          Recettes
          <a
            href="https://www.facebook.com/recette.cocktail"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={image1} alt="logo cocktail" />
          </a>
        </div>
        <div className="logo-flex">
          1001cocktails
          <a
            href="https://www.1001cocktails.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={image} alt="logo cocktail" />
          </a>
        </div>
        <div className="logo-flex">
          API
          <a
            href="https://www.thecocktaildb.com/api.php"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={logo} alt="logo api" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
