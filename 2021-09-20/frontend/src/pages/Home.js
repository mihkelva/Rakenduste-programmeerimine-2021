import Item from '../components/Item';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="add-item">
        <button>Lisa uus ese</button>
      </Link>
      <Item name="Item1" price="10" category="mobile" />
      <Item name="Item2" price="20" category="laptop" />
    </div>
  )
}

export default Home;