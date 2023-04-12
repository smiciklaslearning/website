import { InlineWidget } from "react-calendly";

export default function Body () { return (
<div>
    <a href="/"><img src="logolettering.jpg" alt=""></img></a>
    <div id="book">
        <InlineWidget url="https://calendly.com/smiciklaslearning" styles={{height: '800px'}} pageSettings={{hideGdprBanner: true}}/>   
    </div>
    <div id="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/C-Pkp7aJrfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>
)
}