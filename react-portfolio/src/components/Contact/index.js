import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_zt2qnuh',
                'template_8beuhde',
                refForm.current,
                'wK-D45zeVPhoJTt1O'

            )

            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance oppertunities - especially ambitious or large projects.
                        However, if you have another request or question, don't hesitate to reach out to me using
                        the below form. Thanks!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name='subject' required />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Message'
                                        name='message'
                                        required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Mike Stepanik,
                    <br />
                    United States,
                    <br />
                    123 Cappa Lane, MA 01030 <br />
                    Springfield <br />
                    <span>mikestepanik@gmail.com</span>
                </div>
                <div className='map-wrap' >
                    <MapContainer center={[44.96366, 19.61045]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>
                            Sloba lives here, come over for a cup of coffeee. :)
                        </Popup>
                    </Marker>
                    
                    </MapContainer>

                </div>
            </div >
            <Loader type="pacman" />
        </>
    )
}

export default Contact