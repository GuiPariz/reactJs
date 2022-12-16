import styled from "styled-components";
import Comment from "./components/comment";
import Header from "./components/Header";
import Post from "./components/Post";
import SideBar from "./components/SideBar";
import "./global.css";

export const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://pps.whatsapp.net/v/t61.24694-24/311897119_532903698682915_7770589364732851892_n.jpg?ccb=11-4&oh=01_AdSUpC9S4uAs3DSSbBOUXtvcBziRB0g_yKECNUIIaUkJsw&oe=63A4C0B5",
      name:"Kevin Juan",
      Role:"Artist-Mc"
    },
    content:[
        {type:"paragraph", content:"Fala galeraa 👋" },
        {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type:"link", content:"👉Sensei.Mc/doctorcare"},
    ],
    publishedAt: new Date("2022-11-16 11:03:36")
  },
  {
    id:2,
    author:{
      avatarUrl:"https://pps.whatsapp.net/v/t61.24694-24/316460826_198341039349283_7489118768461248870_n.jpg?ccb=11-4&oh=01_AdRr4J2msGyez-kBwg7JNxIE7a51HpPlfdYLa0-NRipVvQ&oe=63A49ED0",
      name:"Sabrina Maria",
      role:"Veterinary"
    },
    content:[
        {type:"paragraph", content:"Fala galeraa 👋" },
        {type:"paragraph", content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type:"link", content:"👉Sensei.Mc/doctorcare"},
    ],
    publishedAt: new Date("2022-11-16 11:03:36")
  },
]

export const comments = [
  1, 2, 3,
]

function App() {
  return (
    <div className="App">
      <Header />
      <SBody>
        <aside>
          <SideBar />
        </aside>
        <main>
          {posts.map(post=>{
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
