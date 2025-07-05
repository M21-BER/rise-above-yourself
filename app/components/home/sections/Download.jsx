import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
          Experience the Power of <br />
          <span className="text-[#ff4d4d]">R.A.Y Athletics</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Track your training, stay motivated, and book sessions — all in one
          powerful mobile app.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Google Play */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-14"
          >
            <Image
              src="/images/google_play_store.svg"
              alt="Google Play"
              width={160}
              height={56}
              className="w-full h-full object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 h-14"
          >
            <Image
              src="/images/ios_app_store.svg"
              alt="App Store"
              width={160}
              height={56}
              className="w-full h-full object-contain hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 -left-20 w-[400px] h-[400px] bg-[#ff4d4d] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#ff4d4d] opacity-10 blur-3xl rounded-full" />
    </section>
  );
}
