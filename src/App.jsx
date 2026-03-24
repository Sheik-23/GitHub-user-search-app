import { useEffect, useState } from "react";
import Usercard from "./UserCard";
import RepoList from "./repo"; 

function App() {
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("");
  const [user,setUser] = useState(null)
  const [repo,setRepo] = useState([])
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)

  useEffect( ()=>
  {
    if(query == "") return
  

  const fetchUser = async () =>
  {
    setError("")
    setLoading(true)
    setUser(null)
    setRepo([])

  try {
    const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${query}`),
          fetch(`https://api.github.com/users/${query}/repos?sort=stars&per_page=5`)
        ])

    if(!userRes.ok)
    {
      throw new Error("User not found")
    }

    const data = await userRes.json()
    const repor = await repoRes.json()
      

    setUser(data)
    setRepo(repor)

  } catch (error) {
    setError(error.message)
  }
  finally
  {
    setLoading(false)
  }
  }
  fetchUser()
}, [query])


  const Handlesearch = () =>
  {
    if(search.trim()==="") return
      setQuery(search.trim())
  }

 return(
  <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h1>GitHub User Search</h1>

    <input placeholder="Enter the username"
    type="text"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    onKeyDown={(e)=>e.key==="Enter" && Handlesearch()}
    style={{ padding: "10px", fontSize: "16px", width: "100%", maxWidth:"250px" ,marginBottom: "10px" }}/>
    
    
    <button onClick={Handlesearch} 
    style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer"}}>
      Search
      </button>

      {loading && <p>loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
      {user && <Usercard user={user} query={query} />}
      {repo.length > 0  && <RepoList repos={repo}/>}
  </div>
 )
}
export default App