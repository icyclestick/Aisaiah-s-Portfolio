import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const [isProjectHovered, setIsProjectHovered] = useState(false);
	const [isNavItemHovered, setIsNavItemHovered] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		function handleHoverEnter() {
			setIsHovered(true);
			setIsProjectHovered(false)
			setIsNavItemHovered(false)
		}

		function handleHoverLeave() {
			setIsHovered(false);
		}

		function handleProjectEnter() {
			setIsHovered(false);
			setIsProjectHovered(true)
			setIsNavItemHovered(false)
		}

		function handleProjectLeave() {
			setIsProjectHovered(false);
		}

		function handleNavItemEnter() {
			setIsHovered(false);
			setIsProjectHovered(false)
			setIsNavItemHovered(true)
		}

		function handleNavItemLeave() {
			setIsNavItemHovered(false);
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

		const navItems = document.querySelectorAll(".nav-link");
		navItems.forEach((el) => {
			el.addEventListener("mouseenter", handleNavItemEnter);
			el.addEventListener("mouseleave", handleNavItemLeave);
		})

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const getCursorSize = () => {
		if (isProjectHovered) return 200;
		if (isNavItemHovered) return 100;
		if (isHovered) return 200;
		return 40;
	};

	const cursorSize = getCursorSize();
	const cursorOffset = cursorSize / 2;

	return (
		<div className="cursor-wrapper">
			<motion.div
				className="small-cursor"
				animate={{
					x: mousePosition.x - 2.75,
					y: mousePosition.y - 2.75,
					backgroundColor: isProjectHovered ? "var(--offwhite)" : "var(--blue-blue)",
					width: isHovered || isNavItemHovered ? "2.5px" : "5px",
					height: isHovered || isNavItemHovered ? "2.5px" : "5px"
				}}
				transition={{ type: "smooth", duration: 0 }}
			/>

			<motion.div
				className="large-cursor"
				animate={{
					x: mousePosition.x - cursorOffset,
					y: mousePosition.y - cursorOffset,
					width: cursorSize,
					height: cursorSize,
					borderRadius: isHovered || isNavItemHovered || isProjectHovered ? "50%" : "0%",
				}}
				transition={{ type: "spring", stiffness: 100, damping: 10 }}
			/>
		</div>
	);
}
