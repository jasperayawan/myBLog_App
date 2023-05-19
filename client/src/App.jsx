import Header from './components/header';
import Home from './pages/home'
import { Routes,Route } from 'react-router-dom'
import Layout from './pages/layout';
import Post from './components/post';
import PostContent from './components/postContent';
import Login from './pages/login';
import Register from './pages/register';
import BlogPost from './pages/SEO';
import Footer from './components/footer';
import { UserContextProvider } from './userContext';
import CreatePost from './pages/createPost';

const App = () => {
  return(
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout>
            <BlogPost/>
            </Layout>}>
            <Route index element={<PostContent/>}/>
            <Route path='/create' element={<CreatePost/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;