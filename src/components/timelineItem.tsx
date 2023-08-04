import { PropsWithChildren } from "react"

export default function TimelineItem(props: PropsWithChildren) {
    const cssClass = 'timeline-item'
    return (
        <li className={cssClass}>
            {props.children}
        </li>
    )
}