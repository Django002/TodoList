import './stylethe.css'
import sun from '/sun.svg'
import moon from '/moon.svg'
import { useContext } from 'react';
import { TodoContex } from '../../context/context';


function Togletheme() {
    const {TogleTheme,theme} = useContext(TodoContex)


    return (
        <>
            <button onClick={() => TogleTheme()} className='togle'><img src={theme === 'light' ? moon: sun} alt="" /></button>
        </>
    )
    
}

export default Togletheme;