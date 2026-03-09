import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

function MusicNote({ style }) {
  return (
    <span className="music-note" style={style}>♪</span>
  );
}

export default function DancingCat({ isPlaying, speedMultiplier }) {
  const duration = 0.8 * speedMultiplier;
  const danceDuration = 1.6 * speedMultiplier;

  const catStyle = {
    animation: isPlaying
      ? `dance ${danceDuration}s ease-in-out infinite`
      : `breathe 2s ease-in-out infinite`,
    transformOrigin: 'center bottom',
    willChange: 'transform',
    filter: isPlaying
      ? 'drop-shadow(0 0 20px rgba(255, 180, 100, 0.6))'
      : 'drop-shadow(0 0 10px rgba(255, 180, 100, 0.2))',
    transition: 'filter 0.5s ease',
  };

  const notes = [
    { top: '10%', left: '5%', delay: '0s', fontSize: '1.5rem', color: '#ff9eb5' },
    { top: '15%', right: '8%', delay: '0.4s', fontSize: '2rem', color: '#a8e6cf' },
    { top: '30%', left: '2%', delay: '0.8s', fontSize: '1.2rem', color: '#ffd3b6' },
    { top: '5%', right: '15%', delay: '1.2s', fontSize: '1.8rem', color: '#ffaaa5' },
  ];

  return (
    <div className="dancing-cat-container">
      {/* 무대 조명 */}
      <div className="spotlight" />

      {/* 음표 */}
      {isPlaying && notes.map((note, i) => (
        <MusicNote
          key={i}
          style={{
            position: 'absolute',
            top: note.top,
            left: note.left,
            right: note.right,
            fontSize: note.fontSize,
            color: note.color,
            animation: `floatNote ${duration * 2}s ease-out ${note.delay} infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* 고양이 */}
      <div className="cat-wrapper" style={catStyle}>
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
      </div>

      {/* 무대 그림자 */}
      <div
        className="cat-shadow"
        style={{
          animation: isPlaying
            ? `dance ${danceDuration}s ease-in-out infinite`
            : 'none',
        }}
      />
    </div>
  );
}
