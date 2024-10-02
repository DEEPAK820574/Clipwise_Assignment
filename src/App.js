import "./App.css";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <section id="home">
        <Home />
      </section>
      <section id="shop" className="min-h-[1186px]">
        <Product />
      </section>
      <section id="about" className="min-h-[798px]">
        <Price />
      </section>
      <section id="help"className="min-h-[269px]">
        <Footer />
      </section>
    </div>
  );
}

export default App;
