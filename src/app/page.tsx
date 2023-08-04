'use client'

// Components
import Title from '@/components/title'
import Bio from '@/components/bio'
import Accordion from '@/components/accordion'
import AccordionItem from '@/components/accordionItem'
import Timeline from '@/components/timeline'
import Info from '@/components/info'
import Links from '@/components/links'

// Content
import bioContent from '@/content/bioContent'
import timelineContent from '@/content/timelineContent'
import infoContent from '@/content/infoContent'
import educationContent from '@/content/educationContent'
import projectsContent from '@/content/projectsContent'
import linkContent from '@/content/linksContent'



export default function Home() {
  return (
    // Arrange Content here
    <div id='content'>
      <Title
        heading='Geoffrey Doak'
        subHeading='Mar-Tech / Front-End Developer'
      />
      <Bio
        content={bioContent.content}
      />
      <Accordion>
        <AccordionItem title='Experience'>
          <Timeline events={timelineContent} />
        </AccordionItem>
        <AccordionItem title='Skills'>
          <Info items={infoContent} />
        </AccordionItem>
        <AccordionItem title='Education'>
          <Info items={educationContent} />
        </AccordionItem>
        <AccordionItem title='Projects'>
          <Links items={projectsContent} />
        </AccordionItem>
        <AccordionItem title='Links'>
          <Links items={linkContent} />
        </AccordionItem>
      </Accordion>
    </div>
  )
}
