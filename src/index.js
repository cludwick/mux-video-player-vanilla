const muxPlayer = document.querySelector('mux-player');
const button = document.querySelector('button');

const videos = [
  {
    lot: 1,
    playbackId: 'qWJ01mJwTQmHpem2Rh00iqfIIQxq4Yzdyclq02p015WJgys',
  },
  {
    lot: 2,
    playbackId: '0000JO7B8iwBy7s3njL75D00HsLMq9fgFHw72i6EkiqIdc',
  },
  {
    lot: 4,
    playbackId: 'a02S01EJmCu0000cB6LmYOZ1n1368SEN41CGjK9B4gcKVOo',
  },
  {
    lot: 5,
    playbackId: 'fYNeJOkGGoczM00lYIbqDXn1FAwrCOvTUoRClnL3fONg',
  },
];

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

// using setAttribute
muxPlayer.setAttribute('playback-id', videoId);
