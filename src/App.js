import { useState, useEffect } from 'react';
import ReactPlayerTest from './components/ReactPlayerTest';

const App = () => {

  const [message, setMessage] = useState(null)
  const [value, setValue] = useState(null)
  const [previousChats, setPreviousChats] = useState([])

  const getMessages = async () => {

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: value
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }

    try {
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      // console.log(data);
      setMessage(data.choices[0].message)
    } catch (error) { console.error(error) };
  }

  console.log(message)

  return (
    <div className="app">
      <section className='side-bar'>
        <button>+ New Chat</button>
        <ul className='history'>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
        </ul>
        <nav>
          Contact Me
        </nav>
      </section>
      <section className='main'>
        <h1>PodChat V1.0</h1>
        <ReactPlayerTest />
        <ul className='feed'>

        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id='submit' onClick={getMessages}>➢</div>
          </div>
          <p className='info'>Press ➢ to send message</p>
        </div>
      </section>
    </div>
  )
}

export default App;

