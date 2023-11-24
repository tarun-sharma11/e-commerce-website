import { useState } from "react"
export const AddReview = ({onAdd}) => {
    const [text,setText] = useState('')
    const [name,setName] = useState('')
    const [postedOn,setPostedOn] = useState('')
    const [rating,setRating] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!name){
            alert('Please add your Name')
            return
        }
        if(!rating || isNaN(rating) || rating<0 || rating>10){
            alert('Rating needs to be a number and is the range of 0 to 10')
            return
        }

        onAdd({name,postedOn,text,rating})
        setName('')
        setPostedOn('')
        setRating('')
        setText('')
    }
  return (
    <div>
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control" style={{margin:'10px'}}>
                <label>Name</label>
                <input type="text" placeholder="Name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    style={{marginLeft:'80px'}}
                />
            </div>
            <div className="form-control" style={{margin:'10px'}}>
                <label>Date & Month</label>
                <input type="text" placeholder="Date"
                    value={postedOn}
                    onChange={(e)=>setPostedOn(e.target.value)}
                    style={{marginLeft:'80px'}}
                />
            </div>
            <div className="form-control" style={{margin:'10px'}}>
                <label>Review</label>
                <input type="text" placeholder="AddReview"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    style={{marginLeft:'80px'}}
                />
            </div>
            <div className="form-control" style={{margin:'10px'}}>
                <label>Rating</label>
                <input type="text" placeholder="Rating"
                    value={rating}
                    onChange={(e)=>setRating(e.target.value)}
                    style={{marginLeft:'80px'}}
                />
            </div>
            <input style={{marginTop:'20px'}} type="submit" value='Save Review' className="btn btn-outline-dark"/>
        </form>
    </div>
  )
}
