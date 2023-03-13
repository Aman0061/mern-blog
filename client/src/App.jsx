import {Routes, Route, Navigate} from 'react-router-dom'
import {Layout} from './components/Layout'
import RegisterPage from  "./pages/RegisterPage"
import AddPostPage from  "./pages/AddPostPage"
import LoginPage from  "./pages/LoginPage"
import EditPostPage from  "./pages/EditPostPage"
import PostPage from  "./pages/PostPage"
import PostsPage from  "./pages/PostsPage"
import MainPage from "./pages/MainPage";

function App() {

  return (
  <Layout>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/posts' element={<PostsPage/>}/>
        <Route path=':id' element={<PostPage/>}/>
        <Route path=':id/edit' element={<EditPostPage/>}/>
        <Route path='/newPost' element={<AddPostPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
  </Layout>
  )
}

export default App
