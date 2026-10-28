/* Original LifeeCode visual fidelity: preserved public archive data plus the approved English Episode 8 release. */
import archive from "../../../migration-source/briefs.json";

export type PrivacyRisk = "low" | "medium" | "high";

export type BriefUpdate = {
  id: number;
  isDeepDive: boolean;
  title: string;
  summary: string;
  whyItMatters: string;
  futuristLens: string;
  source: string;
  sourceLabel: string;
  privacyRisk: PrivacyRisk;
  privacyConcern: string;
  deepDiveContent?: { whatHappened: string; hiddenRisk: string; privacyAngle: string; practicalGuidance: string; biggerPicture: string; };
};

export type PrivacyRadarEntry = { story: string; risk: PrivacyRisk; owners: string; action: string; };
export type GlobalWatch = { title: string; summary: string; source: string; sourceLabel: string; };
export type Brief = { issueNumber: number; weekLabel: string; signal: string; whatsNext: string; updates: BriefUpdate[]; privacyRadar?: PrivacyRadarEntry[]; globalWatch?: GlobalWatch; };

export const episode8: Brief = {
  issueNumber: 8,
  weekLabel: "Week of July 27 – August 2, 2026",
  signal: "The same wearable can face opposite rules depending on the claim on the box. This week, LifeeCode looks at the widening line between wellness trackers and clinical devices, why trust in healthcare may be shaping wearable adoption, uneven consumer-device validation, the FDA’s first live TEMPO pilot participant, and Samsung’s connected-care push. The common thread: more health data can be useful, but clarity about evidence, oversight, and data-sharing is becoming essential.",
  whatsNext: "The practical question is not whether a wearable can collect a signal. It is whether the signal is validated for the decision you want to make—and whether you understand where the resulting data goes.",
  updates: [
    {
      id: 1,
      isDeepDive: true,
      title: "The Same Wearable Can Face Opposite Rules — and That Should Worry You",
      summary: "A July 29 analysis from MD+DI explains that two wearables can use nearly identical hardware yet receive very different regulatory treatment depending on their intended use and marketing claims. Under the FDA’s finalized January 2026 general-wellness guidance, non-invasive, non-implanted wearables using optical sensing or AI/ML may remain in the low-risk wellness lane as long as they do not claim to diagnose, treat, or manage a disease; Class II medical-device features face a higher evidence and monitoring bar.",
      whyItMatters: "A ring, watch, or patch may look medically serious and influence daily health decisions while still being marketed as a general-wellness experience. Before acting on an alert or score, check whether the feature is wellness-only or cleared for clinical use.",
      futuristLens: "The wearable leaders of the next decade may be the companies that clearly separate lifestyle insight from clinical truth, making explainability and evidence product features in their own right.",
      source: "https://www.mddionline.com/wearable-medical-devices/same-hardware-different-rules-why-identical-wearables-face-opposite-regulations",
      sourceLabel: "MD+DI — Same Hardware, Different Rules, July 29, 2026",
      privacyRisk: "medium",
      privacyConcern: "Wellness-labeled wearables can still collect sensitive health data; the label does not explain how a feature was validated, stored, or shared.",
      deepDiveContent: {
        whatHappened: "MD+DI described an increasingly important wearable-health reality: nearly identical sensors can fall under sharply different rules depending on the intended use, software claims, and marketing language. The FDA’s finalized January 2026 general-wellness guidance broadened the low-risk category for non-invasive, non-implanted wearables using technologies such as optical sensing and AI/ML enhancements, provided they stay in the wellness lane rather than claiming diagnosis or treatment.",
        hiddenRisk: "The opportunity is faster access to low-risk health-monitoring features. The risk is confusion: consumers may not be able to tell whether a feature is meant to motivate healthier habits, flag a possible concern, or support a clinical decision. A polished interface and authoritative wording can create trust before medical-device-level validation exists.",
        privacyAngle: "If a wearable or AI feature crosses into Class II medical-device territory, it faces stronger verification, clinical validation against a gold-standard comparator, and ongoing post-market monitoring. Yet wellness-labeled products can collect the same sensitive signals while following a lighter oversight path; users should not mistake lower regulatory scrutiny for an absence of data risk.",
        practicalGuidance: "When a wearable feature influences a health decision, look beyond the headline claim. Check whether the company describes it as general wellness or a cleared clinical use, how the signal was validated, what the known limitations are, and whether clinician confirmation is recommended. Treat an anxiety-provoking alert as a prompt for follow-up, not a diagnosis, and review what data is shared before syncing to third-party apps.",
        biggerPicture: "In the next five to ten years, the strongest wearable-health products may not be those that collect the most data. They may be the ones that make the boundary between lifestyle insight and clinical truth unmistakable. In a crowded AI-and-wearables market, clear evidence and explainability are becoming durable forms of trust."
      }
    },
    {
      id: 2,
      isDeepDive: false,
      title: "Lower Trust in Healthcare May Be Pushing More People Toward Wearables",
      summary: "A July 31 open-access study in DIGITAL HEALTH analyzed 6,118 respondents from the 2022 Health Information National Trends Survey. It found that 33.2% reported using a wearable in the prior year and reported a negative association between trust in the healthcare system and wearable use in its model, alongside the importance of digital readiness.",
      whyItMatters: "Some people may be turning to self-tracking not only because devices are useful, but because they feel more controllable than the healthcare system. That makes it important for clinicians to discuss wearable data in ways that rebuild trust rather than dismiss it.",
      futuristLens: "Wearables will succeed on more than sensor quality. Healthcare systems will need to earn the right to make patient-generated data feel useful, safe, and worth sharing.",
      source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13428102/",
      sourceLabel: "DIGITAL HEALTH — Trust in Healthcare and Wearable Use, July 31, 2026",
      privacyRisk: "medium",
      privacyConcern: "Wearable platforms and connected clinical systems may receive sensitive data; share the specific metrics a clinician needs rather than giving full app access by default."
    },
    {
      id: 3,
      isDeepDive: false,
      title: "Consumer Wearables Still Vary Too Much to Be Treated as Plug-and-Play Clinical Evidence",
      summary: "A July 31 analysis in Applied Clinical Trials argues that consumer-grade wearables remain uneven across endpoints as they move into research and decentralized trials. Heart-rate readings may approach ECG concordance in some settings, while sleep staging, gait metrics, and longitudinal consistency can vary substantially with firmware changes, wear patterns, and opaque algorithms.",
      whyItMatters: "A polished interface can hide weak measurement quality. If a score affects sleep, recovery, or treatment choices, it is worth asking whether that specific metric—not just the device brand—has dependable validation.",
      futuristLens: "The next era of digital health will distinguish devices that are engaging from those that are clinically trustworthy. Not every popular wearable will make that transition.",
      source: "https://www.appliedclinicaltrialsonline.com/view/validity-reliability-regulatory-considerations-consumer-devices-clinical-research-data-collection",
      sourceLabel: "Applied Clinical Trials — Consumer Devices in Clinical Research, July 31, 2026",
      privacyRisk: "medium",
      privacyConcern: "Device clouds, apps, trial databases, and research sponsors can all become data recipients; ask whether data moves through manufacturer clouds or direct research pipelines."
    },
    {
      id: 4,
      isDeepDive: false,
      title: "The FDA Just Moved from Talking About Digital Health to Testing It in Live Chronic-Care Programs",
      summary: "On July 22, the FDA announced Dexcom as the first participant in its TEMPO for Digital Health Devices Pilot, which is linked to the CMS ACCESS model for chronic-condition care. The Dexcom Glucose Health Program is intended to help users and care teams monitor metabolic and nutritional status, receive tailored guidance, and use real-time data and AI insights for decision-making and behavior change.",
      whyItMatters: "This shifts digital health from theory to live care-pathway evaluation. Regulators are examining how these tools perform with real people and outcomes, rather than only discussing what future technology might do.",
      futuristLens: "Chronic-disease management is moving toward blended models where devices, AI guidance, reimbursement design, and real-world outcomes are tested together rather than in isolation.",
      source: "https://www.fda.gov/news-events/press-announcements/fda-announces-first-participant-selected-tempo-digital-health-devices-pilot",
      sourceLabel: "FDA — TEMPO for Digital Health Devices Pilot, July 22, 2026",
      privacyRisk: "medium",
      privacyConcern: "Device makers, care teams, and CMS-linked care programs may hold real-world health data; review consent terms and how monitoring data will be reused."
    },
    {
      id: 5,
      isDeepDive: false,
      title: "Samsung Is Signaling a More Connected Consumer Health Stack — and a Stronger Push for Wearable AI Credibility",
      summary: "In a strategy piece tied to Galaxy Unpacked 2026, Samsung described a connected-care vision linking Samsung Health, food planning, guided fitness, wearable biosignals, a beta Health Assistant, and health foundation-model research. The company also highlighted European clinical-validation partnerships, a decentralized clinical-trial framework, and privacy measures centered on user control, pseudonymization, and multilayered security.",
      whyItMatters: "The future wearable may become part of a wider recommendation system that influences meals, workouts, chronic-condition coaching, and how health data moves across services. Convenience can grow quickly—so can the number of connected data pathways.",
      futuristLens: "The next wearable battle will not be fought on hardware alone. It will be fought on who can connect biosignals, behavior change, evidence, and privacy into a believable health ecosystem.",
      source: "https://news.samsung.com/us/galaxy-unpacked-2026-samsung-partners-envision-connected-care-future-first-signal-lasting-change",
      sourceLabel: "Samsung Newsroom U.S. — Connected Care Future, July 28, 2026",
      privacyRisk: "high",
      privacyConcern: "Device ecosystems, partners, AI layers, and linked services may receive data; turn off unnecessary cross-service connections and review permissions regularly."
    }
  ],
  privacyRadar: [
    { story: "Wellness-vs-medical wearable claims", risk: "medium", owners: "Device makers, companion apps, and linked platforms", action: "Check whether the feature is wellness-only or clinically validated before acting on it." },
    { story: "Wearables and healthcare trust", risk: "medium", owners: "Wearable platforms and any connected clinical systems", action: "Share only the metrics you want a clinician to review, not full app access by default." },
    { story: "Consumer wearables in clinical research", risk: "medium", owners: "Device clouds, apps, trial databases, and research sponsors", action: "Ask whether data flows through manufacturer clouds or direct research pipelines." },
    { story: "FDA TEMPO pilot", risk: "medium", owners: "Device makers, care teams, and CMS-linked care programs", action: "Review consent terms and how real-world data will be monitored and reused." },
    { story: "Connected-care ecosystems", risk: "high", owners: "Device-maker ecosystems, partners, AI layers, and linked services", action: "Turn off unnecessary third-party connections and review cross-service permissions regularly." }
  ],
  globalWatch: {
    title: "Europe’s AI Act Turned Health-AI Trust into an Operational Issue",
    summary: "On August 2, 2026, new EU AI Act transparency rules took effect. The European Commission says certain AI-generated or manipulated content, emotion-recognition and biometric-categorisation tools, and public-interest text without human review face clearer disclosure expectations. For health tech, the strategic signal is broader: trust, labeling, and accountability are moving from prototype talking points to operational requirements.",
    source: "https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_en",
    sourceLabel: "European Commission — Safer and More Transparent AI, August 2, 2026"
  }
};

export const episode9: Brief = {
  issueNumber: 9,
  weekLabel: "Week of August 3 – 9, 2026",
  signal: "Wearables have already proved that people will track themselves. The next test is whether their data can improve care without overwhelming patients, clinicians, or privacy safeguards. This week’s signals show hospital-to-home monitoring expanding, privacy-preserving data infrastructure taking shape, early clinical development moving toward continuous review, and wearables becoming interfaces for clinician-managed therapy.",
  whatsNext: "The breakthrough is not another metric. It is a system that can prove the metric is useful, place it in the right clinical workflow, and protect the person behind the data.",
  updates: [
    {
      id: 1,
      isDeepDive: true,
      title: "The GAO Just Explained Why Wearables Still Struggle to Become Real Clinical Tools",
      summary: "On August 6, the U.S. Government Accountability Office released an independent technology assessment on wearables in clinical decision-making. The GAO acknowledges that smartwatches, glucose monitors, and related devices can establish health baselines, collect more continuous information, flag possible events, and support more timely, personalized care—but it identifies recurring barriers around reliable benefit, clinical-workflow integration, and the complexity of the health-tech marketplace.",
      whyItMatters: "A useful signal on a wrist does not automatically become useful care in a clinic. If you share wearable data, focus on one or two trends and ask what would actually justify follow-up.",
      futuristLens: "The next wearable breakthrough is not another metric; it is a system that can prove the metric helps, deliver it to the right clinician, and protect the person behind the data.",
      source: "https://www.gao.gov/products/gao-26-107847",
      sourceLabel: "U.S. GAO — Wearable Technologies in Clinical Decision-Making, August 6, 2026",
      privacyRisk: "medium",
      privacyConcern: "Clinical use can involve device companies, companion apps, cloud services, clinicians, and health systems; understand where data travels and who is responsible for it.",
      deepDiveContent: {
        whatHappened: "The GAO’s August 6 assessment says wearables with health-related features may give clinicians more timely information, support personalized care, and expand remote monitoring for underserved populations. Yet it found that devices vary in reliability and can be difficult to integrate into clinical work. Its policy options focus on workflow and technology infrastructure, clearer responsibilities for handling data, and better information about device performance.",
        hiddenRisk: "The opportunity is to move from occasional medical snapshots to more continuous, context-aware care—especially for people managing chronic conditions or living far from specialist care. The risk is mistaking collection for usefulness: more data can mean more noise, alerts, and anxiety if there is no evidence-based pathway for interpreting it.",
        privacyAngle: "AI may help draw meaning from large wearable-data streams, but it does not remove data-quality, usability, bias, privacy, or accountability problems. When device data becomes part of clinical decisions, it may move among device makers, companion apps, cloud services, clinicians, and health systems; users need to know who receives it and why.",
        practicalGuidance: "Bring one or two trends that matter to you to an appointment rather than every dashboard. Ask your clinician whether that measure is useful in your situation and what change deserves follow-up. Keep a small context note for unusual readings—sleep, illness, medication changes, exercise, or travel can affect a signal—and review sharing settings before connecting a device to a care program or third-party platform.",
        biggerPicture: "Wearables are entering a maturity test. The market has proved that people will track themselves. Now it must prove that the data can improve care without overwhelming patients, clinicians, or privacy safeguards. The companies that win will not merely collect more biometrics; they will make the right information usable at the right time."
      }
    },
    {
      id: 2,
      isDeepDive: false,
      title: "Philips Is Building a Hospital-to-Home Monitoring Network Around Wearables",
      summary: "Philips announced partnerships to expand its open patient-monitoring ecosystem beyond the hospital bedside. The integrations include wearable and out-of-hospital tools for signals such as temperature, blood pressure, ECG, oxygen saturation, respiration, posture, and activity, supporting continuous visibility from admission through recovery at home.",
      whyItMatters: "Professional wearables are becoming care infrastructure, not just personal gadgets. Future monitoring may follow some patients across hospital, home, and follow-up rather than ending at discharge.",
      futuristLens: "The remote-monitoring question is no longer whether sensors can collect more data; it is whether care teams can turn it into a safe, manageable, privacy-respecting response before a small concern becomes an emergency.",
      source: "https://www.philips.com/a-w/about/news/archive/standard/news/press/2026/philips-expands-open-patient-monitoring-ecosystem-to-help-health-systems-keep-sight-of-patients-beyond-the-bedside.html",
      sourceLabel: "Philips — Open Patient Monitoring Ecosystem, August 6, 2026",
      privacyRisk: "high",
      privacyConcern: "Device partners, monitoring platforms, hospitals, and care teams may receive health data; ask which partners receive it, how long it is retained, and whether nonessential connections can be limited."
    },
    {
      id: 3,
      isDeepDive: false,
      title: "ARPA-H Is Funding a Privacy-Preserving Path for Wearable and Telemedicine Data",
      summary: "ARPA-H began an up-to-$8.1 million HealthyDocs project on August 3 to build secure, interoperable, privacy-preserving health-data infrastructure. The work begins with a low-cost diabetes telemedicine platform intended to integrate clinical information, regulated medical-device data, and consumer-wearable data in a model that can scale across healthcare systems and EHR platforms.",
      whyItMatters: "For people using glucose monitors, wearables, or telemedicine, this addresses a missing layer: connecting data more safely without forcing a choice between fragmented care and uncontrolled sharing.",
      futuristLens: "Digital health may depend less on one perfect app and more on privacy-preserving infrastructure that lets people move their data safely among services they trust.",
      source: "https://arpa-h.gov/explore-funding/awards/4669",
      sourceLabel: "ARPA-H — HealthyDocs Secure Interoperable Health Data Management",
      privacyRisk: "medium",
      privacyConcern: "Telemedicine providers, medical-device vendors, EHR systems, and research infrastructure may handle data; review whether it is used only for care or also for research and product improvement."
    },
    {
      id: 4,
      isDeepDive: false,
      title: "The FDA Is Testing a More Continuous Model for Early Clinical Trials",
      summary: "In an August 6 educational webinar, the FDA explained its proposed Expedited IND Pilot, which would let qualified research institutions provide iterative scientific support while early drug applications are prepared. Rather than waiting for one complete submission, the proposal would allow pieces to be reviewed as they are ready, aiming to identify issues earlier while preserving safety standards.",
      whyItMatters: "Better trial systems may help useful therapies reach studies sooner, but the quality of evidence still matters. Faster should mean earlier scientific clarity, not lower standards.",
      futuristLens: "Clinical development is moving toward continuous evidence generation. The important shift is not a flood of live data, but deciding which data is meaningful enough to support an earlier, safer decision.",
      source: "https://www.fda.gov/news-events/fda-meetings-conferences-and-workshops/expedited-ind-pilot-program-educational-webinar-stakeholders-08062026",
      sourceLabel: "FDA — Expedited IND Pilot Program Educational Webinar, August 6, 2026",
      privacyRisk: "medium",
      privacyConcern: "Trial sponsors, research institutions, regulators, and technology vendors may receive participant data; participants should ask what is monitored, collected, and what happens if a device signal is missed or wrong."
    },
    {
      id: 5,
      isDeepDive: false,
      title: "A Wearable Is Now Part of an Implantable Therapy for Urinary Urgency",
      summary: "Coverage reported FDA 510(k) clearance for Revi Extend, a next-generation implantable tibial neuromodulation system for urgency urinary incontinence. The system is implanted near the ankle and activated by a lightweight external wearable for once-daily home therapy; company-reported pivotal-study outcomes should be read as such, not as independent medical advice.",
      whyItMatters: "Wearables may increasingly move beyond passive tracking to support carefully designed, clinician-managed treatment at home. That makes safety, usability, cybersecurity, and informed consent more consequential.",
      futuristLens: "The future wearable may look less like a dashboard and more like a bridge between a patient, an implanted therapy, and a care team.",
      source: "https://practicalneurology.com/news/revi-extend-cleared-with-15-year-durability-for-urgency-urinary-incontinence/2488073/",
      sourceLabel: "Practical Neurology — Revi Extend Cleared for Urgency Urinary Incontinence",
      privacyRisk: "medium",
      privacyConcern: "The device manufacturer, implanting clinician, and any connected therapy app may receive therapy-use information; ask about connectivity, account security, software updates, and access controls."
    }
  ],
  privacyRadar: [
    { story: "Wearables in clinical decision-making", risk: "medium", owners: "Device makers, app providers, clinicians, and health systems", action: "Bring focused trends to appointments and ask which data is clinically useful before sharing full-device access." },
    { story: "Hospital-to-home monitoring ecosystems", risk: "high", owners: "Device partners, monitoring platforms, hospitals, and care teams", action: "Ask which partners receive data, how long it is retained, and whether you can limit nonessential connections." },
    { story: "HealthyDocs diabetes telemedicine platform", risk: "medium", owners: "Telemedicine providers, medical-device vendors, EHR systems, and research infrastructure", action: "Review consent language and whether data is used only for care or also for research and product improvement." },
    { story: "Continuous clinical-trial data", risk: "medium", owners: "Trial sponsors, research institutions, regulators, and technology vendors", action: "Ask what data is monitored and collected, and what happens if a device signal is missed or wrong." },
    { story: "Wearable-activated therapy", risk: "medium", owners: "Device manufacturer, implanting clinician, and any connected therapy app", action: "Ask about device connectivity, account security, software updates, and who can access therapy-use information." }
  ],
  globalWatch: {
    title: "Why ‘Medical-Looking’ Wearables Can Earn More Trust Than They Deserve",
    summary: "A China-based qualitative study posted on arXiv on August 8 examined how older adults decide whether health-wearable outputs are reliable enough for daily use. Across 31 semi-structured interviews, participants often relied on visible cues—brand, price, medical appearance, interface density, automated prompts, updates, and AI labels—when systems did not clearly show signal quality, uncertainty, failure conditions, or data continuity. It is a preprint, not peer-reviewed research, but its consumer-protection signal is clear: polished design is not proof of validity.",
    source: "https://arxiv.org/abs/2608.08856",
    sourceLabel: "arXiv preprint — Wearing Trust: Older Adults and Health Wearables, August 2026"
  }
};

export const episode11: Brief = {
  issueNumber: 11,
  weekLabel: "Week of August 17 – 23, 2026",
  signal: "Health technology is moving beyond the era of counting everything. The next era is about measuring what matters. This week, LifeeCode examines the FDA’s framework for digitally derived measures, a new regulatory conversation about generative-AI medical devices, condition-specific wearable monitoring, AI-assisted biomarker research, and the safety role of patient trust.",
  whatsNext: "The strongest digital-health tools will not be the ones with the most dashboards. They will be the ones that connect a transparent measurement to a meaningful human outcome, while respecting the people whose data makes that measurement possible.",
  updates: [
    { id: 1, isDeepDive: true, title: "Your Wearable Score Is Not a Clinical Outcome — Until It Proves It Matters", summary: "In August, the FDA released a paper on digitally derived measures created from sensors, software, connected devices, and some AI-enabled tools. The agency’s central point is clear: a measure should not be selected simply because a device can collect it; it should link to an aspect of health meaningful to patients, suit the intended population and use case, and be supported by evidence that it is fit for purpose.", whyItMatters: "When an app introduces a new score, ask what it claims to measure, whether it was tested in people and for a purpose like yours, and what decision—if any—it should change.", futuristLens: "Health technology is moving beyond counting everything. The next era is about measuring what matters—and proving it with transparent, patient-relevant evidence.", source: "https://www.fda.gov/medical-devices/digital-health-center-excellence/key-considerations-development-and-use-digitally-derived-measures-clinical-investigations-fda-paper", sourceLabel: "FDA — Digitally Derived Measures for Clinical Investigations, August 2026", privacyRisk: "medium", privacyConcern: "Sensor data, companion apps, cloud analytics, research teams, sponsors, and AI models may all be part of the data path; understand retention, reuse, and purpose before sharing.", deepDiveContent: { whatHappened: "The FDA’s paper explains how digitally derived measures (DDMs) from digital health technologies may be used as clinical outcome assessments, biomarkers, or parts of broader research endpoints. It distinguishes verification—whether a technology measures the physical parameter it claims—from analytical validation—whether a derived measure reflects the relevant clinical event or characteristic—and clinical validation—whether that measure captures something meaningful about health or disease status.", hiddenRisk: "Continuous data outside clinics could reveal changes a short appointment misses, make clinical trials more accessible, detect safety signals earlier, and show how treatment affects daily life. The hidden risk is metric theater: a clean dashboard can make an inferred score feel more meaningful than it is. If a measure was built in a different population or lacks a clear connection to a patient-important outcome, precision can become an illusion.", privacyAngle: "The FDA says evidence should be proportionate to a digital measure’s risk and intended context of use. A tool used for exploratory research does not have the same evidence needs as a primary endpoint in a pivotal study. Wherever it is used, DDMs can combine sensor data, apps, cloud analytics, research teams, and AI models—so participants need a clear explanation of the data path, retention period, and purpose.", practicalGuidance: "Treat an unclear score as a conversation starter or personal observation, not a diagnosis or treatment instruction. If you are in a study that uses an app or wearable, ask what is measured, how long data is kept, whether raw data is shared, and what happens if the device is inaccurate, lost, or not worn as intended.", biggerPicture: "The strongest digital-health tools will connect a transparent measurement to a meaningful human outcome, while respecting the people whose data makes that measurement possible. More data does not automatically create better evidence." } },
    { id: 2, isDeepDive: false, title: "The FDA Is Asking a New Question About Medical AI: How Much Does It Direct You?", summary: "On August 18, the FDA released a discussion paper seeking input on a future regulatory approach for generative-AI-enabled medical devices. The document is not draft or final guidance; it invites feedback on risk assessment, premarket evaluation, and postmarket monitoring, including a possible framework that considers how independently a system provides information, directs action, or takes action, alongside the severity of harm if it is wrong.", whyItMatters: "‘Ask your doctor’ language does not automatically make an AI recommendation low risk. What matters is what the tool actually encourages you to do and what could happen if it is wrong.", futuristLens: "Health-AI regulation may shift from asking only ‘Is this an AI tool?’ to asking ‘How directly does it shape action, and how serious is the consequence of error?’", source: "https://www.fda.gov/medical-devices/digital-health-center-excellence/considerations-regulation-generative-ai-enabled-medical-devices-discussion-paper-and-request", sourceLabel: "FDA — Generative-AI Medical Devices Discussion Paper, August 18, 2026", privacyRisk: "high", privacyConcern: "AI vendors, device makers, healthcare providers, and possibly third-party model providers can be data recipients; identify whether the tool gives information, directs action, or takes action, and who reviews important outputs." },
    { id: 3, isDeepDive: false, title: "A Parkinson’s Wearable Platform Has Cleared the FDA for Longitudinal Monitoring", summary: "Empatica received FDA 510(k) clearance for its Health Monitoring Platform for Parkinson’s, combining clinical-grade wearables, a patient-facing app, secure cloud infrastructure, and a clinician portal. The platform provides longitudinal measures related to bradykinesia, dyskinesia, tremor, sleep, medication compliance, and other Parkinson disease management parameters.", whyItMatters: "This is a practical example of a wearable moving beyond wellness tracking toward condition-specific care support. It is not a substitute for clinical judgment, and clearance does not mean every metric suits every person.", futuristLens: "The most valuable wearable may not be the one that tries to monitor everyone. It may be the one that measures a specific condition well enough to support a meaningful clinical conversation over time.", source: "https://practicalneurology.com/news/wearable-platform-cleared-for-parkinson-disease-symptom-monitoring/2488145/", sourceLabel: "Practical Neurology — Wearable Platform for Parkinson Disease Monitoring", privacyRisk: "medium", privacyConcern: "The device maker, app and cloud infrastructure, clinician portal, and care team may receive symptom and adherence data; ask what is stored, who can see it, and whether sharing can be limited." },
    { id: 4, isDeepDive: false, title: "Google Research Is Using AI to Find Wearable Biomarker Candidates — With an Important Caveat", summary: "Google Research introduced its Biomarker Discovery Framework, a multi-agent system for prioritizing candidate biomarkers from wearable-sensor data. It combines hypothesis generation, deterministic statistical analysis, literature review, adversarial checks for leakage and overfitting, and human-expert review; across three cohorts totaling 9,279 participant-observations, it recovered known signals and identified candidate measures for further research.", whyItMatters: "AI can find patterns in wearable data that people would miss, but an AI-generated association is not proof that a metric diagnoses a condition or that changing it improves health. A candidate biomarker is the start of research, not the end of it.", futuristLens: "The next wave of health AI should help researchers eliminate weak claims faster, preserve traceability, and make uncertainty visible before a new metric reaches patients.", source: "https://research.google/blog/an-ai-tool-for-prioritizing-candidate-biomarkers-from-wearable-sensor-data/", sourceLabel: "Google Research — Candidate Biomarkers from Wearable Sensor Data", privacyRisk: "high", privacyConcern: "Research institutions, wearable-data platforms, AI infrastructure providers, and expert reviewers may handle data; check whether deidentified data can be linked or reused across projects." },
    { id: 5, isDeepDive: false, title: "Patient Trust Is Not a Soft Issue in Health AI — It Is Part of Safety", summary: "A 2026 systematic review and qualitative meta-synthesis in the Journal of Medical Internet Research examined 25 studies involving 528 patients across multiple countries. It identified recurring concerns about privacy and data security, black-box decision-making, AI reliability, loss of empathy in care, unclear accountability, algorithmic bias, and unequal access.", whyItMatters: "You should not have to become an AI engineer to understand whether a system is involved in your care, what it does, who checks it, or how to request human review. Clear answers are basic conditions of trust.", futuristLens: "The best health-AI products will not treat trust as a branding exercise. They will build it through consent, clear limits, human checkpoints, and a visible path for appeal or review.", source: "https://www.jmir.org/2026/1/e85663/", sourceLabel: "JMIR — Patient Concerns Regarding AI Applications in Health Care", privacyRisk: "high", privacyConcern: "Health systems, AI vendors, clinical documentation platforms, and care teams may handle sensitive information; ask whether AI is used in your care, how to request human review, and how data is protected." }
  ],
  privacyRadar: [
    { story: "Digitally derived measures in clinical research", risk: "medium", owners: "Device makers, apps, cloud-analytics vendors, research teams, and sponsors", action: "Ask what is measured, whether raw or derived data is retained, and whether it will be reused beyond the study." },
    { story: "Generative-AI medical devices", risk: "high", owners: "AI vendors, device makers, healthcare providers, and possible model providers", action: "Identify whether the tool gives information, directs action, or takes action, and who reviews important outputs." },
    { story: "Parkinson’s wearable monitoring", risk: "medium", owners: "Device maker, app and cloud infrastructure, clinician portal, and care team", action: "Ask what symptom and adherence data is stored, who can see it, and whether sharing can be limited." },
    { story: "AI-assisted biomarker discovery", risk: "high", owners: "Research institutions, wearable-data platforms, AI infrastructure providers, and expert reviewers", action: "Treat findings as research candidates; ask whether deidentified data can still be linked or reused across projects." },
    { story: "Patient-facing health AI", risk: "high", owners: "Health system, AI vendor, clinical documentation, and data platforms", action: "Ask whether AI is involved in your care, how to request human review, and how sensitive information is handled." }
  ],
  globalWatch: { title: "India Is Building a National Health-Data Gateway. Consent Must Be as Visible as Convenience.", summary: "India has announced digital-health initiatives built around the Ayushman Bharat Digital Mission, including an updated Aarogya Setu 2.0 app positioned as a personal health-record gateway. Reported features include ABHA health-account management, consent-based sharing of digital records, wearable integration, AI-powered health insights, family health management, and links to public services. Interoperability can reduce friction, but it can also create a larger ecosystem where records, benefits, claims, wearable data, and AI insights sit closer together. Consent should not be a buried button inside such a network.", source: "https://ddindia.co.in/2026/06/health-ministry-launches-aarogya-setu-2-0-rolls-out-new-digital-health-initiatives-to-strengthen-healthcare-ecosystem/", sourceLabel: "DD India — Aarogya Setu 2.0 and New Digital Health Initiatives" }
};

export const briefs = [episode11, episode9, episode8, ...(archive as Brief[])];
export const latestBrief = briefs[0];
export const findBrief = (issueNumber: number) => briefs.find((brief) => brief.issueNumber === issueNumber);
