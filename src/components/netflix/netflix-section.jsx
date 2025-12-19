import './netflix-index.css';
import { NetflixMain } from './netflix-main';

export function NetflixSection(){
    return(
        <section className="section ms-4">
            <div className="section-title">Unlimited movies, TV<br/> shows and more</div>
            <div  className="section-subtitle">Starts at ₹149. Cancel at any time.</div>
            <NetflixMain/>
        </section>
    )
}