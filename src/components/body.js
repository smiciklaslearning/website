import { InlineWidget } from "react-calendly";

export default function Body () { return (
<div>
    <div id="intro">
        <h2>
            Welcome
        </h2>
    </div>
    <div id="half">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/C-Pkp7aJrfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div id="half">
        <InlineWidget url="https://calendly.com/smiciklaslearning" />   
    </div>
</div>
)}