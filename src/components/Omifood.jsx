import React from "react";
import Card from "./Card";
import './Omifood.css'
import Button from "./Ul/Button";

function Omifood (props) {
    return (
        <Card> 
            <header className="header">
                <ul>
                    <li className="text">Testimonials</li>
                    <li className="text">Meals</li>
                    <li className="text">How it works</li>
                   <Button className='dn'>Free trial</Button>
                   
                </ul>
            </header>
        </Card>
    )
}

export default Omifood