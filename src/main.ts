import "./style.css";
import { query } from "./query.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <div class="nav-container">
      <button class="menu-button">MENU</button>

      <div class="megamenu-overlay">
        <div class="menu-sidebar">
          <div class="menu-item" data-content="section1">Products</div>
          <div class="menu-item" data-content="section2">Services</div>
          <div class="menu-item" data-content="section3">About Us</div>
          <div class="menu-item" data-content="section4">Contact</div>
        </div>

        <div class="menu-content">
          <div id="section1" class="content-section">
            <h2>Our Products</h2>
            <p>Browse our amazing product catalog...</p>
          </div>
          <div id="section2" class="content-section">
            <h2>Our Services</h2>
            <p>Discover what we can do for you...</p>
          </div>
          <div id="section3" class="content-section">
            <h2>About Us</h2>
            <p>Learn more about our company...</p>
          </div>
          <div id="section4" class="content-section">
            <h2>Contact Us</h2>
            <p>Get in touch with our team...</p>
          </div>
        </div>
      </div>
    </div>
`;

query();
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
