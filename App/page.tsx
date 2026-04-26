import './globals.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2A66] flex flex-col items-center justify-center text-white p-6">
      <img src="/logo.png" alt="ACHI EVARESTUS L.M.S" className="w-36 mb-6" />
      <h1 className="text-4xl font-bold mb-2">ACHI EVARESTUS L.M.S</h1>
      <p className="text-lg mb-8 text-blue-200">Learning for everyone, connected.</p>
      <div className="bg-white/10 p-6 rounded-xl max-w-md text-center border border-white/20">
        <h2 className="text-2xl font-semibold mb-3">We’re launching soon</h2>
        <p className="mb-5 text-blue-100">Join the waitlist for early access.</p>
        <input type="email" placeholder="you@email.com" className="w-full p-3 rounded-lg text-black mb-3" />
        <button className="w-full bg-white text-[#0A2A66] font-bold p-3 rounded-lg">Notify Me</button>
      </div>
      <p className="text-xs text-blue-300 mt-8">© 2026 ACHI EVARESTUS L.M.S — Nigeria</p>
    </main>
  )
}
