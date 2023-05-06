import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='my-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className='mt-5'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone />
            <div style={{
                width: "225px",
                height: "280px",
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className='text-white text-center '>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;