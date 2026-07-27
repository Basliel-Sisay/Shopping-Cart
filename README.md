# Shopping Cart 

A responsive, production-ready e-commerce shopping cart web application built for [The Odin Project's React Curriculum](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart). 

This project demonstrates client-side routing, centralized state management, asynchronous data fetching from an external API, boundary-safe user input handling, and automated component testing.

---

##  Live Demo

[View Live Project](odinxshoppingcart.netlify.app) 

---

##  Key Features

- **Multi-Page Client Routing**: Clean navigation across `Home`, `Shop`, and `Cart` views using `react-router-dom` without page reloads.
- **Dynamic Product Data**: Fetches real-time item lists from [FakeStore API](https://fakestoreapi.com/) complete with individual loading spinners and error handling.
- **Persistent Cart Counter**: Dynamic navigation badge updating live based on total item quantities across the entire shopping session.
- **Defensive Input Handling**: Custom quantity controls enforcing lower bounds ($1$), disabling decrement actions at minimum capacity, and auto-correcting empty inputs via `onBlur`.
- **Itemized Checkout Summary**: Real-time line item subtotal calculations and grand total computation formatted cleanly to two decimal places.
- **Automated Testing**: Comprehensive unit and integration test suite written with **Vitest** and **React Testing Library**.

---

##  Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **API**: [FakeStore REST API](https://fakestoreapi.com/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
- **Styling**: Modern CSS3 (Flexbox, Grid, CSS Variables)

---

##  Project Architecture

```text
src/
├── components/              # Reusable UI components
│   ├── CartItem/            # Individual cart row item & subtotal display
│   ├── Navbar/              # Global top bar with live cart counter badge
│   └── ProductCard/         # Product item card with local quantity controls
├── pages/                   # Main page routes
│   ├── Cart/                # Order breakdown & grand total summary
│   ├── Home/                # Hero landing page & shop entry point
│   └── Shop/                # API fetch orchestrator & product grid view
├── services/                # Network abstraction
│   └── productService.js    # Async fetch module for FakeStore API
├── tests/                   # Test suite for components & interactions
│   ├── Cart.test.jsx
│   ├── ProductCard.test.jsx
│   └── Shop.test.jsx
├── App.jsx                  # Top-level layout & central cart state manager
└── main.jsx                 # React root entry point with Router wrapper
```

## Local Setup Instructions

Follow these steps to run the project locally on your machine:
1. Clone the repository:

git clone [https://github.com/your-username/shopping-cart.git](https://github.com/Basliel-Sisay/Shopping-Cart.git)
cd shopping-cart

2. Install dependencies:

   <pre>
     npm install
   </pre>

3. Launch dev server:

   <pre>
     npm run dev
   </pre>

   Open http://localhost:5173 in your browser

## Running the Test Suite

This project follows testing best practices prescribed by The Odin Project, focusing on component integration, user interaction events, and mocking external network dependencies rather than testing router implementation details.

Run the test suite in interactive watch mode:

<pre>
  npx vitest
</pre>

##   Implementation Highlights

- Lifting State Up: Centralized cart state (cart) lives inside App.jsx, allowing seamless communication between the Shop page (adding items) and the Cart page (adjusting or removing items).

- Graceful Async Boundaries: The Shop component safely catches missing payload responses or network errors from the API, preventing uncaught errors from crashing the UI tree.

- Automated Mocking: Vitest mocks the network layer during testing to ensure unit tests remain fast, reliable, and decoupled from external API availability.

 ## Acknowledgments
 
Project prompt and learning objectives by The Odin Project.

Mock product data provided by FakeStore API
