import { NavBar } from "../components/NavBar";
import { LargeFooter } from "../components/LargeFooter";
import { CustomCursor } from "../components/CustomCursor";
import lightRay from "../assets/light-ray.svg";
import { useState, useEffect } from "react";

export function Contact() {
    const texts = [
        "inspiring",
        "amazing",
        "unique",
        "great",
        "impactful",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 2000)

        return () => clearInterval(interval);
    }, [texts.length])


    return (
        <>
            <NavBar />

            <section className="contact-hero">
                <div className="contact-display">
                    Reach Out to create something&nbsp;
                    <div className="rotating-text-wrapper">
                        <span key={index} className="rotating-text">
                            {texts[index]}
                        </span>
                    </div>
                </div>
                <div className="light-ray-link">
                    <a href="mailto:aisaiahalidio@gmail.com?subject=Contact%20from%20Portfolio&body=Hello" className="link-block  w-inline-block">
                        <div className="eyebrow contact-button">email</div>
                        <img src={lightRay} loading="lazy" alt="" className="looping-shape copy-circle -links"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/aisaiah-francis-alidio-a35492297/" className="link-block  w-inline-block">
                        <div className="eyebrow contact-button">linkedin</div>
                        <img src={lightRay} loading="lazy" alt="" className="looping-shape copy-circle footer-links"></img>
                    </a>
                </div>
            </section>
            <LargeFooter />
            <CustomCursor />
        </>
    );
}





