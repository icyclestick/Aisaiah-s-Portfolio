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
  Images: {
    dietCock: PropTypes.string.isRequired,
    assembly: PropTypes.string.isRequired,
    tenzies: PropTypes.string.isRequired,
    chefClaude: PropTypes.string.isRequired,
    meme: PropTypes.string.isRequired,
    travelJournal: PropTypes.string.isRequired,
    staticPage: PropTypes.string.isRequired,
  },
};

export default propTypes;
