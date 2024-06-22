import './Hero.css';

export default function Hero() {
    return (
        <>
            <div id="main_hero">
                <div className="hero_cont" id='hero_text'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <button>Shop Now</button>
                    <button>Category</button>
                    <p>Also Available On</p>
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
                <div className="hero_cont" id='hero_img'>
                    <img src="/images/hero-image.png" alt="hero-image" />
                </div>
            </div>
        </>
    )
}