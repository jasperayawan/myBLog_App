import Header from './components/header';
import Home from './pages/home'
import { Routes,Route } from 'react-router-dom'
import Layout from './pages/layout';
import Post from './components/post';
import PostContent from './components/postContent';
import Login from './pages/login';

const App = () => {
  return(
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PostContent/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={
            <div>registration page</div>
          }/>
        </Route>
      </Routes>
    </>
  )
}

export default App;