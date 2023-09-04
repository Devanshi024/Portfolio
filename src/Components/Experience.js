import React from 'react';
import { MdHttps } from "react-icons/md";
// import WorkIcon from '../Assets/workicon.jpg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>EXPERIENCE</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%", marginBottom: '20px' }}></hr>
      <br />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(4, 110, 110)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(4, 110, 110)' }}
          date="APR,2023 - JUN,2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdHttps />}
        >
          <h3 className="vertical-timeline-element-title">NityaJal</h3>
          <h4 className="vertical-timeline-element-subtitle">Website Developer</h4>
          <p>
            Nityajal is startup based on watering plants from remote locations through your smartphone via android application. Website is developed using ReactJS, HTML, CSS and Bootstrap.
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(4, 110, 110)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(4, 110, 110)' }}
          date="APR,2023 - JUN,2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdHttps />}
        >
          <h3 className="vertical-timeline-element-title">NityaJal</h3>
          <h4 className="vertical-timeline-element-subtitle">Website Developer</h4>
          <p>
            Nityajal is startup based on watering plants from remote locations through your smartphone via android application. Website is developed using ReactJS, HTML, CSS and Bootstrap.
          </p>
        </VerticalTimelineElement> */}

      </VerticalTimeline>

    </div>
  )
}


