import React,{Component} from "react";
// import logo from "./logo.svg";
import "./App.css";

// import App from "./App";

export default class App extends Component {
  a = 100;
  myref = React.createRef();

  state = {
    list: [{
      id:1,
      mytext:"aaa"
    },
  { id:2,
    mytext:"bbb"

  },
  { id:3,
    mytext:"ccc"

  },
],
  };
  render() {
    return (
      <div>
        {/* <input ref="mytext"/>*/}
        <input ref={this.myref} />
        {/* <button onClick={ ()=> {
          console.log ("click",this.myref.current.value)
        } }>add1 </button> */}
        <button onClick={this.handleClick2}>add2</button>

        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>{item.mytext}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleClick2 = () => {
    console.log("click2", this.myref.current.value);

    //
    let newlist = [...this.state.list];
    newlist.push({
      id:Math.random()*10000000000,
      mytext:this.myref.current.value
    });

    this.setState({
      list: newlist
    });
  };
}

// 评论组件
// class App extends React.Component {
//   state = {
//     Comments: [
//       { id: 1, name: 'Jack', content: 'first!'},
//       { id: 1, name: 'rose', content: 'second!'},
//       { id: 1, name: 'ben', content: 'woo!'},

//     ]
//   }

//   render() {
//     return(
//       <div className='app'>
//         <div>
//           <input className='user' type='text' placeholder='请输入评论人'/>
//           <br />
//           <textarea
//           className='content'
//           cols='30'
//           rows='10'
//           placeholder='请输入评论内容'
//           />
//           <br />
//           <button>发表评论</button>

//         </div>
//         <div className='no-comment'>暂无评论,快做第一个评论人吧~</div>
//         <ul>
//           {this.state.Comments.map(item =>(
//           <li key={item.id}>
//             <h3>评论人:{item.name}</h3>
//             <p>评论内容:{item.content}</p>
//           </li>
//           ))}
//         </ul>

//       </div>
//     )
//   }

// }
// export default App;
