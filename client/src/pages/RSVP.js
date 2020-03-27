import React, { Fragment } from "react";
import '../style/rsvp.css'
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { Form} from "formsy-react-components";
import { Input } from "../components/Input";
import { Button } from "react-bootstrap";
import axios from 'axios';
import {
		withRouter
	
} from 'react-router-dom';



 class RSVP extends React.Component {
	 constructor(props) {
  super(props)
         this.state = {
          guests: [],
          users: []
        }
        this.handleDietChange = this.handleDietChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCampChange = this.handleCampChange.bind(this);
        this.handleGuestChange = this.handleGuestChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
      } 
	 
  handleDietChange(e) {
	this.setState({diet: e.target.value})
}
 handleNameChange(e) {
	 console.log("here")
	this.setState({name: e.target.value})
}

 handleGuestChange(e) {
	this.setState({guest: e.target.value})
}

 handleCampChange(e) {
    this.setState({camp: e.target.value})
}
 componentDidMount() {
	 axios.get(`http://localhost:8000/test`)
      .then(res => {
        const guests = res.data;
        this.setState({ guests });
      })
}  
 
 onSubmit(e) {
      e.preventDefault();
      const guest = {
        name: this.state.name,
        guest: this.state.guest,
        camp: this.state.camp,
        diet: this.state.diet,
      }
	 axios.post('http://localhost:8000/guest', guest)
      .then(res => {

          const guests = res.data;
	      if (guests.includes("Error")) {
		      window.alert("Please fill out the form completely.")
		      return
	      }  
			
        })         
	 .catch(error => {
		 return
	 })
	 this.props.history.push('/')
}  

render() {
return (
  <PageWithNav>
	  <Fragment>
    	    <form
	    >
	      <div>
	      <label>Please enter your full name(s).</label>
    	      <input
    	        name="firstname"
    	        label="Please Enter Your First and Last Name(s)."
		onChange={(e) => this.handleNameChange(e)}/></div>
		<div>
			<label>Are you bringing a guest? (This does not apply to couples)</label>
    	      <input  name="guest" label="Are You Bringing a Guest? (Note if you are a couple leave this blank)" onChange={this.handleGuestChange} />
      </div>
      <div>
	      <label>Do you have any dietary restrictions?</label>
	      <input  name="diet" label="Do You Have Any Food Allergies?" onChange={this.handleDietChange}/>
      </div>
      <div>
	      <label>Are you camping? If yes do you have camping gear?</label>
	      <input  name="camp" label="Are you camping? If yes do you have camping supplies?" onChange={this.handleCampChange} />
      </div>
    	      <Button
		variant="success"
    	      onClick={ (event) => this.onSubmit(event)}
    	        name="button"
    	        className="btn"
    	        formNoValidate=""
    	        type="submit"
    	      >Submit</Button>
    	    </form>
    	  </Fragment>
  </PageWithNav>
);
};
}
export default withRouter(RSVP);
