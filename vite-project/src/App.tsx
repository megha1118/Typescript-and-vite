import  { lazy, Suspense } from "react"
import './App.css'
// import MyForm from "./form"
import { Routes as ReactRoutes, Route } from "react-router-dom";
// import  MyTable  from './table';

const MyForm = lazy(() => import("./form"))
const MyTable = lazy(() => import('./table'))
const App = () => {

       return (
              <Suspense fallback={<h1>loading...</h1>}>

              <ReactRoutes>
                            <Route index element={<MyForm />} />
                            <Route path='table' element={<MyTable></MyTable>} />


              </ReactRoutes>
              </Suspense>

       )
}

export { App } 
