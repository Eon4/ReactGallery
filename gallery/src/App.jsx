import { Gallery } from "./components/gallery"
import img1 from './assets//images/dog1.jpg'


function App() {

  const imgArray = [img1]

  return (
      <Gallery input_array={imgArray}/>
  )
}

export default App