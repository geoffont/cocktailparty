import React, { useState } from "react";
import Header from "../components/header/Header";
import image from "../images/barman-img/barman.jpg";
import "./barman.css";
import Footer from "../components/footer/Footer";
import axios from "axios";
import CocktailList from "../components/CocktailList/CocktailList";

const drinksInitial = [
  {
    strAlcoholic: "Alcoholic",
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",

    strIBA: "Contemporary Classics",
    strImageAttribution: "Cocktailmarler",
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strVideo: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  },
];

function Barman() {
  const [drinkState, setDrinkState] = useState(drinksInitial);

  const getDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")

      .then((response) => response.data)

      .then((data) => {
        setDrinkState(data.drinks);
      });
  };

  return (
    <div className="Barman">
      <div className="head">
        <Header />
      </div>
      <div className="flex">
        <div className="barman-container">
          <img className="imagebarman" src={image} alt="barman" />
          <div className="barmanfooter">
            <h2>Votre barman présente :</h2>
            <h3>Le cocktail du jour</h3>            
          </div>
        </div>
      </div>
      <button className="btn" type="button" onClick={getDrink}>
        A découvrir ici :
      </button>

      <div className="cocktailCard">
        {drinkState.map((drink, index) => (
          <CocktailList
            key={index}
            name={drink.strDrink}
            glass={drink.strGlass}
            picture={drink.strDrinkThumb}
            ingredient={drink.strIngredient1}
            ingredient2={drink.strIngredient2}
            ingredient3={drink.strIngredient3}
            ingredient4={drink.strIngredient4}
            recette={drink.strInstructions}
            video={drink.strVideo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Barman;
