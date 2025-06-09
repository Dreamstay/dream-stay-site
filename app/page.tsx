'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-100 to-white">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl font-bold font-serif">Welcome to Dream Stay</h1>
        <p className="text-lg">Where luxury and spontaneity go hand in hand.</p>
        <div className="mt-8 p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-medium">Hi, I’m Jett, your concierge.</h2>
          <p className="mt-2 text-gray-700">It’s my pleasure to help you discover something unforgettable. Where are you headed?</p>
        </div>
      </div>
    </main>
  );
}
