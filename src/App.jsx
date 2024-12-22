import { Link } from 'react-scroll';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      {/* Snowflakes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 10 + 10}px`,
            opacity: Math.random() * 0.5 + 0.5
          }}
        >
          ❄
        </div>
      ))}

      {/* Rest of the component remains the same */}
      <header className="bg-christmas-red text-snow-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Ho Ho Ho! 🎅</h1>
        <p className="text-xl">Welcome to Santa's Official Website</p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-christmas-green mb-6">Meet Santa & The Team</h2>
          <div className="prose text-lg space-y-4">
            <p>
              Hey kids! Santa here, coming to you live from the North Pole (yes, we have WiFi)! 
              When I'm not scrolling through elf TikToks or teaching Rudolph how to parallel park, 
              I'm busy running the world's most magical gift factory.
            </p>
            <p>
              Fun fact: Mrs. Claus recently got me a Fitbit, and let me tell you, 
              climbing down chimneys counts as both cardio AND strength training! 
              The reindeer are doing great too - though Dasher keeps asking for a Tesla upgrade.
            </p>
          </div>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block mt-8 bg-christmas-red text-white py-3 px-6 rounded-lg hover:bg-red-700 transition cursor-pointer"
          >
            Write to Santa! 📝
          </Link>
        </section>

        <ContactForm />
      </main>

      <footer className="bg-christmas-green text-snow-white py-6 text-center mt-12">
        <p>© 2023 North Pole Enterprises | Powered by Magic & Cookies 🍪</p>
      </footer>
    </div>
  );
}

export default App;
