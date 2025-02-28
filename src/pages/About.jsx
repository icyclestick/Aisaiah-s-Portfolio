import { NavBar } from '../components/NavBar';

const About = () => {
    return (
        <>
            <NavBar />
            <section className="about-hero">
                <h1 className="display-medium about">
                    {`I'm`}
                    <span className="display-large-alt_wrap">
                        Aisaiah Francis Alidio
                    </span>
                </h1>
                <h1 className="display-medium-alt about">
                    {`it's nice to meet you`}
                </h1>
            </section>
        </>
    )
}

export default About;