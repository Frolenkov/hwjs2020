import Project from "./main/project";
import Card from "./main/card";
import Client from './main/client'
import Benefit from './main/benefit'

function Main() {
  return (
    <>
      <section class="promo-wrapper">
        <div class="container">
          <div class="promo">
            <div class="section-title">
              <h2>Welcome to Digit Factor</h2>
              <h1>
                Creative Web Production <br /> from Ukraine
              </h1>
            </div>
            <a href="#" class="promo__discus">
              Discus Your Idea
            </a>
          </div>
        </div>
        <div class="promo-footer">
          <button class="promo-footer__button">
            <img src="img/long_arrow.svg" alt="arrow" />
            Scroll Down
          </button>
          <div class="promo__contacts">
            <button type="button">
              <img src="img/conv.svg" alt="chat" />
            </button>
          </div>
        </div>
      </section>
      <section class="services" id="services">
        <div class="container">
          <div class="section-title">
            <h2>Services</h2>
          </div>
          <div class="gallery">
            <Card
              title="Engineering Service"
              subtext="Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations Support"
              src="img/card1.png"
            ></Card>
            <Card
              title="Internet of Things"
              subtext="Intelligent Mobility / Predictive Maintenance / Smart Manufacturing"
              src="img/card2.png"
            ></Card>
            <Card
              title="Extended Reality XR"
              subtext="VR / MR / AR"
              src="img/card3.png"
            ></Card>
            <Card
              title="AL & ML"
              subtext="Artificial Intelligence / Intelligent Automation / Advanced Analytics"
              src="img/card4.png"
            ></Card>
            <Card
              title="Big data & Analytics "
              subtext="BI & Augmented Analytics / Enterprise Data Platforms / Data Strategy and Governance"
              src="img/card5.png"
            ></Card>
            <Card
              title="Blockchain"
              subtext="Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы"
              src="img/card6.png"
            ></Card>
            <Card
              title="Game Art Production"
              subtext="Concept art, UI, illustration / 3D models and environments / VXT and animations"
              src="img/card7.png"
            ></Card>
          </div>
        </div>
      </section>
      <section class="portfolio" id="portfolio">
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>Здесь будет какой-то текст который расскажет о услугах</p>
          </div>
          <div class="projects">
            <Project src="img/project1.jpg"></Project>
            <Project src="img/project2.jpg"></Project>
            <Project src="img/project3.jpg"></Project>
          </div>
          <button class="portfolio__button">All projects</button>
        </div>
      </section>
      <section class="about" id="about">
        <div class="container">
          <div class="benefits">
              <Benefit title="Years" counter="2"></Benefit>
              <Benefit title="Progect" counter="40"></Benefit>
              <Benefit title="Experts" counter="10"></Benefit>
              <Benefit title="Experts" counter="40"></Benefit>            
          </div>
          <div class="section-title">
            <h2>Clients</h2>
            <p>Здесь будет какой-то текст который расскажет о услугах</p>
          </div>
          <div class="clients">
              <Client src="img/client1.png" alt="stada"></Client>
              <Client src="img/client2.png" alt="hunter"></Client>
              <Client src="img/client3.png" alt="eroglu"></Client>
              <Client src="img/client4.png" alt="krieken-bier"></Client>
          </div>
          <div class="seo-text">
            <h2>Seo text</h2>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button type="button">Read more</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
