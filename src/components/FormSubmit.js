
// import React, { useState } from "react";

// const FormSubmit = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         password: ""
//     });

//     const [formSubmissions, setFormSubmissions] = useState([]);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
        
//         // Add the current form data to the array of form submissions
//         setFormSubmissions(prevSubmissions => [
//             ...prevSubmissions,
//             formData
//         ]);

      

//         // Clear the form fields after submission
//         setFormData({
//             name: "",
//             password: ""
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="enter name" name="name" value={formData.name} onChange={handleChange} />
//                 <input type="password" placeholder="enter password" name="password" value={formData.password} onChange={handleChange} />
//                 <button type="submit">Submit</button>
//             </form>

//             {/* Display the form submissions */}
//             <div>
//                 <h2>Form Submissions:</h2>
//                 <ul>
//                     {formSubmissions.map((submission, index) => (
//                         <li key={index}>
//                             Name: {submission.name}, Password: {submission.password}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default FormSubmit;












import React, { useState, useEffect } from "react";
import ChildData from "./ChildData";

const FormSubmit = ({updateSubmissionData}) => {
    const [formData, setData] = useState({
        name: "",
        password: ""
    });

    const [formDataArray, setFormDataArray] = useState([]);

  

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        
    }

    function handleSubmit(e) {
        e.preventDefault();
       console.log("formData",formData)
       //need to save the data in state
       setFormDataArray(prevArray => [...prevArray, formData]);

      // console.log("formDataArray",formDataArray)
      updateSubmissionData(formDataArray)

       setData (prevData=>({
        ...prevData,
         name:"",
         password:""
       }))
    }

    // useEffect(() => {
    //     console.log("ALL DATA", allData);
    // }, [allData]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter name" name="name" value={formData.name} onChange={handleChange} />
                <input type="password" placeholder="enter password" name="password" value={formData.password} onChange={handleChange} />
                <button className="btn btn-primary" type="submit">Submit</button>

            </form>
            <div>submission</div>
             <ChildData   formDataArray={formDataArray}/>
        </div>
    );
};

export default FormSubmit;
