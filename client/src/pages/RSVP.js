import React, { Fragment } from "react";
import styled from "styled-components";
import PageWithNav from "./helpers/PageWithNav";
import { H5, H6, B2 } from "../components/Fonts/Fonts";
import { Form, Input } from "formsy-react-components";
import axios from 'axios';



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
	      console.log(res)
          const guests = res.data;
          this.setState({ guests });
        })         
		 .catch(error => {
			 console.log(error)
		 })
    
}  

render() {
return (
  <PageWithNav>
	  <Fragment>
    	    <form
    	      onSubmit={this.onSubmit}
    	    >
    	      <input
    	        name="firstname"
    	        label="Please Enter Your First and Last Name(s)."
    	      onChange={this.handleNameChange}/>
    	      <input type="text" name="guest" label="Are You Bringing a Guest? (Note if you are a couple you are not)" onChange={this.handleGuestChange} />
	      <input type="text" name="diet" label="Do You Have Any Food Allergies?" onChange={this.handleDietChange}/>
	      <input type="text" name="camp" label="Are you camping?" onChange={this.handleCampChange} />
    	      <input
    	        name="button"
    	        className="btn btn-primary"
    	        formNoValidate=""
    	        type="submit"
    	      />
    	    </form>
    	  </Fragment>
  </PageWithNav>
);
};
}
export default RSVP;
