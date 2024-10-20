//
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plants from "./components/Plants";
import Nursery from "./components/Nursery";
import Filter from "./components/Filters";
import ProductsList from "./components/ProductsList";

// const Home = ()=>{
//   return <>

//   </>
// }

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes> */}
      <main>
        <Header />
        <Navbar />
        <Plants />
        <Nursery />
        <section className="row">
          {/* filters */}
          <Filter />
          {/* product section */}
          <div className="products_section">
            <ProductsList />
          </div>
        </section>
      </main>
      <Footer />
      {/* </Routes> */}
    </BrowserRouter>
  );
};

export default App;
