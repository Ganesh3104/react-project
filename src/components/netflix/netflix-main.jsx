import './netflix-index.css'

export function NetflixMain(){
    return(
        <main className="mt-4">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="d-flex justify-content-center">
                <div className="mt-2">
                    <div className="input-group input-group-lg">
                    <input type="text" placeholder="Enter Email" className="form-control get-started"/>
                    <button className="btn btn-danger mx-4 get-started">Get Started <span className="bi bi-chevron-right"></span> </button>
                </div>
                </div>
            </div>
        </main>
    )
}