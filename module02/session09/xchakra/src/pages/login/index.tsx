import LoginForm from "@/components/LoginForm"
import { Container, Heading } from "@chakra-ui/react"

export default function Login(){
    return (<div style={{ height:'100vh - 100px'}} >
        <Container w={'50%'} mr={'auto'} ml={'auto'} style={{ verticalAlign:"center"}}>
            <Heading mb={'20px'} as={'h1'} textAlign={'center'}> Login </Heading>
            <LoginForm />
        </Container>
    </div>)
}