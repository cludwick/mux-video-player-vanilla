const muxPlayer = document.querySelector('mux-player');
const button = document.querySelector('button');

const videos = [
  {
    lot: 1,
    playbackId: 'Pvb55ZXwoRN3v97i2FFRlSJC3Phy0200XI29OT2g2LlV00',
  },
  {
    lot: 2,
    playbackId: 'EbPelUaMoIozjShigS00stkBS1kPsNuNegfxBUoYSoB00',
  },
  {
    lot: 4,
    playbackId: 'Fl9YmipgmyJqNgpoPxf02x6lTN00024ZEgsTXYrMfuUqcQ',
  },
  {
    lot: 5,
    playbackId: 'lf27q02o9gBCYKToQKjk2etWiijYlH800Ai93nD8P7Jww',
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
