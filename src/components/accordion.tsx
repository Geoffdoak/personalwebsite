import React, {ReactElement, useReducer} from 'react'
import AccordionItem from './accordionItem'
import { AccordionItemProps } from './accordionItem'

type Action = {
    type: 'TOGGLE',
    payload: string | number
}

// Reducer only has one action for now. Possibly add close all action later.
// Opening an accordion item will close other accordion items
function reducer(state: AccordionState, action: Action): AccordionState {
    switch (action.type) {
        case 'TOGGLE': {
            const items = state.map(item => {
                return {
                    ...item,
                    isOpen: action.payload === item.id ? !item.isOpen : false
                }
            })
            
            return items
        }
    }
    return state
}


type AccordionState = {
    title: string,
    isOpen: boolean,
    id: number,
    children?: ReactElement | ReactElement[] | string
}[]

// Type check for child items incase they are not accordion items
type AccordionItem = ReactElement<AccordionItemProps>

export default function Accordion(props: {children: AccordionItem | AccordionItem[]}) {
    const cssClass = 'accordion'

    // Get the children their state can be managed here
    const children = React.Children.toArray(props.children) as AccordionItem[]
    
    // Map the children with correct intitial state
    const initialState = children.map((child, index) => {
        return {
            id: index,
            isOpen: false,
            title: child.props.title,
            children: child.props.children
        }
    })

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleToggle(id: number) {
        dispatch({ type: 'TOGGLE', payload: id})
    }
    
    return (
      <div className={cssClass}>
        {state.map(item =>(
            <AccordionItem
                title={item.title}
                id={item.id}
                key={item.id}
                isOpen={item.isOpen}
                handleToggle={handleToggle}
            >
                {item.children}
            </AccordionItem>
        ))}
      </div>
    )
}