import React from 'react'
import './stats.css'
import {Link} from 'react-router-dom'
function Stats() {
    return (
        <section className='stats'>
            <div className='container'>
                <h1 className="heading">Azure Resource Manager templates are JavaScript Object Notation (JSON) files that define the infrastructure and configuration for your project.</h1>
                <div className='grid-container'>
                    <div className="">
                        <i className="fas fa-server fa-3x"></i>
                        <h1>10,349,405</h1>
                        <h3 className="text-secondary">Deployments</h3>
                    </div>
                    <div className="">
                        <i className="fas fa-upload fa-3x"></i>
                        <h1>10,349,405</h1>
                        <h3>Uploads</h3>
                    </div>
                    <div className="">
                        <i className="fas fa-project-diagram fa-3x">
                        </i>
                        <h1>2,343,265</h1>
                        <h3>Projects</h3>

                    </div>
                </div>

                <div className="clicontainer">

                    <img src="/cli.png" alt="BigCo Inc. logo" />
                    <div className="card">
                        <h2>Easy to use cross-platform</h2>
                    </div>

                    <div className="card">
                        <h1>Deploy in seconds</h1>
                    </div>


                </div>


              <div className="advertgridSection">

              <div className="">
                  <h1>Extreme Cloud hosting</h1>
                  <p>The cloud hosting like you have never seen before Fast, efficient and Scalable</p>

                  <Link><button className="btn">Read More</button></Link>
              </div>

              <div className="">
                 <img src="/cloud.png" alt="nwnmw"/>
              </div>
    
              </div>


              {/**Supported Languages */}


              <div className="SupportedLanguages">

<h1>Supported Languages </h1>


<div className="supportedLanguagesgrid">

    <div className = "card-container card">
        <h1>Nodejs</h1>
        <img src="/server.png" alt="nwnmw"/>
    </div>
    <div className = "card-container card">
    <img src="/" alt="nwnmw"/>
    </div>
    <div className = "card-container card">
    <img src="/" alt="nwnmw"/>
    </div>
    <div className = "card-container card">
    <img src="/" alt="nwnmw"/>
    </div>
    <div className = "card-container card">
    <img src="/" alt="nwnmw"/>
    </div>
</div>



              </div>

            </div>

        </section>

    )
}

export default Stats
