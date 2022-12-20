import React from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import "./materiel.css";
import complet from "../images/materiel-img/complet.jpg";
import concasseurGlace from "../images/materiel-img/concasseurGlace.webp";
import cuillereMelange from "../images/materiel-img/cuillereMelange.jpg";
import doseurAlcool from "../images/materiel-img/doseurAlcool.jpg";
import mixeur from "../images/materiel-img/mixeur.jpg";
import passoire from "../images/materiel-img/passoire.jpg";
import pilon from "../images/materiel-img/pilon.jpg";
import shaker from "../images/materiel-img/shaker.jpg";
import VerreDoseur from "../images/materiel-img/VerreDoseur.jpg";
import VerreMelangeur from "../images/materiel-img/VerreMelangeur.jpg";
import VerresCocktails from "../images/materiel-img/VerresCocktails.jpg";

function Materiel() {
  return (
    <div className="mat_container">
      <div className="nav-header">
        <Header />
      </div>
      <div className="container">
        <div className="first">
          <div className="completImg">
            <img src={complet} alt="matériel-à-cocktail" width="80%" />
          </div>
          <h2 className="titleMateriel">Ustensiles du Barman</h2>
          <p className="textUses">
            Boire un cocktail en soirée est devenu incontournable. Pour les
            fêtes entre amis c'est la même chose. On adore l'originalité et la
            beauté des cocktails alors on redouble d'imagination pour proposer à
            son entourage des boissons aussi extravagantes que délicieuses. Pour
            être à la hauteur des barmen, il faut déjà avoir le bon matériel.
            Mais alors, c'est quoi le must have du barman ? Pour être un bon
            barman, il n'est pas nécessaire d'avoir l'équipement au complet.
            Avec les ustensiles de base et quelques ingrédients de qualité, tout
            le monde peut réaliser ses propres cocktails. Après, la pratique
            fera tout !
          </p>
        </div>
        <div className="uses">
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Shaker</h3>
              <img className="shaker" src={shaker} alt="Shaker" />
            </div>
            <p className="paraph">
              Le shaker est l'ustensile de base du barman. Il permet de mélanger
              tous les ingrédients et de servir les cocktails. Il permet
              également de frimer : prenez-vous pour un mixologue.
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Verre à mélange</h3>
              <img
                className="VerreMelangeur"
                src={VerreMelangeur}
                alt="Verre à mélange"
              />
            </div>
            <p className="paraph">
              Il permet de préparer les cocktails qui ne doivent pas être
              secoués. Il est souvent gradué et peut parfois constituer la
              partie inférieure du shaker.
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Cuillère à mélange</h3>
              <img
                className="cuillereMelange"
                src={cuillereMelange}
                alt="Cuillère à mélange"
              />
            </div>
            <p className="paraph">
              Cette cuillère dispose d'un long manche pour pouvoir atteindre le
              fond du verre et bien mélanger tous les ingrédients. Plus aucun
              risque de s'en mettre plein les doigts !
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Passoire à cocktails</h3>
              <img
                className="passoire"
                src={passoire}
                alt="Passoire à cocktail"
              />
            </div>
            <p className="paraph">
              Ce petit ustensile très pratique permet d'empêcher les glaçons ou
              les morceaux de fruits de tomber dans le verre.
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Doseur à alcool</h3>
              <img
                className="doseurAlcool"
                src={doseurAlcool}
                alt="Doseur à alcool"
              />
            </div>
            <p className="paraph">
              Oui vous pourriez doser votre alcool à l'oeil comme un vrai barman
              mais avant de devenir un pro, le doseur s'impose! Il permet
              d'ajouter la juste mesure d'alcool à ses cocktails.
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Pilon</h3>
              <img className="pilon" src={pilon} alt="Pilon" />
            </div>
            <p className="paraph">
              C'est l'accessoire indispensable pour les fans de mojitos. Il sert
              à broyer les feuilles de menthe ou le citron.
            </p>
          </div>
          <div className="tool_mixeur">
            <div className="tool_name">
              <h3 className="titletool">Mixeur</h3>
              <img className="mixeur" src={mixeur} alt="Mixeur" />
            </div>
            <p className="paraph">
              Le mixeur est idéal pour préparer des cocktails mousseux et mixer
              ses ingrédients tous ensemble.
            </p>
          </div>
          <div className="tool">
            <div className="tool_name">
              <h3 className="titletool">Verre doseur</h3>
              <img
                className="VerreDoseur"
                src={VerreDoseur}
                alt="Verre doseur"
              />
            </div>
            <p className="paraph">
              Ce petit bouchon dispose d'un bec qui permet à l'alcool de
              s'écouler lentement dans le verre.
            </p>
          </div>
          <div className="toolconcasseur">
            <div className="tool_name">
              <h3 className="titletool">Concasseur de glace</h3>
              <img
                className="concasseurGlace"
                src={concasseurGlace}
                alt="Concasseur de glace"
              />
            </div>
            <p className="paraph">
              Cet équipement est très pratique mais n'est pas vraiment
              indispensable. Pour réaliser des mojitos par exemple, on peut
              facilement broyer la glace manuellement.
            </p>
          </div>
          <div className="toolVerre">
            <div className="tool_name_verre">
              <h3 className="titletool_verre">Verres à cocktail</h3>
            </div>

            <p className="Verre">
              Evidemment, sans verre, pas de cocktail. Quand on est débutant, il
              n'est pas nécessaire de se lancer dans l'achat de toute la
              panoplie de verres à cocktails . Le tumbler est le plus
              passe-partout. Après, à vous de voir quels cocktails vous réalisez
              le plus souvent pour décider quels sont les verres dont vous avez
              le plus besoin.
              <br />
              <Link to="/verre" className="link">
                Verres à cocktail
              </Link>
            </p>
          </div>
          <div className="plscocktail">
            <img
              className="ImgCocktails"
              src={VerresCocktails}
              alt="Verre"
              width="80%"
            />
          </div>
        </div>
      </div>
      <div className="Pied">
        <Footer />
      </div>
    </div>
  );
}

export default Materiel;
