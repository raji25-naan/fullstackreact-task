import react from "react";
//import reactDom from "react-dom";
import Form from "./form"
import Table from "./table"
import axios from "axios"



class App extends react.Component{
  constructor(){
  super()
  this.state = {
    data:[],
  editData:[]}
  }
  create =data  =>{
    if(!data.isEdit){
      axios.post("http://localhost:5000/index/post",data).then(res=>{
      console.log(res)
      this.getAll()
    })
  }else{
    axios.put("http://localhost:5000/index/update",data).then(res=>{
      this.getAll()
    })
  }
  }
  componentDidMount(){
    this.getAll()
  }
  getAll()
  {
    axios.get("http://localhost:5000/index/getAll").then(res=>{
      this.setState({
        data:res.data
      })
    })
  }
  update = data =>{
    console.log(data)
    this.setState({
      editData:data
    })
  }
  Del = data =>{
    var option = window.confirm(`Are you sure want to delete ${data.Name}`)
    if(option){
      console.log(1)
      axios.delete("http://localhost:5000/index/Del",data.id).then(res=>{
        this.getAll();
      })
    }else{
      console.log("eror")
    }
  }
  render()
  {
    return(
      <div className = "container mt-4">
        <div className = "row">
          <div className = "col-6">
            <Form myData = {this.create} setForm={this.state.editData}></Form>
            <div className = "col-6">
              <Table getData = {this.state.data} setData = {this.update} Del={this.Del}></Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;