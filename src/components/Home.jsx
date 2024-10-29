import ContentCreatorBox from "./ContentCreatorBox";
import NewSpokePersonCard from "./NewSpokePersonCard";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import VideoPage from "./VideoPage";

function Home() {
  return (
    <div>
      <Navbar />
      <VideoPage/>
      <NewSpokePersonCard/>
      <ContentCreatorBox/>
      <Footer />
    </div>
  );
}

export default Home;
