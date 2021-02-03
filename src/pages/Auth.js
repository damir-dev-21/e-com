import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import FormErrors from '../Components/FormErrors'
import {auth, changeAuth} from '../redux/actions/auth'
import MessageBox from '../Components/MessageBox'


class Auth extends Component{

    state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false,
        redirect:false,
        isReg:false,
    }

     
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' не корректный';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' слишком короткий';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    reg = () =>{
        this.props.auth(this.state.email,this.state.password,false)
        if(this.state.formValid){
            this.setState({
                email:'',
                password:'',
                isReg:true,
            })
        }
    }

    login = () =>{
        this.props.auth(this.state.email,this.state.password,true)
        this.setState({
            email:'',
            password:'',
            redirect:true
        })  
    }

    render(){
        if(this.state.redirect){
            return(
                <Redirect to="/"/>
            )
        }
        
        return(
            <div className='auth'>
                {this.state.isReg ? <MessageBox message={'Регистрация прошла успешно'} clss={'success'}/> : ''}
            <div className="authPage">

            <h3>Авторизация</h3>

            <form onSubmit={e=>e.preventDefault()}>
                <input type="email" placeholder="Введите email" name="email" value={this.state.email} onChange={this.handleUserInput}/>
                <input type="number" placeholder="Введите пароль" name="password" value={this.state.password} onChange={this.handleUserInput}/>
                <FormErrors formErrors={this.state.formErrors}/>
                <div className="authPage-btns">
                <button className="signIn" onClick={this.login} disabled={!this.state.formValid}>Войти</button>
                <button className="signUp" onClick={this.reg}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return{
        auth:(email,password,isLogin)=>dispatch(auth(email,password,isLogin)),
        changeAuth:()=>dispatch(changeAuth())
    }
}

function mapStateToProps(state){
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)
