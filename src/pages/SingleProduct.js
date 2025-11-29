import { useEffect, useState } from "react";
import GetSingleProductApi from "../api/GetSingleProductApi";

function SingleProduct() {  
    useEffect(() => {
        console.log(window.location.pathname.split('/'));
        const pathArray = window.location.pathname.split('/');
        const idFromUrl = pathArray[pathArray.length - 1];
        GetSingleProductApi(idFromUrl).then((res) => {
            console.log(res);
        });
    }, []);
    return <h1>Single Product Page</h1>;
}
export default SingleProduct;