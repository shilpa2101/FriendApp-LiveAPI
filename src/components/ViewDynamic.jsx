import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDynamic = () => {
    const [datas,changedata]=useState(
        [
           
           ]
    )
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changedata(response.data)
                console.log(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">name</th>
                    <th scope="col">friend name</th>
                    <th scope="col">nick name</th>
                    <th scope="col">description</th>
                    </tr>
                </thead>
                <tbody>
                   {datas.map(
                    (value,index)=>{
                        return  <tr>
                            <th scope="row">{value.name}</th>
                            <td>{value.friendName}</td>
                            <td>{value.friendNickName}</td>
                            <td>{value.DescribeYourFriend}</td>
                          </tr>
                          

                    }
                   )}
                    
                
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDynamic