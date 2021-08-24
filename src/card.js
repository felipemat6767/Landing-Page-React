import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const Card = () => {
    return (
    <div className ="container my-4 p-0" style ={{width: "70%"}}>
        <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src="https://picsum.photos/id/1/200/150" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo adipisci consectetur non dolor qui deleniti iusto ipsum tenetur.</p>
                    </div>
                    <div className="card-footer text-center">
                    <a class="btn btn-primary btn-md " href = "1" role="button">
                     Call to Action!
                      </a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="https://picsum.photos/id/2/200/150"  className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo adipisci consectetur non dolor qui deleniti iusto ipsum tenetur.</p>
                    </div>
                    <div className="card-footer text-center">
                    <a class="btn btn-primary btn-md" href = "1" role="button">
                     Call to Action!
                      </a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="https://picsum.photos/id/35/200/150"  className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo adipisci consectetur non dolor qui deleniti iusto ipsum tenetur.</p>
                    </div>
                    <div className="card-footer text-center">
                    <a class="btn btn-primary btn-md" href = "1" role="button">
                     Call to Action!
                      </a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="https://picsum.photos/id/22/200/150"  className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo adipisci consectetur non dolor qui deleniti iusto ipsum tenetur.</p>
                    </div>
                    <div className="card-footer text-center">
                    <a class="btn btn-primary btn-md" href = "1" role="button">
                     Call to Action!
                      </a>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
