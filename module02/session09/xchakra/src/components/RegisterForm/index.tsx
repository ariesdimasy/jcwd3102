import { Button, Card, Input } from "@chakra-ui/react"
import { Field } from "./../../components/ui/field"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const RegisterSchema =  yup.object().shape({
    name: yup.string().required(),
    email:yup.string().required().email(),
    password:yup.string().required()
})

export default function RegisterForm(){

    const navigate  = useNavigate()

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:RegisterSchema,
        onSubmit(values:any) {
            handleSubmit(values)

            return false
        },
    })

    const handleSubmit = async (values:any) => {
        const {name, email, password} = values

        try {
            const registerProcess = await axios.post(`http://localhost:4550/users/`,{
                name:name,
                email:email,
                password :password 
                
            })
            const res = registerProcess.data

            if(res){
                
                navigate("/login")
            } else {
                alert("email or password invalid")
            }
           
        } catch(err ){
            alert(JSON.stringify(err))
        }
    }

    return (<div>
         <Card.Root p={'10px'} marginTop={'20px'}>
            <Card.Body>
                <form method="post" onSubmit={formik.handleSubmit}>
                    <Field label="Name" required 
                        helperText="Plase input your name"
                        errorText={formik.errors.name}
                        >
                        <Input type="name" name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </Field>
                    <Field label="Email" required 
                    errorText={formik.errors.email}
                    helperText="We'll never share your email.">
                        <Input type="email" name="email" value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </Field>
                    <Field label="Password" required 
                    helperText="We'll never share your password."
                    errorText={formik.errors.password}
                    >
                        <Input type="password" name="password" 
                            value={formik.values.password} onChange={formik.handleChange} />
                    </Field>
                    <Button type="submit" fontWeight={'bold'} bgColor={"blue.500"} color={'white'} p={'0 20px'} >Log In</Button>
                </form>
            </Card.Body>
        </Card.Root>
    </div>)
}