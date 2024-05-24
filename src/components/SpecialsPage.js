import greekSaladImage from "../assets/img/greek-salad.jpg";
import bruchettaImage from "../assets/img/bruchetta.jpg";
import dessertImage from "../assets/img/dessert.jpg";

function Specials() {
  return (
    <section className="highlights-section">
      <div className="highlights-section-header">
        <h1 className="super-title">This Weeks Specials</h1>
        <button className="btn bg-primary-1" role="button">
          Online Menu
        </button>
      </div>
      <div className="dish-container">
        <div className="bg-secondary-3 dish">
          <img alt="dish" className="dish-image" src={greekSaladImage} />
          <div className="dish-body">
            <div className="dish-header">
              <h2 className="sub-title">Greek Salad</h2>
              <h2 className="sub-title text-primary-1 bold">$18.00</h2>
            </div>
            <p className="description-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a
            </p>
            <button className="btn bg-primary-1 dish-button">
              Order a Delivery
            </button>
          </div>
        </div>
        <div className="bg-secondary-3 dish">
          <img alt="dish" className="dish-image" src={bruchettaImage} />
          <div className="dish-body">
            <div className="dish-header">
              <h2 className="sub-title">Bruchetta</h2>
              <h2 className="sub-title text-primary-1 bold">$20.00</h2>
            </div>
            <p className="description-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a
            </p>
            <button className="btn bg-primary-1 dish-button">
              Order a Delivery
            </button>
          </div>
        </div>
        <div className="bg-secondary-3 dish">
          <img alt="dish" className="dish-image" src={dessertImage} />
          <div className="dish-body">
            <div className="dish-header">
              <h2 className="sub-title">Lenon Desert</h2>
              <h2 className="sub-title text-primary-1 bold">$10.00</h2>
            </div>
            <p className="description-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a
            </p>
            <button className="btn bg-primary-1 dish-button">
              Order a Delivery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;