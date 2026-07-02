export const items = () => {
    const getdate = localStorage.getItem('titel')
    return getdate ? JSON.parse(getdate) : []
}

export function tools(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state,{id:Date.now(), text:action.text, completed:false}];

        case 'DELETE':
            return state.filter(item => item.id !== action.id)
        
        case 'COMPLETE':
            return state.map(item => item.id === action.id ? {...item, completed:!item.completed}:item)
    
        default:
           return state;
    }
}