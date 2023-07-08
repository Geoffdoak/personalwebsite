import { PropsWithChildren, useRef, useState, useEffect} from 'react'

type AccordionProps = {
    title: string,
    content: string,
    isOpen: boolean,
    handleToggle: (key: string) => void,
    id: string
}

export default function AccordionItem(props: PropsWithChildren<AccordionProps>) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const { title, content, isOpen, id } = props

    useEffect(()=>{
        let contentHeight = 0

        if (contentRef.current !== null) {
          contentHeight = contentRef.current.clientHeight
        }
    
        if (isOpen) {
          setWrapperHeight(contentHeight);
        } else {
            setWrapperHeight(0);
        }
    },[isOpen])

    function handleToggle(id:string) {
        props.handleToggle(id);
    }
    
    return (
      <div>
        <div className={isOpen ? 'open' : 'closed'} onClick={() => handleToggle(id)}>{title}</div>
        <div className='accordion__item' style={{height: wrapperHeight, overflow: 'hidden'}}>
          <div ref={contentRef}>
            {content}
          </div>
        </div>
      </div>
    )
}