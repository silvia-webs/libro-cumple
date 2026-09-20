// "use client";

// // import confetti from "canvas-confetti";

// function fireHeartConfetti() {
//   const defaults = {
//     spread: 70,
//     ticks: 120,
//     gravity: 0.85,
//     decay: 0.92,
//     startVelocity: 28,
//     colors: ["#FF69B4", "#FFB6C1", "#FF1493", "#87CEEB", "#ADD8E6"],
//   };

//   confetti({
//     ...defaults,
//     particleCount: 45,
//     origin: { x: 0.5, y: 0.65 },
//     scalar: 1.1,
//   });

//   confetti({
//     ...defaults,
//     particleCount: 25,
//     origin: { x: 0.3, y: 0.7 },
//     scalar: 0.9,
//   });

//   confetti({
//     ...defaults,
//     particleCount: 25,
//     origin: { x: 0.7, y: 0.7 },
//     scalar: 0.9,
//   });
// }

// type HeartConfettiProps = {
//   label: string;
// };

// export default function HeartConfetti({ label }: HeartConfettiProps) {
//   return (
//     <button
//       type="button"
//       onClick={fireHeartConfetti}
//       aria-label={label}
//       className="rounded-full bg-rosa-medio px-5 py-2.5 font-sans text-sm text-blanco shadow-md transition active:scale-95 sm:text-base"
//     >
//       {label}
//     </button>
//   );
// }
