import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const nav = useNavigate()
    const goToMain = () => {
        console.log('go to Main Function');
        nav('/')
    }


    return (
        <div>
            AboutPage

            <hr/>
            <button onClick={goToMain}> 메인페이지 </button>

        </div>

    )
}

export default AboutPage