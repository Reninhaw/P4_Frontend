import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

const Home: React.FC = () => {
  return(
    <div className="home">
      <Header />
      <h1>Bom dia, professor!!</h1>
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
}


export default Home;
