import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./verre.css";
import image1 from "../images/verres-img/tumbler.jpg";
import image2 from "../images/verres-img/margarita.jpg";
import image3 from "../images/verres-img/verreBallon.jpg";
import image4 from "../images/verres-img/flute.jpg";
import image5 from "../images/verres-img/tulipeHurricane.jpg";

function Verre() {
  return (
    <div>
      <div className="Verre">
        <div className="nav-header">
          <Header />
        </div>
        <h2>Choix du Verre</h2>
        <div className="intro">
          <p>
            Alors que la décoration d'un cocktail peut faire une différence de
            taille lors d'un apéro, le verre choisi pour le servir aussi ! Il
            est un facteur clé pour améliorer l'expérience de consommation. De
            nombreux cocktails doivent même leur nom à la forme du verre dans
            lequel ils sont servis... Voici quelques exemples incontournables !
          </p>
        </div>

        <div className="tumbler">
          <div className="tumblerPicture">
            <img className="imgVerre1" src={image1} alt="Verre tumbler" />
          </div>
          <div className="texteVerre">
            <h3>Le tumbler</h3>
            <p>
              Le tumbler est le verre le plus utilisé pour servir des cocktails.
              Long et fin, il possède des bords droits et permet de mettre
              beaucoup de glaçons dans une boisson. Il est idéal pour servir des
              Mojitos.
            </p>
          </div>
        </div>

        <div className="margarita">
          <div className="margaritaPicture">
            <img className="imgVerre2" src={image2} alt="Verre à Margarita" />
          </div>
          <div className="texteVerre">
            <h3>Le verre à Margarita</h3>
            <p>
              Les margaritas sont traditionnellement servies dans une variante
              du verre à Martini : un verre avec un diamètre qui change de
              largeur au milieu du bol (un verre à 2 étages). Il permet de
              garder les boissons au frais, et leur contour est facilement
              "glaçable" (avec un peu de sel, du sucre...).
            </p>
          </div>
        </div>

        <div className="verreBallon">
          <div className="ballonPicture">
            <img className="imgVerre3" src={image3} alt="Verre ballon" />
          </div>
          <div className="texteVerre">
            <h3>Le verre ballon</h3>
            <p>
              Ce verre à pied relativement large est parfait pour les boissons à
              base de fruits et servi avec des glaçons. On l'utilise pour verser
              une sangria, une Piña Colada, un spritz...
            </p>
          </div>
        </div>

        <div className="flute">
          <div className="flutePicture">
            <img className="imgVerre4" src={image4} alt="Verre flute" />
          </div>
          <div className="texteVerre">
            <h3>La flûte</h3>
            <p>
              Son design allongé permet de préserver les bulles et la finesse de
              la boisson qui l'emplit. Souvent utilisée pour servir du
              champagne, la flûte peut également servir à présenter des
              cocktails à base de pétillants (tel du Prosecco).
            </p>
          </div>
        </div>

        <div className="tulipeHurricane">
          <div className="hurricanePicture">
            <img
              className="imgVerre5"
              src={image5}
              alt="Verre tulipe hurricane"
            />
          </div>
          <div className="texteVerre">
            <h3>Le tulipe Hurricane</h3>
            <p>
              Le nom de ce verre fait référence aux lampes vintage du même nom
              (les lampes Hurricane) et à sa forme particulière qui ressemble à
              une Tulipe. Ce verre est utilisé pour servir des long drinks
              glacés et souvent très colorés.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Verre;
