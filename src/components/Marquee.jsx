export function Marquee({
    halfCircleDiamond,
    positiveDome,
    snakeIcon,
    shootingStar
}) {
    return <section className="marquee-wrapper">
        <div className="marquee">
            <div className="marquee-content scroll">
                <img src={halfCircleDiamond} alt="" className="half-circle-diamond" />
                <img src={positiveDome} alt="" className="positive-dome" />
                <img src={snakeIcon} alt="" className="snake-icon" />
                <img src={shootingStar} alt="" className="shooting-star-icon" />
                <h1 className="extra-large-display">{`it's nice to meet you`}</h1>
                <img src={halfCircleDiamond} alt="" className="half-circle-diamond" />
                <img src={positiveDome} alt="" className="positive-dome" />
                <img src={snakeIcon} alt="" className="snake-icon" />
                <img src={shootingStar} alt="" className="shooting-star-icon" />
                <h1 className="extra-large-display">{`it's nice to meet you`}</h1>
            </div>
            <div className="marquee-content scroll">
                <img src={halfCircleDiamond} alt="" className="half-circle-diamond" />
                <img src={positiveDome} alt="" className="positive-dome" />
                <img src={snakeIcon} alt="" className="snake-icon" />
                <img src={shootingStar} alt="" className="shooting-star-icon" />
                <h1 className="extra-large-display">{`it's nice to meet you`}</h1>
                <img src={halfCircleDiamond} alt="" className="half-circle-diamond" />
                <img src={positiveDome} alt="" className="positive-dome" />
                <img src={snakeIcon} alt="" className="snake-icon" />
                <img src={shootingStar} alt="" className="shooting-star-icon" />
                <h1 className="extra-large-display">{`it's nice to meet you`}</h1>
            </div>
        </div>
    </section>;
}

import propTypes from "./propTypes";

Marquee.propTypes = propTypes.Marquee;

