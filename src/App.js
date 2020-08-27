
import React, { Component } from 'react';


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            number:'',
            nin:''
        }
    }

    changeFirstname = (event) => {
        this.setState({
            firstname:event.target.value
        })
    }
    changeLastname = (event) => {
        this.setState({
            lastname:event.target.value
        })
    }
    changeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    changePhoneNumber = (event) => {
        this.setState({
            number:event.target.value
        })
    }
    changeNin = (event) => {
        this.setState({
            nin:event.target.value
        })
    }
    render() { 
        return (  
            <div>
                <h2 className="text-center text-muted mt-3">Voters Registration Form</h2>
                <h5 className="text-center text-muted mt-3">Fill this form to register as a Voter</h5>
                <div className="container">
                    <form className="mt-5">
                    
                        <div className="form-group">
                            <label for="formGroupExampleInput">FirstName</label>
                            <input type="text" className="form-control" style={{width: "70%"}}
                             placeholder="firstname"
                             onChange={this.changeFirstname} 
                             value={this.state.firstname}/>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">LastName</label>
                            <input type="text" className="form-control"  style={{width: "70%"}}
                            placeholder="lastname"
                            onChange={this.changeLastname} 
                            value={this.state.lastname}/>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" style={{width: "70%"}} 
                            placeholder="email"
                            onChange={this.changeEmail} 
                             value={this.state.email} /> 
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="number" className="form-control" style={{width: "70%"}} 
                            placeholder="phone number"
                            onChange={this.changePhoneNumber} 
                             value={this.state.number} /> 
                        </div>
                        <div className="form-group">
                            <label>National Identity Number (NIN)</label>
                            <input type="number" className="form-control" style={{width: "70%"}} 
                            placeholder="nin"
                            onChange={this.changeNin} 
                             value={this.state.nin} /> 
                        </div>
                        <p>Gender</p>
                        <div class="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                            <label className="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"  />
                            <label className="form-check-label" for="exampleRadios2">
                                Female
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" for="exampleRadios3">
                                Other
                            </label>
                            </div>
                            <label className="mt-3" for="birthday">Date of Birth:</label><br/>
                            <input type="date" id="birthday" name="birthday"></input>
                            <div className="form-group">
                                <label className="mt-3" for="exampleFormControlSelect1">State Of Origin</label>
                                <select className="form-control" id="exampleFormControlSelect1" style={{width: "70%"}}>
                                <option>Abia</option>
                                <option>Adamawa</option>
                                <option>Akwa Ibom</option>
                                <option>Anambra</option>
                                <option>Bauchi</option>
                                <option>Bayelsa</option>
                                <option>Benue</option>
                                <option>Borno</option>
                                <option>Cross River</option>
                                <option>Delta</option>
                                <option>Ebonyi</option>
                                <option>Edo</option>
                                <option>Ekiti</option>
                                <option>Enugu</option>
                                <option>Gombe</option>
                                <option>Imo</option>
                                <option>Jigawa</option>
                                <option>Kaduna</option>
                                <option>Kano</option>
                                <option>Kastina</option>
                                <option>Kebbi</option>
                                <option>Kogi</option>
                                <option>Kwara</option>
                                <option>Lagos</option>
                                <option>Nasarawa</option>
                                <option>Niger</option>
                                <option>Ogun</option>
                                <option>Ondo</option>
                                <option>Osun</option>
                                <option>Oyo</option>
                                <option>Plateau</option>
                                <option>Rivers</option>
                                <option>Sokoto</option>
                                <option>Taraba</option>
                                <option>Yobe</option>
                                <option>Zamfara</option>
                                <option>FCT</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="mt-3" for="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="input your current address here" style={{width: "70%"}} />
                            </div>
                            <div className="text-center">
                            <button type="button" className="btn btn-primary mt-5 mb-5">Submit</button>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default App;