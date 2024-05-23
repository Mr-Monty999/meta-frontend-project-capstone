import restaurantFoodImage from "../assets/img/restauranfood.jpg";
import greekSaladImage from "../assets/img/greek-salad.jpg";
import bruchettaImage from "../assets/img/bruchetta.jpg";
import dessertImage from "../assets/img/dessert.jpg";
import restaurantImage from "../assets/img/restaurant.jpg";
import chefsImage from "../assets/img/chefs.jpg";


function Main() {
  return (
    <main>
      <section className="hero-section bg-primary-2">
        <h1 className="super-title text-primary-1">Little Lemon</h1>
        <h2 className="sub-title text-secondary-3">Chicago</h2>
        <p className="description-text text-secondary-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a
        </p>
        <button className="btn bg-primary-1" role="button">
          Reserve Table
        </button>
        <img alt="dish" src={restaurantFoodImage} />
      </section>
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
                It is a long established fact that a reader will be distracted
                by the readable content of a
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
                It is a long established fact that a reader will be distracted
                by the readable content of a
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
                It is a long established fact that a reader will be distracted
                by the readable content of a
              </p>
              <button className="btn bg-primary-1 dish-button">
                Order a Delivery
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section bg-secondary-3">
        <h1 className="super-title text-center">Testimonials</h1>
        <div className="testimonial-container d-flex justify-content-center align-items-center">
          <div className="testimonial mx-10">
            <div>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user f-size-xl mx-5"></i>
              <p className="mx-5">Omer</p>
            </div>
            <p>Good</p>
          </div>
          <div className="testimonial mx-10">
            <div>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user f-size-xl mx-5"></i>
              <p className="mx-5">Khalid</p>
            </div>
            <p>Excellent</p>
          </div>
          <div className="testimonial mx-10">
            <div>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user f-size-xl mx-5"></i>
              <p className="mx-5">John</p>
            </div>
            <p>Very Good</p>
          </div>
          <div className="testimonial mx-10">
            <div>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
              <i className="fa-solid fa-star text-gold"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user f-size-xl mx-5"></i>
              <p className="mx-5">Petter</p>
            </div>
            <p>Love It</p>
          </div>
        </div>
      </section>
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
            <img  className="about-image-1" src={chefsImage}/>
            <img className="about-image-2" src={restaurantImage}/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
