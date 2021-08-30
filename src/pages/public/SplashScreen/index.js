import React from 'react'
const splashscreen = () =>{
    return(
        <div className='bg-purple'>
            <section className="container splashscreen">
                <img src={process.env.PUBLIC_URL + '/images/i_splash.svg'}  className="rounded mx-auto d-block" alt="..." />
            </section>
        </div>
    )
}

export default splashscreen