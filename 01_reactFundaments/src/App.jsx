import styled from "styled-components";
import Comment from "./components/comment";
import Header from "./components/Header";
import Post from "./components/Post";
import SideBar from "./components/SideBar";
import "./global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <SBody>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Post />
        </main>
      </SBody>
    </div>
  );
}

export default App;

const SBody = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  align-items: flex-start;
`;
