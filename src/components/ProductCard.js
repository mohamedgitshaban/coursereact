import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
function ProductCard(params) {
    return<Card className="col-md-4 col-sm-6 col-xs-12" >
                <Card.Img variant="top" src={params.image} />
                <Card.Body>
                    <Card.Title>{params.title}</Card.Title>
                    <Card.Text>
                        {params.description} 
                    </Card.Text>
                    <Link to={'product/'+ params.id} className="btn btn-secondary" variant="primary">{params.price} $</Link>
                </Card.Body>
            </Card>
}
export default ProductCard;