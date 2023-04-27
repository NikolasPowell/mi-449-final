import {useState} from 'react'
import {supabase} from './supabaseData';
import {Row, Col} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import video1 from './Spiral Records.mp4';
import image1 from './recordPlayer.png';
import image2 from './Record.png';
import image3 from './greetavanfleet.JPG';
import image4 from './metallica.JPG';
import image5 from './ledzepplin.JPG';
import image6 from './rollingstones.JPG';

function RecordOutput() {
  const [newRecords, setNewRecords] = useState ([]);
  async function getRecords() {
    let {data: records, error } = await supabase
    .from('records')
    .select('*')
    .eq('id', 1)
    
  setNewRecords(records);
  }
  //getRecords();
  return(
    <>
    <button onClick={getRecords}>View This Record</button>
    <p />
    <table>
      {
        newRecords.map(r => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card'>
              <img src={image3} className='card-img-top' alt='picture of vynil record' />
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{r.artist}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{r.song}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{r.description}</td>
                </p>
                </tr>
              </div>
            </div>
          </div>
        ))
      }
    </table>
    </>
  )
}

function RecordOutput2() {
  const [newRecords, setNewRecords] = useState ([]);
  async function getRecords() {
    let {data: records, error } = await supabase
    .from('records')
    .select('*')
    .eq('id', 2)
    
  setNewRecords(records);
  }
  //getRecords();
  return(
    <>
    <button onClick={getRecords}>View This Record</button>
    <p />
    <table>
      {
        newRecords.map(r => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card'>
            <img src={image4} className='card-img-top' alt='picture of vynil record' />
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{r.artist}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{r.song}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{r.description}</td>
                </p>
                </tr>
              </div>
            </div>
          </div>
        ))
      }
    </table>
    </>
  )
}

function RecordOutput3() {
  const [newRecords, setNewRecords] = useState ([]);
  async function getRecords() {
    let {data: records, error } = await supabase
    .from('records')
    .select('*')
    .eq('id', 3)
    
  setNewRecords(records);
  }
  //getRecords();
  return(
    <>
    <button onClick={getRecords}>View This Record</button>
    <p />
    <table>
      {
        newRecords.map(r => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card'>
            <img src={image5} className='card-img-top' alt='picture of vynil record' />
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{r.artist}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{r.song}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{r.description}</td>
                </p>
                </tr>
              </div>
            </div>
          </div>
        ))
      }
    </table>
    </>
  )
}

function RecordOutput4() {
  const [newRecords, setNewRecords] = useState ([]);
  async function getRecords() {
    let {data: records, error } = await supabase
    .from('records')
    .select('*')
    .eq('id', 4)
    
  setNewRecords(records);
  }
  //getRecords();
  return(
    <>
    <button onClick={getRecords}>View This Record</button>
    <p />
    <table>
      {
        newRecords.map(r => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card'>
            <img src={image6} className='card-img-top' alt='picture of vynil record' />
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{r.artist}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{r.song}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{r.description}</td>
                </p>
                </tr>
              </div>
            </div>
          </div>
        ))
      }
    </table>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <div className='row ms-0 me-0'>
        <div className='p-0'>
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
            <Row lg={4}>
            <Col>
              <RecordOutput />
            </Col>
            <Col>
              <RecordOutput2 />
            </Col>
            <Col>
              <RecordOutput3 />
            </Col>
            <Col>
              <RecordOutput4 />
            </Col>
            </Row>
        </div>
      </div>
        <div className='container3 mt-5 mb-5 p-0'>
          <img src={image1} className='firstImage img-fluid opacity-25' />
          <p className='sixthText text-white fs-3 text-start'>
            “I love the wide selection of records.” <br />
            -Bob
          </p>
          <p className='seventhText text-white fs-3 text-start'>
            “Records here are my favorite!” <br />
            -Jeff
          </p>
          <p className='eighthText text-white fs-3 text-start'>
            “You will never be disappointed with <br /> what Spiral Records have to offer.” <br />
            -Jenny
          </p>
          <p className='ninthText text-white fs-3 text-start'>
            “Who knew record fanatics would love <br /> this website!” <br />
            -Tom
          </p>
          <p className='tenthText text-white fs-3 text-start'>
            “I come here daily to see their awesome <br /> selection!” <br />
            -Timmy
          </p>
        </div>
        <div className='footer row mt-5'>
          <div className='container4 mt-3'>
            <img src={image2} className='secondImage img-fluid ms-5' />
            <p className='eleventhText fs-3 text-white text-center'>
              Spiral Records
            </p>
            <p className='twelvethText fs-3 text-white text-center'>
              <a href='https://www.linkedin.com/in/nikolas-powell-265bb9196/'>LinkedIn</a>
            </p>
            <p className='thirteenthText fs-3 text-white text-center'>
              <a href='https://github.com/NikolasPowell'>Github</a>
            </p>
            <p className='fourteenthText fs-5 text-white text-center'>
              Website created, designed, and developed by Nikolas Powell 2023©
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
