import ContentCreatorBox from "./ContentCreatorBox";
import NewSpokePersonCard from "./NewSpokePersonCard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import VideoPage from "./VideoPage";
import WordNeed from "./WordNeed";
import VideoNeed from "./VideoNeed";
import DoLive from "./DoLive";
import PersonalizedMessage from "./PersonalizedMessage";

function Home() {
  return (
    <div>
      <Navbar />
      <VideoPage />
      <NewSpokePersonCard />
      <ContentCreatorBox />
      <WordNeed />
      <VideoNeed />
      <DoLive />
      <PersonalizedMessage />
      <Footer />
    </div>
  );
}

export default Home;
