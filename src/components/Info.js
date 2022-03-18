import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

export default function Information() {
    return (
       <div className="info-container">
           <h3>Achara Obinna V</h3>
           <h6>Fullstack Developer</h6>
           <p>obinna.achara.com</p>
           <div className='contact'>
                <a className="">
                    <FontAwesomeIcon icon={faMessage} />
                    <p>Email</p>
                </a>
                <a>
                    <div>
                        <p>LinkedIn</p>
                    </div>
                </a>
           </div>
           <div className="email">
           
               Email
           </div>
       </div>
    )
}