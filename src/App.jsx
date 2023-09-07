import { Route, Routes,BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainHeader from './components/Partial/header/header.jsx'
import State from './components/common/state/state.jsx'
import States from './components/common/state/states.jsx'
import State1 from './components/common/state/state1.jsx'
import UsestateHook from './components/common/usestate_hook/index.jsx'
import Update_State from './components/common/Update_State/index.jsx'
import Event_Bubbling from './components/common/Event_Bubbling/index.jsx'
import Assainment2 from './components/common/Assainment2/index.jsx'
import Error from './components/common/Error/index.jsx'
import Product from './components/common/Product/index.jsx'
import Form from './components/common/Form/index.jsx'
import Product_list from './components/common/Product/product_list'
import Home from './components/common/Todo/Home'
import Todo from './components/common/Todo2/TodoHome'
import Formik from './components/common/Formik/Formik'
import YupFormValidetion from './components/common/YupFormValidetion/YupFormValidetion'
import Toggle from './components/common/toggle/toggle.jsx'
import Formik2 from './components/common/Formik2/Formik2'
import Formik3 from './components/common/Formik3-Yup/Formik3'
import FAQS from './components/common/FAQ/FAQS'
import Assainment3 from './components/common/Assainment3/Assainment3'
import UseEffect from './components/common/UseEffect/UseEffect'
import UseEffect2 from './components/common/UseEffect2/UseEffect2'
import FetcingData from './components/common/Hook/FetcingData/FetcingData'
import DataFatch from './components/common/Hook/CustomHook/useFatch/DataFatch'
import ToastMassege from './components/common/ToastMassege/ToastMassege'
import Data from './components/common/Assainment4/data'
import Project from './components/common/Project/Project3/Project'
import Project2 from './components/common/Project/Project31/Project2'


function App() {
  return (
    <section>
     
      <BrowserRouter>
          <MainHeader  />
          <Routes>
            <Route path='' element= {<Assainment2 />} />
            <Route path='State' element= {<State />} />
            <Route path='States' element= {<States />} />
            <Route path='State1' element= {<State1 />} />
            <Route path='UsestateHook' element= {<UsestateHook />} />
            <Route path='Update_State' element= {<Update_State />} />
            <Route path='Event_Bubbling' element= {<Event_Bubbling />} />
            <Route path='Product' element= {<Product_list />} />
            <Route path='Form' element= {<Form />} /> 
            <Route path='Todo' element= {<Home />} />
            <Route path='todo1' element= {<Todo />} />
            <Route path='formik' element=  {< Formik />} />
            <Route path='yup' element=  {< YupFormValidetion />} />
            <Route path='toggle' element = {<Toggle />} />
            <Route path='Formik2' element = {<Formik2 />}/>
            <Route path='Formik3' element = {<Formik3 />}/>
            <Route path='FAQ' element={<FAQS />}/>
            <Route path='Assainment3' element= {<Assainment3 />} />
            <Route path='UseEffect' element= {<UseEffect />} />
            <Route path='UseEffect2' element= {<UseEffect2 />} />
            <Route path='FetcingData' element= {<FetcingData />} />
            <Route path='DataFatch' element= {<DataFatch />} />
            <Route path='ToastMassege' element= {<ToastMassege />} />
            <Route path='data' element= {<Data />} />
            <Route path='Project' element= {<Project />} />
            <Route path='Project2' element= {<Project2 />} />

            
            <Route path='*' element= {<Error />} />
           
          </Routes>
      </BrowserRouter>
    </section>
  


  );
}

export default App;