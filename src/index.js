const muxPlayer = document.querySelector('mux-player');
const button = document.querySelector('button');

const videos = [
  {
    lot: 1,
    playbackId: 'QCmMlpRAKewTHrI9011UB4BJ15VGSUrmUlbHPvboL2wI',
  },
  {
    lot: 2,
    playbackId: 'H2M01600h5WTAEDGAhhmE6NEYbFIO2aL01U3cAilN02ETjA',
  },
  {
    lot: 4,
    playbackId: 'f8NyjzpNtxmUfI00025ijL5zvtWIuqpm4wwN3z34vcFsU',
  },
  {
    lot: 5,
    playbackId: 'fsDxyufPoEmnUMtgzfYBJfMosoncH1Gxim0002nqVq01Rs',
  },
];

//* Video Carousel
let videoId = videos[0].playbackId;

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

muxPlayer.setAttribute('playback-id', videoId);
