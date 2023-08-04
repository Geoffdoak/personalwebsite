import { PropsWithChildren } from "react"

type LinkProps = {
    title: string,
    url: string
}

export default function Link(props: PropsWithChildren<LinkProps>) {
    const { title, url} = props
    const cssClass = 'link'
    const hasChildrenClass = props.children ? ` ${cssClass}__anchor--has-children` : '';

    return (
        <li className={cssClass}>
            <a href={url} target="_blank" className={cssClass + '__anchor' + hasChildrenClass}>
                <div className={cssClass + '__title-wrapper'}>
                    <h3 className={cssClass + '__title'}>{title}</h3>
                    <div className={cssClass + '__arrow'}>
                        <img src='/icons/arrow.svg' />
                    </div>
                </div>
                {props.children ? <p className={cssClass + '__paragraph'}>{props.children}</p> : ''}
            </a>
        </li>
    )
}