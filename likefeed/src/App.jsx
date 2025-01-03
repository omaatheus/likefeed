import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css"

function App() {
  return (
    <div>
      <Header />
      <h1> Hello World</h1>
      <Post author="Matheus" content="Oiiiiii" />
    </div>
  );
}

export default App;
