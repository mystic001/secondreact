import React from 'react'
import "./Home.css"
import Stats from './Stats'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <section className="showcase">

                <div className="container-grid">

                    <div className="showCaseText">

                        <h1>Easier deployment</h1>
                        <p>Application Deployment (also referred to as Software Deployment) is the process of installing, configuring, and enabling a specific
                            application or set of applications,
                            usually through an application manager
                            (app manager) or software management
                            system, to a specific URL on a server.

                            <Link to="/sign-up">

                                <button
                                    className="btn btnoutline">
                                    Read More
                                </button>
                            </Link></p>

                    </div>


                    <div className="showcase-form card">

                        <h2 className = "demo">Request Demo</h2>

                        <form action="/action_page.php">

                            <div className="form-control">
                                <input className="name" type="text" placeholder="name" required />
                            </div>

                            <div className="form-control">
                                <input className="companyname" type="text" placeholder="Company name" />
                            </div>

                            <div className="form-control">
                                <input className="myname" type="search" placeholder="name" />
                            </div>

                            <div className="form-control">
                                <input className="email" type="email" placeholder="Email" required />
                            </div>
                            <Link>
                                <button className="btn">Send</button>
                            </Link>
                        </form>

                    </div>

                </div>
            </section>
            <Stats />
        </>

    )
}

export default Home
