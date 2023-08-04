import { PropsWithChildren } from "react"

type InfoItemProps = {
    title: string
}

export default function InfoItem(props: PropsWithChildren<InfoItemProps>) {
    const { title} = props
    const cssClass = 'info-item'

    return (
        <li className={cssClass}>
            <h3 className={cssClass + '__title'}>{title}</h3>
            <p className={cssClass + '__paragraph'}>{props.children}</p>
        </li>
    )
}