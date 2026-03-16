import "./Skill.css";

const Skill = ()=>{
    return<>
        <div id="skill" className="container">
           <div className="row text-center">
                <div className="title text-center mt-5">
                    <span className="white-title">TECH</span>
                    <span className="grey-title">STACK</span>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-javascript tool-icon rounded"></i>
                    <h6 className="ms-auto mt-2">JavaScript</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-typescript tool-icon rounded"></i>
                    <h6 className="ms-auto mt-2">TypeScript</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-meta tool-icon rounded"></i>
                    <h6 className="ms-auto mt-2">Meta</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-gem tool-icon rounded"></i>
                    <h6 className="ms-auto mt-2">Sketch</h6>
                    <p className="ms-auto"></p>
                </div>
            </div>
        </div>
    </>
}
export default Skill;