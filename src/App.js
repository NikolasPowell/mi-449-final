import {useState} from 'react'
import {supabase} from './supabaseData';
/*Learned through https://react-bootstrap.netlify.app/docs/layout/grid/#row documentation*/
import {Row, Col} from 'react-bootstrap';
/*Learned through https://supabase.com/docs/guides/auth/auth-helpers/auth-ui documentation && understanding through Andy's Tech Tutorials on YouTube https://www.youtube.com/watch?v=6ch1PtIqCUw*/
import { Auth } from '@supabase/auth-ui-react'
import {createClient} from '@supabase/supabase-js'
import { ThemeSupa, } from '@supabase/auth-ui-shared'

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



//function for record display
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
            <div className='newCard text-center card container-fluid p-0'>
              <img src={image3} className='card-img-top img-fluid' alt='picture of vynil record' />
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
            <div className='newCard text-center card container-fluid p-0'>
            <img src={image4} className='card-img-top img-fluid' alt='picture of vynil record' />
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
            <div className='newCard text-center card container-fluid p-0'>
            <img src={image5} className='card-img-top img-fluid' alt='picture of vynil record' />
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
            <div className='newCard text-center card container-fluid p-0'>
            <img src={image6} className='card-img-top img-fluid' alt='picture of vynil record' />
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

//function for company display
function CompanyOutput() {
  const [newCompany, setNewCompany] = useState ([]);
  async function getCompany() {
    let {data: companies, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', 1)
    
  setNewCompany(companies);
  }
  //getCompany();
  return (
    <>
      <button onClick={getCompany}>View This Company</button>
    <table>
      {
        newCompany.map(c => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card container-fluid p-0 mt-3'>
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{c.name}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{c.description}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{c.partner}</td>
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

function CompanyOutput2() {
  const [newCompany, setNewCompany] = useState ([]);
  async function getCompany() {
    let {data: companies, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', 2)
    
  setNewCompany(companies);
  }
  //getCompany();
  return (
    <>
    <button onClick={getCompany}>View This Company</button>
    <table>
      {
        newCompany.map(c => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card container-fluid p-0 mt-3'>
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{c.name}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{c.description}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{c.partner}</td>
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

function CompanyOutput3() {
  const [newCompany, setNewCompany] = useState ([]);
  async function getCompany() {
    let {data: companies, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', 3)
    
  setNewCompany(companies);
  }
  //getCompany();
  return (
    <>
    <button onClick={getCompany}>View This Company</button>
    <table>
      {
        newCompany.map(c => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card container-fluid p-0 mt-3'>
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{c.name}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{c.description}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{c.partner}</td>
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

function CompanyOutput4() {
  const [newCompany, setNewCompany] = useState ([]);
  async function getCompany() {
    let {data: companies, error } = await supabase
    .from('companies')
    .select('*')
    .eq('id', 4)
    
  setNewCompany(companies);
  }
  //getCompany();
  return (
    <>
    <button onClick={getCompany}>View This Company</button>
    <table>
      {
        newCompany.map(c => (
          <div className='container5 pb-2'>
            <div className='newCard text-center card container-fluid p-0 mt-3'>
              <div className='card-body'>
                <tr>
                  <h5 className='card-title'>
                    <td>{c.name}</td>
                  </h5>
                </tr>
                <tr>
                  <p className='card-text'>
                    <td>{c.description}</td>
                  </p>
                </tr>
                <tr>
                <p className='card-text'>
                  <td>{c.partner}</td>
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



//const for userRegistration Learned through https://supabase.com/docs/guides/auth/auth-helpers/auth-ui documentation && understanding through Andy's Tech Tutorials on YouTube https://www.youtube.com/watch?v=6ch1PtIqCUw
const logs = createClient(
  'https://oqwmuvelxdzjwyqkhxym.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xd211dmVseGR6and5cWtoeHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MjQ2MDIsImV4cCI6MTk5ODIwMDYwMn0.uydYJqld5PwOHCu_AweiWmNiCiOyews2ISbEUjyDYv4'
)

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
      <div className='container-fluid'>
        <div className='row ps-5 pe-5 mt-3'>
          <div className='col-3'>
            <p className='secondText text-white mt-4 text-start'>
              For the Individuals who <br /> <span className='fw-bold'>SPIRAL</span>
            </p>
          </div>
          <div className='col-6'>
            <p className='mt-5 text-white border-bottom border-white border-4'>
           
            </p>
          </div>
          <div className='col-3'>
            <p className='secondText text-white mt-4 text-end'>
              out of control for <br /> <span className='fw-bold'>RECORDS</span>
            </p>
          </div>
        </div>
      </div>
      <div className='row justify-content-evenly'>
        <div className='col-3'>
          <p className='thirdText text-white mt-4'>
              Hello and welcome all! Here at Spiral Records were dedicated to satisfy every customers needs with wanting any records known to man. We started out of a small garage in Lake Orion, MI and continue to grow and expand our business day by day. Your support is always apprecieated and loved so we thank you for that.
          </p>
        </div>
        <div className='col-3'>
          <p className='fourthText text-white mt-4'>
              We have all sorts of records waiting to be sold to you, our personal favorite is our prized Greeta Van Fleet record from their album From the Fires. If you're ever interested in purchasing this record, come swing by East Lansing and take a look at it. We also have Metalica, Rolling Stones, Van Halen, and much more!
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='container2 col-10 mt-5 rounded-3'>
            <p className='fifthText text-start ms-5 mt-3'>
              Our Selection:
            </p>
            {/*Learned through https://react-bootstrap.netlify.app/docs/layout/grid/#row documentation*/}
            <Row sm={1} lg={4}>
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
      <div className='container3 mt-5 mb-5 p-0  container-fluid'>
        <img src={image1} className='firstImage img-fluid opacity-25' />
        <p className='sixthText text-white text-start'>
          “I love the wide selection of records.” <br />
          -Bob
        </p>
        <p className='seventhText text-white text-start'>
          “Records here are my favorite!” <br />
          -Jeff
        </p>
        <p className='eighthText text-white text-start'>
          “You will never be disappointed with <br /> what Spiral Records have to offer.” <br />
          -Jenny
        </p>
        <p className='ninthText text-white text-start'>
          “Who knew record fanatics would love <br /> this website!” <br />
          -Tom
        </p>
        <p className='tenthText text-white text-start'>
          “I come here daily to see their awesome <br /> selection!” <br />
          -Timmy
        </p>
      </div>
      <div className='row mt-5 text-center'>
        <div className='col-14'>
          <p className='fourthText text-white'>
              Want to Log-in/Sign-up?
          </p>
        </div>
      </div>
      <div className='container6 container-fluid text-white fs-1 pt-5 time col-8'>
        {/*Learned through https://supabase.com/docs/guides/auth/auth-helpers/auth-ui documentation && understanding through Andy's Tech Tutorials on YouTube https://www.youtube.com/watch?v=6ch1PtIqCUw*/}
        <Auth
          supabaseClient={logs}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
      <div className='row ms-5 justify-content-center'>
        <div className='container2 col-10 mt-5 rounded-3'>
          <p className='fifthText text-white text-start'>
            Our Partnered Companies:
          </p>
        {/*Learned through https://react-bootstrap.netlify.app/docs/layout/grid/#row documentation*/}
        <Row sm={1} lg={4}>
          <Col>
            <CompanyOutput />
          </Col>
          <Col>
            <CompanyOutput2 />
          </Col>
          <Col>
            <CompanyOutput3 />
          </Col>
          <Col>
            <CompanyOutput4 />
          </Col>
          </Row>
          </div>
      </div>
      <div className='footer row mt-5'>
        <div className='container4 mt-3 container-fluid'>
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
