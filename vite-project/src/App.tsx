import './App.css'
import {MyForm} from "./form"
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { MyTable } from './table';

const App=()=> {

  return (
   <ReactRoutes>

          <Route index  element={<MyForm />} />
          <Route path='table' element={<MyTable></MyTable>}/>

   </ReactRoutes>
    )
}

export {App} 
