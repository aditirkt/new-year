export default function Register() {
    return (
      <div className="flex flex-col items-center justify-center px-4">
        <form className="bg-white shadow rounded p-8 space-y-4 max-w-md w-full" data-aos="fade-in" >
          <input className="w-full border rounded px-4 py-2" placeholder="Full Name" required />
          <input type="email" className="w-full border rounded px-4 py-2" placeholder="Email Address" required />
          <input type="tel" className="w-full border rounded px-4 py-2" placeholder="Phone Number" required />
          <button type="submit" className="bg-gradient-to-r from-pink-600 to-rose-950 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded">Register</button>
        </form>
      </div>
    );
  }
  