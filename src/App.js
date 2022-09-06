import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList';
import PersonDetail from './Components/PersonDetail';
import ErrorBoundary from './error.boundary/ErrorBoundary';
// import FallbackUI from './Components/FallbackUI';
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PersonList />
        <PersonDetail />
      </ErrorBoundary>

    </div>
  );
}

export default App;
