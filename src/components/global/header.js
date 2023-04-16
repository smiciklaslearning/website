import './header.css'

export default function Header () { return (
        <div id="header">
            <table>
                <tr>
                    <th id="blink">(201) 736 - 1268</th>
                    <th>Calendly</th>
                    <th>LinkedIn</th>
                    <th>YouTube</th>
                    <th>Facebook</th>
                    <th>Github</th>
                </tr>
                <tr>
                    <td><a href="/"><img src="logolettering.jpg" style={{ width: 200, height: 70 }} alt=""></img></a></td>
                    <td><a href="https://calendly.com/smiciklaslearning"><img id="pulse"src="calendly.jpg" style={{ width: 70, height: 70 }} alt=""></img></a></td>
                    <td><a href="https://www.linkedin.com/in/andrew-smiciklas-42a4b3272/"><img src="linkedin.jpg" style={{ width: 70, height: 70 }} alt=""></img></a></td>
                    <td><a href="https://www.youtube.com/@smiciklaslearning5336"><img src="youtube.png" style={{ width: 70, height: 70 }} alt=""></img></a></td>
                    <td><a href="https://www.facebook.com/smiciklaslearning"><img src="facebook.png" style={{ width: 70, height: 70 }} alt=""></img></a></td>
                    <td><a href="https://github.com/andr00js"><img src="github.jpg" style={{ width: 70, height: 70 }} alt=""></img></a></td>
                </tr>
                <tr>
                    <td>email@smiciklaslearning.com</td>
                    <td>First Lesson Free</td>
                    <td>Experience/Resume</td>
                    <td>Videos</td>
                    <td>Past Reviews</td>
                    <td>Projects</td>
                </tr>        
            </table>
        </div>
    )}