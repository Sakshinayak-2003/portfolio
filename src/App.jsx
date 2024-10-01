import Aboutme from "./components/Aboutme"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Extracuricular from "./components/Extracuricular"
import Header from "./components/Header"
import Hobbies from "./components/Hobbies"
import Project from "./components/Project"
import Skills from "./components/Skills"


function App() {

  return (
    <div className="bg-slate-300 px-3 py-8">
    <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />  
        <Aboutme />
        <Project />
        <Skills />
        <Education />
        <Hobbies />
        <Extracuricular />
        <Contacts />        
        
     </div>

      
      </div>  

     
     
   
   
   
   
  )
}

export default App
