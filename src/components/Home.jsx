import ContentCreatorBox from "./ContentCreatorBox";
import NewSpokePersonCard from "./NewSpokePersonCard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import VideoPage from "./VideoPage";
import WordNeed from "./WordNeed";

function Home() {
  return (
    <div>
      <Navbar />
      <VideoPage/>
      <NewSpokePersonCard/>
      <ContentCreatorBox/>
      <WordNeed/>
      <languageNeed/>
      <Footer />
    </div>
  );
}

export default Home;
