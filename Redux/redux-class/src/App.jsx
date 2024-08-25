import './App.css'
import Todo from './component/Todo'
import {Provider} from 'react-redux'
import { store  } from './app/Store'

function App() {
return (
    <>
       <Provider store={store}>
           <Todo/>
       </Provider>
        
    </>
  )
}

export default App

