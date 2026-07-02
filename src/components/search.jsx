import imgreascr from '/Vector(1).svg'
import search2 from '/search2.svg'
import '../components/search.css'
import Filter from './buttons/filter';
import Togletheme from './buttons/togletheme';
import { useContext,} from 'react';
import { TodoContex } from '../context/context';

function Serch() {
    const {theme,setSeacrinput,serchinput} = useContext(TodoContex)
   

   
    return(
        <>
            <h1 className='zagalovoc'>ToDo LisT</h1>
            <div className='bloc'>
                <div className="bloc_seacr">
                    <input value={serchinput} onChange={e => setSeacrinput(e.target.value)}  className='input_seacrh' type="text" placeholder="Seacrch note..."/>
                    <button className="button_search"><img src={theme === 'light' ? imgreascr : search2} alt="" srcSet="" /></button>
                </div>
                <div className='bloc_buttons'>
                    <Filter/>
                    <Togletheme/>
                </div>
                
            </div>
        </>
    )
    
}

export default Serch;