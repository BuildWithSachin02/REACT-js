import "./Hero.css";
import profile from "./image/profile.png"
import CountUp from "react-countup";

const Hero = ()=>{
    return<>
        <div className="container hero-container">
            <div className="row">
                <div className="col-4">
                    <div className="profile-container">
                        <img className="pro-img" src={profile} alt="" />
                        <div className="bio-container">
                            <h2 className="bio-name">
                                Sachin Yadav
                            </h2>
                            <p className="mt-5 bio-descriptions">
                                A Software Engineer who has Devloped Countless innovative solutions.
                            </p>
                        </div>
                        <div className="favIcon-container d-flex gap-3 justify-content-center mt-5">
                            <a href="https://github.com/BuildWithSachin02"><i class="bi bi-github icons"></i></a>
                            <a href="https://www.instagram.com/sachinndev333/"><i class="bi bi-instagram icons"></i></a>
                            <a href=""><i class="bi bi-twitter icons"></i></a>
                            <a href="https://www.linkedin.com/in/sachin-yadav-8847703a1/"><i class="bi bi-linkedin icons"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-8 right-container">
                    <div className="right-column">
                        <h1 className="soft">SOFTWARE</h1>
                        <h1 className="engineer">ENGINEER</h1>
                        <p>
                            Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
                        </p>
                        <div className="exprecience-container">
                            <div className="year">
                                <h1>+<CountUp start={0} end={2} duration={3} /> </h1>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <div className="project">
                                <h1>+<CountUp start={0} end={968} duration={3} /> </h1>
                                <p>PROJECTS COMPLETED</p>
                            </div>
                            <div className="client">
                                <h1>+ <CountUp start={0} end={25} duration={3} /> </h1>
                                <p>WORLDWIDE CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Hero;