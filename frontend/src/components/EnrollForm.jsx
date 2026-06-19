import React, { useState } from 'react';
import { getWhatsAppLink } from '../config/WhatsAppConfig';

const EnrollForm = ({ courseName, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    email: '',
    whatsapp: '',
    timing: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Enrollment Request*\n\n` +
      `*Course:* ${courseName}\n` +
      `*Name:* ${formData.name}\n` +
      `*Age:* ${formData.age}\n` +
      `*Country:* ${formData.country}\n` +
      `*Email:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Preferred Timing:* ${formData.timing}\n` +
      `*Message:* ${formData.message}`;

    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Age</label>
          <input
            required
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="Your age"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Country</label>
          <input
            required
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="Where are you from?"
          />
        </div>
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Email</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">WhatsApp Number</label>
          <input
            required
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="+1 234 567 890"
          />
        </div>
        <div className="space-y-1.5 text-white">
          <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Preferred Timing</label>
          <input
            required
            type="text"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="e.g. 5 PM GMT"
          />
        </div>
      </div>

      <div className="space-y-1.5 text-white">
        <label className="text-[11px] uppercase font-bold text-emerald-400 tracking-widest pl-1">Message (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full bg-slate-900/50 border border-emerald-500/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
          placeholder="Any special requirements?"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl uppercase tracking-widest text-[11px] shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
      >
        Submit and Open WhatsApp
      </button>
    </form>
  );
};

export default EnrollForm;
