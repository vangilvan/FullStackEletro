import { Row } from 'react-bootstrap';

 function Lojas() {
    return (
        <Row>
            <div className="col-12">
                <h2 className="display-4">Nossas Lojas</h2>
                <hr className="my-1" />  
            </div>
            <div className="col-4">
                <h3>Rio de Janeiro</h3>
                <p>Avenida Presidente Vargas, 5000</p>
                <p>10&ordm; Andar</p>
                <p>Centro</p>
                <p>(21) 3333-3333</p>
            </div>
            <div className="col-4">
                <h3>São Paulo</h3>
                <p>Avenida Paulista, 985</p>
                <p>3&ordm; Andar</p>
                <p>Jardins</p>
                <p>(11) 4444-4444</p>
            </div>
            <div className="col-4">
                <h3>Santa Catarina</h3>
                <p>Rua Major Ávila, 370</p>
                <p>Vila Mariana</p>
                <p>(47) 5555-5555</p>
            </div>
        </Row>
    )
}

export default Lojas;