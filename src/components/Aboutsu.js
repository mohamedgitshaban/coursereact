import aboutimage from '../images/aboutimage.jpg';

function Aboutsu() {
    return <div className="container my-5">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-5 p-4 ">
            <h1>About Us</h1>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I</p>
        </div>
        
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto p-4">
            <img src={aboutimage} alt="About Us" className="img-fluid rounded hover"/>
        </div>
            </div>
    </div>
}
export default Aboutsu;