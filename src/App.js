import {Container} from 'reactstrap';
import ImageCollection from './components/ImageCollection.js'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Spacestagram</h1>
        <h6 className="text-muted">Brought to you by NASA's APOD API</h6>
        <ImageCollection />
      </Container>
    </div>
  );
}

export default App;
