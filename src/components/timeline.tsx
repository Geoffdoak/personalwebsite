import { PropsWithChildren } from "react"
import TimelineEvent from "./timelineEvent"
import TimelineItem from "./timelineItem"

type TimelineProps = {
    events: {
        startMonth: string,
        startYear: string,
        endMonth: string,
        endYear: string,
        description: string,
        location: string,
        items: string[]
    }[]
}

export default function Timeline(props: PropsWithChildren<TimelineProps>) {
    const { events } = props
    const cssClass = 'timeline'

    return (
        <ul className={cssClass}>
            {events.map((event, index) => 
                <TimelineEvent
                    startMonth={event.startMonth}
                    startYear={event.startYear}
                    endMonth={event.endMonth}
                    endYear={event.endYear}
                    description={event.description}
                    location={event.location}
                    key={index}
                >
                    {event.items.map((item, index) =>
                        <TimelineItem key={index}>
                            {item}
                        </TimelineItem>
                    )}
                </TimelineEvent>
            )}
        </ul>
    )
}