import axios from 'axios'
import React, { useState } from 'react'

const AddFriend = () => {
    const [datas,changedata]=useState(
        {
            "name":"",
            "friendName":"",
            "friendNickName":"",
            "DescribeYourFriend":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",datas).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()

    }
  return (
    <div>
        <div className="container col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">friend name</label>
                    <input type="text" className="form-control" name='friendName' value={datas.friendName} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">friend nickname</label>
                    <input type="text" className="form-control"  name='friendNickName' value={datas.friendNickName} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">describe your friend</label>
                    <input type="text" className="form-control" name='DescribeYourFriend' value={datas.DescribeYourFriend} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readValue}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend