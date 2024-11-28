import { useState, createContext, useContext } from "react"
import style from "./Context.module.css"

// interface IProps { 
//     theme:string
// }

const ThemeContext = createContext("")

export default function Context(){

    // theme = "dark"
    const [theme, setTheme] = useState<string>("light")

    return (
    <ThemeContext.Provider value={theme}>    
        <div className={style[theme]}>
            <Form  />
            <button onClick={() => {
                if(theme == "light"){
                    setTheme("dark")
                } else {
                    setTheme("light")
                }
               
            }}>
                Set Theme to {theme == "dark" ? "light" : "dark"} 
            </button>
        </div>
    </ThemeContext.Provider>)
}

function Form(){
    return(<form>
        <div>
            <input type="text" />
            <CustomButton  />
        </div>
    </form>)
}

function CustomButton(){

    const theme = useContext(ThemeContext)
                                    {/* 
                                        props.theme = "light" 
                                        style["light"]
                                    */}
    return (<button type="submit" className={style[theme]}>
        Custom Button
    </button>)
}