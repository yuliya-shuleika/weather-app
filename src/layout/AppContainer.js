
import { Container, Row, Col, Stack } from 'react-bootstrap';

function AppContainer() {
  return (
    <Container>
      <Row>
        <Col>
            <Stack>
                <div>
                    current weather
                </div>
                <div>
                    day forecast
                </div>
            </Stack>
        </Col>
        <Col>week</Col>
      </Row>
    </Container>
  );
}

export default AppContainer;