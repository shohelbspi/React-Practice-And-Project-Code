import Category from "./components/Category"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import News from "./page/News"

function App() {

  return (
    <>
      <Navbar className={'sticky top-0 z-20'}/>
      <Category className="sticky top-15 z-40 bg-base-100 py-3" />
      <News />
      <Footer/>
    </>
  )
}

export default App
