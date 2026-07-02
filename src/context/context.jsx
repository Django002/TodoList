import { createContext, useState, useEffect,useReducer } from "react";
import { items,tools } from "./reduc";



// eslint-disable-next-line react-refresh/only-export-components
export const TodoContex = createContext();

export function TodoProvider({children}) {

    const [todos, dispatch] = useReducer(tools, items());
    const [modalvisibl, setModalvisibl] = useState(false);
    const [serchinput, setSeacrinput] = useState('')

    function add(text) {
        dispatch({type:'ADD', text})
        setModalvisibl(!modalvisibl)
    }

    function delet(id) {
        dispatch({type:'DELETE', id})
    }

    function chanfer(id) {
        dispatch({type:'COMPLETE', id})
    }

    const gettheme = () => {
        const get = localStorage.getItem('theme')
        if (get === 'light' || get === 'dark') {
        return get;
        }
        return 'light';
    }

    const toglemodal = () => {
        setModalvisibl(!modalvisibl)
        console.log(modalvisibl)
    }

    useEffect(() => {localStorage.setItem('titel',JSON.stringify(todos))},[todos])
    
    const [filter, setFilter] = useState('All')
    const [theme, setTheme] = useState(gettheme)

    const filtertitel = todos.filter( todo => {
        if (filter === 'Complete') return todo.completed
        if (filter === 'Incomplete') return !todo.completed
        if (serchinput.trim() !== '') return todo.text.toLowerCase().includes(serchinput.toLowerCase())
        return todo    
    })

    function TogleTheme() {
        setTheme(theme => theme === 'light' ? 'dark' : 'light')
        console.log(theme)
    }


    useEffect(() => {
        localStorage.setItem('theme',theme)
        document.documentElement.setAttribute('data-theme', theme)
    },[theme])
    

    return(
        <TodoContex.Provider value={{filter,setFilter,TogleTheme,theme,todos,add,delet,chanfer,toglemodal,modalvisibl,filtertitel,setSeacrinput,serchinput}}>
            {children}
        </TodoContex.Provider>
    ) 
}