import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/growth.png';


const  Home = () => {
  return (
    <>
  <section id="header" className="d-flex align-items-center">

  <div className="container-fluid nav bg">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

              <div className="col-md-6 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">

                <h1>
                  Grow your business With <strong className="brand-name"> Responsiveness</strong>
                </h1>

                <h2 className="my-3">
                  We are the team of talented developers making awesome websites
                </h2>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started">
                    Get Started
                    </NavLink>

                </div>

              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} alt="home pic" className="img-fluid animated" />

              </div>
              </div>


            </div>




        </div>

    </div>

  </section>

  </>
  );
}

export default Home;
