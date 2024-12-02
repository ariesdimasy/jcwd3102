import { Flex, Box, Container } from "@chakra-ui/react"
import style from "./Navbar.module.css"

export default function Navbar(){
    return (<nav style={{ position:"sticky", top:0, zIndex:100}}>
        <Box bgColor={'blue.500'} h={'50px'} lineHeight={'50px'} color={'white'}>
            <Container w={'90%'} mr={'auto'} ml={'auto'}>
                <Flex>
                    <Box w={'50%'}><a href="/" style={{ fontWeight:"bold"}}>XChakra</a></Box>
                    <Box className={style['menu-list']} w={'50%'} display={'flex'}>
                        <a href="/posts"> Posts </a>
                        <a href="/login"> Login </a>
                        <a href="/register"> Register </a>
                    </Box>
                </Flex>
            </Container>
        </Box>
    </nav>)
}