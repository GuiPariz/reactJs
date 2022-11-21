import { useEffect } from 'react'
import { useState } from 'react' // importação do hook useState()  e  useEffect(para  ciclo de vida)

export default function App() {
  const [
    /*valor do estado*/
    repositories,
    /*função que vai atualizar o valor o estao*/
    setRepositories
    // setanddo  o  estaddo inicial ddo useState
  ] = useState([])
    // utilizando useEffect  para atualizar a  renderização quando o estado de  uma variavel mudar
  useEffect(()=>{
    async  function fetchData(){
      const response = await fetch('https://api.github.com/users/GuiPariz/repos')
      const data = await response.json()
      setRepositories(data)
    }
    fetchData()
  },[])

  function handleFavorite(id){
    const  newRepositorie = repositories.map(repo =>{
      return repo.id === id ? {...repo, favorite :  !repo.favorite } : repo })
    setRepositories(newRepositorie)
  }

  // renderizando o html 
  return (
    <div className="App">
      <ul>
        {repositories.map(
          repo => <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}     
          <button onClick={()=>{handleFavorite(repo.id)}}>Favoritar</button>
            </li>)}
      </ul>
    </div>
  )
}