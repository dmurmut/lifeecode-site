# LifeeCode Hindi Episode 22 — NotebookLM Source Pack

**Coverage window:** Sunday 15 – Saturday 21 November 2026 (America/New_York) · **Release:** Tuesday 24 November 2026, 8:00 AM IST
**Verification status:** Built from Run A's opened-source record (`research_notes.md` §3–§6). Run B could not re-open the sources (web-fetch permission unanswered). See `verification_log_hi22.md` before uploading.

## Episode Recommendation

> **पहले AI से पूछते हैं, फिर doctor से? — health सवालों में AI कब काम का, कब नहीं**

बहुत से Indian परिवारों में अब health का पहला सवाल doctor से नहीं, phone पर किसी AI app से पूछा जाता है — रात को आई blood report, हफ़्ते भर की खाँसी, किसी नई दवा का नाम। 17 नवंबर 2026 को release हुए PwC India survey ने इस आदत को आँकड़ों में दिखाया।

उसी दिन दो peer-reviewed studies आईं जो सिक्के के दोनों पहलू दिखाती हैं: London में doctor की निगरानी में AI-drafted discharge summaries अच्छी निकलीं, जबकि Japan में ज़्यादा मानसिक परेशानी वाले लोग emotional support के लिए AI पर ज़्यादा निर्भर दिखे — बिना यह सबूत कि यह सुरक्षित है।

यह episode listener को एक साफ़ आदत देता है: **AI पहला कदम है, आख़िरी फ़ैसला नहीं** — क्या पूछें, क्या AI पर न छोड़ें, और AI में क्या न डालें।

## Why This Matters in India

- **Familiarity:** WhatsApp पर आई report को AI app में "explain" करवाना, symptom type करके पूछना "serious है क्या?", दवा का side effect check करना — रोज़ की बातें हैं।
- **Survey signal:** एक online industry survey (n = 1,005, 15 राज्य + 2 UTs) में करीब 73% Indian respondents ने कहा कि health/wellness सवाल पहली बार आने पर वे AI use करते हैं; health के लिए AI use करने वालों (n = 733) में 68% professional से पहले AI से पूछते हैं, 25% पहले professional से। [H1]
- **Interpretation gap:** लोग AI के confident लहजे को doctor-level जानकारी समझ लेते हैं; और कम लोग सोचते हैं कि report की photo के साथ उनकी पहचान भी upload हो रही है।

## India-First Listener Persona

28–40 साल की working daughter या son, जो शहर में रहते हैं और माता-पिता की health का ध्यान phone से रखते हैं। Reports WhatsApp पर आती हैं, doctor का appointment अगले दिन मिलता है, और बीच की बेचैनी में AI ही "हमेशा जवाब देता है"। वे पढ़े-लिखे हैं, पर यह नहीं जानते कि AI कहाँ भरोसेमंद है और कहाँ नहीं।

दूसरा listener: exam season या नई नौकरी के दबाव में अकेला महसूस करने वाला युवा, जो रात 2 बजे chatbot से बात करता है। उसके लिए tone नरम और सम्मानजनक होना चाहिए।

## Core Thesis

> **AI से समझिए, doctor से तय कीजिए — और अपनी पहचान अपने पास रखिए।**

## What Is India-Specific vs What Is Global

| Layer | What belongs here |
|---|---|
| **India-specific framing** | PwC India survey (self-reported, online, likely urban-skewed); listener scenarios (WhatsApp reports, late-night worry, caring for parents, exam stress); Aadhaar/ABHA numbers as identifiers not to share |
| **Global evidence** | JAMA Network Open, 17 Nov 2026: UK (London NHS) discharge-summary study [H3]; Japan emotional-support AI survey [H4]. **Neither study was done in India.** |

No India-specific clinical evidence on consumer chatbot accuracy is used. No Indian chatbot-usage figures beyond PwC.

## Research Summary for NotebookLM

**PwC Voice of the Consumer 2026: India perspective (17 Nov 2026).** [H1][H2] Online survey of 1,005 Indian consumers in 15 states and 2 union territories (part of a global survey of 21,808 people in 27 countries), fieldwork February–March 2026. Around 90% of Indian respondents use health apps or wearables (global around 80%). Around 73% say they use AI when they first encounter a health or wellness question. Among the 733 who use AI for health questions, 68% go to AI before a healthcare professional and 25% go to a professional first. 81% of app/wearable users (n = 909) would pay more for wearable data that doctors trust and can review (global 65%). Always say "survey में" — this is self-reported, not "all Indians".

**AI drafts, doctors check — JAMA Network Open, 17 Nov 2026 (UK).** [H3] Five London NHS hospitals; 1,294 discharge summaries (645 AI-drafted with GPT-4o mini in a secure data environment, 649 written by clinicians); reviewed by 12 resident doctors. AI drafts were signed off with no or minor edits more often (adjusted difference 22.2 percentage points; about 89.7% vs 67.1%) and fewer were rated potentially harmful in the plan section (26.8% vs 51.5%). Every summary was reviewed by a doctor; the authors say close clinician oversight is needed; patient outcomes were not measured. This was a hospital-controlled system, not a consumer chatbot — do not generalise to free chatbots' accuracy.

**Emotional-support AI — JAMA Network Open, 17 Nov 2026 (Japan).** [H4] Two-wave internet-panel survey of 6,852 adults without a usual source of care. Regular use of AI for emotional support rose from 4.6% in the lowest mental-health-need group to 20.7% in the highest. This is an association only; the authors say it does not show AI is therapeutic or safe and may signal unmet need. Conversation content and safety were not studied.

**What this means for an Indian listener.** AI is reasonably useful for understanding terms and preparing questions; the London study shows AI working well *only* with a doctor checking every output. The Japan study is a caution: people who most need human help may be the ones leaning on AI. Privacy: what you upload leaves your phone; you rarely need your name or ID numbers to ask a health question.

## Recommended Episode Structure

| Segment | Purpose | Listener effect |
|---|---|---|
| **Opening hook** | Midnight blood report pasted into an AI app; "should I increase the medicine?" | Recognition |
| **Why this matters in India** | PwC survey figures, with "online survey" caveat | Relevance |
| **The hidden risk or opportunity** | AI's confidence vs incomplete information | Curiosity |
| **The evidence** | London: "AI ने draft लिखा, पर signature doctor का"; Japan: highest need → most AI reliance, safety unknown | Credibility |
| **What you should do** | "3 सवाल, 3 सीमाएँ" + privacy habit | Action |
| **The futurist lens** | Human-AI collaboration in overloaded health systems — with human checks and data protection | Memorability |

## NotebookLM-Friendly Narrative Brief

आधी रात को पापा की report आती है, उसमें एक number लाल है, और clinic सुबह खुलेगा। हम AI से पूछते हैं — और वह शांति से समझा देता है कि उस test का मतलब क्या है। यह मदद है। लेकिन जब हम अगला सवाल पूछते हैं — "क्या दवा बढ़ा दें?" — तब हम समझ से फ़ैसले की ओर बढ़ जाते हैं, और वहाँ AI के पास पूरी तस्वीर नहीं होती। Doctor मरीज़ की उम्र, बाक़ी बीमारियाँ, चल रही दवाएँ और पुरानी reports देखता है; AI सिर्फ़ वह देखता है जो हमने type किया।

इस हफ़्ते का PwC survey दिखाता है कि यह आदत आम है: survey में करीब 73% लोगों ने कहा कि health सवाल आते ही वे AI की तरफ़ जाते हैं। London की study दिखाती है कि AI अच्छा draft लिख सकता है — पर वहाँ हर draft doctor ने check किया। Japan की study याद दिलाती है कि अकेलेपन में AI सहारा लग सकता है, पर वह इलाज नहीं, और उसकी सुरक्षा पर अभी सबूत नहीं है।

इसलिए rule सीधा है: AI पहला कदम, आख़िरी फ़ैसला नहीं। समझने और सवाल तैयार करने के लिए AI; diagnosis, दवा और emergency के लिए doctor; और पहचान वाली जानकारी अपने पास।

## Suggested Practical Advice Section

1. AI से report के शब्दों का मतलब पूछिए — फ़ैसला नहीं।
2. Doctor से मिलने से पहले AI की मदद से अपने सवालों की list बनाइए, और वह list doctor को दिखाइए।
3. दवा शुरू करना, बंद करना या dose बदलना — कभी AI के कहने पर नहीं।
4. सीने में दर्द, साँस फूलना, बेहोशी जैसे लक्षणों में AI से नहीं, सीधे अस्पताल/doctor के पास जाइए।
5. AI में पूरा नाम, Aadhaar/ABHA number, phone number न डालें; report की photo से नाम वाला हिस्सा crop करें।
6. App की privacy settings एक बार देख लीजिए।
7. मन बहुत भारी हो तो AI के अलावा किसी भरोसेमंद इंसान या professional से भी बात कीजिए।

*(सामान्य शैक्षिक आदतें — personal medical advice नहीं।)*

## Suggested Intro Hook

"रात के साढ़े ग्यारह बजे, family group पर पापा की blood report आती है, एक number लाल रंग में है — और doctor सुबह मिलेंगे। आप क्या करते हैं? अगर आपका जवाब है 'AI से पूछता हूँ', तो आप अकेले नहीं हैं।"

## NotebookLM Instruction (paste into the "Customize" box)

> Create a warm, two-host Hindi/Hinglish conversation (~8 minutes) for LifeeCode Hindi, for Indian listeners. Write Hindi naturally; keep tech terms like AI, app, report, privacy, survey in English. Host A is a curious caregiver who asked AI about her father's blood report; Host B explains the evidence calmly. Use ONLY the facts in this source pack. Say the PwC numbers are from an online survey, not all Indians. Say clearly that the two JAMA studies were done in the UK and Japan, not India, and that the London study used a hospital system with a doctor checking every summary — not a free chatbot. Do not name or judge any specific chatbot or its data policy. Do not give medical advice, doses or helpline numbers. In the mental-health part, be gentle and encourage talking to a trusted person or professional. End with the rule: "AI पहला कदम है, आख़िरी फ़ैसला नहीं." Include one short spoken line that this episode is educational, not personal medical advice. Do not add an outro or website mention — the creator records those separately.

## References

- [H1] PwC India — *Voice of the Consumer 2026: India perspective* (PDF), 17 Nov 2026 — https://www.pwc.in/assets/pdfs/voice-of-the-consumer-2026-india-perspective.pdf
- [H2] PwC India — report landing page, 17 Nov 2026 — https://www.pwc.in/industries/retail-and-consumer/voice-of-the-consumer-2026-india-perspective.html
- [H3] JAMA Network Open — "Clinician Acceptance of Large Language Model–Generated Discharge Summaries", 17 Nov 2026 — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856756
- [H4] JAMA Network Open — "Mental Health Needs and Emotional-Support Artificial Intelligence Use", 17 Nov 2026 — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856761

*Not uploaded to NotebookLM (secondary only, not used): H5/H6 BHASHINI at GDHS 2026; H7 CERT-In/e-Sushrut.*
