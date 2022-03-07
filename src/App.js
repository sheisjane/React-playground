// import { Link } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import TodoItem from "./components/TodoItem.js";
import Card from './components/Card';
import StyleExample from "./style-example/StyleExample.js";
import ButtonClassComponent from "./class-function-component/ButtonClassComponent.js";
// import ThemeEditor from "./class-function-component/ThemeEditor.js";
// import Clock from "./class-function-component/Clock.js";
// import WorldClock from "./class-function-component/WorldClocks.js";
// import LifeCycleExample from "./class-function-component/LifeCycleExample.js";
// import LifeCycleExampleDad from "./class-function-component/LifeCycleExampleDad.js";
// import EventExample from "./class-function-component/EventExample.js";
// import ListExample from "./list/ListExample.js";
// import FormExample from "./form/FormExample.js";
// import Exchange from "./CurrencyExachange/Exchange.js";
// import Container from "./routes-mock/Container.js";

function App() {
  // const todos = ['Wath Movie', 'Walk dogs', 'Have dinner'];
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoItem text={todo}></TodoItem>
        })}
      </ul>
      <hr />
      <button id="test" disabled>23423</button>
      <Card imageUrl="https://picsum.photos/200/250" title="幸福来敲门" createdAt="一天前" rating="暂无评分"></Card>
      <Card imageUrl="" title="钢铁侠" createdAt="三天前" rating="8.6"></Card>
      <hr/>
      <StyleExample/>

      {/* <hr/>
      <h2>Function component vs Class component</h2>
      <ButtonClassComponent size="small">Small Button</ButtonClassComponent>
      <ButtonClassComponent size="default">Default Button</ButtonClassComponent>
      <ButtonClassComponent size="large">Large Button</ButtonClassComponent>
      <ButtonClassComponent>Button without size</ButtonClassComponent> */}

      {/* <ThemeEditor theme="light" /> */}
      {/* <WorldClock /> */}
      {/* <LifeCycleExample /> */}
      {/* <LifeCycleExampleDad /> */}
      {/* <EventExample /> */}
      {/* <ListExample /> */}
      {/* <FormExample/> */}
      {/* <Exchange /> */}
      {/* <Container /> */}

      {/* <div className="navbar">
        <Link to="/">Currency Exchange</Link>
        <Link to="/about">Form Example</Link>
        <Link to="/event">Event Example</Link>
      </div> */}

      {/* <Routes> */}
        {/* <Route path="/" element={<Exchange/>} /> */}
        {/* <Route path="about" element={<FormExample/>} /> */}
        {/* <Route path="event" element={<EventExample/>} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { Component } from "react";
// import LifeCycleExample from "./components/LifeCycleExample";


// export default app;
// import TodoItem from "./components/Todioitem";


// function App() {
//   const todos = ['Watch Movie','Have dinner','Walk dogs'];
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map((todo) =>{
//           return <TodoItem text={todo}></TodoItem>
//         })}
//       {/* <TodoItem text="Watch movie"></TodoItem>
//       <TodoItem text="Have dinner"></TodoItem>
//       <TodoItem text="Walk dogs"></TodoItem> */}
//       </ul>
//     </div>
//   );
// }


// export default App;

// // 体会function在react中的使用
// function App() {
//   const name = 'apple';
//   const title = 'This is a title from a variable ${name}';
//   const add = (a,b) =>{
//     return a + b;
//   }
//   return <div title={title}>Hello {name} {1+2} {add(100,200)}</div>
// }
//  export default App ;

// // 添加Add todo list
// // import React,{Component} from "react";
// // // import logo from "./logo.svg";
// // import "./App.css";

// // // import App from "./App";

// // export default class App extends Component {
// //   a = 100;
// //   myref = React.createRef();

// //   state = {
// //     list: [{
// //       id:1,
// //       mytext:"aaa"
// //     },
// //   { id:2,
// //     mytext:"bbb"

// //   },
// //   { id:3,
// //     mytext:"ccc"

// //   },
// // ],
// //   };
// //   render() {
// //     return (
// //       <div>
// //         {/* <input ref="mytext"/>*/}
// //         <input ref={this.myref} />
// //         {/* <button onClick={ ()=> {
// //           console.log ("click",this.myref.current.value)
// //         } }>add1 </button> */}
// //         <button onClick={this.handleClick2}>add2</button>

// //         <ul>
// //           {this.state.list.map((item) => (
// //             <li key={item.id}>{item.mytext}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }

// //   handleClick2 = () => {
// //     console.log("click2", this.myref.current.value);

// //     //
// //     let newlist = [...this.state.list];
// //     newlist.push({
// //       id:Math.random()*10000000000,
// //       mytext:this.myref.current.value
// //     });

// //     this.setState({
// //       list: newlist
// //     });
// //   };
// // }

// // 评论组件
// // class App extends React.Component {
// //   state = {
// //     Comments: [
// //       { id: 1, name: 'Jack', content: 'first!'},
// //       { id: 1, name: 'rose', content: 'second!'},
// //       { id: 1, name: 'ben', content: 'woo!'},

// //     ]
// //   }

// //   render() {
// //     return(
// //       <div className='app'>
// //         <div>
// //           <input className='user' type='text' placeholder='请输入评论人'/>
// //           <br />
// //           <textarea
// //           className='content'
// //           cols='30'
// //           rows='10'
// //           placeholder='请输入评论内容'
// //           />
// //           <br />
// //           <button>发表评论</button>

// //         </div>
// //         <div className='no-comment'>暂无评论,快做第一个评论人吧~</div>
// //         <ul>
// //           {this.state.Comments.map(item =>(
// //           <li key={item.id}>
// //             <h3>评论人:{item.name}</h3>
// //             <p>评论内容:{item.content}</p>
// //           </li>
// //           ))}
// //         </ul>

// //       </div>
// //     )
// //   }

// // // }
// // // export default App;
// import TodoItem from "./components/Todioitem";


// function App() {
//   const todos = ['Watch Movie','Have dinner','Walk dogs'];
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map((todo) =>{
//           return <TodoItem text={todo}></TodoItem>
//         })}
//       {/* <TodoItem text="Watch movie"></TodoItem>
//       <TodoItem text="Have dinner"></TodoItem>
//       <TodoItem text="Walk dogs"></TodoItem> */}
//       </ul>
//     </div>
//   );
// }


// export default App;

// // 体会function在react中的使用
// function App() {
//   const name = 'apple';
//   const title = 'This is a title from a variable ${name}';
//   const add = (a,b) =>{
//     return a + b;
//   }
//   return <div title={title}>Hello {name} {1+2} {add(100,200)}</div>
// }
//  export default App ;

// // 添加Add todo list
// // import React,{Component} from "react";
// // // import logo from "./logo.svg";
// // import "./App.css";

// // // import App from "./App";

// // export default class App extends Component {
// //   a = 100;
// //   myref = React.createRef();

// //   state = {
// //     list: [{
// //       id:1,
// //       mytext:"aaa"
// //     },
// //   { id:2,
// //     mytext:"bbb"

// //   },
// //   { id:3,
// //     mytext:"ccc"

// //   },
// // ],
// //   };
// //   render() {
// //     return (
// //       <div>
// //         {/* <input ref="mytext"/>*/}
// //         <input ref={this.myref} />
// //         {/* <button onClick={ ()=> {
// //           console.log ("click",this.myref.current.value)
// //         } }>add1 </button> */}
// //         <button onClick={this.handleClick2}>add2</button>

// //         <ul>
// //           {this.state.list.map((item) => (
// //             <li key={item.id}>{item.mytext}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   }

// //   handleClick2 = () => {
// //     console.log("click2", this.myref.current.value);

// //     //
// //     let newlist = [...this.state.list];
// //     newlist.push({
// //       id:Math.random()*10000000000,
// //       mytext:this.myref.current.value
// //     });

// //     this.setState({
// //       list: newlist
// //     });
// //   };
// // }

// // 评论组件
// // class App extends React.Component {
// //   state = {
// //     Comments: [
// //       { id: 1, name: 'Jack', content: 'first!'},
// //       { id: 1, name: 'rose', content: 'second!'},
// //       { id: 1, name: 'ben', content: 'woo!'},

// //     ]
// //   }

// //   render() {
// //     return(
// //       <div className='app'>
// //         <div>
// //           <input className='user' type='text' placeholder='请输入评论人'/>
// //           <br />
// //           <textarea
// //           className='content'
// //           cols='30'
// //           rows='10'
// //           placeholder='请输入评论内容'
// //           />
// //           <br />
// //           <button>发表评论</button>

// //         </div>
// //         <div className='no-comment'>暂无评论,快做第一个评论人吧~</div>
// //         <ul>
// //           {this.state.Comments.map(item =>(
// //           <li key={item.id}>
// //             <h3>评论人:{item.name}</h3>
// //             <p>评论内容:{item.content}</p>
// //           </li>
// //           ))}
// //         </ul>

// //       </div>
// //     )
// //   }

// // }
// export default App;
