import Link from "./link"

type LinksProps = {
    items: {
        title: string,
        url: string,
        content?: string
    }[]
}

export default function Links(props: LinksProps) {
    const { items } = props
    const cssClass = 'links'

    return (
        <ul className={cssClass}>
            {items.map((item, index) => 
                <Link
                    title={item.title}
                    url={item.url}
                    key={index}
                >
                    {item.content ? item.content : null}
                </Link>
            )}
        </ul>
    )
}