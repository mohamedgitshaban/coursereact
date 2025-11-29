import { Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";
import GetProductApi from "../api/GetProductApi";
function HomePage() {
    const [data, setData] = useState([]);
    useEffect(() => { // component did mount
        GetProductApi().then((res) => {
            setData(res.products);
        });
    }, []);
    return <Container>
        <Row>
            {data.map((item) => {
                return <ProductCard id={item.id} title={item.title} description={item.description} price={item.price} image={item.thumbnail} />
            })}
        </Row>
    </Container>;
}

export default HomePage;