import './style.css'

//data 
const data = [
    { name: "Atlas", age: 30, gender: "Male" },
    { name: "Araon", age: 19, gender: "Male" },
    { name: "Jules", age: 45, gender: "Female" },
    { name: "Lily", age: 65, gender: "Female" },
    { name: "Zade", age: 25, gender: "Male" },
    { name: "Adeline", age: 15, gender: "Female" },
]
 

export default function Table(){
    return(
        <div className="main">
            <table>
            <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}