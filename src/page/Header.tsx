
import React, { Component } from 'react'
import {LanguageState} from '../redux/languageReducer'
import store from '../redux/store'

interface State extends LanguageState{}

export default class Header extends Component<any,State> {
    constructor(props: {} | Readonly<{}>){
        super(props);
        
        this.state = {
            language: store.getState().language,
            languageList:store.getState().languageList
        }
        store.subscribe(()=>{
            this.setState({
                language: store.getState().language,
            })
          })
    }
    
  render() {
      const {language,languageList} = this.state;
      
    return (
      <div>{language}</div>
    )
  }
}
