
import { Footer } from "./components/Footer.tsx"
import Header from "./components/header"
import {ChatFit} from "./pages/ChatFit.tsx"



function App() {
  

  return (
    <div className="flex flex-col h-screen ">
      <Header></Header>
      <ChatFit></ChatFit>
      <Footer></Footer>
    </div>
  )
}

export default App
