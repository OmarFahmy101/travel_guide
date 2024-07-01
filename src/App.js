import './App.css';
import Cards from './components/Cards';
import NavBarComponent from './components/NavBarComponent';
import data from './components/Data';


function App() {
  const cardElements = data.map(item => {
    return (
      <Cards
        key={item.id}
        {...item}
      />

    )
  })
  return (
    <div className="App">
      <NavBarComponent />
      <div style={{ margin: '0 auto', padding: '40px' }}>
        {cardElements}
      </div>
    </div>
  );
}

export default App;
