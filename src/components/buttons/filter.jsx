import '../buttons/filterstyle.css'
import strelca from '/chevron-top.svg'
import { useState, useContext } from 'react';
import { TodoContex } from '../../context/context';



function Filter() {
    const [open, setOpen] = useState(false)
    const {filter,setFilter} = useContext(TodoContex)

    const openspisoc = () => {
        setOpen(!open)
    }

    function chanchefilter(params) {
        setFilter(params)
        setOpen(!open)
    }

    
    return(
        <>
            <div className='button_bloc'>
                <button onClick={() => openspisoc()} className='buttonfilter'>{filter}<img className={`strelca ${open ? 'open' : '' }`} src={strelca} alt="" /></button>
                <ul className={`spisoc_filter ${open ? 'visibl' : ''}`}>
                    <li onClick={() => chanchefilter('ALL')}>ALL</li>
                    <li onClick={() => chanchefilter('Complete')}>Complete</li>
                    <li onClick={() => chanchefilter('Incomplete')}>Incomplete</li>
                </ul>
            </div>
        </>
    )
}

export default Filter;