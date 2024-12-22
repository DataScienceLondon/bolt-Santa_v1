import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form.current, 'your_public_key')
      .then((result) => {
        alert('Letter sent to Santa! 🎅');
        form.current.reset();
      }, (error) => {
        alert('Oops! Something went wrong. Try again later!');
      });
  };

  return (
    <div id="contact" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-christmas-red mb-6">Write to Santa</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-christmas-green mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-christmas-green mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-christmas-green mb-2">Phone</label>
          <input
            type="tel"
            name="user_phone"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-christmas-green mb-2">Your Letter to Santa</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border rounded h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-christmas-red text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Send to North Pole 🎄
        </button>
      </form>
    </div>
  );
}
