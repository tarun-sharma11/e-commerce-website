import { Link } from 'react-router-dom';
export const Main = ({data}) => {
  const myStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '15px',
  };
  return (
    <div>
        <div className="main container-fluid row">
          <div className="col col-md-3 ">
              <div  className="card">
              <ul className="list-group list-group-flush">
                  <div className="row">
                  <li className="col list-group-item" style={myStyle}>Sort by : 
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Relevance
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" type="button">High to low</button></li>
                          <li><button className="dropdown-item" type="button">low to high</button></li>
                          <li><button className="dropdown-item" type="button">Sale</button></li>
                        </ul>
                      </div>
                      {/* <div className="col dropdown">
                          <button className="btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Relevance
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">High to low</a></li>
                            <li><a className="dropdown-item" href="/">low to high</a></li>
                            <li><a className="dropdown-item" href="/">Sale</a></li>
                        </ul>
                      </div> */}
                  </li>
                  </div>
              </ul>
              </div>
          </div>
          <div className="col col-md-9 row">
            {data.map((d)=>(
              <div key={d.id} className="col col-md-6 col-xl-4">
                  <div className="card">
                      <Link to={`/details/${d.id}`}>
                      <img src={d.imgName} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <p className="prdname fw-bold card-text">{d.name}</p>
                        <div className="gaap row">
                          <div className="fw-bold col prdprice card-text">₹ {d.price}</div>
                          <div className="fw-bold col prdname card-text">onwards</div>
                        </div>
                        <p className="prdreview card-text">
                          <div className="gaap row">
                              <div className="col">
                              <div className="badge bg-success text-wrap">{d.rating}<img src="/assets/star.svg" alt="Logo"/></div>
                              </div>
                              <div className="fw-bold col prdname card-text">{d.reviews} Reviews</div>
                          </div>
                        </p>
                      </div>
                      </Link>
                    </div>
              </div>
              ))}
          </div>
          
      </div>
    </div>
  )
}
