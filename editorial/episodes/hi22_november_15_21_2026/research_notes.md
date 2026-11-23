# LifeeCode Hindi — Episode 22 Research Notes

**Coverage window:** Sunday 15 November – Saturday 21 November 2026 (America/New_York)
**Prepared:** Sunday 22 November 2026 (Run A — Research) · Branch `weekly/2026-11-22`
**Planned release:** Tuesday 24 November 2026, 8:00 AM IST (Run B builds the package)
**Status:** Research only. Nothing published.

**Numbering note:** Hindi 20 (`weekly/2026-11-08`) and Hindi 21 (`weekly/2026-11-15`) are on unmerged branches, so this is Hindi Episode 22. The creator should confirm.

---

## 1. Topic

**Working title (Devanagari + Roman):**
**पहले AI से पूछते हैं, फिर doctor से? — health सवालों में AI कब काम का, कब खतरनाक**
*Pehle AI se poochte hain, phir doctor se? — health sawaalon mein AI kab kaam ka, kab khatarnaak*

**One-line angle:** A PwC survey released on 17 November 2026 found that about 73% of Indian respondents turn to AI when a health or wellness question first comes up, and that among Indians who already use AI for health questions, 68% ask AI before a healthcare professional. The same week, two peer-reviewed studies showed both sides of the coin: AI-drafted hospital discharge summaries in London were signed off by doctors more often than doctors' own drafts — *with a doctor checking every one* — while a Japanese study found people with greater mental-health needs were more likely to lean on chatbots for emotional support, with no evidence on whether that is safe. The episode helps listeners use AI as a **pehla kadam, aakhri faisla nahi** (first step, not final decision): what to ask, what never to share, and when to go straight to a doctor.

**Link to this week's English research:** English Episode 24 Signals 2 and 3 (see `../en24_november_15_21_2026/research_and_duplicate_screen.md` §6).

## 2. Why it fits (Hindi skill Steps 1–2)

| Test | Assessment |
|---|---|
| **Familiarity** | Very high. Typing symptoms into ChatGPT/Gemini or a WhatsApp AI, asking AI to "explain my blood report", checking a medicine name before taking it, late-night worry about a parent's report — everyday Indian experiences. |
| **Interpretation need** | High. Listeners need help separating what AI does reasonably well (explaining terms, preparing questions for a doctor) from what it should not do (diagnosis, dosing, emergencies, mental-health crises), and understanding what happens to what they type. |
| **Audio suitability** | Strong. A conversation: one host admits she asked AI about her father's HbA1c report at midnight; the other walks through a simple three-step rule. No charts needed. |
| **Non-repetition** | Known Hindi titles: Ep 1 (smartwatch sleep-score accuracy), Ep 2 (signal vs noise), briefs 8, 9, 11 (wearables-as-clinical-tools themes), Ep 20 (smartwatch and high BP), Ep 21 (DPDP consent and health data). AI-as-first-stop for health questions is new among known titles and moves away from devices. **Limitation:** Hindi Episodes 11–19 titles are not in the repository — the creator should confirm no recent "AI doctor/chatbot" episode. |

## 3. India context

**Survey evidence — PwC "Voice of the Consumer 2026: India perspective" (released 17 Nov 2026)** [H1][H2]
- India sample: 1,005 consumers across 15 states and 2 union territories; global sample 21,808 across 27 countries; fieldwork February–March 2026.
- "Around 90%" of Indian consumers use health apps or wearables (global ~80%).
- "Around 73% of Indian respondents use AI when they first encounter a health or wellness question."
- Among Indians who already use AI for health questions (n = 733): 68% use AI before a healthcare professional; 25% consult a professional first. (Another research pass also noted ~6% use AI only — **not re-confirmed; Run B should not use it unless re-checked in the PDF**.)
- 81% of app/wearable users (n = 909) would pay more for wearable data that doctors trust and can review (global 65%).
- **How to say it:** "एक survey में" / "PwC के survey में करीब 73% लोगों ने कहा…" — it is a single online industry survey, likely skewed to urban, connected consumers. Not "73% of all Indians". Do not cite the global "AI first" figure (the PDF and web page disagree).

**Indian-language AI in hospitals (context, secondary)** [H5][H6]
- At the Global Digital Health Summit, Bharat Mandapam, New Delhi (20–21 Nov 2026), MeitY's BHASHINI showcased voice tools for clinical notes and prescriptions: integration with JIPMER's e-Sushrut system, speech-to-text in AIIMS's eHospital prescription module (piloted in Neurology and Neurosurgery, now rolling out), and the Army's Dhanwantari platform. Reports credit PIB; the PIB release ID was not found. **Use only as "रिपोर्ट्स के मुताबिक", or drop.**

**Listener scenarios (prompts for Run B, not facts)**
- Midnight: father's blood report arrives on WhatsApp; you paste it into an AI app to "explain".
- A cough for a week; you ask AI whether it's "serious" before deciding to visit the clinic.
- Checking a new medicine name or a side effect a relative mentioned.
- Feeling low and lonely during exam season or after a job change; chatting with an AI at 2 a.m. because it "always replies".
- Typing your full name, Aadhaar-linked details or a photo of a prescription into a free chatbot.

**Market data gap:** no credible primary source on Indian chatbot usage beyond the PwC survey was found this run. Run B must not invent figures.

## 4. Global evidence (this week, peer-reviewed)

**AI drafts, doctors check — JAMA Network Open, 17 Nov 2026** [H3]
- Five London NHS hospitals; 1,294 discharge summaries (645 AI, 649 clinician); GPT-4o mini in a secure data environment; 12 resident doctors reviewed.
- AI drafts were signed off with no or minor edits more often (adjusted difference 22.2 percentage points; ~89.7% vs ~67.1%), and fewer were rated potentially harmful in the plan section (26.8% vs 51.5%).
- Doctors reviewed every summary; authors say close clinician oversight is needed. No patient outcomes measured.
- **Hindi framing:** "AI ने draft लिखा, पर signature doctor का" — the lesson is the *checking*, not that AI is a better doctor. Also: this was a hospital system with a secure setup, not a free consumer chatbot.

**Emotional-support AI — JAMA Network Open, 17 Nov 2026 (Japan)** [H4]
- Two-wave internet-panel survey; 6,852 adults without a usual source of care. Regular emotional-support AI use rose from 4.6% (lower need) to 20.7% (highest need).
- Association only; authors say it does not show AI is therapeutic or safe and may signal unmet need; conversation content and safety not studied.
- **Hindi framing:** AI से बात करना अकेलेपन में सहारा लग सकता है, पर ये इलाज नहीं है; अगर मन बहुत भारी है तो किसी भरोसेमंद इंसान या professional से बात करें.

## 5. Suggested practical rule for the episode (editorial, for Run B)

"**3 सवाल, 3 सीमाएँ**":
- AI से पूछ सकते हैं: किसी शब्द/report का मतलब; doctor से पूछने के लिए सवालों की list; general जानकारी.
- AI पर नहीं छोड़ना: diagnosis, दवा की dose बदलना, emergency के लक्षण (सीने में दर्द, साँस फूलना, बेहोशी — सीधे अस्पताल), मन के गंभीर संकट.
- AI में नहीं डालना: पूरा नाम + पहचान वाले नंबर, Aadhaar/ABHA number, साफ़-साफ़ पहचान वाली report की photo — जहाँ ज़रूरी हो, नाम हटा कर पूछें; app की privacy settings देखें.

(These are general educational habits, not medical advice. Run B should keep them framed as "आदतें", and must not claim any specific chatbot stores or trains on health chats unless a verified source says so.)

## 6. Verified sources

| ID | Source | Date | Claim(s) supported | Opened? |
|---|---|---|---|---|
| H1 | PwC India — Voice of the Consumer 2026: India perspective (PDF) — https://www.pwc.in/assets/pdfs/voice-of-the-consumer-2026-india-perspective.pdf | 17 Nov 2026 | Sample, fieldwork, 90%, 73%, 68%/25% (n=733), 81% (n=909) | Yes (twice) |
| H2 | PwC India — report landing page — https://www.pwc.in/industries/retail-and-consumer/voice-of-the-consumer-2026-india-perspective.html | 17 Nov 2026 | Release date | Yes |
| H3 | JAMA Network Open — "Clinician Acceptance of Large Language Model–Generated Discharge Summaries" — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856756 | 17 Nov 2026 | Discharge-summary findings | Yes |
| H4 | JAMA Network Open — "Mental Health Needs and Emotional-Support Artificial Intelligence Use" — https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2856761 | 17 Nov 2026 | Emotional-support AI findings and limits | Yes |
| H5 | Tripura Star News — BHASHINI at GDHS 2026 — https://www.tripurastarnews.com/bhashini-showcases-multilingual-ai-applications-for-healthcare-at-global-digital-health-summit-2026/ | Nov 2026 | Indian-language voice tools in AIIMS/JIPMER/Army | Yes (secondary, credits PIB) |
| H6 | Mumbai Tribune — GDHS 2026 BHASHINI — https://mumbaitribune.in/2026/11/21/gdhs-2026-bhashini-showcases-ai-powered-healthcare-solutions-with-aiims-jipmer-and-indian-army/ | 21 Nov 2026 | Corroborates H5 | Yes (secondary) |
| H7 | MediaNama — CERT-In advisory on C-DAC e-Sushrut — https://www.medianama.com/2026/11/223-cdac-e-sushrut-vulnerabilities/ | 19 Nov 2026 | Alternate topic only (not used) | Yes (secondary; CERT-In page not opened) |

## 7. Limits and safeguards for Run B

- The PwC figures are survey self-reports from one online industry survey; say "survey में", never "Indians are doing X".
- The two JAMA studies are from the UK and Japan — say so; do not imply they were done in India.
- The discharge-summary study used a hospital-controlled AI with doctor review, not a public chatbot; do not generalise to consumer chatbots' accuracy.
- No claims about any named chatbot's data retention or training on health chats unless separately verified (one candidate this week — Google extending Gemini temporary-chat retention — was secondary-only and not health-specific; do not use).
- Mental-health segment: gentle, non-alarmist; include a spoken line encouraging people in distress to talk to a trusted person or a professional; do not give crisis-line numbers unless Run B verifies current ones.
- Spoken educational boundary and the standard disclaimer required.

**Alternate topics (if the creator prefers):** (1) "Aspatal ka software aur aapka medical record — kitna surakshit?" — CERT-In advisory on C-DAC e-Sushrut (17 Nov), needs the CERT-In page verified first; (2) "Pradushan ke mausam mein gadgets — AQI monitor, purifier, SpO2 ka sach" — very seasonal, but needs clinical accuracy sources not yet gathered.
