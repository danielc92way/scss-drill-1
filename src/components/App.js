import React from "react";
import faker from "faker";
import "./App.scss";
import comment from "../icons/comment.png";
import reaction from "../icons/reaction.png";

function Card() {
  return (
    <article className="card card--small">
      <p className="title--medium">{faker.lorem.text().slice(0, 20)}</p>
      <p>{faker.lorem.sentence()}</p>
    </article>
  );
}

function LargeCard() {
  return (
    <article class="card card--medium">
      <p className="title--large">{faker.lorem.text().slice(0, 20)}</p>
      <p className="posted-by">posted by {faker.name.firstName()}</p>
      <p>{faker.lorem.sentences(5) + "... "}</p>
      <div className="card__footer">
        <article className="flex-container">
          <div className="item--centered">
            <img className="image" src={comment} alt="" />
            <span className="card-metric">{faker.random.number(500)}</span>
          </div>
          <div className="item--centered">
            <img className="image" src={reaction} alt="" />
            <span className="card-metric">{faker.random.number(500)}</span>
          </div>
        </article>
        <article className="flex-container">
          <div className="item--centered">
            <span className="card-metric">
              {faker.random.number(10) + " minute read."}
            </span>
          </div>
          <div className="item--centered">
            <button className="button button--blue">SAVE</button>
          </div>
        </article>
      </div>
    </article>
  );
}

function App() {
  console.log(faker);
  return (
    <div>
      <nav>
        <div className="container">
          <section className="banner">
            <h1 className="title--huge">
              {faker.lorem.sentence().slice(0, 30)}
            </h1>
          </section>
        </div>
      </nav>

      <main>
        <div className="container">
          <section class="column-container">
            <aside className="column column__left">
              {new Array(10).fill(true).map(item => (
                <Card />
              ))}
            </aside>
            <section className="column column__middle">
              {new Array(30).fill(1).map(item => (
                <LargeCard />
              ))}
            </section>
            <aside className="column column__right">
              {new Array(10).fill(true).map(item => (
                <Card />
              ))}
            </aside>
          </section>
        </div>
      </main>

      <footer className="footer">
        <h6>
          Do nisi adipisicing sunt exercitation veniam Lorem excepteur nostrud.
        </h6>
      </footer>
    </div>
  );
}

export default App;
