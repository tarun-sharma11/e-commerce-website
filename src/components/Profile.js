export const Profile = () => {
  return (
    <div>
            <div style={{margin: "10px", fontSize: "40px",display: "flex",alignItems: "center",flexDirection: "column",justifyContent: "space-between"}}>
            My Account
        </div>
        <div className="row" >
            <div className="col" style={{display: "flex",alignItems: "center",flexDirection: "row"}}>
                <img src="/assets/wallpaperflare-cropped.jpg" className="rounded mx-auto d-block" width="200" height="200" alt="..."/>
            </div>
            <div className="col">
                <div style={{margin: "10px"}}>
                    <table className="table">
                        <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>Tarun Sharma</td>
                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>TarunSharma@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">Phone</th>
                            <td>9090909090</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>Shaitan gali, khatra mahal, andher nagar, shamshan ke samne.....</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div style={{margin: "20px",'display': 'flex',alignItems: 'center',flexDirection: 'column',justifyContent: 'space-between',}}>
            <button type="button" className="btn btn-danger">Edit</button>
        </div>
        <div className="text-decoration-underline" style={{display: 'flex',flexDirection: 'column',alignItems: 'center', fontSize: '40px'}}>
            Recently Ordered
        </div>
        <div className="row container-fluid" style={{marginTop: "20px"}}>
            <div className="col-md-3">
                <div className="card" style={{width: "225px"}}>
                    <img src="/assets/t-shirt-for-sale-white.png" className="card-img-top" alt="/assets/t-shirt-for-sale.png"/>
                    <div className="card-body" style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                    <p className="prdname fw-bold card-text">Sunset T-shirt</p>
                    <div className="gaap row">
                        <div className="fw-bold col prdprice card-text" style={{display:'flex', flexDirection: 'row',gap:'10px'}}>
                            <div className="text-decoration-line-through">
                            ₹ 489
                            </div>
                            399
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: '225px'}}>
                    <img src="/assets/t-shirt-for-sale-black.png" className="card-img-top" alt="/assets/t-shirt-for-sale.png"/>
                    <div className="card-body" style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                    <p className="prdname fw-bold card-text">Futuristic Flower...</p>
                    <div className="gaap row">
                        <div className="fw-bold col prdprice card-text" style={{display:'flex', flexDirection: 'row',gap:'10px'}}>
                            <div className="text-decoration-line-through">
                            ₹ 489
                            </div>
                            399
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: "225px"}}>
                    <img src="/assets/t-shirt-for-sale.png" className="card-img-top" alt="/assets/t-shirt-for-sale.png"/>
                    <div className="card-body" style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
                    <p className="prdname fw-bold card-text">Trendy T-shirt</p>
                    <div className="gaap row">
                        <div className="fw-bold col prdprice card-text" style={{display:'flex', flexDirection: 'row',gap:'10px'}}>
                            <div className="text-decoration-line-through">
                            ₹ 489
                            </div>
                            399
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" style={{width: '225px'}}>
                    <img src="/assets/playstation.jpg" className="card-img-top" alt="/assets/t-shirt-for-sale.png"/>
                    <div className="card-body" style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                    <p className="prdname fw-bold card-text">Play Station</p>
                    <div className="gaap row">
                        <div className="fw-bold col prdprice card-text" style={{display:'flex', flexDirection: 'row',gap:'10px'}}>
                            <div className="text-decoration-line-through">
                            ₹ 48,900
                            </div>
                            39,900
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
