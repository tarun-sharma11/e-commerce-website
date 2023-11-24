export const Review = ({review,imgLink,onDelete}) => {
    const myStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '15px',
      };
  return (
    <div>
        <div style={myStyle}>
            <p className="prdname fw-bold card-text" style={{size: "5px"}}>{review.name}</p>
            <div onClick={()=>onDelete(review.id)}><img src="/assets/x.svg" alt="Logo" width="30" height="30"/></div>
        </div>
        <div className="row">
            <div className="col-3"><div className="badge bg-success text-wrap">{review.rating}<img src="/assets/star.svg" alt="Logo"/></div></div>
            <div className="fw-bold col-9 prdname card-text" style={{fontSize: '11px'}}>Posted on {review.postedOn}</div>
        </div>
        <p style={{fontSize: '15px',marginTop: '15px'}}>{review.text}</p>
        <img src={`${imgLink}`} className="img-thumbnail" alt={`${imgLink}`} style={{height: "100px"}}/>
        <div style={{marginTop: '15px', display: 'flex',flexDirection: 'row',alignItems: 'center',gap:'10px',}}>
            <img src="/assets/thumbsup.svg" alt="Logo"/>
            <div className="prdname card-text" style={{fontSize: "13px"}}>Helpful(1)</div>
        </div>
        <hr style={{height: "1.5px"}}/>
    </div>
  )
}
