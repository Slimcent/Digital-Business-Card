import { Email, Room } from "@mui/icons-material"
import Obi from '../images/Obi.jpg';

export default function Information() {
    return (
       <div className="info-container">
           <div className="imageContainer">
                
           </div>
           <img src={Obi} className="obi"/>
           <h3>Achara Obinna V</h3>
           <h6>Backend Developer</h6>
           <p>obinna.achara.com</p>
           <div className='contact'>
                <a>
                    <div className="email">
                        <scan>
                            <Email />
                        </scan>
                        <scan>
                            <p>Email</p>
                        </scan>
                    </div>
                </a>
                <a>
                    <div className="linkedIn">
                        <scan>
                            <Room />
                        </scan>
                        <scan>
                            <p>LinkedIn</p>
                        </scan>
                    </div>
                </a>
           </div>
           {/* <div className="email">
               Email
           </div> */}
       </div>
    )
}