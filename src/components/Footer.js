import { Twitter, GitHub, Facebook, Instagram } from '@mui/icons-material';

const style = {
    fontSize: 30,
}

export default function Footer() {
    return (
        <footer>
               <div className='footer-icons'>
                    <scan>
                        <Twitter style={style} className='icon'/>
                    </scan>
                    <scan>
                        <Facebook style={style} className='icon'/>
                    </scan>
                    <scan>
                        <Instagram style={style} className='icon'/>
                    </scan>
                    <scan>
                        <GitHub style={style} className='icon'/>
                    </scan>
                    
               </div>
        </footer>
    )
}