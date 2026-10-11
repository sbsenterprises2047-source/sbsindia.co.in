// SBS Enterprises website form
// To save enquiries in Supabase, set SUPABASE_URL and SUPABASE_ANON_KEY below
// and run the SQL in supabase-schema.sql in your Supabase SQL Editor.
const SUPABASE_URL = "https://lvpaxtghtzhowyqtnsjx.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hQ-dj3LrSkygYaaXhiZBEA_T02NUG_f";
const form = document.getElementById("enquiryForm");
const status = document.getElementById("formStatus");
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("callEnquiryButton")?.addEventListener("click", (event) => {
  event.preventDefault();
  if (window.confirm("SBS Enterprises को अभी कॉल करना चाहते हैं?\n\nकॉल करें: +91 99733 37998")) {
    window.location.href = "tel:+919973337998";
  }
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const phone = String(data.phone || "").replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(phone)) {
    status.textContent = "कृपया सही 10 अंकों का मोबाइल नंबर भरें।";
    status.style.color = "#b42318";
    return;
  }
  data.phone = phone;
  const waText = `Namaste SBS Enterprises! Meri solar enquiry hai.%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0ACity: ${encodeURIComponent(data.city)}%0AInterest: ${encodeURIComponent(data.interest)}%0AMessage: ${encodeURIComponent(data.message || "-")}`;
  document.getElementById("whatsappLink").href = `https://wa.me/919973337998?text=${waText}`;
  if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    try {
      const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const { error } = await client.from("enquiries").insert([{
        name: data.name, phone: data.phone, city: data.city,
        interest: data.interest, message: data.message || ""
      }]);
      if (error) throw error;
      status.textContent = "धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेज दी गई है।";
      status.style.color = "#167647";
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = "फॉर्म अभी सेव नहीं हो पाया। कृपया WhatsApp पर संपर्क करें।";
      status.style.color = "#b42318";
      window.open(`https://wa.me/919973337998?text=${waText}`, "_blank", "noopener");
    }
  } else {
    status.textContent = "अभी ऑनलाइन फॉर्म कनेक्ट नहीं है। आपकी पूछताछ WhatsApp पर भेजने के लिए नीचे दिए WhatsApp बटन पर टैप करें।";
    status.style.color = "#8a5b00";
    window.open(`https://wa.me/919973337998?text=${waText}`, "_blank", "noopener");
  }
});
