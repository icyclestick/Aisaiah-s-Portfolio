import PropTypes from "prop-types";

const propTypes = {
  NavBar: {
    shootingStar: PropTypes.string.isRequired,
  },
  Marquee: {
    halfCircleDiamond: PropTypes.string.isRequired,
    positiveDome: PropTypes.string.isRequired,
    snakeIcon: PropTypes.string.isRequired,
    shootingStar: PropTypes.string.isRequired,
  },
};

export default propTypes;
