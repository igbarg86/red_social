import axios from "axios"
import { useEffect, useState } from "react"
import Form from "./components/Form"
import Post from "./components/Post"

const urlBaseServer = "http://localhost:3000/api/v1"

function App() {
  const [titulo, setTitulo] = useState("")
  const [imgSrc, setImgSRC] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const { data } = await axios.get(urlBaseServer + "/posts")
      setPosts(data.posts)
    } catch (error) {
      console.error("Error al obtener los posts:", error)
    }
  }

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion }
    await axios.post(urlBaseServer + "/posts", post)
    getPosts()
  }

  const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/${id}/like`)
    getPosts()
  }

  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`)
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                like={like}
                eliminarPost={eliminarPost}
              />
            ))
          ) : (
            <p>No hay posts para mostrar.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
