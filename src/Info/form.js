    import react from "react";


class Form extends react.Component{
    constructor(){
        super();
    
    this.state = {
        _id:"",
        Name:"",
        Age:"",
        City: "",
        isEdit:false
    }
}
    infoChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name] :    value
        })
    }
    infoSubmit = event =>{
        if(!this.state.isEdit){

        
        event.preventDefault();
        let data = {
            isEdit:this.state.isEdit,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
    this.props.myData(data)
    }
    else{
        
        let data = {
            isEdit:this.state.isEdit,
            _id:this.state._id,
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
    this.props.myData(data)
    }
}
componentWillReceiveProps(props){
    if(props.setForm._id != null){
        this.setState({
            isEdit:true,
            _id:props.setForm._id,
            Name:props.setForm.Name,
            Age:props.setForm.Age,
            City:props.setForm.City
        })
    }
}
render(){
        return(
           <form onSubmit = {this.infoSubmit} autoComplete = "off">
               <div className = "form-group">
                   <label>Name:</label>
                   <input type="text" className = "form - control"placeholder = "Enter your Name"
                   onChange = {this.infoChange}
                   name =  "Name"
                   value ={this.state.Name}></input>
                   
                   </div>
                   <div className = "form - group">
                   <label >Age</label>
                   <input type = "Number" placeholder = "Enter your Age"
                   onChange = {this.infoChange}
                   name =  "Age"
                   value ={this.state.Age}></input>
                   </div>

                   <div className = "form-group">
                       <label >City:</label>
                       <input type = "text"placeholder = "Enter your City"
                       onChange = {this.infoChange}
                       name =  "City"
                       value ={this.state.City}></input>
                   </div>
                   <button type="submit" className = "btn btn-primary">{this.state.isEdit ?'Update':'Create'}</button>
           </form>
        )
    }
}

export default Form;