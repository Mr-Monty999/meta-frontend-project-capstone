import restaurantFoodImage from "../assets/img/restauranfood.jpg";

function Home() {
  return (
    <section className="hero-section bg-primary-2">
      <h1 className="super-title text-primary-1">Little Lemon</h1>
      <h2 className="sub-title text-secondary-3">Chicago</h2>
      <p className="description-text text-secondary-3">
        It is a long established fact that a reader will be distracted by the
        readable content of a
      </p>
      <button aria-label="On Click" className="btn bg-primary-1" role="button">
        Reserve Table
      </button>
      <img alt="dish" src={restaurantFoodImage} />
    </section>
  );
}

export default Home;
