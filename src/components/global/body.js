import './body.css'
import Math from '../sections/math.js'
import Coding from '../sections/coding.js'
import Test from '../sections/test.js'
import Crypto from '../sections/crypto.js'

export default function Body () { return (
    <div id="body">
        <table>
            <tr>
                <td><Math/></td>
                <td><Coding/></td>
                <td><Test/></td>
                <td><Crypto/></td>
            </tr>
        </table>
    </div>
)}