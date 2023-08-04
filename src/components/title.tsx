type TitleProps = {
    heading: string,
    subHeading: string
}

export default function Title(props: TitleProps) {
    const { heading, subHeading} = props
    const cssClass = 'page-title'

    return (
        <div className={cssClass}>
            <h1 className={cssClass + '__heading'}>{heading}</h1>
            <h2 className={cssClass + '__sub-heading'}>{subHeading}</h2>
        </div>
    )
}