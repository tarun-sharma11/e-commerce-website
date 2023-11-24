import { useParams,Link } from "react-router-dom"
import { Review } from "./Review"
import { AddReview } from "./AddReview"
export const Details = ({data,onDelete,reviews,onAdd,onBuy}) => {
  const params = useParams()
  const product = (data[params.id])  
  const onPurchase = (product) =>{
    const wannaBuy = {
      "prdName": product.name,
      "img":product.imgName,
      "delOn":"9th December,2023",
      "quantity":1,
      "price":product.price,
      "id":product.id
    }
    onBuy(wannaBuy)
  }
  return (
    <div>
      <div className="main container-fluid row">
        <div className="col-md-6">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/assets/t-shirt-for-sale.png" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/t-shirt-for-sale-black.png" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="/assets/t-shirt-for-sale-white.png" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div id="carouselExampleIndicators" style={{marginTop: "25px"}} className="row">
              <div className="col-md-6">
                <Link to={`/cart`}>
                <button onClick={()=>onPurchase(product)} type="button" className="btn btn-outline-warning"><img src="/assets/cart.svg" alt="Logo" width="25" height="25"/> Add to Cart</button>
                </Link>
              </div>
              <div className="col-md-6">
                <Link to={`/cart`}>
                  <button onClick={()=>onPurchase(product)} type="button" className="btn btn-warning">Buy Now</button>
                </Link>  
              </div>
            </div> 
          </div>
        </div>
        <div className="col-md-6">
            <div className="prddetails card">
                <div className="card-body">
                    <p className="prdname fw-bold card-text">{product.name}</p>
                    <p className="fs-3">₹ {product.price}</p>
                    <div className="row" style={{gap:"100px"}}>
                        <div className="col"><div className="badge bg-success text-wrap">{product.rating}<img src="/assets/star.svg" alt="Logo"/></div></div>
                        <div className="fw-bold col prdname card-text">{product.reviews} Reviews</div>
                    </div>
                    <p className="badge text-wrap bg-primary" style={{marginTop: "10px"}}>Free Delivery</p>
                </div>
              </div>
              <div className="prddetails card">
                <div className="card-body">
                  <p className="fs-6 fw-bold">Select Size</p>
                  <div className="row">
                    <div className="col-sm-3">S</div>
                    <div className="col-sm-3">M</div>
                    <div className="col-sm-3">L</div>
                    <div className="col-sm-3">XL</div>
                  </div>
                </div>
              </div>
              <div className="prddetails card">
                <div className="card-body">
                    <div className="fs-6 fw-bold">Product Details</div>
                        <div style={{color: "#666666"}}>
                            Name : {product.name} for mens
                            <br/>
                            Fabric : Cotton Blend
                            <br/>
                            Sleeve Length : Half Sleeves
                            <br/>
                            Pattern : Printed
                            <br/>
                            Net Quantity (N) : 1
                            <br/>
                            Sizes : 
                            <br/>
                            S, M, L, XL
                            <br/>
                            At , we understand that to look the part you have to dress the part! combines a refined design with tailor-made fabrics to create a functional yet polished look, letting any shirt, t-shirt, suit or blazer speak for you. ensures that you’re the style statement, the alpha, and the omega!
                            <br/>
                            Country of Origin : India
                        </div>
                </div>
              </div>
              <div className="prddetails card">
                <div className="card-body">
                  <div className="fs-6 fw-bold">Product Rating & Reviews</div>
                  <div className="row">
                    <div className="col-3">
                        <div className="fs-2" style={{marginTop: '130px', color: 'green'}}>
                          3.6 <img src="/assets/star.svg" alt="Logo/"/>
                        </div>
                    </div>
                    <div className="col-9" style={{marginTop: "10px"}}>
                        <div className="fw-bold" style={{marginTop: "10px"}}>
                          Excellent
                          <div className="progress" role="progressbar" aria-label="Example 10px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                            <div className="progress-bar bg-success" style={{width: "45%"}}></div>
                          </div>                          
                        </div>
                        <br/>
                        <div className="fw-bold" style={{marginTop: "10px"}}>
                          Very Good
                          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                            <div className="progress-bar bg-success" style={{width: "25%"}}></div>
                          </div>                          
                        </div>
                        <br/>
                        <div className="fw-bold" style={{marginTop: "10px"}}>
                          Good
                          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "5px"}}>
                            <div className="progress-bar bg-warning" style={{width: '15%'}}></div>
                          </div>                          
                        </div>
                        <br/>
                        <div className="fw-bold" style={{marginTop: "10px"}}>
                          Average
                          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "5px"}}>
                            <div className="progress-bar" style={{width: '5%',backgroundColor: 'rgba(255, 68, 0, 0.935)'}}></div>
                          </div>                          
                        </div>
                        <br/>
                        <div className="fw-bold" style={{marginTop: "10px"}}>
                          Poor
                          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "5px"}}>
                            <div className="progress-bar bg-danger" style={{width: '10%'}}></div>
                          </div>                          
                        </div>
                        <br/>
                    </div>
                  </div>
                  <hr style={{height: "1.5px"}}/>
                  <div>
                    {reviews.length>0?(reviews.map((review)=>(
                      <Review key={review.id} review={review} imgLink={product.imgName} onDelete={onDelete} ></Review>
                    ))):('No Reviews Yet')}
                  </div>
                  <AddReview onAdd={onAdd}></AddReview>    
                </div>
              </div>
        </div>
    </div>
    </div>
  )
}
