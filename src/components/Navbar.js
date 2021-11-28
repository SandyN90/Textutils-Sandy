import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Sandy-TextUtils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/textarea" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Textarea
                </Link>
                </li> */}
                <li className="nav-item"><Link className="nav-link" to="textarea">Textarea</Link></li>
                <li className="nav-item">
                {/* <a className="nav-link disabled">Disabled</a> */}
                </li>
            </ul>
            <form>
                <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} Mode`}</label>
                </div>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}

