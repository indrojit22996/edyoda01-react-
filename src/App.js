import './App.css';

const videos = [

  {
 
   id: 1,
 
   title: "Agomonir Gaan (আগমনীর গান)-Lyrical | Oriplast Originals  | Anupam Roy | Durga Puja Song | SVF Music",
 
   thumbnailUrl: "https://www.youtube.com/embed/WDxiPGTi0Hs",
 
   likes: 1500,
 
   views: 25000,
 
   channelName: "SVF",
 
   channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZM7b3VgN7MEldSDrDUZvZ88QdS5VHVyN0CES1G4A=s176-c-k-c0x00ffffff-no-rj",
 
  },
]

function App() {
  return (
    <div>
    {videos.map((video) => (
      <div key={video.id} className="video-card">
      <iframe src={video.thumbnailUrl} alt={video.title} className="thumbnail" title={video.title} />

        <div className="video-info">
          <img src={video.channelLogoUrl} alt={video.channelName} className="channel-logo" />
          <div className="channel-name">{video.channelName}</div>
          <div className="video-title">{video.title}</div>
          <div className="video-stats">
            <span className="likes">{video.likes} Likes</span>
            <span className="views">{video.views} Views</span>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default App;
<iframe width="873" height="491" src="https://www.youtube.com/embed/WDxiPGTi0Hs" title="Agomonir Gaan (আগমনীর গান)-Lyrical | Oriplast Originals  | Anupam Roy | Durga Puja Song | SVF Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>