import React from 'react'
import ReactDOM from 'react-dom'


function formatName(user){
    return  user ? user.firstName +  '' + user.lastName : 'anyone' ;
}

const user = {
    firstName: 'chen',
    lastName: 'yao'
}

const element = React.createElement(
    'h3',
    { className: 'greeting' },
    'hello world --Albert'
)

// ReactDOM.render( element, document.getElementById("app") )

// ReactDOM.render( <h1>hello world -- { formatName( user ) }</h1>, document.getElementById("app") )

// ReactDOM.render( <div> hello world --Albert</div>, document.getElementById("app") )


// function tick() {
//     const element = (
//         <div>
//             <h1>hello world  --Albert</h1>
//             <h2> It is { new Date().toLocaleTimeString() }. </h2>
//         </div>
//     )
//
//     ReactDOM.render( element, document.getElementById('app') )
// }
//
// setInterval( tick , 1000 )


// function Welcome(props){
//     return <h1> hello {props.name} </h1>
// }
// class Welcome2 extends React.Component {
//     render (){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }
// function App() {
//     return (
//         <div>
//             <Welcome name="Albert"  />
//             <Welcome name="Geno"  />
//             <Welcome name="Alicia"  />
//             <Welcome name="Lara"  />
//         </div>
//     )
// }
// const element2 = <Welcome name="Albert2" />
// ReactDOM.render( <App />, document.getElementById("app") )


// class Clock extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { date: new Date() }
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello world ^-^ </h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
//             </div>
//         )
//     }
//
//     componentDidMount(){
//         this.timerID = setInterval( ()=> this.tick(), 1000 )
//     }
//
//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }
//
//     tick(){
//         this.setState({ date: new Date() })
//     }
// }
// ReactDOM.render( <Clock />, document.getElementById("app") )


// class Toggle extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = { isToggleOn: true }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick(){
//         this.setState( prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }) )
//     }
//     render(){
//         console.log( '-----',this )
//         return (
//             <button onClick={ this.handleClick } >
//                 { this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         )
//     }
// }
// ReactDOM.render( <Toggle />, document.getElementById('app') )


// function LoginButton(props) {
//     return (
//         <button onClick={ props.onClick }> Login </button>
//     )
// }
// function LogoutButton(props) {
//     return (
//         <button onClick={ props.onClick }> Logout </button>
//     )
// }
// function UserGreeting() {
//     return <h1>Welcone back!</h1>
// }
// function GuestGreeting() {
//     return <h1>Please sign Up</h1>
// }
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting />
//     }
//     return <GuestGreeting />
// }
// class LoginControl extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = { isLoginIn: false }
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//     }
//     handleLoginClick(){
//         this.setState( {isLoginIn: true} )
//     }
//     handleLogoutClick(){
//         this.setState( {isLoginIn: false} )
//     }
//
//     render(){
//         const isLoggedIn = this.state.isLoginIn;
//         let button = null;
//         if(isLoggedIn){
//             button = <LogoutButton onClick={ this.handleLogoutClick  } />
//         }else {
//             button = <LoginButton onClick={ this.handleLoginClick  } />
//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }
// ReactDOM.render( <LoginControl/>, document.getElementById("app") )



// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello !</h1>
//             { unreadMessages.length > 0 &&
//                 <h2>
//                     You have { unreadMessages.length } unread messages
//                 </h2>
//             }
//         </div>
//     )
// }
//
// const message = ['one', 'two', 'three', 'four']
// ReactDOM.render( <Mailbox unreadMessages={message} />, document.getElementById("app") )



// function WarningBanner(props) {
//     if(!props.warn) return null;
//     return (
//         <div>
//             Warning
//         </div>
//     )
//
// }
// class Page extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             showWarning: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState( (prevState)=>({
//             showWarning: !prevState.showWarning
//         }) )
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick={this.handleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <span>{ [1,2,3,4,5,6,7] }</span>
//             </div>
//         )
//     }
// }
// ReactDOM.render( <Page />, document.getElementById("app"))


// function Numbers(props) {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {
//                 numbers.map( number=> <li key={number + ''}>{number + 'for fun'}</li> )
//             }
//         </ul>
//     )
// }
// ReactDOM.render( <Numbers numbers={ [1,2,3,4,5,6,7,8,9,0] } />, document.getElementById("app") )



class EssayForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            textVale: "Please write an essay about you favorite DOM element"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState( { textVale:event.target.value } )
    }
    handleSubmit(event){
        alert(" An essay was subumitted: " + this.state.textVale)
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                </label>
                <textarea value={this.state.textVale} onChange={this.handleChange} />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
ReactDOM.render( <EssayForm />, document.getElementById("app") )