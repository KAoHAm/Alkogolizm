import React from "react";

const Person= props=>(

<tbody>
        < tr  >
            <td>{props.el.name}</td>
            <td>{props.el.gender}</td>
            <td>{props.el.date}</td>
            <td>{props.el.alcohol}</td>
            <td>{props.el.cup}</td>
        </tr>

</tbody>
)

export default Person