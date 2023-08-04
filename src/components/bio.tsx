type BioProps = {
    content: string | string[]
}

// Simple component outputs string or array of strings as
// paragraph elements
export default function Bio(props: BioProps) {
    const { content} = props
    const cssClass = 'bio'

    let contentArray:string[] = []

    if (Array.isArray(content)) {
        contentArray = content
    } else {
        contentArray.push(content)
    }

    return (
        <div className={cssClass}>
            {contentArray.map((content, index) => 
                <p
                    key={index}
                    className={cssClass + '__paragraph'}
                >
                    {content}
                </p>
            )}
        </div>
    )
}