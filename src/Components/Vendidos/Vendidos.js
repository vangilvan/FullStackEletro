import { useState, useEffect } from 'react';
import Vendido from './Vendido/Vendido';
import { Container, Row } from 'react-bootstrap';

export default function Vendidos() {
    const [vendidos, setVendidos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/projeto-fse/fullstackeletro/public/backend/pedidos.php")
            const dados = await resposta.json()
            setVendidos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {vendidos && vendidos.map(item => <Vendido id={item.idprod} nome={item.nome_produto} valor={item.precofinal} quantidade={item.qtdtotal} />)}
            </Row>
        </Container>
    )
}