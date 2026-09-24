import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Calendar, Sparkles, MapPin, Phone, Mail, User, Clock } from 'lucide-react';
import { STUDIO_INFO } from '../config/studioData';
import { EnquiryFormData } from '../types';

interface EnquiryFormProps {
  initialService?: string;
  initialPackage?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService,
  initialPackage
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    eventType: initialService || initialPackage || 'Wedding',
    eventDate: '',
    eventLocation: '',
    packagePreference: initialPackage || 'Signature Royal Story',
    estimatedBudget: '₹50,000 - ₹1,50,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  // Sync when prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, eventType: initialService }));
    }
    if (initialPackage) {
      setFormData(prev => ({ ...prev, packagePreference: initialPackage }));
    }
  }, [initialService, initialPackage]);

  const eventTypes = [
    'Wedding',
    'Reception',
    'Engagement',
    'Pre-Wedding',
    'Birthday',
    'Baby Shoot',
    'Outdoor Shoot',
    'Corporate / Other Event'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury fast response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    if (!submittedData) return;
    const message = encodeURIComponent(
      `Hello Gokul Studios team! I would like to book a photography session.\n\n` +
      `*Client Details:*\n` +
      `• Name: ${submittedData.name}\n` +
      `• Event: ${submittedData.eventType}\n` +
      `• Date: ${submittedData.eventDate || 'To be decided'}\n` +
      `• Location: ${submittedData.eventLocation || STUDIO_INFO.locationCity}\n` +
      `• Package: ${submittedData.packagePreference || 'Custom'}\n` +
      `• Notes: ${submittedData.message || 'Looking for pricing and availability'}\n\n` +
      `Looking forward to connecting with your team!`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0e] relative border-t border-zinc-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-600/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Conversion Selling Points */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve Your Date</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light text-white uppercase tracking-tight leading-tight">
                PLAN YOUR <br />
                <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
                  SHOOT WITH US.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed font-light">
                We accept a limited number of weddings each season to ensure uncompromising focus, bespoke color grading, and personal director oversight.
              </p>
            </div>

            {/* Studio Guarantee Badges */}
            <div className="space-y-4 pt-4 border-t border-zinc-900">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Rapid 24-Hour Response</h4>
                  <p className="text-xs text-zinc-400">Our lead photography coordinator will verify date availability promptly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">In-Person Studio Consultation</h4>
                  <p className="text-xs text-zinc-400">Visit our studio in {STUDIO_INFO.locationCity} to touch our handcrafted flush-mount leather albums.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct WhatsApp Assistance</h4>
                  <p className="text-xs text-zinc-400">Prefer instant messaging? Chat with our team anytime on WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Summary */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2 text-xs">
              <div className="text-zinc-400">Studio Location:</div>
              <div className="text-white font-medium">{STUDIO_INFO.fullAddress}</div>
              <div className="pt-2 flex items-center gap-4 text-amber-300">
                <span>📞 {STUDIO_INFO.phoneDisplay}</span>
                <span>💬 {STUDIO_INFO.whatsappDisplay}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-white">
                      Enquiry & Date Checker
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                      Step 1 of 2
                    </span>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-amber-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vignesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-amber-400" />
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-400" />
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                        Event Type *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-zinc-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        Expected Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors [color-scheme:dark]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        Event Location / Hall *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vaniyambadi / Ambur / Tirupattur"
                        value={formData.eventLocation}
                        onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Package / Scope Preference */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Estimated Investment / Package Interest
                    </label>
                    <select
                      value={formData.packagePreference}
                      onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                      <option value="Essential Collection">Essential Collection (Traditional + Candid)</option>
                      <option value="Premium Cinema & Photo">Premium Cinema & Photo (With 4K Video & Drone)</option>
                      <option value="Signature Royal Story">Signature Royal Story (Complete Multi-Day Coverage)</option>
                      <option value="Custom Bespoke Package">Custom Bespoke Requirement</option>
                    </select>
                  </div>

                  {/* Message / Specific Vision */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                      Additional Vision & Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the number of guests, specific ritual schedules, or particular photo styles you love..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-zinc-950 font-bold uppercase tracking-widest text-xs sm:text-sm hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        Verifying Availability...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Booking Enquiry</span>
                      </span>
                    )}
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center">
                    🔒 Prototype Demo: Your information is safe. No actual data will be transmitted to external third parties.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                      Enquiry Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-white">
                      Thank You, {submittedData?.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      We have noted your interest for <strong className="text-amber-300">{submittedData?.eventType}</strong> on <strong className="text-amber-300">{submittedData?.eventDate || 'your selected date'}</strong> at <strong className="text-amber-300">{submittedData?.eventLocation}</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-zinc-800 text-zinc-400">
                      <span>Package:</span>
                      <span className="text-white font-medium">{submittedData?.packagePreference}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800 text-zinc-400">
                      <span>Contact:</span>
                      <span className="text-white font-medium">{submittedData?.phone}</span>
                    </div>
                    <div className="flex justify-between py-1 text-zinc-400">
                      <span>Studio Team:</span>
                      <span className="text-amber-300 font-medium">Gokul Studios, Vaniyambadi</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Instant Connect CTA */}
                  <div className="space-y-3 max-w-md mx-auto pt-2">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue via WhatsApp with this Enquiry</span>
                    </button>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
