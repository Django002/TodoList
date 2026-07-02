import '../modal/modalstyle.css'
import { useContext, useState } from 'react'
import { TodoContex } from '../../context/context'

function Modal() {
    const {toglemodal,modalvisibl,add} = useContext(TodoContex);
    const [value,setValu] = useState('')
    
    function proverca(value) {
        if (value !== '') {
            add(value)
            setValu('')
        }
        else{return alert('Пользователь ничего не ввел')}
        
    }

    return(
        <>
            <div className={`bugraundbloc ${modalvisibl ? 'visibl' : ''}`}>
                <div className="blocmodal">
                    <h2>NEW NOTE</h2>
                    <input value={value} onChange={e => setValu(e.target.value)} className='addinput' type="text" placeholder="Input your note..."/>
                    <div className="modalbuttons">
                        <button onClick={toglemodal} className="modalbutton cansel">CANSEL</button>
                        <button onClick={() => proverca(value)} className="modalbutton ad">ADD</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal