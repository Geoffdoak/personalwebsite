import InfoItem from "./infoItem";

type InfoProps = {
    items: {
        title: string,
        content: string
    }[]
}

export default function Info(props: InfoProps) {
    const { items } = props
    const cssClass = 'info'

    return (
        <ul className={cssClass}>
            {items.map((item, index) => 
                <InfoItem
                    title = {item.title}
                    key={index}
                >
                    {item.content}
                </InfoItem>
            )}
        </ul>
    )
}