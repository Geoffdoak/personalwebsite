import { randomUUID } from 'crypto'
import React, { PropsWithChildren, useRef, useState, useReducer} from 'react'
import AccordionItem from './accordionItem'

function reducer(state: AccordionState, action: Action): AccordionState {
    switch (action.type) {
        case 'TOGGLE': {
            const items = state.items.map(item => {
                let isOpen = item.isOpen

                if (action.payload === item.id) {
                    isOpen = !isOpen
                } else {
                    isOpen = false
                }
                
                return {
                    ...item,
                    isOpen: isOpen
                }
            })
            
            return { ...state, items }
        }
    }

    return state
}

type Action = {
    type: string,
    payload: string
}

type AccordionProps = {
    items: {
        title: string,
        content: string
    }[]
}

type AccordionState = {
    items: {
        title: string,
        content: string,
        isOpen: boolean,
        id: string
    }[]
}

export default function Accordion(props: PropsWithChildren<AccordionProps>) {
    console.log('children', React.Children.toArray(props.children))
    const initialState = {
        items: props.items.map(item => {
            const id = crypto.randomUUID()

            return {
                id,
                isOpen: false,
                ...item
            }
        })
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleToggle(id: string) {
        dispatch({ type: 'TOGGLE', payload: id})
    }
    
    return (
      <div>
        {state.items.map(item => 
            <AccordionItem
                title={item.title}
                content={item.content}
                isOpen={item.isOpen}
                handleToggle={(id)=>handleToggle(id)}
                id={item.id}
                key={item.id}
             />
        )}
        {props.children}
      </div>
    )
}