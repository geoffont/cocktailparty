import React from "react";
import "./conseils.css";
import Img1 from "../images/conseils-img/Img1.jpg";
import Img2 from "../images/conseils-img/Img2.jpg";
import Img3 from "../images/conseils-img/Img3.jpg";
import Img4 from "../images/conseils-img/Img4.jpg";
import Img5 from "../images/conseils-img/Img5.jpg";
import Img6 from "../images/conseils-img/Img6.jpg";
import Img7 from "../images/conseils-img/Img7.jpg";
import Img8 from "../images/conseils-img/Img8.jpg";
import Img9 from "../images/conseils-img/Img9.jpg";
import Img10 from "../images/conseils-img/Img10.jpg";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Conseils() {
  return (
    <div className="Conseils">
      <div className="head">
        <Header />
      </div>
      <div className="main">
        <div>
          <h1 className="Title_art">
            10 règles d’or à suivre pour faire de bons cocktails
          </h1>
        </div>
        <div className="Articles">
          <article className="art">
            <div className="Img">
              <img className="img_1" src={Img1} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                1. Commencez par les cocktails classiques
              </h2>
              <p className="parapher1">
                Quand vous ne savez pas comment faire des cocktails ? Commencez
                toujours par maîtriser les recettes de cocktails classiques au
                lieu d’expérimenter. Au début, expérimenter est une bonne idée
                pendant la courbe d’apprentissage, la créativité est importante
                mais il faut toujours commencer par comprendre les bases, puis
                passer à l’improvisation. L’astuce vintage est toujours un atout
                pour appréhender la mixologie.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_2" src={Img2} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                2. L’alcool est un ingrédient important dans la fabrication de
                cocktails
              </h2>
              <p className="parapher">
                Il ne fait aucun doute qu’un bon cocktail ne doit pas masquer
                son ivresse. Cette règle d’or : la base de 50 ml du cocktail est
                un spiritueux comprenant également quelques autres ingrédients.
                La meilleure façon de faire des cocktails est d’avoir une main
                généreuse avec les spiritueux
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_3" src={Img3} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                3. La glace est un composant essentiel pour faire des cocktails
              </h2>
              <p className="parapher">
                La glace est l’élément le plus ignoré et négligé dans la
                fabrication de cocktails, ne sous-estimez pas cet ingrédient. La
                glace a un double objectif pour votre boisson, refroidir le
                cocktail et ajouter un peu de dilution. Si vous n’utilisez pas
                suffisamment de glaçons, ils fondront rapidement, ce qui
                entraînera une dilution de la boisson. Par conséquent, la
                meilleure façon de préparer des cocktails est de s’assurer que
                la glace doit toujours être au-dessus de la ligne d’alcool dans
                le shaker ainsi que dans le verre. Si vous manquez de glace,
                faites de la glace claire à la maison.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_4" src={Img4} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                4. Pour parfaire l’art de la confection de cocktails, il est
                essentiel de connaître ses ingrédients
              </h2>
              <p className="parapher">
                Nous sommes tous conscients que la préparation de cocktails ne
                consiste pas seulement à mélanger un ou deux spiritueux avec des
                ingrédients aromatisés. La meilleure façon de faire des
                cocktails est de connaître tous vos ingrédients dans votre
                recette de cocktail, qu’ils soient sucrés, acides, forts,
                faibles il est important de savoir ce qu’ils sont. « Fort » fait
                essentiellement référence à la liqueur principale de votre
                cocktail, « faible » à l’alcool secondaire, « aigre » est la
                note d’agrumes dans votre boisson et « sucré » est la douceur du
                cocktail.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_5" src={Img5} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                5. N’improvisez pas, lisez attentivement les recettes de
                cocktails !
              </h2>
              <p className="parapher">
                Comment faire des cocktails ? Internet et de nombreux livres
                regorgent de boissons et de recettes de cocktails, donc ne
                suivez pas votre sixième sens si vous n’êtes pas un expert. La
                meilleure façon de faire des cocktails est de vous procurer vos
                ingrédients préférés et aussi un livre de recettes qui indique
                quelle liqueur utiliser, les quantités, la méthode pour la
                préparer. Si vous ne savez pas s’il faut mélanger, secouer ou
                mélanger, vous pouvez finir par changer le goût et l’apparence
                de la boisson.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_6" src={Img6} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                6. Un bon cocktail est toujours équilibré.
              </h2>
              <p className="parapher">
                Visez un mélange de saveurs bien équilibré, ni trop sucré ni
                trop acide et pas trop amer non plus. C’est facile de faire un
                cocktail qui est bon à la première gorgée, de plus, le défi est
                de faire quelque chose qui a bon goût aussi à la dernière
                gorgée. Les débutants qui préparent des cocktails doivent garder
                à l’esprit que vos papilles gustatives sont votre guide, alors
                continuez à goûter à toutes les étapes de la préparation.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_7" src={Img7} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">7. Tout est dans la présentation</h2>
              <p className="parapher">
                Ne vous précipitez pas en installant la boisson sur la table,
                prenez le temps et soyez patient. Vous n’avez pas besoin d’être
                obsessionnel à ce sujet mais la présentation créative joue un
                rôle très important dans la technique de fabrication du
                cocktail, l’apparence du cocktail doit être la meilleure avant
                consommation.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_8" src={Img8} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">
                8. Mélanger ou secouer une technique importante de préparation
                de cocktails
              </h2>
              <p className="parapher">
                Quand mélanger ? Quand secouer ? Cette technique de fabrication
                de cocktails est simple mais obligatoire. Il existe deux types
                de base de cocktails, les cocktails aromatiques qui ne
                contiennent que des éléments alcoolisés, ces cocktails sont
                souvent secs et alcoolisés et doivent être mélangés avec de la
                glace qui entraîne une dilution et une texture plus lisse,
                l’autre type de cocktail est les cocktails aigres qui
                contiennent des agrumes ou occasionnellement d’autres fruits, de
                la crème, du café aux œufs, ces derniers nécessitent d’être
                secoués pour plus de dilution et une texture légèrement altérée.
                La troisième catégorie est celle des « long drinks » qui peuvent
                être dilués avec de l’eau gazeuse, du champagne, du thé, etc.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_9" src={Img9} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">9. Chaque élément compte</h2>
              <p className="parapher">
                Chaque élément que vous ajoutez à la boisson fait la différence,
                David A Embury, auteur du livre The Fine Art of Mixing Drinks,
                affirme qu’aucune boisson n’était meilleure que ses pires
                ingrédients, ce qui compte le plus pendant que faire un cocktail
                est votre travail acharné et la créativité. La marque de
                spiritueux que vous utilisez dans votre boisson fait la
                différence, le citron vert que vous choisissez fait la
                différence. Chaque composant de votre boisson fait la différence
                et compte.
              </p>
            </div>
          </article>
          <article className="art">
            <div className="Img">
              <img className="img_10" src={Img10} alt="cocktails" />
            </div>
            <div className="text">
              <h2 className="titre2">10. Avoir le bon matériel</h2>
              <p className="parapher">
                Chaque type de cocktail nécessite un type de shaker différent,
                toutes les utilisations de shaker ne peuvent pas faire une bonne
                boisson. Le barman et les mixologues doivent passer beaucoup de
                temps de qualité avec leur shaker, leur pilon, leur passoire et
                leur brûleur pour atteindre la précision de la technique de
                préparation de cocktails. Tous ceux qui se demandent comment
                faire des cocktails ? Suivez ces bases de mixologie qui incluent
                la mise en œuvre de toutes ces techniques et astuces de
                préparation de cocktails à maîtriser par les barmans et les
                débutants tout en préparant des cocktails afin de servir la
                meilleure boisson de la ville.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Conseils;
