import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardsList } from './components/CardsList/CardsList';

export const items = [
  {
    id: 1,
    image: "images/img1.png",
    title: 'New Balance C-ms574',
    text: 'Salehe Bembury Shark Skin',
  },
  {
    id: 2,
    image: 'images/img2.png',
    title: 'Nike Dunk Low SP',
    text: 'Nike Dunk Low Orange Blaze Syracuse',
  },
  {
    id: 3,
    image: 'images/img3.png',
    title: 'Converse Chuck 70 High',
    text: 'Comme des Garcons PLAY Black',
  },
  {
    id: 4,
    image: 'images/img4.png',
    title: 'adidas Yeezy Foam RNNR',
    text: 'Stone Sage',
  },
  {
    id: 5,
    image: 'images/img5.png',
    title: 'Nike Air Max Plus',
    text: 'Patta FC Barcelona Culers del Món',
  },
  {
    id: 6,
    image: 'images/img6.png',
    title: 'Jordan 1 Retro Low Golf',
    text: 'Travis Scott Neutral Olive',
  },
  {
    id: 7,
    image: 'images/img7.png',
    title: 'Jordan 1 Retro High OG SP',
    text: 'Union LA Bephies Beauty Supply Summer of 96',
  },
  {
    id: 8,
    image: 'images/img8.png',
    title: 'adidas Campus 00s',
    text: 'Core Black',
  },
  {
    id: 9,
    image: 'images/img9.png',
    title: 'UGG Classic Ultra Mini Boot',
    text: 'Chestnut (Women)',
  },
]

function App() {
  return (
    <>
      <Header/>
      <main>
        <CardsList/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
