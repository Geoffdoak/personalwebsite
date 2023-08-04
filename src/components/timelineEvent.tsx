import { PropsWithChildren } from "react"

type TimelineItemProps = {
    startMonth: string,
    startYear: string,
    endMonth: string,
    endYear: string,
    description: string,
    location: string
}

export default function TimelineEvent(props: PropsWithChildren<TimelineItemProps>) {
    const {startMonth, startYear, endMonth, endYear, description, location } = props
    const cssClass = 'timeline-event'

    return (
        <li className={cssClass}>
            <div className={cssClass + '__description-wrapper'}>
                <div className={cssClass + '__dates'}>
                    <div className={cssClass + '__date' + ' ' + cssClass + '__date--start'}>
                        <div className={cssClass + '__month' + ' ' + cssClass + '__month--start'}>
                            {startMonth}
                        </div>
                        <div className={cssClass + '__year' + ' ' + cssClass + '__year--start'}>
                            {startYear}
                        </div>
                    </div>
                    <div className={cssClass + '__date' + ' ' + cssClass + '__date--end'}>
                        <div className={cssClass + '__month' + ' ' + cssClass + '__month--end'}>
                            {endMonth}
                        </div>
                        <div className={cssClass + '__year' + ' ' + cssClass + '__year--end'}>
                            {endYear}
                        </div>
                    </div>
                </div>
                <h3 className={cssClass + '__description'}>{description}</h3>
                <h3 className={cssClass + '__location'}>{location}</h3>
            </div>
            <ul className={cssClass + '__content'}>
                {props.children}
            </ul>
        </li>
    )
}