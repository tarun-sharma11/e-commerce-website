import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar"
import { Details } from "./components/Details"
import { Cart } from "./components/Cart"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
const App = ()=>{
  const [data] = useState([{id:0,name:'Trendy T-shirt',imgName:'/assets/t-shirt-for-sale.png',price:'399',rating:'4.1',reviews:'4100'},{id:1,name:'Futuristic Flower T-shirt',imgName:'/assets/t-shirt-for-sale-black.png',price:'399',rating:'4.1',reviews:'4100'},{id:2,name:'Sunset T-shirt',imgName:'/assets/t-shirt-for-sale-white.png',price:'399',rating:'4.1',reviews:'4100'}])
  const [reviews,setReviews] = useState([{id:0,name:'Mr.ABC',postedOn:'10 July',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula purus non fermentum rutrum. Nullam finibus elit arcu, eu molestie nulla viverra vitae. Nullam faucibus feugiat aliquet. Nulla rutrum consectetur justo, id mattis ipsum consequat ut. Pellentesque consectetur ex molestie faucibus ornare.',rating:'4.1'}])
  const [carts,setCarts] = useState([{id:0,prdName:'Trendy T-Shirt',img:'/assets/t-shirt-for-sale.png',delOn:'14th November,2023',quantity:1,price:399},{id:2,prdName:'Sunset T-shirt',img:'/assets/t-shirt-for-sale-white.png',delOn:'14th December,2023',quantity:1,price:399}])
  
  const deleteReview = (id)=>{
    setReviews(reviews.filter((review)=>review.id!==id))
  }
  const addReview = (review)=>{
    const id = Math.floor(Math.random()*1000) + 1
    const newReview = {id,...review}
    setReviews([...reviews,newReview])
  }
  const deleteCart = (id)=>{
    setCarts(carts.filter((cart)=>cart.id!==id))
  }
  const updateQuan = (index, selectedQuantity)=>{
  
      const updatedCarts = [...carts];
      
      updatedCarts[index].quantity = selectedQuantity;
  
      setCarts(updatedCarts);
  }
  const addProduct = (cart)=>{
    
    const foundCart = carts.find(existingCart => existingCart.id === cart.id);

    if (foundCart) {
      // Cart with the specified id was found
      const updatedCarts = [...carts];
      
      foundCart.quantity = foundCart.quantity+1;
  
      setCarts(updatedCarts);
      
    } else {
      // Cart with the specified id was not found
      const newcart = {...cart}
      setCarts([...carts,newcart])
    }
    
  }
  return(
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/details/:id" element={<Details data={data} reviews={reviews} onDelete={deleteReview} onAdd={addReview} onBuy={addProduct}/>}></Route>
          <Route path="/cart" element={<Cart carts={carts} onDelete={deleteCart} handleQuantityChange={updateQuan}/>} />
        </Routes>
    </Router>
  )
};

export default App