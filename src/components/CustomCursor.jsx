import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isProjectHovered, setIsProjectHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        function handleHoverEnter() {
            setIsHovered(true);
        }

        function handleHoverLeave() {
            setIsHovered(false);
        }

        function handleProjectEnter() {
            setIsProjectHovered(true);
        }

        function handleProjectLeave() {
            setIsProjectHovered(false);
        }

        document.addEventListener("mousemove", handleMouseMove);

        const interactiveElements = document.querySelectorAll("a, button");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverEnter);
            el.addEventListener("mouseleave", handleHoverLeave);
        });

        const projectItems = document.querySelectorAll(".project-list-item");
        projectItems.forEach((el) => {
            el.addEventListener("mouseenter", handleProjectEnter);
            el.addEventListener("mouseleave", handleProjectLeave);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="cursor-wrapper">
            <motion.div
                className="small-cursor"
                animate={{
                    x: mousePosition.x - 5,
                    y: mousePosition.y - 5,
                    backgroundColor: isProjectHovered ? "var(--offwhite)" : "var(--blue-blue)",
                }}
                transition={{ type: "smooth", duration: 0 }}
            />

            <motion.div
                className="large-cursor"
                animate={{
                    x: mousePosition.x - 22,
                    y: mousePosition.y - 22,
                    scale: isHovered ? 5 : 1,
                    borderRadius: isHovered ? "50%" : "0%",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />
        </div>
    );
}
