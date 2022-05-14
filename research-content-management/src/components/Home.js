// import './Message'
import Message from './Message';
import Counter from './Counter';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Message fullName='Nithin Reddy Kumbham' />
        <Counter />
        <p>
          hello team
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

export default Home;
