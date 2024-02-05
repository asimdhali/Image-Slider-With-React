// https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy
// https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/221-react-image-slider

import ImageSlider from "./Components/ImageSlider";


const App = () => {
  const slides = [
    { url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "beach" },
    { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "boat" },
    { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "forest" },
    { url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "city" },
    { url: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "720px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>This is Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;