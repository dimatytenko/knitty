import video from './assets/video.mp4';
export const Video = () => {
  return (
    <video autoPlay loop muted playsInline>
      <source src={video} type="video/mp4" />
    </video>
  );
};
