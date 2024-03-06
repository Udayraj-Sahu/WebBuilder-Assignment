import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/ProductSection/ProductSection";
import RelatedDeals from "./Components/RelatedDeals/RelatedDeals";
import SignupPoster from "./Components/SignUpPoster/SignupPoster";

function App() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProductSection />
			<RelatedDeals />
			<SignupPoster />
			<Footer />
		</>
	);
}

export default App;
