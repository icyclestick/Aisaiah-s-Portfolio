import '../App.css'
import positiveDome from '../assets/half-arch-positive.svg'

export function LargeFooter() {
    return <div className="full-width-content footer-tier-2">
        <div className="extra-large-display footer">{`don't be shy`}</div>
        <img src={positiveDome} loading="lazy" alt="" className="positive-dome" />
    </div>;
}