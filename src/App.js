import "./App.css";
import imgSrc from "./ImageInSrc.jpg";
import myVideo from "./MyVideo.mp4";
import "./style.css";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red mb-5">This is my Hero</h1>

        <img className="mb-5" src={imgSrc} />
        <br />
        <img src={"/imageInPublic.jpg"} />
        <br />

        <video width="320" height="240" controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
