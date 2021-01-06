import Menu from '../Menu';
import Scroll from '../Scroll';
import './style.css';

const SCROLL_TEXT = 'SCROLL DOWN TO SEE MORE';

function HomePage() {

  return (
    <div className="home-root">
      <Menu />
      <Scroll text = {SCROLL_TEXT} />
    </div>
  );
}

export default HomePage;