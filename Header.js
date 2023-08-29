 

import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="memelogo.png" 
                className="header--image"
                alt="Iamge"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}