import Meals from "./components/Products/Meals";
import Header from "./components/header";
import Cart from "./components/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
         <Header />
         <Meals />
         <Cart />
         <Checkout />
     </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;


      {/*
      <h1>You got this 💪</h1>
       <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p>
      <h1>Let's do it...</h1>
       */}