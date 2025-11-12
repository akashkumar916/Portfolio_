'use client';

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Simple gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  );
}

export default AnimatedBackground;

