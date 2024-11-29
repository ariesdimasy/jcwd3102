// import { useState } from "react"
import axios from "axios"
import { Formik, Form, FormikProps, Field } from "formik"
import * as Yup from "yup"

const RegisterSchema = Yup.object().shape({
    name:Yup.string().required().min(5,"Must be 5 chars or more"),
    title:Yup.string().required(),
    age:Yup.number().min(18,"Must be 18 years old"),
    address:Yup.string().required().min(5,"must be 5 chars or more ")
})

interface IFormikValue { 
    name:string
    age:number
    address:string
    title:string
}

export default function AddUser(){

    const initialValues = {
        name:"",
        title:"",
        age:0,
        address:""
    }

    // const [name, setName] = useState("")
    // const [title, setTitle] = useState("")
    // const [age, setAge] = useState(0)
    // const [address, setAddress] = useState("")

    const handleRegisterUser = async (values:IFormikValue) => {
        const registerUser = await axios.post('http://localhost:4500/users',{
            name:values.name,
            title:values.title,
            age:values.age,
            address:values.address
        })

        if(registerUser.status == 201){
            alert("berhasil register user ")
        } else {
            alert(" gagal register user")
        }

        return false
    }

    return (<div>
        <Formik 
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
                handleRegisterUser(values)
                alert(JSON.stringify(values))
            }}
        >
            {
                (props:FormikProps<IFormikValue>) => { 

                    const {  values, errors, touched, handleChange} = props
                    
                    return (<Form>
                        <div>
                            <label> Name </label><br/>
                            <Field type="text" name="name" value={values.name} onChange={handleChange} />
                        </div>
                        {touched.name && errors.name ? (<div style={{color:'red'}}>{errors.name}</div>) : null}
                        <div>
                            <label> Title </label><br/>
                            <select name="title" value={values.title} onChange={handleChange}>
                                <option value={""}>-- Select --</option>
                                <option>Front end developer</option>
                                <option>Back end developer</option>
                                <option>DevOps</option>
                                <option>Security Engineer</option>
                                <option>QA ( Quality Assurance ) </option>
                                <option>SEO Specialist</option>
                                <option>Architecture Principal</option>
                                <option>Mobile Developer</option>
                            </select>
                        </div>
                        {touched.title && errors.title ? (<div style={{color:'red'}}>{errors.title}</div>) : null}
                        <div>
                            <label> Age </label><br/>
                            <Field type="number" name="age" value={values.age} onChange={handleChange} />
                        </div>
                        {touched.age && errors.age ? (<div style={{color:'red'}}>{errors.age}</div>) : null}
                        <div>
                            <label> Address </label><br/>
                            <textarea name="address" rows={10} cols={40} onChange={handleChange}>{values.address}</textarea>
                        </div>
                        {touched.address && errors.address ? (<div style={{color:'red'}}>{errors.address}</div>) : null}
                        <button type="submit"> Submit </button>
                    </Form>)
                }
            }
        
        </Formik>
    </div>)
}