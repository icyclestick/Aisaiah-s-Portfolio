import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { LargeFooter } from "../components/LargeFooter";
import { CustomCursor } from "../components/CustomCursor";
import starFlower from '../assets/star-flower.svg';
import snakeNegative from '../assets/snake-negative.svg';
import lightRay from '../assets/light-ray.svg';
import positiveDome from '../assets/half-arch-positive.svg';
import portrait from '../assets/portrait.svg';

const About = () => {
    return (
        <>
            <NavBar />
            <section className="about-hero">
                <h1 className="display-medium about">
                    {`I'm`}
                    <span className="display-large-alt_wrap">Aisaiah Francis Alidio</span>
                </h1>
                <h1 className="display-medium-alt about">{`it's nice to meet you`}</h1>
            </section>

            <section className="about-content-block">
                <div className="about-block">
                    <p className="body-copy-large about">
                        I was born and raised in Siniloan, Laguna Philippines and is currently studying
                        in Polytechnic University of the Philippines.. I love gaming, benches 150 at 100lb bw,
                        and loves coding!.
                    </p>
                    <p className="body-copy-large about">
                        My curiosity for tech and programming led me to learn degrees
                        in Computer Science, brought me to many
                        corners of the internet, and taught me about the remarkable
                        intersection of tech and machines.
                    </p>
                    <p className="body-copy-large about">
                        I love creating web applications. Mainly using the MERN stack. And it is mostly all my
                        project&aposs architechture.
                    </p>
                    <p className="body-copy-large-alt no-padding">
                        My approach to creating is daring, meticulous, and playful. I aim to
                        intrigue, entice, and move people through my work.
                    </p>
                    <p className="body-copy-large about">
                        When I’m not coding, I might be playing Ultrakill or a soulsborne game, cooking, studying
                        Data structures and Algorithms or i am lifting or i am watching Youtube
                    </p>
                </div>
                <div className="looping-starflower-container">
                    <img src={starFlower}
                        alt="starFlower"
                        className="looping-shape"
                        loading="lazy"
                    />
                </div>

                <div className="snake-container">
                    <img src={snakeNegative} alt="" />
                </div>
                <div className="portrait">
                    <img loading='lazy' src={portrait} alt="" className="portrait-img" />
                </div>
            </section>

            <Footer lightRay={lightRay} />

            <LargeFooter positiveDome={positiveDome} />

            <CustomCursor />
        </>
    );
};

export default About;
