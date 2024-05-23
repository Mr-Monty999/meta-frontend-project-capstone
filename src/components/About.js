import restaurantImage from "../assets/img/restaurant.jpg";
import chefsImage from "../assets/img/chefs.jpg";

function Home() {
  return (
    <section className="about-section">
      {/* <h1 className="super-title text-center">about us</h1> */}
      <div className="d-flex justify-content-center">
        <div className="about-content">
          <h1 className="super-title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
          <p className="description-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>
        </div>
        <div className="p-relative">
          <img className="about-image-1" src={chefsImage} />
          <img className="about-image-2" src={restaurantImage} />
        </div>
      </div>
    </section>
  );
}

export default Home;
