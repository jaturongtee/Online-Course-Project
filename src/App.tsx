
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './Page/Home'
import Allcousepage from './Page/Allcousepage'
import { Contact } from './Page/Contact'
import ProgrammingFundamentals from './Page/ProgrammingFundamentals'
import MachineLearning from './Page/MachineLearning'
import WebDevelopmen from './Page/WebDevelopmen'
import DataScience from './Page/DataScience'
import { CourseDetailpage } from './Page/CourseDetailpage'


function App() {
  return (
    <>
     <Navbar/>
     <div className="body"><Routes>
      <Route path='/' element={<Home/>} />
      <Route path='courses' element={<Allcousepage/>}/>
      <Route path='contact' element={<Contact/>} />
      <Route path='category1' element={<ProgrammingFundamentals/>}/>
      <Route path='category2' element={<MachineLearning/>} />
      <Route path='category3' element={<WebDevelopmen/>} />
      <Route path='category4' element={<DataScience/>} />
      <Route path="/courses/:id" element={<CourseDetailpage/>} />
     </Routes></div>
     
    </>
  )
}

export default App
