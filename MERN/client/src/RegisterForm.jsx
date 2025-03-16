// import React, { useState } from "react";
// import "./RegisterForm.css"; // Importing the CSS file

// function LaptopRepairForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     issue: "",
//   });

//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData([...submittedData, formData]);
//     setFormData({ name: "", email: "", issue: "" });
//     alert("Attendance submitted!");
//   };

// return (
//     <div className="form-container">
//       <h2>Attendance Form</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
// </div>
//         <div className="form-group">
//           <label>Register Number:</label>
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your register number"
//             required
//           />
// </div>
//         <div className="form-group">
//           <label>Status</label>
//           <select
//             name="issue"
//             value={formData.issue}
//             onChange={handleChange}
//             required
//           >
//             <option value="">--Select status--</option>
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
// </div>
//         <button type="submit" className="submit-button">
//           Submit Attendance
//         </button>
//       </form>

//       {submittedData.length > 0 && (
// <div>
//           <h3>Submitted Requests</h3>
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Reg. No.</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {submittedData.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                   <td>{data.issue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
// </div>
//       )}
// </div>
// );
// }

// export default LaptopRepairForm;

import axios from "axios";
import React, { useState } from "react";

function RegisterForm() {
const [name,setName] = useState()
const [email,setEmail] = useState()
const [phone, setPhone] = useState()
const [location,setLocation] = useState()
const [status,setStatus] = useState()
const handleSubmit = (e) => {
e.preventDefault()
axios.post('http://localhost:8000/register',
{name,email,phone,location})
.then(result=>setStatus(result.data))
.catch(err=>setStatus(err))
}
return (
<div>
<form onSubmit={handleSubmit}>
<h3>Registration Form</h3>
<div>
<label> Name </label>

<input onChange={(e)=>setName(e.target.value)}></input>
</div>
<div>
<label> Email </label>
<input onChange={(e)=>setEmail(e.target.value)}></input>
</div>
<div>
<label> Phone </label>
<input onChange={(e)=>setPhone(e.target.value)}></input>
</div>
<div>
<label> Location </label>
<input onChange={(e)=>setLocation(e.target.value)}></input>
</div>
<div>
<button type="submit"> Sign Up </button>
</div>
<div> {status} </div>
</form>
</div>
);
}
export default RegisterForm;