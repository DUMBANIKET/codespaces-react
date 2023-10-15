import About from './components/About'
import Project from "./components/Project";
import Navbar from "./components/Navbar"
import Landing from './components/Landing';




function App() {

  

  
  return (
   <>
<div className='mb-20'>
<Navbar about={"about"}/>
</div>
    <div className="m-5 mx-12 ">
   <div className='mt-10'>
      <Landing/>
   <About id="about"/>
<Project/>
   </div>

</div>






   </>
  );
}

export default App;
