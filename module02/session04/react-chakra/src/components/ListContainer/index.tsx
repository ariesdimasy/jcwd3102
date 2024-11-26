import { 
    Heading, 
    Input, 
    Box,
    Group, 
    InputAddon,
   
    Text

} from "@chakra-ui/react"
import style from "./ListContainer.module.css"
import { useState } from "react"

const ListContainer = () => {

    const [todo, setTodo] = useState<string>("") // input 
    const [todoList, setTodoList] = useState([
        {title:"Membuat Content Writer untuk Astra Daihatsu ", done:false},
        {title:"Membuat Video Tiktok menggunakan Capcut untuk Iklan Purwadhika Digital Marketing", done:true},
        {title:"Membuat Content Calendar bulan desember 2024 untuk Astra Daihatsu Palembang", done:false},
        {title:"Mengajar Murid JCWD-3102 Module 02 Session 02 React Intro ", done:true}
    ])

    return (<div className={style['list-container']}>
        <Heading as={"h1"} size={"3xl"} color={'white'} margin={'60px 0 20px 0'}>TODO </Heading>
        <Group style={{width:"100%", marginBottom:'20px'}}>
            <InputAddon style={{width:"5%"}}> @ </InputAddon>
            <Input 
                p={5}
                type='text' 
                placeholder='Create a New Todo' 
                bgColor={'white'}
                value={todo} // statename di taruh kedalam value
                onChange={(e) => {
                    setTodo(e.target.value)
                    // todo = e.target.value
                }}
                
                onKeyDown={(e) => {
                    if(e.key == "Enter"){
                        todoList.unshift({
                            title:todo, // todo is state name
                            done: false 
                        })
                        setTodoList(todoList) // method untuk todolist 
                        setTodo("") // method untuk mengubah todo
                    }
                }}
            />
        </Group>
        {todoList.map((item:{title:string, done:boolean}, index:number) => 
            (
            <>
            <Box key={index} 
                bg='white' 
                w='100%' p={4} 
                color='#494C6B' 
                borderBottomColor={'white'}
            >
               
               <Text margin={'0  0 0 20px'}> 
                <input type="checkbox" checked={item.done} /> 
                {item.title}
               </Text>    
            </Box>
        
            </>)
        )}
        
    </div>)
}

export default ListContainer