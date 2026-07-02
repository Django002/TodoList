import '../componenttasks/tasksstyle.css'
import pusto from '/pusto.svg'
import pusto2 from '/pusro2.svg'
import { useContext } from 'react';
import { TodoContex } from '../../context/context';

function Tasks() {
    const {theme,filtertitel,delet,chanfer} = useContext(TodoContex)
    return(
        <>
           { filtertitel.length === 0 ? ( <div className='bloc_spisoc'>
                <img src={theme === 'light' ? pusto : pusto2} alt="" srcSet="" />
            </div>) : (<ul className='bloc_titel'>
                      { filtertitel.map(item => 
                        (<div className='bloctitel' onClick={() => chanfer(item.id)}> 
                            <div className={`chek ${item.completed ? 'chekdone' : ''}`}></div>
                            <li className={`titel ${item.completed ? 'titeldone' : ''}`} key={item.id}>{item.text}</li> 
                            <div className='bloc_titelbuttons'>
                                <button className='buttondoing rename'><img src='' alt="" srcset="" /></button>
                                <button onClick={() => delet(item.id)} className='buttondoing delet'><img src='' alt="" srcset="" /></button>
                            </div>
                        </div>))}
                    </ul>)  }
        </>
    )
}

export default Tasks;