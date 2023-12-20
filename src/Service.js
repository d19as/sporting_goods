function Service() {
  return (
    <div>

      <section class="about" id="about">
        <div class="about-img">
          <img src="2nd.jpg" alt="" />
        </div>
        <div class="about-text">
          <span>About Us</span>
          <h2>We put our hearts <br/> to give the original sporting goods</h2>
          <p>We have contracts with companies like Nike, Adidas, Reebok, and Puma.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </section>

      <section>
        <div class="service" id="service">
          <div class="heading">
            <span>Service</span>
            <h2>We provide best services</h2>
          </div>

          <div class="service-container">
            <div class="s-box">
              <img src="order.png" alt="" />
              <h3>You order</h3>
              <p>You can order by our web-site</p>
            </div>
            <div class="s-box">
              <img src="shipping.png" alt="" />
              <h3>Shipping</h3>
              <p>As fast as we can</p>
            </div>
            <div class="s-box">
              <img src="delivered.png" alt="" />
              <h3>Delivered</h3>
              <p>Enjoy with out</p>
            </div>
          </div>
        </div>

      </section>

      <section class="connect">
        <div class="connect-text">
          <span>Contact</span>
          <h2>You got a problem?</h2>
        </div>
        <a href="#contact" class="btn">Contact Us</a>
      </section>

      <section class="contact" id="contact">
        <div class="contact-box">
          <h3>Dias's</h3>
          <span>Connect With Us</span>
          <div class="social">
            <a href="#"></a><i class="bx bxl-instagram"></i>
            <a href="#"></a><i class="bx bxl-whatsapp"></i>
            <a href="#"></a><i class="bx bxl-telegram"></i>
          </div>
        </div>
        <div class="contact-box">
          <h3>Menu Links</h3>
          <li><a href="#home">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
        <div class="contact-box">
          <h3>Quick Links</h3>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#Privacy Policy">Privacy Policy</a></li>
          <li><a href="#Terms of Use">Terms of Use</a></li>
        </div>

        <div class="contact-box address">
          <h3>Contact</h3>
          <i class="bx bxs-map"><span>Satpaeyva 62, Almaty, Kazakhstan</span></i>
          <i class="bx bxs-phone"><span>+705 591 9214</span></i>
          <i class="bx bxs-envelope"><span>PlayOff@gmail.com</span></i>
        </div>

      </section >
    </div>
  );
}

export default Service;
