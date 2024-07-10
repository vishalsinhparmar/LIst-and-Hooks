import React from 'react'
import ReactDOM from 'react-dom/client'
import ListItem from './ListItem/LIstItem'
import MyCounter from './Couter/Couter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ListItem/>
     <MyCounter/>
  </React.StrictMode>,
)
