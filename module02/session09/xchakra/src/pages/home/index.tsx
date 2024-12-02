import { Box, Flex, Heading, Tabs, Link} from "@chakra-ui/react"
import style from "./Home.module.css"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"

export default function Home(){
    return (<div className={style['hero-section']}>
        <Flex className={style['subhero']} ml={'auto'} mr={'auto'} w={'90%'}>
            <Box w={'50%'}  minH={'420px'}>
                <Heading as={'h1'}> Your Social Media Rocks </Heading>

                <p> Lorem ipsum sit dolor amet </p>
            </Box>
            <Box w={'50%'} minH={'300px'}>
            <Tabs.Root defaultValue="Login">
                <Tabs.List>
                    <Tabs.Trigger value="Login" asChild>
                    <Link unstyled href="#login">
                        Login
                    </Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Register" asChild>
                    <Link unstyled href="#Register">
                        Register
                    </Link>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="Login">
                    <LoginForm /> 
                </Tabs.Content>
                <Tabs.Content value="Register">
                    <RegisterForm />
                </Tabs.Content>
            </Tabs.Root>
            </Box>
        </Flex>
        <Flex style={{ backgroundColor:"chocolate", height:"400px"}}>

        </Flex>
    </div>)
}