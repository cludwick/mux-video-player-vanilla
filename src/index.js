const muxPlayer = document.querySelector('mux-player');
const button = document.querySelector('button');

const videos = [
  {
    lot: 1,
    playbackId: 'lyazvkjU2r5018u00gNm1JwZ5cubp5JPT5jfUMQxkO00D4',
  },
  {
    lot: 2,
    playbackId: 'd01sumCEZUWfx4p9dItWkURbGckImR8Plc02YwYGKExVo',
  },
  {
    lot: 4,
    playbackId: 'OTtQJV2vseRf02MF6Z7LlVQzeRYPcogUpH3HRdfBnsxE',
  },
  {
    lot: 5,
    playbackId: 'Y4fAGAjXkECyGp00bHI5Q7d7lQXTa3fI4orj3SdxWuCk',
  },
];

let videoId = videos[0].playbackId;

// const placeholder =

let current = 0;
let next = current < videos.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : videos.length - 1;

const updateVideo = () => {
  videoId = videos[current].playbackId;
  muxPlayer.setAttribute('playback-id', videoId);
};

const goToNum = (newCurrentIndex) => {
  current = newCurrentIndex;
  next = current < videos.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : videos.length - 1;
  updateVideo();
};

const goToNext = () => (current < videos.length - 1 ? goToNum(current + 1) : goToNum(0));

updateVideo();

button.addEventListener('click', () => goToNext());

// using setAttribute
muxPlayer.setAttribute('playback-id', videoId);
