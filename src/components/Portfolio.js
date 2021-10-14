import './Portfolio.css';
function Portfolio() {
    return (

    <div className="portfolio">
    <div className="container-fluid p-0">
    <div className="row no-gutters">
    <div class="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/01.jpg">
                            <img className="img-fluid" src="img/01.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Reserve Air</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/02.jpg">
                            <img className="img-fluid" src="img/02.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">SriLanka Airline</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="img/03.jpg">
                            <img className="img-fluid" src="img/03.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Reserve Air</div>
                                <div className="project-name">$650</div>
                            </div>
                        </a>
                    </div>

    </div>
    </div>
    </div>





        );
    }
    
    export default Portfolio;