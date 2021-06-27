import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from './JsonApi.module.css'
const JsonApi = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return(
        <div>
            <h1 className={styles.header}>JSON PlaceHolder</h1>
           {posts.map(post => {
               return(
               <div className={styles.main_container}>
                   <div className={styles.img_container}>
                        <img src={post.url} alt="Photo" />
                    </div>
                    <div className={styles.info_container}>
                        <h3 className={styles.name}>{post.title}</h3>
                   </div>
                   <div className={styles.clearfix}></div>
               </div>
               )
           })}
        </div>
    );
}
export default JsonApi