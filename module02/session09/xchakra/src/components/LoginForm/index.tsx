
import { Button, Card, Input } from "@chakra-ui/react"
import { Field } from "../ui/field"
import * as yup from "yup"
import { useFormik } from "formik"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginSchema = yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required()
})

interface InitialValues {
    email:string,
    password:string
}

export default function LoginForm(){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:LoginSchema,
        onSubmit(values:any) {
            handleLogin(values)

            return false
        },
    })

    const handleLogin = async (values:InitialValues) => {
        const { email, password} = values

        try {
            const loginProcess = await axios.get(`http://localhost:4550/users/?email=${email}&password=${password}`)
            const res = loginProcess.data[0]

            if(res){
                localStorage.setItem("loginData", JSON.stringify({
                    id:res.id,
                    name:res.name,
                    email:res.email,
                }))
                navigate("/posts")
            } else {
                alert("email or password invalid")
            }
           
        } catch(err ){
            alert(JSON.stringify(err))
        }
    }
 
    return (<div style={{ marginTop:'20px'}}>
        <Card.Root p={'10px'}>
            <Card.Body>
                <form method="post" onSubmit={formik.handleSubmit}>
                    <Field label="Email" required 
                        helperText="We'll never share your email."
                        errorText={formik.errors.email}
                    >
                        <Input 
                            type="email"
                            id="email"
                            name="email" 
                            value={formik.values.email} 
                            onChange={formik.handleChange}  
                        />
                    </Field>
                    <Field label="Password" required 
                        helperText="We'll never share your password."
                        errorText={formik.errors.password}
                    >
                        <Input 
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password} 
                            onChange={formik.handleChange} 
                        />
                    </Field>
                    <Button type="submit" fontWeight={'bold'} bgColor={"blue.500"} color={'white'} p={'0 20px'} >Log In</Button>
                </form>
            </Card.Body>
        </Card.Root>
    </div>)
}