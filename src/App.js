import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';

function App() {

  const router = createBrowserRouter([

    {
      path: '/', element: <Main></Main>,

      children: [

        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          loader : async() =>{

            return fetch('https://jsonplaceholder.typicode.com/users')

          },
          element: <Friends></Friends>
        },

        {
          path : '/friend/:friendId', 

        loader: async ({params})=>{
          // console.log(params.friendId)
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
          
          element :<FriendDetail></FriendDetail>

        },

        {path : 'post',
        loader : async() => {
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
         element : <Posts></Posts>}


      ]
    },


    { path: 'about', element: <About></About> },
    { path: '*', element: <div>Application is not finding in this path</div> }



  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>



    </div>
  );
}

export default App;
