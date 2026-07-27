import { Link } from "react-router-dom";
function Home(){
  return (
    <div className="homePage">
      <h1>Welcome to Our Shop</h1>
      <p>
        Discover a curated collection of products designed to bring quality, style and value into your everyday life. Browse our selection and find something you'll love</p>
      <Link to="/shop" className="shopButton">
        Start Shopping
      </Link>
    </div>
  );
}

export default Home;
