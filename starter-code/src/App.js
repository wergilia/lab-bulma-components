import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        
                        <p className="control">
                            <a className="bd-tw-button button" href="https://bulma.io/">
                                
                                <span>Login</span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary" href="https://bulma.io/">
                                
                                <span>Signup</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
</nav>


            )
        }

// const Item = (props) => {
//     return(
//     <div> 
//         <img src={props.url}/>
//         <h3>{props.title}</h3>
//         <p>{props.subtitle}</p>
//     </div>)
// }

export const App = () => (
    <div>
        <Navbar />




    </div>
)
