import {connect} from 'react-redux'
import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import './UserContainer.css'
const UserContainer=({fetchUsers, userData})=>{
    useEffect(()=>{
        fetchUsers()
    },[])
    return( 
            <div className="charcontainer">
                {userData && userData.users && userData.users.map(user=> {
                    const {name, birthday, occupation, img, nickname, portrayed}=user;
                    return (
                        <div className="characterinfo">
                    <div className="imgcont"> <img src={img} alt={name} /> </div>
                    <div className ="info" > 
                        <h2 className="namecont">{name}</h2>
                        <span className = "nicknamecont"><b>Nickname: </b>{nickname}</span><br></br>
                        <span className = "occcont"><b>Occupation: </b>{occupation[0]}</span><br></br>
                        <span className = "birthdaycont"><b>Birthday: </b>{birthday}</span><br></br>
                        <span className = "portrayedcont"><b>Portrayed By: </b>{portrayed}</span>
                    </div>
                    </div>
                    )
                        
                })}
            </div>
        )
}

const mapStateToProps = state => {
    return {
        userData: state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)