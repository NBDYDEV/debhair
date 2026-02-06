import Hero from "./components/Hero";
import HeroIntroduce from "./components/HeroIntroduce";
import Achivements from "./components/Achivements";
import Reviews from "./components/Reviews";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import ContactForm from "./components/ContactForm";
import Pricing from "./components/Pricing";

export default async function Home() {
    return (
        <>
            <div className="bg-background">
                <Hero />
                <HeroIntroduce />
                <Pricing />
                <Achivements />
                <Reviews />
                <HowItWorks />
                <Team />
                {/* <ContactForm backgroundVariant='gradient' /> */}
            </div>
        </>
    );
}
