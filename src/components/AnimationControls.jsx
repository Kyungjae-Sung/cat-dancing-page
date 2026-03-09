export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  const speeds = [
    { value: 'slow', label: '느리게', icon: '🐢' },
    { value: 'normal', label: '보통', icon: '🐱' },
    { value: 'fast', label: '빠르게', icon: '🚀' },
  ];

  return (
    <div className="controls">
      {/* 재생/정지 버튼 */}
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '시작'}</span>
      </button>

      {/* 속도 조절 */}
      <div className="speed-controls" role="group" aria-label="애니메이션 속도 조절">
        <span className="speed-label">속도</span>
        <div className="speed-buttons">
          {speeds.map(({ value, label, icon }) => (
            <button
              key={value}
              className={`speed-btn ${speed === value ? 'active' : ''}`}
              onClick={() => onSpeedChange(value)}
              aria-pressed={speed === value}
              aria-label={`속도: ${label}`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
