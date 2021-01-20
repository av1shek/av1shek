import React from 'react';
import Data from '../config.json';


const Footer = () => {
  const social = Data.main.social;

  var networks = social.map(function (network) {
    return <li key={network.name}><a href={network.url}><i className={network.className} style={{ margin: "10px", fontSize: "36px" }}></i></a></li>
  })

  return (
    <footer className="mt-5">

      <div className="row">
        <div className="col">
          <ul className="social-links text-center">
            {networks}
          </ul>

          <div className="footerContent">
            <ul className="text-center">
              <li>Created with love by Abhishek <span aria-label="emoji" role="img">♥️</span></li>
            </ul>
          </div>


        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home" data-scroll=""><i className="fa fa-chevron-up icon-up-open mr-4" style={{ fontSize: "36px" }}></i></a></div>
      </div>
    </footer>
  );

};

export default Footer;
