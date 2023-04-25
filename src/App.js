import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import video1 from './Spiral Records.mp4';
import image1 from './recordPlayer.png';

function App() {
  return (
    <div className="App">
      <div className='row ms-0 me-0'>
        <div className='col-15 p-0'>
        <p className='firstText m-0' >
          Spiral Records
        </p>
        <video className ="newVideo" src={video1} width = "100%"  autoPlay loop muted/>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-3'>
        <p className='secondText fs-2 text-white mt-4'>
        For the Individuals who SPIRAL out of control for RECORDS
        </p>
        </div>
      </div>
      <div className='row justify-content-evenly'>
        <div className='col-3'>
          <p className='thirdText fs-3 text-white mt-4'>
              Hello and welcome all! Here at Spiral Records were dedicated to satisfy every customers needs with wanting any records known to man. We started out of a small garage in Lake Orion, MI and continue to grow and expand our business day by day. Your support is always apprecieated and loved so we thank you for that.
          </p>
        </div>
        <div className='col-3'>
          <p className='fourthText fs-3 text-white mt-4'>
              We have all sorts of records waiting to be sold to you, our personal favorite is our prized Greeta Van Fleet record from their album From the Fires. If you're ever interested in purchasing this record, come swing by East Lansing and take a look at it. We also have Metalica, Rolling Stones, Van Halen, and much more!
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='container2 col-10 mt-5 rounded-3'>
            <p className='fifthText fs-3 text-start ms-5 mt-3'>
              Our Selection:
            </p>
        </div>
      </div>
      <div className='row'>
        <div className='imageContainer mt-5'>
          <img src={image1} />
        </div>
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
