import React from 'react';
import './Footer.css';
import FooterNavItems from '../components/FooterNavItems';

const Footer = () => {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy'
    ];

    const locations = [
        'Jalandhar',
        'Phagwara',
        'Amritsar',
        'Delhi',
        'Ludhiana'
    ];

    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>FILMEN</span>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ratione modi pariatur magni eos optio eaque nihil, quibusdam quasi ipsum distinctio, iusto est nulla quae praesentium corrupti consequatur excepturi. Tempore?
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="twitter" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="#" className="facebook" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#" className="instagram" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#" className="youtube" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>

                        <div className='col-lg-2 col-6 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                {usefulLinks.map(link => (
                                    <FooterNavItems key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className='col-lg-2 col-6 footer-links'>
                            <h4>Our Cinemas</h4>
                            <ul>
                                {locations.map(link => (
                                    <FooterNavItems key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                            <h4>Contact Us</h4>
                            <p>
                                GT Road LPU <br />
                                Jalandhar-Delhi, G.T. Road, Phagwara <br />
                                Punjab(INDIA) - 144411 <br />
                                <strong>Phone:</strong> +91 8573823558 <br />
                                <strong>Email:</strong> emailsshubham@gmail.com <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>Cap 735</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className="credit">
                    Designed by <a href="#">Cap735</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
