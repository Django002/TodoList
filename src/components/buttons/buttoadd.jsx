import { TodoContex } from '../../context/context'
import '../buttons/addstyle.css'
import { useContext } from 'react'

export default function Add() {
    const {toglemodal} = useContext(TodoContex)

    return(
        <>
            <div className='addbloc'>
                <button onClick={toglemodal} className='add'>+</button>
            </div>
            
            
        </>
    )
}