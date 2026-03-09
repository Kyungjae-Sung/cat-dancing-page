import './styles/global.css';
import './App.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, speedMultiplier, toggle, changeSpeed } = useAnimation();

  return (
    <Layout>
      <div className="stars" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              top: `${(i * 13 + 8) % 100}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
              animationDuration: `${1.5 + (i * 0.2) % 2}s`,
            }}
          />
        ))}
      </div>

      <DancingCat isPlaying={isPlaying} speedMultiplier={speedMultiplier} />

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}
