function Usercard({user , query})
{
    return(
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}> 
       <a href={`https://github.com/${query}`}>
        <img src={user.avatar_url} alt={user.login} width={80} style={{ borderRadius: "50%" }}/>
       </a> 
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <p>Repos:{user.public_repos} &nbsp;  Followers{user.followers}</p>
      </div>
    )
}

export default Usercard