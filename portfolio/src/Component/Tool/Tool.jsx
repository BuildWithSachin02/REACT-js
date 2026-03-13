import "./Tool.css";

const Tool = ()=>{
    return<>
        <div className="container text-center">
            <div className="row">
                <div className="title text-center mt-5">
                    <span className="white-title">PREMIUM</span>
                    <span className="grey-title">TOOLS</span>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-github tool-icon rounded"></i>
                    <h6 className="ms-auto">Github</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-git tool-icon rounded"></i>
                    <h6 className="ms-auto">Git</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-wordpress tool-icon rounded"></i>
                    <h6 className="ms-auto">WordPress</h6>
                    <p className="ms-auto"></p>
                </div>
                <div className="col-3 mt-5">
                    <i class="bi bi-filetype-jsx tool-icon rounded"></i>
                    <h6 className="ms-auto">React.JS</h6>
                    <p className="ms-auto"></p>
                </div>
            </div>
        </div>
    </>
}
export default Tool;