import "./App.css";

const videos = [
  {
    id: 1,

    title:
      "Agomonir Gaan (আগমনীর গান)-Lyrical | Oriplast Originals  | Anupam Roy | Durga Puja Song | SVF Music",

    thumbnailUrl: "https://www.youtube.com/embed/WDxiPGTi0Hs",

    likes: 1500,

    views: 25000,

    channelName: "SVF",

    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKZM7b3VgN7MEldSDrDUZvZ88QdS5VHVyN0CES1G4A=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,

    title:
      "Je Tore Pagol Bawle - Maacher Jhol | Ritwick C, Paoli Dam &amp; Kaya B | Shaheb C &amp; Anupam Roy",

    thumbnailUrl:
      "https://www.youtube.com/embed/m0iaaCLH87k?list=RD1vcjszv0G9M",

    likes: 10000,

    views: 25680,

    channelName: "Zee Music Bangla",

    channelLogoUrl:
      "https://yt3.ggpht.com/ytc/APkrFKYIjvu6uPB75goOxalAMKQUd9ePELQNs3KB4J96JA=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,

    title:
      "Mone | Mone · Chandrabindoo | Juju | | Ritwick C, Paoli Dam &amp; Kaya B | Chandrabindoo - Topic Music",

    thumbnailUrl: "https://www.youtube.com/embed/nxVjsESsGwo",

    likes: 11900,

    views: 256680,

    channelName: "Chandrabindoo - Topic",

    channelLogoUrl:
      "https://yt3.ggpht.com/xxPd9-f2a4dLQi569iuy9gIfZJtc5l3FqoNK4koulLpphX84PBqsxDWlTFlbeQ-vZtRjXekZ=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,

    title:
      "গীতবিতান এর দিব্যি | কলকাতা চলন্তিকা | Pritha|Ranajoy| Bong Guy | Ditipriya | Sourav | Ishaa |Pavel",

    thumbnailUrl:
      "https://www.youtube.com/embed/0q5fbImnekw?list=RD1vcjszv0G9M",

    likes: 12539,

    views: 2596680,

    channelName: "Times Music Bangla",

    channelLogoUrl:
      "https://yt3.ggpht.com/ytc/APkrFKY9Ptcvf21d5Oi02xfzEOXE1TGrIQ93lXCRZIDV=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,

    title:
      "নিঠুর মনোহর । Nithur Monohor । Ishaan এর Gaan । Official Music Video |Ishaan এর Gaan | Music ",

    thumbnailUrl: "https://www.youtube.com/embed/PiFeGLc18_A",

    likes: 12069,

    views: 96680,

    channelName: "Ishaan এর Gaan",

    channelLogoUrl:
      "https://yt3.ggpht.com/laxXerpvFfxt2WcV_i5uJWIGchbOwY00iSrVT_QFCwar0oTLr8zwEBMvvN7PmBK33r0HLwhxng=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 6,

    title:
      "Shob Lokey Koy | Coke Studio Bangla | Season One | Kaniz Khandaker Mitu X Murshidabadi | Music ",

    thumbnailUrl:
      "https://www.youtube.com/embed/L-arhlgPiy8?list=RDMX_307s6-CE",

    likes: 25098,

    views: 706956,

    channelName: "Coke Studio Bangla",

    channelLogoUrl:
      "https://yt3.ggpht.com/7RIpNEonVdbShu46PHiWn3hyW9gJ3Ta9imRi3dvRXS8HlM9_NHRUMcL8yFPedyskLoOosLtf=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 7,

    title:
      "Billie Eilish, Khalid - lovely (Official Music Video) | Billie Eilish, Khalid - lovely (Official Music Video) ",

    thumbnailUrl: "https://www.youtube.com/embed/V1Pl8CzNzCw",

    likes: 10395,

    views: 896246,

    channelName: "Billie Eilish",

    channelLogoUrl:
      "https://yt3.ggpht.com/ytc/APkrFKaZfhLpJ5dKm00prHJgxis4EZYwjvW3agj12X0-VA=s88-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: 8,

    title:
      "Zindagi Ka Safar | Recreated By Ajay Atul | Times of Music 2020| Vijay Prakash | Kishore Kumar |",

    thumbnailUrl: "https://www.youtube.com/embed/1zC8pnpVs18",

    likes: 10395,

    views: 896246,

    channelName: "Melody Wala",

    channelLogoUrl:
      "https://yt3.ggpht.com/VpZJCG27WlyedNguqJRXfX6jxCnMWfnh2m_0UUIuJg2rUDYOZCAMnlLGeKD7FrU2vZ0Q-obmSA=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,

    title:
      "Dhoro Jodi Hothat Sondhye |। ধরো যদি হঠাৎ সন্ধ্যে ।। বাউন্ডুলে ।। Baundule || Spandan|| Bengali",

    thumbnailUrl:
      "https://www.youtube.com/embed/CBfqi_nrif8?list=RDIvoa6EtFVPw",

    likes: 256395,

    views: 6952246,

    channelName: "Baundule Official",

    channelLogoUrl:
      "https://yt3.ggpht.com/ytc/APkrFKaDbwo6X99ScPWh2WQsGbDJsl8u-z8OygxKKjMv=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 10,

    title:
      "Ekla Nitai (একলা নিতাই) by Satyaki Banerjee (সাত্যকি ব্যানার্জি) | Dhaka International FolkFest 2018",

    thumbnailUrl: "https://www.youtube.com/embed/IgeWk_B-ZAg",

    likes: 1256395,

    views: 69546,

    channelName: "Dhaka International FolkFest",

    channelLogoUrl:
      "https://yt3.ggpht.com/ytc/APkrFKbryjyj_VVcvKX3C9A7UWy2UNTTFegUnbyTsrqV=s88-c-k-c0x00ffffff-no-rj",
  },
];

function App() {
  return (
    <div>
      {videos.map((video) => (
        <div className="video-card">
          <div className="video-img">
            <iframe
              src={video.thumbnailUrl}
              alt={video.title}
              className="thumbnail"
              title={video.title}
            />
          </div>

          <div className="video-info">
            <div className="video-title">{video.title}</div>
            <div className="video-stats">
              <span className="likes">{video.likes} Likes</span>
              <span className="views">{video.views} Views</span>
            </div>
            <div className="channel-cont">
              <img
                src={video.channelLogoUrl}
                alt={video.channelName}
                className="channel-logo"
              />
              <div className="channel-name">{video.channelName}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
