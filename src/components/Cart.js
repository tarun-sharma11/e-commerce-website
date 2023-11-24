export const Cart = ({carts,onDelete,handleQuantityChange}) => {
    const totalPrice = carts.reduce((sum, cart) => sum + cart.quantity*cart.price, 0);
    const myStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent: 'space-around',
      };  
  return (
    <div>
        <div className="container-fluid">
            <div className="row" >
                <div className="col-md-4 prdname text-decoration-underline" style={{fontSize: "40px", display: "flex",alignItems: "end",flexDirection: "column-reverse",justifyContent: "space-between"}}>
                    <div style={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-between",gap: "15px"}}>
                    1.Cart <img src="/assets/chevron-right.svg" alt="Logo"/>
                    </div>
                </div>
                <div className="col-md-4 prdname text-decoration-underline" style={{fontSize: "40px", display: "flex",alignItems: "center",flexDirection: "column-reverse"}}>
                    <div style={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "space-between",gap: "15px"}}>
                        2.Address <img src="/assets/chevron-right.svg" alt="Logo"/>
                    </div>
                </div>
                <div className="col-md-4 prdname text-decoration-underline" style={{fontSize: "40px"}}>
                    3.Payment
                </div>
            </div>
            <table className="table" style={{marginTop: "50px"}}>
                <thead className="text-uppercase" style={{fontWeight: "normal", fontSize: "15px"}}>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Delivery Date</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {carts.map((c,index)=>(
                <tr key={c.id}>
                    <td>
                        <img src={`${c.img}`} className="img-thumbnail" alt="/assets/t-shirt-for-sale.png" style={{height: "100px"}}/>
                        {c.prdName}
                    </td>
                    <td>By {c.delOn}</td>
                    <td>
                        <div className="btn-group">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {c.quantity}
                            </button>
                            <ul className="dropdown-menu">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                                    <li key={quantity}>
                                    <div className="dropdown-item" onClick={() => handleQuantityChange(index, quantity)}>
                                        {quantity}
                                    </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                                            
                    </td>
                    <td>
                        {c.price}
                        
                    </td>
                    <td onClick={()=>onDelete(c.id)}>
                        
                        <img src="/assets/x.svg" alt="Logo" width="30" height="30"/>
                        
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            <h3 style={myStyle}>
            Total cost will be {totalPrice}
            </h3>
        </div>        
    </div>
  )
}
