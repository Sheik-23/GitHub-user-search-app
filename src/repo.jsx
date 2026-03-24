function RepoList({ repos }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Repostories {repos.length}</h3>

      {repos.map((repo) => (
        <div key={repo.id}
        style={{
          border:"1px solid #ddd",
          padding:"14px",
          borderRadius:"5px",
          marginBottom:"18px"
        }}>

          <a href={repo.html_url} target="_blank" rel="noreferrer"
            style={{ fontWeight: "bold", fontSize: "15px", color: "#0969da", textDecoration: "none" }}><b>{repo.name}</b></a>
        < p style={{ color: "#666", fontSize: "13px", margin: "6px 0" }}>
          {repo.description || "No Description"}</p>
        </div>
      ))}
    </div>
  )
}

export default RepoList