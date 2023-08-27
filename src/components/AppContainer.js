
import { useEffect, useState } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function AppContainer() {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const baseUrl = 'http://api.weatherapi.com/v1/forecast.json';

    const queryParams = {
      key: 'd8164461d7284971825185836232708',
      q: 'Warsaw',
      aqi: 'no',
      alerts: 'no'
    };

    const queryString = Object.keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    const apiUrl = `${baseUrl}?${queryString}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setForecast(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
            <Stack>
                <div>
                    {JSON.stringify(forecast)}
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