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


// Hindi is the default language. The toggle switches visible site copy to English.
const translations = {
"☀️ स्वच्छ ऊर्जा • बेहतर बचत • आत्मनिर्भर भारत":"☀️ Clean energy • Better savings • Self-reliant India",
"होम":"Home","हमारे बारे में":"About Us","सेवाएँ":"Services","PM सूर्य घर योजना":"PM Surya Ghar Scheme","समाज सेवा":"Social Responsibility","संपर्क":"Contact","सोलर लगवाएँ":"Go Solar",
"बिहार में सोलर समाधान के लिए आपका साथी":"Your partner for solar solutions in Bihar",
"Apni chhat par solar lagaiye,":"Install solar on your rooftop,","bijli bill kam karne ki":"and take a step towards","ओर कदम बढ़ाइए।":"lower electricity bills.",
"सोलर ऊर्जा से आत्मनिर्भर भारत, समाज सेवा से खुशहाल भारत! घर, दुकान और संस्थान के लिए अपनी जरूरत के अनुसार रूफटॉप सोलर की जानकारी पाएँ।":"Solar energy for a self-reliant India, social service for a happier India. Explore rooftop solar options for your home, shop or institution.",
"☀️ सोलर लगवाने की जानकारी":"☀️ Explore Solar Options","सरकारी पोर्टल देखें ↗":"Visit Official Portal ↗","✓ सही जानकारी":"✓ Clear information","✓ जरूरत के अनुसार मार्गदर्शन":"✓ Guidance for your needs","✓ स्थानीय संपर्क":"✓ Local support",
"महत्वपूर्ण सूचना":"Important Information","SBS Enterprises, पीएम सूर्य घर: मुफ्त बिजली योजना के अंतर्गत रूफटॉप सोलर इंस्टॉलेशन सेवाएँ प्रदान करने वाला वेंडर है। योजना की पात्रता, सब्सिडी तथा स्वीकृति लागू सरकारी दिशानिर्देशों और संबंधित DISCOM/पोर्टल की मंज़ूरी के अधीन हैं।":"SBS Enterprises provides rooftop solar installation services as a vendor under the PM Surya Ghar: Muft Bijli Yojana. Eligibility, subsidy and approval are subject to applicable government guidelines and approval by the relevant DISCOM/portal.",
"हमारा प्रमुख कार्यक्षेत्र":"Our primary service area","घरेलू सोलर":"Residential Solar","रूफटॉप समाधान की जानकारी":"Rooftop solar guidance","व्यवसाय के साथ सामाजिक जिम्मेदारी":"Social responsibility in business","स्थानीय सहयोग":"Local Support","योजना व प्रक्रिया की जानकारी":"Scheme and process guidance",
"हमारे बारे में":"About Us","सिर्फ व्यवसाय नहीं,":"More than business,","समाज के लिए भी काम।":"working for society too.","बिहार में सोलर ऊर्जा के क्षेत्र में कार्यरत एक प्रोपराइटरशिप फर्म है। हमारा उद्देश्य घरों, दुकानों और संस्थानों तक सौर ऊर्जा के विकल्पों की जानकारी पहुँचाना और ग्राहकों को उनकी जरूरत के अनुसार उपयुक्त समाधान चुनने में मदद करना है।":"is a proprietorship firm working in the solar energy sector in Bihar. We help homes, shops and institutions understand solar options and choose solutions suited to their needs.",
"हमारा व्यावसायिक दृष्टिकोण समाज सेवा की भावना से जुड़ा है। हम स्वच्छ ऊर्जा के विस्तार, रोजगार के अवसरों और जनकल्याण से जुड़े प्रयासों को बढ़ावा देना चाहते हैं।":"Our business approach is rooted in social responsibility. We aim to promote clean energy, employment opportunities and community well-being.",
"“व्यवसाय में प्रगति, समाज सेवा में भागीदारी!”":"“Business progress, participation in social service!”","हमसे बात करें":"Talk to Us","हमारा संकल्प":"Our Commitment","सोलर ऊर्जा का विस्तार, रोजगार के अवसर और समाज का विकास!":"Expanding solar energy, creating opportunities and supporting community development!","ईमानदारी और पारदर्शिता":"Honesty and transparency","ग्राहक की जरूरत पर ध्यान":"Focus on customer needs","स्वच्छ ऊर्जा के प्रति जागरूकता":"Awareness of clean energy","समाज के प्रति जिम्मेदारी":"Responsibility towards society",
"हमारी सेवाएँ":"Our Services","आपके लिए सोलर के":"Solar options","सही विकल्प":"that suit you","अपनी बिजली खपत, छत और बजट के बारे में बताइए — हम उपलब्ध विकल्प समझने में मदद करेंगे।":"Tell us about your electricity usage, roof and budget—we’ll help you understand the available options.",
"घरेलू रूफटॉप सोलर":"Residential Rooftop Solar","घर की छत पर सोलर सिस्टम की क्षमता और जरूरत के अनुसार शुरुआती मार्गदर्शन।":"Initial guidance on rooftop solar system capacity and needs for your home.",
"दुकान व संस्थान":"Shops & Institutions","दुकानों, कार्यालयों और संस्थानों के लिए सोलर विकल्पों की जानकारी।":"Solar options for shops, offices and institutions.",
"सोलर पैनल व उपकरण":"Solar Panels & Equipment","उपलब्धता के अनुसार सोलर पैनल और संबंधित उपकरणों के विकल्प।":"Options for solar panels and related equipment, subject to availability.",
"योजना की जानकारी":"Scheme Information","PM सूर्य घर योजना की प्रक्रिया, जरूरी दस्तावेज और पात्रता समझने में सहायता।":"Help understanding the PM Surya Ghar process, required documents and eligibility.",
"इंस्टॉलेशन सहायता":"Installation Support","सेवा क्षेत्र और उपलब्धता के अनुसार इंस्टॉलेशन व तकनीकी सहायता की जानकारी।":"Installation and technical support information based on service area and availability.",
"फ्रेंचाइजी व बिजनेस":"Franchise & Business","सोलर क्षेत्र में व्यवसाय और स्वरोजगार के संभावित अवसरों पर चर्चा।":"Discuss potential business and self-employment opportunities in solar.",
"सरकारी योजना की जानकारी,":"Government scheme information,","आसान भाषा में।":"made easy to understand.","प्रधानमंत्री सूर्य घर: मुफ्त बिजली योजना के तहत पात्र घरेलू उपभोक्ता लागू नियमों के अनुसार रूफटॉप सोलर सब्सिडी के लिए आवेदन कर सकते हैं।":"Eligible residential consumers may apply for rooftop solar subsidies under the PM Surya Ghar: Muft Bijli Yojana, subject to applicable rules.",
"अपनी जरूरत समझें":"Understand your needs","बिजली बिल और मासिक खपत देखें।":"Review your electricity bill and monthly usage.","छत व सिस्टम की जानकारी":"Roof and system assessment","जगह, क्षमता और तकनीकी विकल्प समझें।":"Understand space, capacity and technical options.","आधिकारिक पोर्टल पर जानकारी":"Check the official portal","पात्रता व आवेदन के लिए सरकारी पोर्टल देखें।":"Visit the government portal for eligibility and applications.","Official PM Surya Ghar Portal ↗":"Official PM Surya Ghar Portal ↗",
"सोलर ब्रांड विकल्प":"Solar Brand Options","उत्पाद की उपलब्धता और अधिकृत स्थिति की पुष्टि संपर्क के समय करें।":"Please confirm product availability and authorised status when contacting us.",
"समाज सेवा भी,":"Social responsibility,","हमारी प्राथमिकता।":"is our priority.","हमारा लक्ष्य केवल व्यवसाय करना नहीं, बल्कि सोलर ऊर्जा को बढ़ावा देना और समाज के विकास में योगदान देना है। हम शिक्षा, स्वास्थ्य जागरूकता, कौशल विकास, रोजगार और पर्यावरण संरक्षण जैसे क्षेत्रों में सकारात्मक पहल को प्रोत्साहित करना चाहते हैं।":"Our goal is not only to do business, but also to promote solar energy and contribute to community development. We aim to encourage positive initiatives in education, health awareness, skills, employment and environmental protection.",
"शिक्षा":"Education","बच्चों व युवाओं की शिक्षा के प्रति जागरूकता":"Education awareness for children and youth","पर्यावरण":"Environment","स्वच्छ ऊर्जा और हरित भविष्य":"Clean energy and a greener future","रोजगार":"Employment","कौशल व स्वरोजगार के अवसरों को प्रोत्साहन":"Promoting skills and self-employment","जनकल्याण":"Community Welfare","जिम्मेदार और पारदर्शी सामाजिक भागीदारी":"Responsible and transparent community participation",
"बिहार में हमारा कार्यक्षेत्र":"Our Service Area in Bihar","पटना, मुजफ्फरपुर, सीतामढ़ी, मोतिहारी, बेतिया, समस्तीपुर, हाजीपुर सहित पूरे बिहार में सेवाओं के लिए संपर्क करें।":"Contact us for services in Patna, Muzaffarpur, Sitamarhi, Motihari, Bettiah, Samastipur, Hajipur and across Bihar.","पूरे बिहार में":"Across Bihar",
"सोलर लगवाना है?":"Looking to install solar?","हमें बताइए।":"Tell us about it.","नीचे फॉर्म भरें। आपकी जरूरत के अनुसार संपर्क करने के लिए जानकारी दें।":"Fill in the form below so we can contact you about your needs.",
"आपका नाम *":"Your Name *","पूरा नाम":"Full name","मोबाइल नंबर *":"Mobile Number *","10 अंकों का मोबाइल नंबर":"10-digit mobile number","जिला / शहर *":"District / City *","शहर चुनें":"Choose a city","बिहार का अन्य क्षेत्र":"Other area in Bihar","किस बारे में जानकारी चाहिए? *":"What would you like to know about? *","विकल्प चुनें":"Choose an option","घर के लिए रूफटॉप सोलर":"Residential rooftop solar","दुकान / व्यवसाय के लिए सोलर":"Solar for a shop/business","सोलर पैनल / उपकरण":"Solar panels/equipment","फ्रेंचाइजी / बिजनेस अवसर":"Franchise/business opportunities","सर्विस / शिकायत":"Service/complaint","अन्य पूछताछ":"Other enquiry","अपनी जरूरत बताइए":"Tell us what you need","जैसे: बिजली बिल, छत की जानकारी या कोई सवाल":"E.g. electricity bill, roof details or a question","मैं सहमत हूँ कि SBS Enterprises मेरी पूछताछ के संबंध में मुझसे संपर्क कर सकता है।":"I agree that SBS Enterprises may contact me about my enquiry.","पूछताछ भेजें →":"Submit Enquiry →","चलिए, बात करते हैं।":"Let’s Talk.","सोलर ऊर्जा या योजना से जुड़ी जानकारी के लिए संपर्क करें।":"Contact us for information about solar energy or the scheme.","फोन करें":"Call Us","ईमेल":"Email","WhatsApp पर संपर्क करें ↗":"Contact us on WhatsApp ↗",
"सोलर ऊर्जा से घर-घर खुशहाली,":"Solar energy for happier homes,","समाज सेवा से जन-जन की भलाई!":"social service for the good of all!","आज ही पूछताछ करें":"Enquire Today","हमारे बारे में":"About Us","सेवाएँ":"Services","यह वेबसाइट निजी विक्रेता की जानकारी के लिए है; सरकारी वेबसाइट नहीं है।":"This website provides information about a private vendor; it is not a government website."
};
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "hi";
const originalTextNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.nodeValue.trim()) originalTextNodes.push({node, original: node.nodeValue});
}
const originalAttrs = [];
document.querySelectorAll("input[placeholder],textarea[placeholder],button[aria-label],img[alt]").forEach(el => {
  for (const attr of ["placeholder","aria-label","alt"]) if (el.hasAttribute(attr)) originalAttrs.push({el,attr,original:el.getAttribute(attr)});
});
function setLanguage(language) {
  currentLanguage = language;
  originalTextNodes.forEach(({node,original}) => {
    const trimmed = original.trim();
    const translated = translations[trimmed];
    if (translated) node.nodeValue = original.replace(trimmed, language === "en" ? translated : trimmed);
  });
  const attrs = {
    "Menu kholen":"Open menu",
    "पूरा नाम":"Full name",
    "10 अंकों का मोबाइल नंबर":"10-digit mobile number",
    "जैसे: बिजली बिल, छत की जानकारी या कोई सवाल":"For example: electricity bill, roof details or a question",
    "प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना — घर-घर सोलर से रोशन बिहार":"PM Surya Ghar: Muft Bijli Yojana — solar power for every home in Bihar",
    "SBS Enterprises — Solar Ka Badshah logo":"SBS Enterprises — Solar Ka Badshah logo"
  };
  originalAttrs.forEach(({el,attr,original}) => {
    const translated = attrs[original];
    if (translated) el.setAttribute(attr, language === "en" ? translated : original);
  });
  document.documentElement.lang = language === "en" ? "en" : "hi";
  languageToggle.textContent = language === "en" ? "हिन्दी" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch website language to Hindi" : "Switch website language to English");
}
languageToggle?.addEventListener("click", () => setLanguage(currentLanguage === "hi" ? "en" : "hi"));
