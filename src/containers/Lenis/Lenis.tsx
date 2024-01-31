import { ReactLenis } from '@studio-freight/react-lenis';
export default function Lenis({ children }: { children: React.ReactElement }) {
  return (
    <ReactLenis root options={{ lerp: 0, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}
