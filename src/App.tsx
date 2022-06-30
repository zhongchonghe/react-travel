import React from 'react';
import logo from './logo.svg';
import styles from './App.m.css';
import { Dropdown, Layout, Menu, Typography } from 'antd';
import store from './redux/store'

// import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';
import Header from './page/Header';

function App() {
  // const history = useHistory();
  // const location = useLocation();
  // const params = useParams();
  // const match = useRouteMatch();

  
const edit=()=>{
  
  const action ={
    type:'SET_LANGUAGE',
    payload:"aa"
  }
  store.dispatch(action)
  
  console.log(store.getState());
  
 
  
}

  return (
    <>
    <Header/>
    <button onClick={edit}>修改</button>
    </>
    // <div className={styles.App}>
      
    //   <Layout.Header>
    //     <img src={logo} alt="" />
    //     <Typography.Title level={3}>React 旅游网</Typography.Title>
    //     {/* <Input.Search /> */}
    //     <Dropdown.Button overlay={
    //       <Menu>
    //         <Menu.Item>中文</Menu.Item>
    //         <Menu.Item>English</Menu.Item>
    //       </Menu>
    //     }>语言</Dropdown.Button>
    // </Layout.Header>
    // </div>
    // <div onClick={()=>}>
      /* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/user/:id/edit" component={UserEdit} />
          <Route render={()=><h1>404 not found</h1>} />
          </Switch>

      </BrowserRouter> */
    /* </div> */
  );
}

export default App;
