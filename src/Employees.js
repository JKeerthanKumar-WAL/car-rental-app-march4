import { useEffect, useState } from "react";
import axios from "axios";
const Employees = () => {
    let [name, setName] = useState([]);
    useEffect(() => {
        axios.get("employees.json")
        .then((res) => {
            setName(res.data)
        })
    },[])
    return(
        <div>
            <table>
                <tr>
                    <td><b>Serial No</b></td>
                    <td><b>Name of the Employee</b></td>
                    <td><b>Location of the Company</b></td>
                </tr>
                {name.map((val,index) => {
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{val.name}</td>
                        <td>{val.loc}</td>
                    </tr>
                )
            })}
            </table>
            
        </div>
    );
};
export default Employees;

