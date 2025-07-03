import '../App.css'
import lightRay from '../assets/light-ray.svg'

export function Footer() {
	return <section className="footer-tier-1">
		<div className="copy-block">
			<p className="body-copy-large-alt">
				always be kind
			</p>
			<p className="body-copy-large-alt">God is king</p>
		</div>
		<a href="" className="link-block footer w-inline-block">
			<div className="eyebrow contact-button">email</div>
			<img src={lightRay} loading="lazy" alt="" className="looping-shape copy-circle footer-links"></img>
		</a>
		<a href="" className="link-block footer w-inline-block">
			<div className="eyebrow contact-button">linkedin</div>
			<img src={lightRay} loading="lazy" alt="" className="looping-shape copy-circle footer-links"></img>
		</a>
	</section>;
}
