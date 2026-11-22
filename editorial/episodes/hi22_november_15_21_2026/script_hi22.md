# LifeeCode Hindi — Episode 22 · Full Script

**Title:** पहले AI से पूछते हैं, फिर doctor से? — health सवालों में AI कब काम का, कब नहीं
**Subtitle:** AI को पहला कदम बनाइए, आख़िरी फ़ैसला नहीं
**Coverage window:** रविवार 15 नवंबर – शनिवार 21 नवंबर 2026 (America/New_York)
**Release:** मंगलवार 24 नवंबर 2026, सुबह 8:00 बजे IST
**Target length:** ~9–10 मिनट (creator intro ~45 sec + main conversation ~8 min + creator outro ~25 sec)
**Assembly order:** Creator intro → NotebookLM main audio (या इस script की recording) → Creator outro

> **Fact rule for this script:** हर तथ्य `research_notes.md` के sources H1–H4 से है। इनके अलावा कोई number, app का नाम या तारीख़ न जोड़ें। Source tags `[H1]` आदि सिर्फ़ review के लिए हैं — बोलें नहीं।
>
> **Verification status:** Run B में sources दोबारा नहीं खोले जा सके (web fetch का permission request unanswered रहा)। Script Run A के opened-source record पर आधारित है। Record करने से पहले `verification_log_hi22.md` देखें — सबसे ज़रूरी: PwC के 73% और 68% वाले आँकड़े।
>
> **Deliberately left out:** PwC का "~6% सिर्फ़ AI" आँकड़ा (Run A ने re-confirm नहीं किया), global "AI first" आँकड़ा (PDF और web page में फ़र्क), BHASHINI/AIIMS वाली ख़बर (सिर्फ़ secondary sources, PIB release नहीं मिला), किसी भी chatbot का नाम या उसकी data policy, और helpline numbers (verify नहीं हुए)।

---

## 1. Creator intro (Deveendra — record separately, ~45 sec)

नमस्ते, मैं Deveendra, और आप सुन रहे हैं LifeeCode Hindi — health tech, Hindi में।

रात के साढ़े ग्यारह बजे हैं। Family WhatsApp group पर पापा की blood report आती है। उसमें एक number लाल रंग में है। Doctor का clinic सुबह खुलेगा — तो आप क्या करते हैं? Report की photo किसी AI app में डालते हैं और पूछते हैं, "क्या यह serious है?"

अगर आपने ऐसा किया है, तो आप अकेले नहीं हैं। इसी हफ़्ते आए एक survey में ज़्यादातर Indian लोगों ने कहा कि health का सवाल आते ही वे सबसे पहले AI की तरफ़ जाते हैं।

आज हम समझेंगे — AI health सवालों में कहाँ सच में मदद करता है, कहाँ उस पर नहीं छोड़ना चाहिए, और उसमें क्या कभी नहीं डालना चाहिए।

एक छोटा सा note: यह episode सिर्फ़ जानकारी के लिए है, personal medical advice के लिए नहीं। अगर आपको symptoms या कोई ongoing health concern है, तो qualified doctor से बात करना ज़रूरी है। चलिए, शुरू करते हैं।

---

## 2. Main conversation (two hosts, ~8 min)

*Hosts:* **होस्ट A** — सवाल पूछने वाली, आम user और परिवार का नज़रिया। **होस्ट B** — research और technology को आसान भाषा में समझाने वाला।

### Segment 1 — Opening hook (~45 sec)

**होस्ट A:** मैं एक confession करूँ? पिछले हफ़्ते रात को पापा की report आई। HbA1c थोड़ा बढ़ा हुआ था। मैंने तुरंत AI app खोला और पूछा, "इसका मतलब क्या है, क्या घबराने की बात है?"

**होस्ट B:** और AI ने क्या कहा?

**होस्ट A:** उसने बड़े आराम से समझाया कि HbA1c क्या होता है, पिछले कुछ महीनों की average sugar का अंदाज़ा कैसे देता है। सच कहूँ तो अच्छा लगा। लेकिन फिर मैंने पूछा, "तो क्या दवा बढ़ा देनी चाहिए?" — और वहीं मुझे लगा, रुको, यह सवाल मैं किससे पूछ रही हूँ?

**होस्ट B:** यही आज का पूरा episode है। AI से समझना एक बात है, AI से फ़ैसला करवाना बिल्कुल दूसरी बात।

### Segment 2 — Why this matters in India (~1 min 15 sec)

**होस्ट A:** लेकिन क्या सच में बहुत लोग ऐसा कर रहे हैं, या यह सिर्फ़ मेरी आदत है?

**होस्ट B:** 17 नवंबर को PwC नाम की consulting firm ने India पर एक consumer survey release किया। इसमें 15 राज्यों और 2 union territories के 1,005 लोगों से online सवाल पूछे गए थे। [H1][H2]

**होस्ट A:** और उन्होंने क्या कहा?

**होस्ट B:** करीब 73% लोगों ने कहा कि health या wellness का कोई सवाल पहली बार आता है, तो वे AI का इस्तेमाल करते हैं। [H1] और जो लोग पहले से health के लिए AI use करते हैं, उनमें से 68% ने कहा कि वे doctor या किसी healthcare professional से पहले AI से पूछते हैं। सिर्फ़ 25% पहले professional के पास जाते हैं। [H1]

**होस्ट A:** यानी मेरे जैसे लोग बहुत हैं।

**होस्ट B:** हाँ, लेकिन एक बात साफ़ कर दूँ — यह एक online survey है, ज़्यादातर शहरी, internet से जुड़े लोगों का। इसका मतलब यह नहीं कि "73% Indians" ऐसा करते हैं। पर trend साफ़ है: AI अब बहुत लोगों के लिए health का पहला दरवाज़ा बन गया है।

### Segment 3 — The hidden mismatch (~1 min 15 sec)

**होस्ट A:** तो इसमें दिक्कत क्या है? AI ने तो मुझे सही समझाया।

**होस्ट B:** दिक्कत समझाने में नहीं है। दिक्कत तब है जब हम मान लेते हैं कि जो AI इतने confident तरीक़े से बोल रहा है, वह doctor जितना जानता है।

**होस्ट A:** मतलब?

**होस्ट B:** Doctor आपकी report के साथ आपको देखता है — आपकी उम्र, बाक़ी बीमारियाँ, कौन सी दवाएँ चल रही हैं, पिछली reports। AI को आप सिर्फ़ वह बताते हैं जो आपने type किया। अधूरी जानकारी पर भी वह पूरे भरोसे के साथ जवाब दे सकता है — और कभी-कभी गलत भी हो सकता है।

**होस्ट A:** यानी AI की आवाज़ में confidence है, लेकिन जानकारी में gap।

**होस्ट B:** बिल्कुल। और इस हफ़्ते दो research studies आईं जो यही दो पहलू दिखाती हैं — एक जहाँ AI ने अच्छा काम किया, और एक जहाँ सवाल ज़्यादा हैं।

### Segment 4 — The evidence (~2 min)

**होस्ट A:** पहले अच्छी ख़बर।

**होस्ट B:** यह study London के पाँच सरकारी NHS hospitals की है, JAMA Network Open नाम के medical journal में 17 नवंबर को छपी। [H3] जब कोई मरीज़ hospital से छुट्टी पाता है, तो एक discharge summary बनती है — कि क्या हुआ, कौन सी दवा चलेगी, आगे क्या करना है।

**होस्ट A:** हाँ, वह discharge वाली file।

**होस्ट B:** वही। इस study में करीब 1,300 summaries थीं — आधी AI ने draft कीं, आधी doctors ने। फिर 12 junior doctors ने इन्हें review किया। [H3]

**होस्ट A:** और नतीजा?

**होस्ट B:** AI वाले drafts ज़्यादा बार बिना बदलाव या छोटे-मोटे बदलाव के साथ approve हुए — करीब 90% बनाम 67%। और आगे के plan वाले हिस्से में, संभावित नुक़सान वाली गलती AI drafts में कम पाई गई। [H3]

**होस्ट A:** वाह! तो AI doctor से बेहतर है?

**होस्ट B:** नहीं — और यही सबसे ज़रूरी बात है। तीन चीज़ें ध्यान दीजिए। पहली — हर एक summary doctor ने check की। AI ने draft लिखा, पर signature doctor का था। दूसरी — यह hospital का अपना, सुरक्षित AI system था, कोई free chatbot नहीं। और तीसरी — study ने मरीज़ों पर असर नहीं मापा। Researchers ख़ुद कहते हैं कि doctors की नज़दीकी निगरानी ज़रूरी है। [H3]

**होस्ट A:** "AI ने draft लिखा, पर signature doctor का।" यह अच्छी line है।

**होस्ट B:** अब दूसरी study, Japan से, उसी दिन, उसी journal में। [H4] इसमें करीब 6,850 ऐसे adults से survey किया गया जिनका कोई regular doctor नहीं था। सवाल था — क्या वे emotional support के लिए, यानी मन हल्का करने के लिए, AI से बात करते हैं?

**होस्ट A:** और?

**होस्ट B:** जिन लोगों का मन ज़्यादा परेशान था, वे AI पर ज़्यादा निर्भर थे। सबसे कम ज़रूरत वाले group में करीब 5% लोग regularly AI से emotional support लेते थे; सबसे ज़्यादा ज़रूरत वाले group में करीब 21%। [H4]

**होस्ट A:** यानी जिसे सबसे ज़्यादा मदद चाहिए, वह सबसे ज़्यादा AI के पास जा रहा है।

**होस्ट B:** हाँ। और researchers साफ़ कहते हैं — इससे यह साबित नहीं होता कि AI से बात करना इलाज है या सुरक्षित है। हो सकता है यह इस बात का संकेत हो कि लोगों को असली मदद नहीं मिल पा रही। बातचीत में क्या कहा गया, वह सुरक्षित था या नहीं — यह study ने देखा ही नहीं। [H4]

### Segment 5 — The privacy layer (~1 min)

**होस्ट A:** एक और बात मुझे परेशान करती है। मैंने पापा की report की photo डाली थी — उसमें उनका पूरा नाम, उम्र, lab का नाम, सब था।

**होस्ट B:** यही LifeeCode वाला सवाल है — feature के साथ-साथ data के बारे में भी सोचिए। जो आप type करते हैं या upload करते हैं, वह आपके phone से निकलकर किसी company के server तक जाता है। हर app की policy अलग होती है, और हम आज किसी ख़ास app के बारे में दावा नहीं कर रहे।

**होस्ट A:** तो करें क्या?

**होस्ट B:** आसान आदत — सवाल पूछने के लिए पहचान ज़रूरी नहीं होती। "65 साल के व्यक्ति का HbA1c इतना है, इसका मतलब क्या है?" — इतना काफ़ी है। पूरा नाम, Aadhaar या ABHA number, phone number — ये AI में डालने की ज़रूरत नहीं। Report की photo डालनी ही है, तो नाम वाला हिस्सा पहले crop कर दीजिए। और app की privacy settings एक बार ज़रूर देख लीजिए।

### Segment 6 — What you should do: 3 सवाल, 3 सीमाएँ (~1 min 15 sec)

**होस्ट A:** तो इसे एक simple rule में बताओ, जो मैं मम्मी-पापा को भी समझा सकूँ।

**होस्ट B:** याद रखिए — **AI पहला कदम है, आख़िरी फ़ैसला नहीं।** और इसके साथ तीन बातें।

**AI से पूछ सकते हैं:** report में लिखे किसी शब्द का मतलब; doctor से मिलने से पहले सवालों की list; किसी बीमारी या test के बारे में general जानकारी।

**AI पर नहीं छोड़ना:** diagnosis; दवा शुरू करना, बंद करना या dose बदलना; और emergency के लक्षण — जैसे सीने में दर्द, साँस फूलना, बेहोशी — ऐसे में AI से नहीं, सीधे अस्पताल या doctor के पास जाइए।

**AI में नहीं डालना:** पूरा नाम, पहचान वाले numbers, और ऐसी report की photo जिसमें आपकी पहचान साफ़ दिखती हो।

**होस्ट A:** और अगर मन भारी हो, रात को नींद न आए, और सिर्फ़ AI ही जवाब देता हो?

**होस्ट B:** AI से बात करना उस पल थोड़ा सहारा लग सकता है — इसमें शर्म की कोई बात नहीं। लेकिन वह इलाज नहीं है। अगर मन बहुत भारी है या लंबे समय से ऐसा लग रहा है, तो किसी भरोसेमंद इंसान से — दोस्त, परिवार — या किसी professional से ज़रूर बात कीजिए। आप अकेले नहीं हैं।

### Segment 7 — The futurist lens (~45 sec)

**होस्ट A:** आगे क्या होगा? क्या AI एक दिन doctor की जगह ले लेगा?

**होस्ट B:** London वाली study एक झलक देती है — AI काग़ज़ी काम का बोझ हल्का करता है, और doctor के पास मरीज़ के लिए ज़्यादा समय बचता है। यही human-AI collaboration है। India में, जहाँ doctors पर बहुत भार है, यह बहुत काम आ सकता है — पर तभी जब हर कदम पर इंसानी जाँच हो, और मरीज़ का data सुरक्षित रहे।

**होस्ट A:** यानी अस्पताल में भी वही rule — AI draft करे, इंसान check करे।

**होस्ट B:** और घर पर भी वही। AI से समझिए, doctor से तय कीजिए।

### Closing (~20 sec)

**होस्ट A:** आज का rule एक line में?

**होस्ट B:** **AI पहला कदम है, आख़िरी फ़ैसला नहीं।** पूछिए, समझिए — पर फ़ैसला doctor के साथ कीजिए, और अपनी पहचान अपने पास रखिए।

**होस्ट A:** अगले हफ़्ते फिर मिलेंगे, एक नए health-tech सवाल के साथ।

---

## 3. Creator outro (Deveendra — record separately, ~25 sec)

तो आज की बात याद रखिए — AI से health का सवाल पूछना गलत नहीं है, बस उसे पहला कदम बनाइए, आख़िरी फ़ैसला नहीं। Diagnosis और दवा का फ़ैसला doctor के साथ, और अपनी पहचान अपने पास।

यह episode सिर्फ़ जानकारी के लिए था, medical advice नहीं।

LifeeCode Hindi सुनने के लिए धन्यवाद. और ऐसे ही privacy-first, evidence-based health-tech content के लिए विज़िट करें devmmurmu.com.

सीखते रहें, अपडेटेड रहें, प्राइवेट रहें।

---

## 4. Recording notes

- "PwC" बोलें "पी-डब्ल्यू-सी"; "JAMA" बोलें "जामा"; "NHS" बोलें "एन-एच-एस"; "HbA1c" बोलें "एच-बी-ए-वन-सी"।
- Spoken numbers जानबूझकर गोल किए गए हैं (≈1,300; ≈90% बनाम 67%; ≈5% से ≈21%; ≈6,850)। Exact numbers source pack में हैं।
- Mental-health वाला हिस्सा धीमे, शांत लहजे में। कोई helpline number नहीं बोला गया क्योंकि इस run में current numbers verify नहीं हुए — creator चाहें तो verified number outro में जोड़ सकते हैं।
- Emergency लक्षणों वाली line को AI host के हल्के tone में न पढ़ें — साफ़ और सीधी रखें।
