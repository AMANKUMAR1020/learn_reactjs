import React,{useState,useEffect} from 'react'
import {Axios} from 'axios'
import {faker} from '@faker-js/faker'
//import { Container,Col, Row } from 'react-dom' 

//const apikey = "INSERT_YOUR_KEY_HERE";
//this url only work when you have apikey
//const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1'

const url = 'https://mocki.io/v1/fc09fb46-17cf-42a8-93e1-a7d7b7372976'

const BuyPage = ({addInCart})=>{

    const [product,setProduct] = useState([]);
    const fetchPhotos = async ()=>{
        const {data} = await Axios.get(url);
        const {photos} = data;
        const allProduct = photos.map(photo =>({
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productName : faker.commerce.product(),
            productPrice : faker.finance.amount(),
            id : faker.datatype.uuid()
        }))
    }
    return(<>
        <h1>hahaha..</h1>
    </>)

}

export default BuyPage