import logo from "./assets/Logo.svg";

import hero_image from "./assets/Hero Image.png";
import CapterraLogo from "./assets/Capterra Logo.svg";
import AlternativeToLogo from "./assets/AlternativeTo Logo.svg";

import NetflixLogo from "./assets/Netflix Logo.svg";
import ShopifyLogo from "./assets/Shopify Logo.svg";
import SpotifyLogo from "./assets/Spotify Logo.svg";
import WalmartLogo from "./assets/Walmart Logo.svg";

import Button from "./components/Button";
import { MenuButton } from "./components/MenuButton";

function App() {
  return (
    <div className="py-12 px-6 pb-12 sm:px-40 bg-gradient-to-r from-[#E1DCD5] via-[#F2ECE4] bg-[#F2ECE4] w-full h-screen">
      <nav className="flex justify-between items-center">
        <img src={logo} alt="Logo" />

        <div className="hidden lg:flex flex-row justify-center items-center gap-x-12 text-gray-600 font-bold w-full">
          <MenuButton isMobile={false} />
          <button className="hover:scale-110">Challenges</button>
          <button className="hover:scale-110">Resources</button>
          <button className="hover:scale-110">Other Links</button>
        </div>

        <div className="hidden lg:inline-flex items-center gap-x-4  text-gray-600 font-bold">
          <div className="flex-none hover:scale-110">Sign in</div>
          <Button className="flex-none">Try for free</Button>
        </div>
        <div className="lg:hidden">
          <MenuButton isMobile={true} />
        </div>
      </nav>

      <main className="flex flex-col pt-12 sm:flex-row sm:justify-between w-full gap-8">
        <div
          id="content"
          className="flex flex-col gap-y-4 justify-start items-start w-full 
          sm:justify-center "
        >
          <p className="text-start text-4xl text-gray-900 font-bold sm:text-6xl lg:w-[45rem]">
            Ondeck is your remote{" "}
            <span className="text-yellow-500">conference calling tool</span>
          </p>
          <p className="text-md text-gray-700 text-start">
            Ondeck is a service that allows you to create beautiful, online, and
            encrypted video calls for you and your remote team.
          </p>
          <Button>Try for free</Button>
          <div className="inline-flex gap-x-2">
            <p className="text-md text-gray-700 text-start">
              5.0 Rating based on reviews form:{" "}
            </p>
            <div className="inline-flex gap-x-2">
              <img src={CapterraLogo} />
              <img src={AlternativeToLogo} />
            </div>
          </div>
        </div>
        <img className="hidden lg:flex w-[22rem] " src={hero_image} alt="" />
      </main>
      <div
        id="footer"
        className="flex flex-col gap-y-4 justify-center items-center pt-16"
      >
        <p className="text-md text-gray-700 text-start">
          Trusted by 3+ people at companies like
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <img src={NetflixLogo} />
          <img src={ShopifyLogo} />
          <img src={SpotifyLogo} />
          <img src={WalmartLogo} />
        </div>
      </div>
    </div>
  );
}

export default App;
