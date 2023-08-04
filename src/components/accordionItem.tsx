import { PropsWithChildren, useRef, useState, useEffect, ReactElement} from 'react'

// Item props exported for type checking by parent component
export type AccordionItemProps = {
  title: string,
  isOpen?: boolean,
  handleToggle?: (key: number) => void,
  id?: number
  children?: ReactElement | ReactElement[] | string
}

// Accordion will change it's content wrapper height to match it's content height
// when open. CSS will handle the animation. Opened accordion items will smooth
// scroll into view
export default function AccordionItem(props: PropsWithChildren<AccordionItemProps>) {
    const { title } = props
    const cssClass = 'accordion-item'

    // Refs for animation purposes
    const itemRef = useRef<HTMLDivElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const [wrapperHeight, setWrapperHeight] = useState(0);
    const isOpen = props.isOpen || false
    const id = props.id || 0

    // Smooth scroll function. This function removes itself from the
    // event listener after running
    function scrollTo() {
        const offset = itemRef.current ? itemRef.current.offsetTop : 0
        const totalOffset = offset - 10
        window.scrollTo({ behavior: 'smooth', top: totalOffset})
        wrapperRef.current?.removeEventListener('transitionend', scrollTo)
    }

    // Changes the content wrapper height when opened/closed. Also attaches
    // an event listener for when the animation has completed that triggers
    // the smooth scroll of the accordion item into view
    useEffect(()=>{
        let contentHeight = 0

        // Calculation for content-height that takes into account box-sizing
        if (contentRef.current !== null) {
            const contentEl = contentRef.current
            const computedStyle = window.getComputedStyle(contentEl)
            const marginTop = parseInt(computedStyle.getPropertyValue('margin-top'))
            const marginBottom = parseInt(computedStyle.getPropertyValue('margin-bottom'))
            const offsetHeight = contentEl.offsetHeight
            contentHeight = offsetHeight + marginTop + marginBottom
        }
    
        if (isOpen) {
            wrapperRef.current?.addEventListener('transitionend', scrollTo)
            setWrapperHeight(contentHeight)
        } else {
            setWrapperHeight(0);
        }
    },[isOpen])

    function handleToggle(id:number) {
        if (props.handleToggle) {
            props.handleToggle(id);
        }
    }

    // Save writing a bunch of CSS BEM classes
    function openClass(isOpen:boolean, elName:string) {
      const elClass = cssClass + elName
      const openClass = elClass + ' ' + elClass + '--open'
      const closeClass = elClass + ' ' + elClass + '--closed'
      return isOpen ? openClass : closeClass
    }
    
    return (
      <div className={openClass(isOpen,'')} ref={itemRef}>
        <div
          className={openClass(isOpen,'__title-wrapper')}
          onClick={() => handleToggle(id)}
        >
          <div className={cssClass + '__title'}>
            {title}
          </div>
          <div className={openClass(isOpen,'__toggle')}>
            <img src='/icons/plus.svg'></img>
          </div>
        </div>
        <div
          ref={wrapperRef}
          className={cssClass + '__content-wrapper'}
          style={{height: wrapperHeight, overflow: 'hidden'}}
        >
          <div
            className={cssClass + '__content'}
            ref={contentRef}
          >
            {props.children}
          </div>
        </div>
      </div>
    )
}