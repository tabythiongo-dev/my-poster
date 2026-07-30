import PosterLayout from "./components/PosterLayout";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterImage from "./components/PosterImage";
import PosterBadge from "./components/PosterBadge";
import CTAButton from "./components/CTAButton";
import albertImg from "./assets/albert.png";

function App() {
  return (
    <PosterLayout>
      <div className="md:w-1/1  flex flex-col">
        <PosterImage src={albertImg} alt="Albert Odero, basketball coach" />
        <div className="p-8">
          <PosterHeading text="Albert Odero" size="text-100xl" />
          <PosterSubtext text="BASKETBALL COACH" variant="label" />
          <PosterSubtext
            text="Get to know Albert Odero, a basketball virtuoso in shooting accuracy and flawless ball handling."
            variant="body"
          />
          <PosterSubtext text='"Precision in every shot, mastery in every move."' variant="quote" />
        </div>
      </div>

      <div className="md:w-1/2 bg-white text-black p-6">
        <PosterHeading text="Ball Control Maestro" size="text-sm" underline={true} color="text-orange-600" />
        <PosterSubtext text="Strength" variant="label" />
        <ul className="list-disc list-inside text-[#333333] mb-3">
          <li>shooting accuracy</li>
          <li>ball handling</li>
        </ul>

        <PosterHeading text="Precision Training Insights" size="text-sm" underline={true} color="text-orange-600" />
        <PosterSubtext text="Coaching Focus" variant="label" />
        <ul className="list-disc list-inside text-[#333333] mb-3">
          <li>Fine-tuning shooting techniques</li>
          <li>Mastering ball-handling</li>
          </ul> 

        <PosterHeading text="Training Positions" size="text-sm" underline={true} color="text-orange-600" />
        <PosterSubtext text="Main Focus" variant="label" />
        <ul className="list-disc list-inside text-[#333333] mb-3">
          <li>shooting drills</li>
          <li>Ball control tutorials</li>

        </ul>

        
        <PosterHeading text="Player Development" size="text-sm" underline={true} color="text-orange-600"/>
        <PosterSubtext text="Fitness Focus" variant="label"/>
        <ul className="list-disc list-inside text-[#333333] mb-3">
          <li>Agility</li>
          <li>Footwork</li>
          <li>Core strength</li>

        </ul>
        <PosterHeading text="Availability and Results" size="text-sm" underline={true} color="text-orange-600"/>
        <PosterSubtext text="Age Groups" variant="label"/>
        <ul className="list-disc list-inside text-[#333333] mb-3">
          <li>Youth 12-18</li>
          <li>college</li>
          <li>Pro</li>
        </ul>
        
        <PosterHeading text="Also" size="text-base" color="text-black-400"/>
        <PosterSubtext text="Trains all basketball positions" variant="label"/>

      </div>
    </PosterLayout>
  );
}

export default App;