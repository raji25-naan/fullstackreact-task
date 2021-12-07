import react from "react";



class Table extends react.Component{
    render(){
        return(
            <table className = "table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th></tr>
                </thead>
                <tbody>
                {
                    this.props.getData.length>0 ?
                    (
                        this.props.getData.map(e => 
                            <tr key = {e._id}> 
                                <td>{e.Name}</td>
                                <td>{e.Age}</td>
                                <td>{e.City}</td>
                                <td><button type="submit"className = "btn btn-primary"
                                onClick = {event=>{
                                    this.props.setData(e)}}>Edit</button></td>
                                <td><button type="submit"className = "btn btn-primary"
                                onClick = {event=>{
                                    this.props.Del(e)}}>Delete</button></td>
                            </tr>
                        )
                        
                    )
                    :(
                        <tr>no data</tr>
                    )
                }
                </tbody>
                
            </table>
        )
    }
}
export default Table;