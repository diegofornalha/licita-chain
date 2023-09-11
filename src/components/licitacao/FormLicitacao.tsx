import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormLicitacao() {
  return (
    <Form className='form-licitacao mt-5'>
      <Row className="mb-3 w-50">

      <Form.Group as={Col} controlId="formLicitacao">
          <Form.Label ><h5>Titulo da Licitação</h5></Form.Label>
          <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formValor">
          <Form.Label><h5>Valor Planejado (R$)</h5></Form.Label>
          <Form.Control type="number" placeholder="" />
      </Form.Group>

      <Form>
        <Form.Group className="mb-3 mt-3" controlId="formObjeto">
          <Form.Label><h5>Objeto da Licitação</h5></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <Button variant="success" type="submit">
        Registrar Licitação
      </Button>


      </Row>
    </Form>
  );
}

export default FormLicitacao;