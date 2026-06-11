/*
 * Hospice Nurse Pocket Toolkit — structured content data
 * Careberry.org
 *
 * SOURCE OF TRUTH: Prior_data/toolkit to print.pdf ("Hospice Clinician Pocket Tool Kit", 82 pp).
 * Every card carries `sourcePages` = the PDF page number(s) the content is drawn from, for
 * traceability and clinical review. Wording is preserved from the PDF; only reorganization,
 * heading-shortening, and direct-synonym search tags have been added. NO new clinical content,
 * doses, links, or resources have been introduced. Items in REVIEW_NOTES.md (e.g. the interactive
 * opioid calculator and ESAS total-score bands) are intentionally EXCLUDED pending Chad/Jen review.
 *
 * Consumed by assets/hospice-toolkit.js (search index + render). Pure data, no logic.
 */
window.hospiceToolkit = [

  /* ============================================================
   * SECTION 1 — EMERGENCY QUICK REFERENCE
   * Fastest field access. Drawn from PDF Section 3 (symptom mgmt),
   * pp. 53-64: emergency dosing table, comfort kits, terminal bleed,
   * seizure safety, SC injection reference.
   * ============================================================ */
  {
    id: "emergency",
    title: "Emergency Quick Reference",
    description: "Dosing, crisis response, comfort kits",
    tone: "danger",
    cards: [
      {
        id: "emergency-dosing",
        title: "Emergency Dosing Quick Reference",
        tags: ["emergency", "crisis", "dosing", "stat", "field", "quick reference"],
        sourcePages: [61, 62],
        contentHtml:
          '<div class="alert alert-red"><strong>Field crisis reference.</strong> Always follow agency policy and review the patient’s current MAR before administering. Adjust dose/frequency for frailty, age, or prior opioid use.</div>' +
          '<table class="ref-table"><tr><th>Symptom</th><th>First-Line Meds</th><th>Typical Emergency Dose</th><th>Route</th></tr>' +
          '<tr><td>Severe Pain</td><td>Morphine Sulfate</td><td>5–10 mg</td><td>SL / SC</td></tr>' +
          '<tr><td>Dyspnea</td><td>Morphine Sulfate<br>Lorazepam</td><td>2.5–5 mg<br>0.5–1 mg</td><td>SL / SC</td></tr>' +
          '<tr><td>Terminal Agitation</td><td>Haloperidol<br>ABH Gel<br>Lorazepam</td><td>1–2 mg<br>1 mL<br>1–2 mg</td><td>SL / Topical / SL</td></tr>' +
          '<tr><td>Terminal Secretions</td><td>Atropine<br>Glycopyrrolate</td><td>1–2 drops<br>0.2 mg</td><td>SL / SC</td></tr>' +
          '<tr><td>Massive Hemorrhage</td><td>Midazolam<br>Lorazepam<br>Morphine</td><td>2–5 mg<br>2 mg<br>5–10 mg</td><td>SL / SC</td></tr>' +
          '<tr><td>Nausea / Vomiting</td><td>Haloperidol<br>Metoclopramide<br>Ondansetron</td><td>0.5–1 mg<br>10 mg<br>4–8 mg</td><td>SL / PO / ODT</td></tr>' +
          '<tr><td>Seizure</td><td>Lorazepam<br>Diazepam (Diastat)</td><td>1–2 mg<br>10–20 mg</td><td>SL / PR</td></tr>' +
          '<tr><td>Fever</td><td>Acetaminophen</td><td>500–1000 mg</td><td>PO / PR</td></tr>' +
          '<tr><td>Constipation</td><td>Bisacodyl Suppository</td><td>10 mg</td><td>PR</td></tr></table>' +
          '<div class="sub-h">Scheduled vs PRN dosing tips</div>' +
          '<ul class="criteria-list"><li>PRNs are best for intermittent symptoms (e.g., breakthrough pain).</li>' +
          '<li>Scheduled dosing is indicated when symptoms are persistent or increasing.</li>' +
          '<li>Titrate upward when PRNs are used &gt;3 times/day.</li>' +
          '<li>Consider adding long-acting medication or infusion route if symptoms are difficult to manage.</li></ul>'
      },
      {
        id: "comfort-kit-general",
        title: "General Comfort Kit",
        tags: ["comfort kit", "comfort pack", "e-kit", "emergency kit", "general"],
        sourcePages: [56],
        contentHtml:
          '<table class="ref-table"><tr><th>Medication</th><th>Purpose</th><th>Typical Dose</th><th>Route</th></tr>' +
          '<tr><td>Morphine Sulfate Oral Solution (20 mg/mL)</td><td>Pain, dyspnea</td><td>0.25–0.5 mL (5–10 mg) q1–2h PRN</td><td>SL / PO</td></tr>' +
          '<tr><td>Lorazepam 0.5–1 mg</td><td>Anxiety, agitation, dyspnea</td><td>0.5–1 mg q4–6h PRN</td><td>SL / PO</td></tr>' +
          '<tr><td>Haloperidol 0.5–2 mg</td><td>Nausea, delirium, agitation</td><td>0.5–1 mg q4–6h PRN</td><td>SL / PO</td></tr>' +
          '<tr><td>Atropine 1% drops</td><td>Terminal secretions</td><td>1–2 drops SL q1h PRN</td><td>SL</td></tr>' +
          '<tr><td>Acetaminophen 500–1000 mg</td><td>Pain, fever</td><td>q6h PRN</td><td>PO / PR</td></tr>' +
          '<tr><td>Bisacodyl suppository</td><td>Constipation</td><td>10 mg PR daily PRN</td><td>PR</td></tr></table>' +
          '<div class="alert alert-blue">If patient is NPO or cannot swallow, most medications may be given sublingually or rectally.</div>'
      },
      {
        id: "comfort-kit-cardiac",
        title: "Cardiac Comfort Kit (CHF / ESHF)",
        tags: ["comfort kit", "cardiac", "CHF", "ESHF", "heart failure"],
        sourcePages: [57],
        contentHtml:
          '<table class="ref-table"><tr><th>Medication</th><th>Purpose</th><th>Typical Dose</th><th>Route</th></tr>' +
          '<tr><td>Morphine Sulfate</td><td>Dyspnea, air hunger</td><td>2.5–5 mg q1h PRN</td><td>SL / SC</td></tr>' +
          '<tr><td>Lorazepam</td><td>Anxiety</td><td>0.5–1 mg q4–6h PRN</td><td>SL</td></tr>' +
          '<tr><td>Furosemide</td><td>Fluid overload</td><td>20–40 mg daily PRN</td><td>PO / IM</td></tr>' +
          '<tr><td>Nitroglycerin SL tabs</td><td>Angina</td><td>0.3–0.6 mg q5 min ×3 PRN</td><td>SL</td></tr>' +
          '<tr><td>Oxygen</td><td>Hypoxia, dyspnea</td><td>1–4 L/min PRN</td><td>Nasal cannula</td></tr></table>' +
          '<div class="alert alert-blue">IM Lasix and Foley can be life-improving in patients with dyspnea due to fluid retention.</div>'
      },
      {
        id: "comfort-kit-seizure",
        title: "Seizure Comfort Kit (terminal neuro)",
        tags: ["comfort kit", "seizure", "neuro", "brain mets", "epilepsy", "convulsion"],
        sourcePages: [58],
        contentHtml:
          '<p class="body-text">For patients with brain metastases, tumors, or seizure history.</p>' +
          '<table class="ref-table"><tr><th>Medication</th><th>Purpose</th><th>Typical Dose</th><th>Route</th></tr>' +
          '<tr><td>Lorazepam</td><td>Acute seizure activity</td><td>1–2 mg q1h PRN</td><td>SL / IV / SC</td></tr>' +
          '<tr><td>Diazepam rectal gel (Diastat)</td><td>Active seizures</td><td>10–20 mg PR once</td><td>PR</td></tr>' +
          '<tr><td>Levetiracetam (Keppra) oral sol.</td><td>Maintenance (if swallowing)</td><td>500–1000 mg BID</td><td>PO</td></tr>' +
          '<tr><td>Clonazepam ODT (if available)</td><td>Seizure control</td><td>0.5–1 mg q8h PRN</td><td>SL</td></tr></table>' +
          '<div class="alert alert-yellow">Train caregivers on when and how to use rectal gel and when to call the nurse or 911. Provide written instructions with PRN parameters; pre-fill MARs or med logs; review comfort kit contents with family at admission or recertification.</div>'
      },
      {
        id: "seizure-safety",
        title: "Seizure Safety Precautions",
        tags: ["seizure", "safety", "recovery position", "aspiration", "first aid"],
        sourcePages: [59, 60],
        contentHtml:
          '<p class="body-text">Seizures in hospice patients may occur with brain metastases, end-stage HIV, stroke, or neurodegenerative disorders.</p>' +
          '<div class="sub-h">Clinician &amp; caregiver actions</div>' +
          '<ul class="criteria-list"><li>DO NOT restrain the patient during a seizure.</li>' +
          '<li>Protect the head with a pillow or folded towel.</li>' +
          '<li>Turn patient onto their side (recovery position) to prevent aspiration.</li>' +
          '<li>Remove nearby hazards (sharp objects, furniture).</li>' +
          '<li>Observe and record the duration of the seizure.</li>' +
          '<li>Do not put anything in the mouth.</li></ul>' +
          '<div class="sub-h">Environmental safety</div>' +
          '<ul class="criteria-list"><li>Remove potential weapons (scissors, sharp tools).</li>' +
          '<li>Secure medical equipment (IV poles, walkers).</li>' +
          '<li>Use low beds and floor mats to prevent injury from falls.</li>' +
          '<li>Ensure side rails are padded (if applicable) and not used as restraints.</li></ul>'
      },
      {
        id: "terminal-bleed-emergency",
        title: "Terminal Bleed / Massive Hemorrhage",
        tags: ["hemorrhage", "terminal bleed", "bleeding", "exsanguination", "crisis"],
        sourcePages: [53, 54],
        contentHtml:
          '<div class="alert alert-red"><strong>Most commonly seen with head/neck, lung, or GI cancers.</strong> Sudden profuse bleeding from mouth, nose, tracheostomy, or rectum; skin turns gray or blue; family panic.</div>' +
          '<div class="sub-h">Emergency response</div>' +
          '<ul class="criteria-list check"><li>DO NOT leave patient alone.</li>' +
          '<li>Apply dark towels to bleeding site (absorbs blood discreetly).</li>' +
          '<li>Administer Midazolam or Lorazepam 2 mg SL/SC.</li>' +
          '<li>Administer Morphine 5–10 mg SC or SL.</li>' +
          '<li>Protect family from trauma (gently guide them out if needed).</li>' +
          '<li>Document time of event, comfort measures, death (if occurred).</li>' +
          '<li>Notify physician and supervisor immediately.</li></ul>' +
          '<div class="script-box">We’re focusing on keeping your loved one comfortable right now.</div>'
      },
      {
        id: "sc-injection-reference",
        title: "SC Injection & Liquid Reference",
        tags: ["subcutaneous", "SC", "injection", "needle", "injection sites"],
        sourcePages: [62, 63],
        contentHtml:
          '<div class="sub-h">SC injection sites</div>' +
          '<ul class="criteria-list"><li>Upper arm, abdomen, thigh, upper buttock.</li>' +
          '<li>Rotate sites every 24 hours.</li>' +
          '<li>Use 25–27g needle, ⅝ inch.</li></ul>'
      }
    ]
  },

  /* ============================================================
   * SECTION 2 — ELIGIBILITY & RECERTIFICATION
   * PDF Section 1, pp. 2-15. Medicare LCD criteria.
   * ============================================================ */
  {
    id: "eligibility",
    title: "Eligibility & Recertification",
    description: "LCD criteria by diagnosis",
    tone: "primary",
    cards: [
      {
        id: "elig-general",
        title: "General Eligibility (All Diagnoses)",
        tags: ["eligibility", "recert", "recertification", "decline", "general", "prognosis", "LCD"],
        sourcePages: [2, 3],
        contentHtml:
          '<div class="alert alert-blue"><strong>Based on Medicare LCDs.</strong> Source: CMS Medicare Coverage Database.</div>' +
          '<p class="muted">A patient may be considered to have a life expectancy of six months or less if they exhibit:</p>' +
          '<ul class="criteria-list"><li>Progressive disease evidenced by worsening clinical status, symptoms, signs, and laboratory results.</li>' +
          '<li>Significant unintentional weight loss (≥10% in the past six months).</li>' +
          '<li>Decreasing anthropometric measurements (e.g., mid-arm circumference).</li>' +
          '<li>Declining serum albumin or cholesterol levels.</li>' +
          '<li>Dysphagia leading to recurrent aspiration and/or inadequate oral intake.</li>' +
          '<li>Decline in Karnofsky Performance Status (KPS) or Palliative Performance Score (PPS) due to disease progression.</li>' +
          '<li>Progression to dependence on assistance with additional activities of daily living (ADLs).</li>' +
          '<li>Progressive stage 3-4 pressure ulcers despite optimal care.</li>' +
          '<li>History of increasing emergency room visits, hospitalizations, or physician visits related to the hospice primary diagnosis.</li></ul>'
      },
      {
        id: "elig-dementia",
        title: "Dementia / Alzheimer’s",
        tags: ["dementia", "alzheimer", "alzheimer's", "FAST", "7C"],
        sourcePages: [4, 5],
        contentHtml:
          '<div class="sub-h">FAST stage 7C or beyond (for Alzheimer’s)</div>' +
          '<ul class="criteria-list"><li>Speech limited to six or fewer intelligible words.</li>' +
          '<li>Inability to ambulate without assistance.</li>' +
          '<li>Inability to sit up independently.</li></ul>' +
          '<div class="sub-h">Plus one or more complications in the past 12 months</div>' +
          '<ul class="criteria-list"><li>Aspiration pneumonia.</li><li>Pyelonephritis.</li><li>Septicemia.</li>' +
          '<li>Multiple stage 3-4 pressure ulcers.</li><li>Recurrent fever after antibiotics.</li>' +
          '<li>Inability to maintain sufficient fluid and calorie intake — weight loss ≥10% in the past six months or serum albumin &lt;2.5 g/dL.</li></ul>'
      },
      {
        id: "elig-chf",
        title: "Heart Disease / CHF",
        tags: ["heart", "CHF", "congestive heart failure", "cardiac", "NYHA", "angina"],
        sourcePages: [5, 6],
        contentHtml:
          '<div class="sub-h">Primary criteria</div>' +
          '<ul class="criteria-list"><li>New York Heart Association (NYHA) Class IV symptoms (e.g., symptoms at rest).</li>' +
          '<li>Inability to carry out minimal physical activity without dyspnea or angina.</li>' +
          '<li>Optimally treated with diuretics, vasodilators, ACE inhibitors, hydralazine, or nitrates.</li>' +
          '<li>Angina at rest, resistant to standard nitrate therapy, and either not a candidate for or declined invasive procedures.</li></ul>' +
          '<div class="sub-h">Supporting documentation may include</div>' +
          '<ul class="criteria-list"><li>Ejection fraction (EF) &lt;20%.</li>' +
          '<li>Treatment-resistant symptomatic dysrhythmias.</li>' +
          '<li>History of cardiac-related syncope or CVA due to cardiac embolism.</li>' +
          '<li>History of cardiac resuscitation.</li></ul>' +
          '<div class="sub-h">Signs / symptoms that may present</div>' +
          '<p class="body-text">Orthopnea, paroxysmal nocturnal dyspnea, dependent edema, syncope, weakness, chest pain, diaphoresis, cachexia, jugular-venous distention, rales, liver enlargement.</p>'
      },
      {
        id: "elig-copd",
        title: "Pulmonary Disease / COPD",
        tags: ["COPD", "pulmonary", "lung", "respiratory", "hypoxemia", "dyspnea"],
        sourcePages: [6, 7],
        contentHtml:
          '<ul class="criteria-list"><li>Disabling dyspnea at rest, poorly responsive to bronchodilators.</li>' +
          '<li>Decreased functional capacity, leading to bed-to-chair existence, fatigue, and cough.</li>' +
          '<li>Progression of disease evidenced by increasing office, home, emergency department visits, and/or hospitalizations for pulmonary infections or respiratory failure.</li></ul>' +
          '<div class="sub-h">Documentation within the past three months of</div>' +
          '<ul class="criteria-list"><li>Resting arterial hypoxemia (pO₂ &lt;55 mmHg by arterial blood gas) or oxygen saturation &lt;88%.</li>' +
          '<li>Hypercapnia (pCO₂ &gt;50 mmHg).</li></ul>' +
          '<div class="sub-h">Supporting documentation may include</div>' +
          '<ul class="criteria-list"><li>Cor pulmonale and right heart failure.</li><li>Unintentional progressive weight loss.</li></ul>'
      },
      {
        id: "elig-cancer",
        title: "Cancer",
        tags: ["cancer", "malignancy", "metastatic", "oncology", "tumor", "PPS"],
        sourcePages: [7, 8],
        contentHtml:
          '<ul class="criteria-list"><li>Disease with metastases at presentation.</li>' +
          '<li>Progression from an earlier stage of disease to metastatic disease with either continued decline despite therapy, or the patient declines further disease-directed therapy.</li>' +
          '<li>Certain cancers with poor prognoses (e.g., small cell lung cancer, brain cancer, pancreatic cancer) may be hospice eligible without fulfilling the other criteria.</li>' +
          '<li>PPS ≤ 70%.</li></ul>'
      },
      {
        id: "elig-stroke-coma",
        title: "Stroke / Coma",
        tags: ["stroke", "CVA", "coma", "PPS", "dysphagia", "aspiration"],
        sourcePages: [8, 9],
        contentHtml:
          '<ul class="criteria-list"><li>Palliative Performance Scale (PPS) ≤40%.</li>' +
          '<li>Poor nutritional status with inability to maintain sufficient fluid and calorie intake, evidenced by: 10% weight loss in past six months or 7.5% in last 3 months; serum albumin &lt;2.5 g/dL.</li>' +
          '<li>Current history of pulmonary aspiration not responsive to speech language pathology.</li>' +
          '<li>Dysphagia severe enough to prevent the patient from receiving food and fluid necessary to sustain life, in a patient who declines or does not receive artificial nutrition/hydration.</li>' +
          '<li>Sequential calorie counts documenting inadequate caloric/fluid intake.</li></ul>' +
          '<div class="sub-h">Supplemental findings</div>' +
          '<p class="body-text">Aspiration pneumonia, upper UTI, sepsis, refractory decubitus ulcers stage 3-4, recurrent fever after antibiotics.</p>'
      },
      {
        id: "elig-als",
        title: "Amyotrophic Lateral Sclerosis (ALS)",
        tags: ["ALS", "Lou Gehrig", "motor neuron", "vital capacity", "neuro"],
        sourcePages: [9, 10, 11],
        contentHtml:
          '<p class="body-text">Patients with ALS are considered to be in the terminal stage (life expectancy of six months or less) if they exhibit:</p>' +
          '<div class="sub-h">Critically impaired breathing capacity</div>' +
          '<ul class="criteria-list"><li>Dyspnea at rest.</li><li>Vital capacity less than 30%.</li>' +
          '<li>Requirement of supplemental oxygen at rest.</li><li>Declines artificial ventilation.</li></ul>' +
          '<div class="sub-h">Rapid disease progression</div>' +
          '<ul class="criteria-list"><li>Progression from independent ambulation to wheelchair or bed-bound status.</li>' +
          '<li>Progression from normal to barely intelligible or unintelligible speech.</li>' +
          '<li>Progression from normal to pureed diet.</li>' +
          '<li>Progression from independence in most or all ADLs to needing major assistance in all ADLs.</li></ul>' +
          '<div class="sub-h">Severe nutritional impairment</div>' +
          '<ul class="criteria-list"><li>Oral intake insufficient to sustain life.</li><li>Continuing weight loss.</li>' +
          '<li>Dehydration or hypovolemia.</li><li>Absence of artificial feeding methods.</li></ul>' +
          '<div class="sub-h">Life-threatening complications within the past 12 months</div>' +
          '<p class="body-text">Recurrent aspiration pneumonia, pyelonephritis, sepsis, recurrent fever after antibiotics, stage 3 or 4 pressure ulcers.</p>'
      },
      {
        id: "elig-hiv",
        title: "HIV Disease",
        tags: ["HIV", "AIDS", "CD4", "viral load", "immunodeficiency"],
        sourcePages: [11, 12],
        contentHtml:
          '<div class="sub-h">Core criteria</div>' +
          '<ul class="criteria-list"><li>CD4+ count less than 25 cells/mm³.</li>' +
          '<li>Persistent viral load greater than 100,000 copies/mL.</li>' +
          '<li>Palliative Performance Score (PPS) less than 50%.</li></ul>' +
          '<div class="sub-h">Plus at least one of the following conditions</div>' +
          '<p class="body-text">CNS lymphoma; untreated or refractory wasting (loss of &gt;33% lean body mass); Mycobacterium avium complex (MAC) bacteremia, untreated or refractory; progressive multifocal leukoencephalopathy; systemic lymphoma; refractory visceral Kaposi’s sarcoma; renal failure in the absence of dialysis; refractory cryptosporidium infection; refractory toxoplasmosis.</p>' +
          '<div class="sub-h">Supplemental findings</div>' +
          '<p class="body-text">Chronic persistent diarrhea for 1 year; persistent serum albumin &lt;2.5 g/dL; concomitant active substance abuse; age &gt;50 years; absence/resistance to antiviral, chemo, or prophylactic HIV treatments; advanced AIDS dementia complex; CHF symptomatic at rest; toxoplasmosis; advanced liver disease.</p>'
      },
      {
        id: "elig-liver",
        title: "Liver Disease",
        tags: ["liver", "cirrhosis", "hepatic", "end-stage liver", "ascites", "INR"],
        sourcePages: [12, 13],
        contentHtml:
          '<div class="sub-h">Synthetic liver failure, demonstrated by</div>' +
          '<ul class="criteria-list"><li>Prothrombin time (PT) prolonged more than five seconds over control, or INR &gt;1.5.</li>' +
          '<li>Serum albumin &lt;2.5 g/dL.</li></ul>' +
          '<div class="sub-h">Plus one or more of the following</div>' +
          '<ul class="criteria-list"><li>Ascites, refractory to treatment.</li>' +
          '<li>History of spontaneous bacterial peritonitis.</li>' +
          '<li>Hepatorenal syndrome (elevated creatinine and BUN with oliguria &lt;500 cc/day and urine sodium &lt;10 mEq).</li>' +
          '<li>Hepatic encephalopathy, refractory to treatment (decreased awareness, disturbed sleep, depressed/labile mood, somnolence, slurred speech).</li>' +
          '<li>History of recurrent variceal bleeding despite therapy.</li></ul>' +
          '<div class="sub-h">Supplemental findings</div>' +
          '<p class="body-text">Progressive malnutrition, muscle wasting, continued alcoholism, liver cancer, Hepatitis B or C refractory to interferon treatment.</p>'
      },
      {
        id: "elig-parkinsons",
        title: "Parkinson’s Disease",
        tags: ["parkinson", "parkinson's", "neuro", "vital capacity", "progression"],
        sourcePages: [13, 14, 15],
        contentHtml:
          '<p class="body-text">Patients with Parkinson’s disease are considered to be in the terminal stage if they exhibit:</p>' +
          '<div class="sub-h">Rapid disease progression</div>' +
          '<ul class="criteria-list"><li>Progression from independent ambulation to wheelchair or bed-bound status.</li>' +
          '<li>Progression from normal to barely intelligible or unintelligible speech.</li>' +
          '<li>Progression from normal to pureed diet.</li>' +
          '<li>Progression from independence in most or all ADLs to needing major assistance in all ADLs.</li></ul>' +
          '<div class="sub-h">Severe nutritional impairment / breathing</div>' +
          '<ul class="criteria-list"><li>Oral intake insufficient to sustain life; continuing weight loss; dehydration or hypovolemia; absence of artificial feeding methods.</li>' +
          '<li>Dyspnea at rest; vital capacity &lt;30% of predicted; supplemental O₂ required at rest; patient declines artificial ventilation.</li></ul>' +
          '<div class="sub-h">Life-threatening complications within the past 12 months</div>' +
          '<p class="body-text">Recurrent aspiration pneumonia, pyelonephritis, recurrent fever after antibiotic, stage 3 or 4 decubitus ulcers.</p>'
      }
    ]
  },

  /* ============================================================
   * SECTION 3 — ASSESSMENT TOOLS
   * PDF Section 2, pp. 16-31. TUG (pp. 21-22) and NYHA (p. 28)
   * are present in the PDF (see REVIEW_NOTES.md).
   * ============================================================ */
  {
    id: "assessment",
    title: "Assessment Tools",
    description: "PPS, FAST, Braden, scales",
    tone: "accent",
    cards: [
      {
        id: "assess-muac",
        title: "Mid-Upper Arm Circumference (MUAC)",
        tags: ["MUAC", "mid-arm", "nutrition", "malnutrition", "anthropometric"],
        sourcePages: [16, 17],
        contentHtml:
          '<p class="body-text">Used to measure nutritional status when weight is not reliably obtained.</p>' +
          '<div class="sub-h">How to measure</div>' +
          '<ul class="criteria-list"><li>Ask the patient to bend their arm to 90°.</li>' +
          '<li>Locate the midpoint between the acromion (shoulder bone) and olecranon (elbow).</li>' +
          '<li>With arm relaxed at side, wrap a MUAC tape around the midpoint. Record in cm.</li></ul>' +
          '<div class="sub-h">Interpretation</div>' +
          '<ul class="criteria-list"><li>&lt;23 cm in adults may indicate malnutrition.</li>' +
          '<li>&lt;21 cm is often a red flag in hospice.</li></ul>'
      },
      {
        id: "assess-bmi",
        title: "Body Mass Index (BMI)",
        tags: ["BMI", "body mass index", "cachexia", "underweight", "nutrition"],
        sourcePages: [17],
        contentHtml:
          '<p class="body-text">Used to assess underweight or cachexia as part of hospice criteria.</p>' +
          '<div class="sub-h">Formula</div>' +
          '<p class="body-text">BMI = weight (kg) ÷ height (m²) — or — BMI = [weight (lb) ÷ height (in²)] × 703</p>' +
          '<div class="sub-h">Categories</div>' +
          '<ul class="criteria-list"><li>&lt;18.5 = Underweight</li><li>18.5–24.9 = Normal</li>' +
          '<li>&lt;22 in elderly = may be considered undernourished</li></ul>'
      },
      {
        id: "assess-pain-scales",
        title: "Pain Scales (NRS, FACES, FLACC, PAINAD)",
        tags: ["pain scale", "NRS", "Wong-Baker", "FACES", "FLACC", "PAINAD", "pain assessment"],
        sourcePages: [17, 18, 19, 20, 21],
        contentHtml:
          '<div class="sub-h">Numeric Rating Scale (NRS)</div>' +
          '<p class="body-text">“Rate your pain from 0 (no pain) to 10 (worst pain).”</p>' +
          '<div class="sub-h">Wong-Baker FACES Pain Rating Scale</div>' +
          '<p class="body-text">Used with children or cognitively impaired adults. Show the patient the six faces and ask them to point to the face that shows how they feel.</p>' +
          '<table class="ref-table"><tr><th>Rating</th><th>Description</th></tr>' +
          '<tr><td>0</td><td>No hurt</td></tr><tr><td>2</td><td>Hurts a little bit</td></tr>' +
          '<tr><td>4</td><td>Hurts a little more</td></tr><tr><td>6</td><td>Hurts even more</td></tr>' +
          '<tr><td>8</td><td>Hurts a whole lot</td></tr><tr><td>10</td><td>Hurts worst</td></tr></table>' +
          '<div class="sub-h">FLACC Scale (Face, Legs, Activity, Cry, Consolability)</div>' +
          '<p class="body-text">For nonverbal patients. Each category scored 0–2.</p>' +
          '<table class="ref-table"><tr><th>Category</th><th>0</th><th>1</th><th>2</th></tr>' +
          '<tr><td>Face</td><td>No expression or smile</td><td>Occasional grimace or frown</td><td>Frequent frown, clenched jaw, quivering chin</td></tr>' +
          '<tr><td>Legs</td><td>Normal position or relaxed</td><td>Uneasy, restless, tense</td><td>Kicking or legs drawn up</td></tr>' +
          '<tr><td>Activity</td><td>Lying quietly, normal movement</td><td>Squirming, shifting, tense</td><td>Arched, rigid, or jerking</td></tr>' +
          '<tr><td>Cry</td><td>No cry (awake or asleep)</td><td>Moans or whimpers, occasional complaint</td><td>Crying steadily, screams or sobs</td></tr>' +
          '<tr><td>Consolability</td><td>Content, relaxed</td><td>Reassured by touch or talking</td><td>Difficult to console or comfort</td></tr></table>' +
          '<p class="muted">0 = Relaxed and comfortable · 1–3 = Mild discomfort · 4–6 = Moderate pain · 7–10 = Severe discomfort/pain</p>' +
          '<div class="sub-h">PAINAD (Pain Assessment in Advanced Dementia)</div>' +
          '<table class="ref-table"><tr><th>Behavior</th><th>0</th><th>1</th><th>2</th></tr>' +
          '<tr><td>Breathing</td><td>Normal</td><td>Occasional labored, short hyperventilation</td><td>Noisy/labored, Cheyne-Stokes</td></tr>' +
          '<tr><td>Negative Vocalization</td><td>None</td><td>Occasional moan/groan, disapproving</td><td>Repeated calling out, crying</td></tr>' +
          '<tr><td>Facial Expression</td><td>Smiling/inexpressive</td><td>Sad, frightened, frown</td><td>Grimacing</td></tr>' +
          '<tr><td>Body Language</td><td>Relaxed</td><td>Tense, pacing, fidgeting</td><td>Rigid, strikes out</td></tr>' +
          '<tr><td>Consolability</td><td>No need</td><td>Distracted/reassured</td><td>Unable to console</td></tr></table>' +
          '<p class="muted">Observe behavior for 2–5 minutes; total for a maximum of 10. 0–1 = No or minimal pain · 2–3 = Mild · 4–6 = Moderate · 7–10 = Severe.</p>'
      },
      {
        id: "assess-tug",
        title: "TUG Test — Timed Up and Go",
        tags: ["TUG", "timed up and go", "mobility", "fall risk", "gait", "balance"],
        sourcePages: [21, 22],
        contentHtml:
          '<div class="sub-h">What it measures</div>' +
          '<p class="body-text">Functional mobility, fall risk, lower extremity strength, balance and gait.</p>' +
          '<div class="sub-h">How to perform</div>' +
          '<ul class="criteria-list"><li>Patient sits in a standard armchair (seat height ~17–18”).</li>' +
          '<li>Say: “When I say ‘go,’ stand up from the chair, walk at your normal pace to the line [3 meters/10 feet away], turn around, walk back, and sit down.”</li>' +
          '<li>Start the stopwatch when the patient begins to rise; stop when fully seated again.</li>' +
          '<li>Note use of arms, assistive devices, gait stability, turning ability, and fatigue.</li></ul>' +
          '<table class="ref-table"><tr><th>Time</th><th>Interpretation</th></tr>' +
          '<tr><td>&lt;10 sec</td><td>Independent, low fall risk</td></tr>' +
          '<tr><td>10–19 sec</td><td>Mostly independent, some risk</td></tr>' +
          '<tr><td>20–29 sec</td><td>Needs assist, higher fall risk</td></tr>' +
          '<tr><td>≥30 sec</td><td>Severe mobility issues; high risk</td></tr></table>' +
          '<p class="muted">Sample documentation: “TUG: 18 seconds with cane. Patient required armrests to stand. Mild unsteadiness noted on return.”</p>'
      },
      {
        id: "assess-esas",
        title: "ESAS (Edmonton Symptom Assessment System)",
        tags: ["ESAS", "edmonton", "symptom assessment", "quality of life", "symptom burden"],
        sourcePages: [23, 24],
        contentHtml:
          '<p class="body-text">Used to quantify quality-of-life decline. Patients rate the severity of 9 core symptoms on a scale from 0 to 10, with an optional 10th “Other” symptom.</p>' +
          '<div class="sub-h">Symptoms rated (0 = none ↔ 10 = worst possible)</div>' +
          '<ul class="criteria-list"><li>Pain</li><li>Tiredness (fatigue, low energy)</li><li>Drowsiness (sleepiness)</li>' +
          '<li>Nausea</li><li>Depression (sadness, hopelessness)</li><li>Anxiety (worry, nervousness)</li>' +
          '<li>Appetite (poor appetite = higher score)</li><li>Well-being (overall sense of feeling unwell)</li>' +
          '<li>Shortness of breath</li><li>Other (e.g., constipation, itch)</li></ul>' +
          '<div class="sub-h">Instructions</div>' +
          '<ul class="criteria-list"><li>Ask the patient to rate each symptom over the past 24 hours.</li>' +
          '<li>If they are unable to rate, a clinician or caregiver may assist with observational input.</li>' +
          '<li>Document changes over time to track symptom burden.</li></ul>' +
          '<p class="muted">Per-symptom interpretation: 0–3 = Mild · 4–6 = Moderate · 7–10 = Severe. You can use the total score (max 100) or trends over time for symptom trajectory.</p>'
      },
      {
        id: "assess-fall-risk",
        title: "Fall Risk Assessment (Morse-based)",
        tags: ["fall risk", "Morse", "falls", "safety", "ambulatory aid"],
        sourcePages: [25, 26],
        contentHtml:
          '<table class="ref-table"><tr><th>Risk Factor</th><th>Criteria / Score</th></tr>' +
          '<tr><td>History of Falls (within 3 months)</td><td>Yes = 25 pts / No = 0 pts</td></tr>' +
          '<tr><td>Secondary Diagnosis (2+ active issues)</td><td>Yes = 15 pts / No = 0 pts</td></tr>' +
          '<tr><td>Ambulatory Aid</td><td>None = 0 / Cane/walker = 15 / Furniture = 30</td></tr>' +
          '<tr><td>IV / Heparin Lock</td><td>Yes = 20 pts / No = 0 pts</td></tr>' +
          '<tr><td>Gait / Transferring</td><td>Normal = 0 / Weak = 10 / Impaired = 20</td></tr>' +
          '<tr><td>Mental Status</td><td>Aware of limitations = 0 / Forgets = 15</td></tr></table>' +
          '<div class="sub-h">Scoring interpretation (Morse Scale-based)</div>' +
          '<ul class="criteria-list"><li>0–24 = Low Risk</li><li>25–44 = Moderate Risk</li>' +
          '<li>≥45 = High Risk — preventive measures required</li></ul>' +
          '<div class="sub-h">Recommended interventions for high-risk patients</div>' +
          '<ul class="criteria-list"><li>Keep call light and belongings within reach.</li>' +
          '<li>Non-skid socks or shoes.</li><li>Frequent rounding or supervision.</li>' +
          '<li>Reassess environment (cords, rugs, clutter).</li><li>Educate caregivers and family.</li></ul>' +
          '<p class="muted">Complete at admission, recertification, or after any fall. Reassess with change in status, meds, or environment.</p>'
      },
      {
        id: "assess-braden",
        title: "Braden Scale (Pressure Injury Risk)",
        tags: ["Braden", "pressure injury", "pressure ulcer", "skin", "decubitus", "wound"],
        sourcePages: [26, 27, 28],
        contentHtml:
          '<p class="body-text">Score each of the 6 categories (Sensory Perception, Moisture, Activity, Mobility, Nutrition each 1–4; Friction &amp; Shear 1–3) for a total possible score of 6–23.</p>' +
          '<table class="ref-table"><tr><th>Total Score</th><th>Risk Level</th></tr>' +
          '<tr><td>19–23</td><td>No Risk</td></tr><tr><td>15–18</td><td>Mild Risk</td></tr>' +
          '<tr><td>13–14</td><td>Moderate Risk</td></tr><tr><td>10–12</td><td>High Risk</td></tr>' +
          '<tr><td>≤9</td><td>Very High Risk</td></tr></table>' +
          '<p class="muted">Use at admission, recert, and with any change in mobility, nutrition, or cognition; as part of skin integrity documentation.</p>'
      },
      {
        id: "assess-nyha",
        title: "NYHA Classification",
        tags: ["NYHA", "new york heart association", "CHF", "heart failure", "class IV"],
        sourcePages: [28],
        contentHtml:
          '<table class="ref-table"><tr><th>Class</th><th>Symptoms</th></tr>' +
          '<tr><td>I</td><td>No symptoms</td></tr>' +
          '<tr><td>II</td><td>Slight limitations with ordinary activity</td></tr>' +
          '<tr><td>III</td><td>Marked limitation, symptoms with less-than-ordinary activity</td></tr>' +
          '<tr><td>IV</td><td>Symptoms at rest (meets hospice CHF LCD)</td></tr></table>'
      },
      {
        id: "assess-pps",
        title: "Palliative Performance Scale (PPS)",
        tags: ["PPS", "palliative performance", "functional status", "performance scale"],
        sourcePages: [29, 30],
        contentHtml:
          '<div class="alert alert-green">Hospice supportive range: PPS ≤ 50% (significant decline). PPS ≤ 40% often aligns with recertification criteria.</div>' +
          '<p class="body-text">Describes functional status in 10% increments. Match the patient’s condition with the best-fit row.</p>' +
          '<table class="ref-table"><tr><th>PPS%</th><th>Ambulation</th><th>Activity &amp; Disease</th><th>Self-Care</th><th>Intake</th><th>Consciousness</th></tr>' +
          '<tr><td>100%</td><td>Full</td><td>Normal, no disease</td><td>Full</td><td>Normal</td><td>Full</td></tr>' +
          '<tr><td>90%</td><td>Full</td><td>Some symptoms</td><td>Full</td><td>Normal</td><td>Full</td></tr>' +
          '<tr><td>80%</td><td>Full</td><td>Normal effort, some disease</td><td>Full</td><td>Normal or reduced</td><td>Full</td></tr>' +
          '<tr><td>70%</td><td>Reduced</td><td>Unable normal job/activity</td><td>Some help</td><td>Normal or reduced</td><td>Full</td></tr>' +
          '<tr><td>60%</td><td>Reduced</td><td>Unable hobby/housework</td><td>Some help</td><td>Reduced</td><td>Full or confusion</td></tr>' +
          '<tr><td>50%</td><td>Mainly sit/lie</td><td>Significant disease</td><td>Considerable help</td><td>Reduced</td><td>Full or drowsy ± confusion</td></tr>' +
          '<tr><td>40%</td><td>In bed most of day</td><td>Extensive disease</td><td>Mainly assist</td><td>Minimal</td><td>Drowsy ± confusion</td></tr>' +
          '<tr><td>30%</td><td>Totally bed bound</td><td>Total care needed</td><td>Total care</td><td>Minimal</td><td>Drowsy ± confusion</td></tr>' +
          '<tr><td>20%</td><td>Totally bed bound</td><td>Total care</td><td>Total care</td><td>Sips only</td><td>Drowsy or unconscious</td></tr>' +
          '<tr><td>10%</td><td>Totally bed bound</td><td>Total care</td><td>Total care</td><td>Mouth care only</td><td>Drowsy or unconscious</td></tr>' +
          '<tr><td>0%</td><td colspan="5">Death</td></tr></table>'
      },
      {
        id: "assess-kps",
        title: "Karnofsky Performance Scale (KPS)",
        tags: ["KPS", "karnofsky", "performance status", "functional status"],
        sourcePages: [30, 31],
        contentHtml:
          '<table class="ref-table"><tr><th>KPS</th><th>Functionality Description</th></tr>' +
          '<tr><td>100</td><td>Normal, no complaints, no evidence of disease</td></tr>' +
          '<tr><td>90</td><td>Able to carry on normal activity; minor signs/symptoms of disease</td></tr>' +
          '<tr><td>80</td><td>Normal activity with effort; some signs/symptoms of disease</td></tr>' +
          '<tr><td>70</td><td>Cares for self; unable to carry on normal activity or active work</td></tr>' +
          '<tr><td>60</td><td>Requires occasional assistance but can care for most needs</td></tr>' +
          '<tr><td>50</td><td>Requires considerable assistance and frequent medical care</td></tr>' +
          '<tr><td>40</td><td>Disabled; requires special care and assistance</td></tr>' +
          '<tr><td>30</td><td>Severely disabled; hospital admission is indicated but not imminent</td></tr>' +
          '<tr><td>20</td><td>Very sick; hospital admission necessary; active supportive care needed</td></tr>' +
          '<tr><td>10</td><td>Moribund; fatal processes progressing rapidly</td></tr>' +
          '<tr><td>0</td><td>Death</td></tr></table>' +
          '<p class="muted">Scores ≤ 50 often qualify a patient for hospice if correlated with decline. Helpful in tracking disease progression and treatment tolerance.</p>'
      }
    ]
  },

  /* ============================================================
   * SECTION 4 — SYMPTOM MANAGEMENT
   * PDF Section 3, pp. 32-55.
   * ============================================================ */
  {
    id: "symptoms",
    title: "Symptom Management",
    description: "Pharm & non-pharm guides",
    tone: "warning",
    cards: [
      {
        id: "sym-pain",
        title: "Pain Management",
        tags: ["pain", "WHO ladder", "opioid", "equianalgesic", "morphine", "analgesic"],
        sourcePages: [32, 33, 34, 35],
        contentHtml:
          '<div class="sub-h">General principles</div>' +
          '<p class="body-text">Always assess pain using a validated scale (NRS, FACES, PAINAD). Use the WHO Analgesic Ladder:</p>' +
          '<ul class="criteria-list"><li><strong>Step 1:</strong> Non-opioid ± adjuvant (e.g., acetaminophen)</li>' +
          '<li><strong>Step 2:</strong> Weak opioid ± non-opioid</li>' +
          '<li><strong>Step 3:</strong> Strong opioid ± adjuvant</li></ul>' +
          '<div class="sub-h">Opioid conversions (equianalgesic)</div>' +
          '<p class="muted">All conversions based on oral morphine 30 mg as standard equivalence.</p>' +
          '<table class="ref-table"><tr><th>Medication</th><th>Form</th><th>Equianalgesic Dose (≈30 mg oral morphine)</th></tr>' +
          '<tr><td>Morphine</td><td>Oral</td><td>30 mg</td></tr>' +
          '<tr><td>Morphine</td><td>IV/SC</td><td>10 mg</td></tr>' +
          '<tr><td>Hydromorphone</td><td>Oral</td><td>7.5 mg</td></tr>' +
          '<tr><td>Hydromorphone</td><td>IV/SC</td><td>1.5 mg</td></tr>' +
          '<tr><td>Oxycodone</td><td>Oral</td><td>20 mg</td></tr>' +
          '<tr><td>Oxymorphone</td><td>Oral</td><td>10 mg</td></tr>' +
          '<tr><td>Oxymorphone</td><td>IV</td><td>1 mg</td></tr>' +
          '<tr><td>Fentanyl (Transdermal)</td><td>Patch</td><td>25 mcg/hr ≈ 60–100 mg oral morphine/day</td></tr>' +
          '<tr><td>Codeine</td><td>Oral</td><td>200 mg</td></tr>' +
          '<tr><td>Methadone</td><td>Oral</td><td>6–20 mg (variable — use with caution!)</td></tr>' +
          '<tr><td>Hydrocodone</td><td>Oral</td><td>30 mg</td></tr>' +
          '<tr><td>Tapentadol</td><td>Oral</td><td>~100 mg (not commonly used in hospice)</td></tr></table>' +
          '<div class="alert alert-yellow">Use caution with cross-tolerance: reduce by 25–50% when switching opioids.</div>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Repositioning: regular turning to relieve pressure and reduce muscle tension.</li>' +
          '<li>Massage: gentle touch or therapeutic massage (as tolerated).</li>' +
          '<li>Heat or cold therapy: warm packs for muscle aches; cold compress for inflammation (if appropriate).</li>' +
          '<li>Pillows, wedges, or cushions to offload painful areas; bed/cradle lifts to keep linens off painful areas.</li>' +
          '<li>Range-of-motion exercises (passive stretching) for appropriate patients.</li>' +
          '<li>Distraction (music, audiobooks, TV, prayer, conversation), guided imagery, relaxation breathing, mindfulness/meditation.</li>' +
          '<li>Reassurance and emotional presence; calm voice and hand-holding can ease pain perception.</li>' +
          '<li>Aromatherapy (lavender, peppermint, chamomile), music therapy, pet therapy.</li>' +
          '<li>Weighted blankets or soft textures; chaplain/spiritual counselor visits; legacy work and life review; companionship.</li>' +
          '<li>Calm setting (soft lighting, reduced noise, familiar objects); temperature comfort; minimize overstimulation; scent-free/clean air.</li></ul>'
      },
      {
        id: "sym-dyspnea",
        title: "Dyspnea (Shortness of Breath)",
        tags: ["dyspnea", "shortness of breath", "air hunger", "SOB", "breathlessness"],
        sourcePages: [36, 37, 38, 39],
        contentHtml:
          '<div class="sub-h">Signs</div>' +
          '<p class="body-text">Gasping, flaring nostrils, speaking in short phrases; panic or anxiety; oxygen saturation may be low or normal.</p>' +
          '<div class="script-box">This medicine will help ease their breathing and make them feel calmer.</div>' +
          '<div class="sub-h">Suggested pharmacologic</div>' +
          '<ul class="criteria-list"><li>Morphine: 2.5–5 mg PO/SC q1h PRN (reduces air hunger).</li>' +
          '<li>Lorazepam: 0.5–1 mg PO/SL q6h PRN if anxiety is present.</li>' +
          '<li>Oxygen (if patient is hypoxic or symptomatic).</li></ul>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>High Fowler’s position (sitting upright 60–90°) or tripod position (leaning forward with arms on knees or table); side-lying with elevated head if bedbound; wedges/pillows to reduce abdominal pressure on diaphragm.</li>' +
          '<li>Small handheld fan or room fan directed at the face (airflow over trigeminal nerve reduces dyspnea perception); open window for fresh air.</li>' +
          '<li>Pursed-lip breathing (inhale through nose, exhale slowly through pursed lips); controlled breathing with caregiver guidance; breathing with music or rhythm.</li>' +
          '<li>Anxiety reduction: calming voice and reassurance; minimize unnecessary stimulation; encourage quiet presence of family; guided imagery or relaxation scripts.</li>' +
          '<li>Environment: reduce room temperature; keep quiet and uncluttered; remove restrictive tubing/equipment; avoid strong odors or perfumes.</li>' +
          '<li>Psychosocial: presence of familiar people; spiritual support or comforting rituals; gentle conversation or distraction.</li></ul>'
      },
      {
        id: "sym-secretions",
        title: "Terminal Secretions (Death Rattle)",
        tags: ["secretions", "death rattle", "atropine", "glycopyrrolate", "scopolamine"],
        sourcePages: [39, 40, 41],
        contentHtml:
          '<div class="sub-h">Suggested pharmacologic</div>' +
          '<ul class="criteria-list"><li>Atropine 1% ophthalmic drops: 1–2 drops SL q1h PRN.</li>' +
          '<li>Glycopyrrolate 0.1–0.2 mg SC q4h PRN.</li>' +
          '<li>Scopolamine patch 1.5 mg q72h (takes hours to work).</li></ul>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Turn patient to the side (especially the right side) to help drainage of pooled secretions; slight elevation of HOB; avoid flat positioning.</li>' +
          '<li>Minimize oral intake in actively dying patients (extra fluids can increase pooling); use oral swabs for comfort, not to stimulate swallowing.</li>' +
          '<li>Gentle, frequent mouth care with a soft toothbrush or sponge-tipped swabs; diluted hydrogen peroxide or saline per protocol.</li>' +
          '<li>Suction sparingly and only if secretions are in the mouth, not throat (over-suctioning can cause discomfort/trauma).</li>' +
          '<li>Limit stimulation during the terminal phase; use white noise or soft music; keep family informed that this is a normal part of the dying process.</li></ul>' +
          '<div class="script-box">This sound is common and expected at this time. It’s not uncomfortable for your loved one, but we’re here to make sure they’re at peace.</div>'
      },
      {
        id: "sym-delirium",
        title: "Delirium & Terminal Agitation",
        tags: ["delirium", "terminal agitation", "restlessness", "haloperidol", "ABH", "agitation"],
        sourcePages: [42, 43, 44, 45],
        contentHtml:
          '<div class="sub-h">Signs</div>' +
          '<p class="body-text">Confusion, vocal outbursts, moaning, pacing, fidgeting, or spiritual distress; screaming, thrashing, striking out, pulling out lines, biting. It often signals the dying process.</p>' +
          '<div class="sub-h">Suggested pharmacologic</div>' +
          '<ul class="criteria-list"><li>Haloperidol 0.5–2 mg PO/SC q1–2h PRN (start low, titrate).</li>' +
          '<li>Lorazepam 0.5–1 mg PO/SL/SC q4h PRN (only if anxiety is a component).</li>' +
          '<li>Combination: ABH Gel 1 mL q4h PRN; Haloperidol 2 mg SL/SC q2h PRN; Lorazepam 1–2 mg PRN if needed.</li>' +
          '<li>Consider olanzapine, chlorpromazine, or methotrimeprazine if unresponsive.</li></ul>' +
          '<div class="alert alert-red">Avoid benzos alone in hypoactive delirium — may worsen symptoms.</div>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Create a calm environment: reduce stimulation (soft lighting, limit noise); keep room quiet and uncluttered; avoid sudden changes; use familiar objects.</li>' +
          '<li>Reassure and reorient in a soft, calm, slow tone: “You’re safe. I’m here with you. You’re in your room.” Use familiar voices; avoid arguing with the patient’s perceptions.</li>' +
          '<li>Reposition for comfort — don’t physically restrain; use low beds or floor mats if fall risk; ensure comfortable room temperature; address pain, full bladder/bowel, thirst/dry mouth, fever or infection.</li>' +
          '<li>Gentle sensory input: soft music, hand-holding or therapeutic touch, aromatherapy (lavender, chamomile), warm or lightly weighted blanket.</li>' +
          '<li>Identify and minimize triggers: sudden medication changes, dehydration or urinary retention, hypoxia or infection, over-stimulation or spiritual distress.</li></ul>' +
          '<div class="script-box">This behavior can be a normal part of the body shutting down. It may look distressing, but we’re making sure they are comfortable and peaceful.</div>'
      },
      {
        id: "sym-nausea",
        title: "Nausea & Vomiting",
        tags: ["nausea", "vomiting", "emesis", "antiemetic", "haloperidol", "ondansetron"],
        sourcePages: [45, 46, 47, 48],
        contentHtml:
          '<div class="sub-h">Common causes</div>' +
          '<p class="body-text">Opioids, constipation, metabolic changes, CNS involvement.</p>' +
          '<div class="alert alert-red">If patient is actively vomiting: turn on side to prevent aspiration.</div>' +
          '<div class="sub-h">Suggested pharmacologic</div>' +
          '<ul class="criteria-list"><li>Haloperidol 0.5–1 mg PO/SC q6–8h.</li>' +
          '<li>Metoclopramide 10 mg PO/SC q6h.</li>' +
          '<li>Ondansetron 4–8 mg PO/ODT q8h (less effective for opioid-induced).</li></ul>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Keep head elevated (at least 30–45°) after meals or meds; side-lying position if vomiting occurs; avoid strong odors; cool, well-ventilated room; dim lighting.</li>' +
          '<li>Small, frequent sips of clear liquids (ginger ale, flat cola, water, peppermint tea); ice chips or frozen juice cubes; bland, easy-to-digest foods (toast, crackers, applesauce, rice); avoid greasy/spicy/overly sweet foods; withhold oral intake temporarily during acute nausea.</li>' +
          '<li>Aromatherapy (peppermint, ginger, lemon, lavender); acupressure at the P6 (Neiguan) point (3 finger-widths below the wrist on the inner forearm); cool compress to forehead or back of neck.</li>' +
          '<li>Relaxation breathing, guided imagery or distraction; reduce anxiety.</li>' +
          '<li>Review and adjust med timing; limit oral meds when nausea is severe — use SL, SC, PR routes; monitor for constipation or gastric stasis.</li></ul>'
      },
      {
        id: "sym-constipation",
        title: "Constipation",
        tags: ["constipation", "bowel", "senna", "docusate", "laxative", "bisacodyl"],
        sourcePages: [48, 49, 50],
        contentHtml:
          '<div class="sub-h">Prevention</div>' +
          '<ul class="criteria-list"><li>Senna-S 1 tab PO BID.</li><li>Docusate sodium 100 mg PO BID.</li></ul>' +
          '<div class="sub-h">Treatment</div>' +
          '<ul class="criteria-list"><li>Bisacodyl suppository or enema.</li><li>Lactulose 15–30 mL PO daily.</li>' +
          '<li>Magnesium citrate or polyethylene glycol if severe.</li></ul>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Encourage upright position for toileting; use toilet or commode chair instead of bedpan if feasible; reposition frequently; encourage safe mobility.</li>' +
          '<li>Offer small sips of water or electrolyte fluids; warm beverages (prune juice, warm lemon water); fiber-rich foods if tolerated; monitor intake volume.</li>' +
          '<li>Establish a daily toileting time, especially after meals (gastrocolic reflex); provide privacy and dignity; use a footstool or raised knees to mimic squatting.</li>' +
          '<li>Warm compress or heating pad to abdomen; gentle clockwise abdominal massage; essential oils (ginger, peppermint).</li>' +
          '<li>Teach caregivers to track bowel movements; use a bowel protocol to intervene early if no BM in 48–72 hours.</li></ul>' +
          '<div class="alert alert-yellow">Caution: avoid fiber if patient is immobile or not increasing fluids — may worsen impaction.</div>'
      },
      {
        id: "sym-fever",
        title: "Fever",
        tags: ["fever", "temperature", "acetaminophen", "cooling", "pyrexia"],
        sourcePages: [51, 52, 53],
        contentHtml:
          '<div class="sub-h">Suggested pharmacologic</div>' +
          '<p class="body-text">Acetaminophen 500–1000 mg PO/PR q6h PRN.</p>' +
          '<div class="sub-h">Non-pharmacologic</div>' +
          '<ul class="criteria-list"><li>Remove excess clothing or blankets; use lightweight, breathable sheets; open windows or use a fan for air circulation.</li>' +
          '<li>Apply a cool compress to forehead, back of the neck, wrists or ankles.</li>' +
          '<li>Tepid sponge bath with lukewarm water (avoid cold water or alcohol-based rubs — can cause shivering); use soft towels, do not oversaturate.</li>' +
          '<li>Maintain hydration: frequent small sips of water or electrolyte-rich fluids; ice chips, frozen fruit, or popsicles; moisten lips and mouth with swabs if NPO.</li>' +
          '<li>Keep patient semi-upright (30–45°); reposition frequently; minimize energy expenditure.</li>' +
          '<li>Offer gentle voice and presence; dim lighting and limit stimulation.</li></ul>' +
          '<div class="script-box">The fever is part of the body’s natural response. We’re using comfort-focused measures to help them feel at ease.</div>'
      },
      {
        id: "sym-skin",
        title: "Skin Breakdown / Pressure Injury",
        tags: ["skin breakdown", "pressure injury", "wound", "barrier cream", "reposition"],
        sourcePages: [53],
        contentHtml:
          '<div class="sub-h">Care guidelines</div>' +
          '<ul class="criteria-list check"><li>Reposition q2h.</li><li>Keep skin clean and dry.</li>' +
          '<li>Use pressure-relieving surfaces.</li><li>Apply barrier creams.</li>' +
          '<li>Treat infections topically or systemically as appropriate.</li></ul>'
      },
      {
        id: "sym-terminal-bleed",
        title: "Terminal Bleed (Massive Hemorrhage)",
        tags: ["terminal bleed", "hemorrhage", "bleeding", "midazolam", "crisis"],
        sourcePages: [53, 54],
        contentHtml:
          '<p class="body-text">Most commonly seen with head/neck, lung, or GI cancers. Visible signs: sudden profuse bleeding from mouth, nose, tracheostomy, or rectum; skin turns gray or blue; family panic.</p>' +
          '<div class="sub-h">Emergency response</div>' +
          '<ul class="criteria-list"><li>DO NOT leave patient alone.</li>' +
          '<li>Apply dark towels to bleeding site (absorbs blood discreetly).</li>' +
          '<li>Administer Midazolam or Lorazepam 2 mg SL/SC.</li>' +
          '<li>Administer Morphine 5–10 mg SC or SL.</li>' +
          '<li>Protect family from trauma (gently guide them out if needed).</li>' +
          '<li>Document time of event, comfort measures, death (if occurred).</li>' +
          '<li>Notify physician and supervisor immediately.</li></ul>' +
          '<div class="script-box">We’re focusing on keeping your loved one comfortable right now.</div>' +
          '<p class="muted">Review comfort kit and meds with family every recert; review symptom management steps/meds every visit.</p>'
      }
    ]
  },

  /* ============================================================
   * SECTION 5 — COMMUNICATION & DOCUMENTATION
   * PDF Section 4, pp. 65-68.
   * ============================================================ */
  {
    id: "comms",
    title: "Communication & Documentation",
    description: "SBAR, SOAP, charting phrases",
    tone: "primary",
    cards: [
      {
        id: "comm-sbar",
        title: "SBAR Communication Framework",
        tags: ["SBAR", "handoff", "physician call", "communication", "case manager"],
        sourcePages: [65],
        contentHtml:
          '<p class="body-text">Use SBAR to structure verbal hand-offs, calls to the physician, or communication with the case manager.</p>' +
          '<div class="sub-h">S — Situation</div>' +
          '<p class="body-text muted">“I’m calling about [patient]. She’s experiencing increased dyspnea and anxiety.”</p>' +
          '<div class="sub-h">B — Background</div>' +
          '<p class="body-text muted">“She has end-stage COPD. No changes in her medications in the last week.”</p>' +
          '<div class="sub-h">A — Assessment</div>' +
          '<p class="body-text muted">“Her O₂ sat is 85% on 3 L, respiratory rate 30, anxious, increased secretions.”</p>' +
          '<div class="sub-h">R — Recommendation</div>' +
          '<p class="body-text muted">“I recommend increasing morphine dose and adding atropine for secretions.”</p>'
      },
      {
        id: "comm-soap",
        title: "SOAP Documentation Format",
        tags: ["SOAP", "documentation", "charting", "visit note", "subjective objective"],
        sourcePages: [66],
        contentHtml:
          '<div class="sub-h">S — Subjective</div>' +
          '<p class="body-text">Patient/caregiver report of symptoms, mood, appetite, sleep. <span class="muted">“Patient reports pain 6/10 and difficulty breathing at rest.”</span></p>' +
          '<div class="sub-h">O — Objective</div>' +
          '<p class="body-text">Your clinical observations, vitals, assessments. <span class="muted">“RR 28, anxious, using accessory muscles. PPS: 40%. No new wounds.”</span></p>' +
          '<div class="sub-h">A — Assessment</div>' +
          '<p class="body-text">Interpret findings: decline, status stable, symptoms worsening. <span class="muted">“Disease progression noted. Increased dyspnea consistent with end-stage COPD.”</span></p>' +
          '<div class="sub-h">P — Plan</div>' +
          '<p class="body-text">Care provided and what happens next. <span class="muted">“Administered morphine and lorazepam. Will follow up in 4 hours. Nurse and physician notified.”</span></p>'
      },
      {
        id: "comm-charting",
        title: "Sample Charting Phrases",
        tags: ["charting", "documentation phrases", "decline", "imminent death", "audit"],
        sourcePages: [67, 68],
        contentHtml:
          '<div class="sub-h">Decline noted</div>' +
          '<ul class="criteria-list"><li>“Patient requires increased assistance with transfers and ADLs.”</li>' +
          '<li>“Weight loss of 5 lbs since last visit; decreased PO intake reported.”</li>' +
          '<li>“Increased sleep and cognitive decline noted.”</li></ul>' +
          '<div class="sub-h">Imminent death indicators</div>' +
          '<ul class="criteria-list"><li>“Patient non-responsive, Cheyne-Stokes respirations present, mottling noted.”</li>' +
          '<li>“Family present, emotional support provided. RN reviewed dying process with caregivers.”</li></ul>' +
          '<div class="sub-h">Symptom management</div>' +
          '<ul class="criteria-list"><li>“Administered Morphine 5 mg SL and repositioned; dyspnea improved.”</li>' +
          '<li>“Terminal restlessness addressed with ABH gel and dimmed environment.”</li></ul>'
      }
    ]
  },

  /* ============================================================
   * SECTION 6 — IDG & INTERDISCIPLINARY TOOLS
   * PDF Section 5, pp. 69-72.
   * ============================================================ */
  {
    id: "idg",
    title: "IDG & Team Tools",
    description: "RN, SW, Aide, Chaplain",
    tone: "accent",
    cards: [
      {
        id: "idg-rn-checklist",
        title: "RN Field Checklist",
        tags: ["RN checklist", "field checklist", "visit", "nurse", "IDG"],
        sourcePages: [69],
        contentHtml:
          '<div class="sub-h">At each visit</div>' +
          '<ul class="criteria-list check"><li>Assess and document pain, dyspnea, anxiety, secretions.</li>' +
          '<li>Update PPS / FAST / KPS scores.</li>' +
          '<li>Review med changes and PRN effectiveness.</li>' +
          '<li>Reconcile medication orders with caregiver-administered meds.</li>' +
          '<li>Skin assessment and wound updates.</li>' +
          '<li>Caregiver coping and understanding of plan of care.</li>' +
          '<li>Document education provided and goals of care discussed.</li></ul>'
      },
      {
        id: "idg-aide",
        title: "Hospice Aide Visit Focus Areas",
        tags: ["aide", "CNA", "HHA", "ADL", "visit focus"],
        sourcePages: [70],
        contentHtml:
          '<ul class="criteria-list check"><li>Skin integrity (note any redness or breakdown).</li>' +
          '<li>Nutrition/hydration observations.</li><li>Bowel and bladder status.</li>' +
          '<li>Mobility, falls, or assist level changes.</li><li>Emotional or behavioral changes.</li>' +
          '<li>Report any changes to RN immediately.</li></ul>' +
          '<p class="muted">Use ADL charting language: “Max assist,” “Supervision,” “Unable.”</p>'
      },
      {
        id: "idg-sw",
        title: "Social Work Focus Prompts",
        tags: ["social work", "MSW", "bereavement", "DPOA", "advance directives", "psychosocial"],
        sourcePages: [70, 71],
        contentHtml:
          '<ul class="criteria-list check"><li>Patient and caregiver goals for comfort, location of care, legacy.</li>' +
          '<li>Barriers to care: finances, home safety, burnout.</li>' +
          '<li>Bereavement risk factors.</li>' +
          '<li>Spiritual distress or unmet cultural needs.</li>' +
          '<li>Review of DPOA, advance directives, funeral arrangements.</li>' +
          '<li>Community resource referrals made (home care, food, etc.).</li></ul>' +
          '<div class="script-box">How are you holding up with everything that’s happening?</div>'
      },
      {
        id: "idg-chaplain",
        title: "Chaplain / Spiritual Care Prompts",
        tags: ["chaplain", "spiritual care", "spiritual distress", "existential", "rituals"],
        sourcePages: [71],
        contentHtml:
          '<ul class="criteria-list check"><li>Spiritual/religious affiliations honored.</li>' +
          '<li>Coping language used by patient/family.</li>' +
          '<li>Existential distress or fear of dying.</li>' +
          '<li>Cultural rituals or end-of-life practices.</li>' +
          '<li>Offered prayers, readings, or music (if welcomed).</li></ul>' +
          '<div class="script-box">Many people find comfort in reflecting on their life — would you like to talk a little about that today?</div>'
      },
      {
        id: "idg-case-review",
        title: "IDG Case Review Tips",
        tags: ["IDG", "case review", "interdisciplinary", "recert", "case manager"],
        sourcePages: [71, 72],
        contentHtml:
          '<p class="body-text">For RN or case manager. Be concise: 30–60 seconds per case.</p>' +
          '<div class="sub-h">Focus on</div>' +
          '<ul class="criteria-list"><li>Notable changes in status.</li><li>Medication issues.</li>' +
          '<li>Any family or spiritual concerns.</li><li>Plan for next 2–4 weeks.</li></ul>' +
          '<p class="muted">Flag recertification cases early. Use PPS/FAST to support continuation of hospice.</p>'
      }
    ]
  },

  /* ============================================================
   * SECTION 7 — COMPLIANCE & BEST PRACTICES
   * PDF Section 6, pp. 73-81.
   * ============================================================ */
  {
    id: "compliance",
    title: "Compliance & Best Practices",
    description: "Infection control, orders, vitals",
    tone: "primary",
    cards: [
      {
        id: "comp-hand-hygiene",
        title: "Hand Hygiene",
        tags: ["hand hygiene", "handwashing", "sanitizer", "infection control", "CDC"],
        sourcePages: [73, 74],
        contentHtml:
          '<div class="sub-h">When to wash hands</div>' +
          '<ul class="criteria-list"><li>Before and after every patient contact.</li>' +
          '<li>Before donning and after doffing gloves.</li>' +
          '<li>After contact with bodily fluids, secretions, or excretions.</li>' +
          '<li>Before handling medications or equipment.</li></ul>' +
          '<div class="sub-h">Handwashing steps (soap &amp; water)</div>' +
          '<ul class="criteria-list"><li>Wet hands with warm water.</li>' +
          '<li>Apply soap and lather well (at least 20 seconds).</li>' +
          '<li>Scrub all surfaces: palms, backs, between fingers, under nails.</li>' +
          '<li>Rinse thoroughly and dry with a clean towel.</li>' +
          '<li>Use towel to turn off faucet.</li></ul>' +
          '<div class="sub-h">Alcohol-based sanitizer</div>' +
          '<ul class="criteria-list"><li>Rub vigorously for 15–20 seconds until dry.</li>' +
          '<li>Must contain at least 60% alcohol.</li>' +
          '<li>Not effective if hands are visibly soiled.</li></ul>'
      },
      {
        id: "comp-bag-technique",
        title: "Nursing Bag Technique",
        tags: ["bag technique", "nursing bag", "barrier", "infection control", "field"],
        sourcePages: [74, 75],
        contentHtml:
          '<div class="sub-h">Bag placement</div>' +
          '<ul class="criteria-list"><li>Place a barrier (chux, plastic liner, paper towel) under the bag before placing it on any surface.</li>' +
          '<li>Never place the bag on the floor, patient bed, or kitchen counter.</li></ul>' +
          '<div class="sub-h">In-bag organization</div>' +
          '<ul class="criteria-list"><li>Keep clean and dirty compartments separate.</li>' +
          '<li>Regularly clean interior with disinfectant wipes.</li>' +
          '<li>Sharps container should be portable and sealed.</li></ul>' +
          '<div class="sub-h">After visit</div>' +
          '<ul class="criteria-list"><li>Sanitize reusable equipment (stethoscope, BP cuff).</li>' +
          '<li>Dispose of trash/used supplies appropriately.</li>' +
          '<li>Perform hand hygiene before and after accessing bag.</li></ul>'
      },
      {
        id: "comp-infection-control",
        title: "Infection Control Reminders",
        tags: ["infection control", "PPE", "foley", "linen", "wound care", "isolation"],
        sourcePages: [75],
        contentHtml:
          '<table class="ref-table"><tr><th>Task</th><th>Best Practice</th></tr>' +
          '<tr><td>Wound care</td><td>Use gloves, hand hygiene before/after</td></tr>' +
          '<tr><td>Foley care</td><td>Always clean away from the body, monitor for signs of UTI</td></tr>' +
          '<tr><td>Linen handling</td><td>Do not shake linens, place in designated dirty bag immediately</td></tr>' +
          '<tr><td>PPE</td><td>Use gloves for all contact; mask or gown if risk of exposure</td></tr>' +
          '<tr><td>Environmental cleaning</td><td>Wipe down stethoscope, thermometer, and tablet between patients</td></tr></table>'
      },
      {
        id: "comp-aide-poc",
        title: "Hospice Aide Plan of Care (POC) Compliance",
        tags: ["POC", "plan of care", "aide", "418.76", "CMS", "compliance"],
        sourcePages: [75, 76, 77],
        contentHtml:
          '<div class="sub-h">Regulatory requirements (per CMS 418.76)</div>' +
          '<ul class="criteria-list"><li>Aide must provide care exactly as ordered on the POC.</li>' +
          '<li>POC must be written by an RN, reviewed and updated every 14 days, and include frequency, tasks, and individualized instructions.</li>' +
          '<li>Tasks must be within scope of practice (e.g., hygiene, skin care, simple dressing changes) and clearly documented on the visit note.</li>' +
          '<li>Report to RN if: refusal of care, skin breakdown, or new symptoms (e.g., shortness of breath, pain).</li></ul>' +
          '<div class="sub-h">Documentation example</div>' +
          '<div class="tool-block"><p class="body-text muted">“Per care plan: Assisted with full bed bath, peri-care, applied barrier cream to coccyx. Skin intact. No refusal of care. Patient in good spirits.”</p></div>' +
          '<div class="alert alert-yellow">Aide visits are often scrutinized during survey — ensure accurate visit times, clear documentation, and compliance with ordered frequencies.</div>'
      },
      {
        id: "comp-complete-orders",
        title: "Job Aid: Examples of Complete Orders",
        tags: ["orders", "medication order", "wound order", "418.56", "complete order", "compliant"],
        sourcePages: [77, 78, 79],
        contentHtml:
          '<div class="sub-h">1. Medication order example (fully compliant)</div>' +
          '<div class="tool-block"><p class="body-text">Administer Morphine Sulfate oral solution 20 mg/mL, 5 mg (0.25 mL) sublingually every 2 hours PRN for moderate to severe pain. May repeat dose every 1 hour if pain score remains ≥7.<br>' +
          '<strong>Start Date:</strong> 04/13/2025<br><strong>Indication:</strong> End-stage metastatic breast cancer with bone pain<br>' +
          '<strong>Route:</strong> Sublingual<br><strong>Frequency:</strong> PRN, up to hourly<br>' +
          '<strong>PRN Parameters:</strong> Pain rated ≥4 on Numeric Rating Scale<br><strong>Prescriber:</strong> Dr. J. Smith, MD</p></div>' +
          '<div class="alert alert-green">Includes drug, dose, route, frequency, indication, PRN parameters, and prescriber — all CMS-compliant.</div>' +
          '<div class="sub-h">2. Wound care order example (fully compliant)</div>' +
          '<div class="tool-block"><p class="body-text">Clean sacral pressure injury (stage 3, 2 cm × 2 cm × 0.3 cm, moderate serous drainage) with normal saline, pat dry, and apply calcium alginate dressing to wound bed. Cover with bordered foam dressing. Perform wound care daily and PRN soiling. Assess wound for changes in size, drainage, odor, or signs of infection at each dressing change.<br>' +
          '<strong>Start Date:</strong> 04/13/2025<br><strong>Indication:</strong> Pressure injury – sacrum, Stage 3<br>' +
          '<strong>Location:</strong> Sacrum<br><strong>Frequency:</strong> Daily and PRN soiling<br>' +
          '<strong>Supplies:</strong> Calcium alginate + bordered foam dressing<br><strong>Prescriber:</strong> Dr. J. Smith, MD</p></div>' +
          '<div class="alert alert-green">Clearly specifies wound location, stage, size, supplies, frequency, and parameters for PRN care.</div>' +
          '<div class="alert alert-red"><strong>How to spot an incomplete order:</strong> “Give morphine as needed for pain.” — Missing dose, route, frequency, PRN criteria, and prescriber.</div>'
      },
      {
        id: "comp-vitals",
        title: "Vital Signs Reference Chart",
        tags: ["vital signs", "vitals", "temperature", "pulse", "blood pressure", "O2 sat"],
        sourcePages: [79, 80],
        contentHtml:
          '<table class="ref-table"><tr><th>Vital Sign</th><th>Normal Adult Range</th><th>Hospice Considerations</th></tr>' +
          '<tr><td>Temp</td><td>97–99°F</td><td>Fever may signal infection or terminal event</td></tr>' +
          '<tr><td>Pulse</td><td>60–100 bpm</td><td>Often elevated in pain, dyspnea, anxiety</td></tr>' +
          '<tr><td>Respirations</td><td>12–20 bpm</td><td>Cheyne-Stokes, apnea common near death</td></tr>' +
          '<tr><td>Blood Pressure</td><td>100–140 / 60–90</td><td>May trend lower as patient declines</td></tr>' +
          '<tr><td>O₂ Saturation</td><td>&gt;92% (non-hospice)</td><td>Often &lt;90% without distress is tolerated</td></tr></table>' +
          '<p class="muted">Tailor frequency to care plan needs.</p>'
      },
      {
        id: "comp-visit-frequency",
        title: "Visit Frequency Grid",
        tags: ["visit frequency", "schedule", "RN", "SW", "chaplain", "aide", "MD"],
        sourcePages: [80, 81],
        contentHtml:
          '<table class="ref-table"><tr><th>Discipline</th><th>Stable Patient</th><th>Declining / Recert</th><th>Actively Dying</th></tr>' +
          '<tr><td>RN</td><td>1–2x/week</td><td>2–3x/week</td><td>Daily or more</td></tr>' +
          '<tr><td>SW</td><td>1–2x/month</td><td>1x/week or as needed</td><td>Supportive presence, on-call</td></tr>' +
          '<tr><td>Chaplain</td><td>1–2x/month</td><td>Weekly PRN</td><td>Family/spiritual support</td></tr>' +
          '<tr><td>Aide</td><td>2–5x/week</td><td>5–7x/week</td><td>7x/week or BID</td></tr>' +
          '<tr><td>MD/NP</td><td>Certification, PRN</td><td>Recert review, PRN</td><td>Available for consult</td></tr></table>' +
          '<p class="muted">Always tailor frequency to patient needs and hospice plan of care.</p>'
      }
    ]
  },

  /* ============================================================
   * SECTION 8 — SUPPLIES & FIELD CHECKLIST
   * PDF Section 3, pp. 63-64.
   * ============================================================ */
  {
    id: "supplies",
    title: "Supplies & Field Checklist",
    description: "Bag, core supplies, family materials",
    tone: "accent",
    cards: [
      {
        id: "supplies-core",
        title: "Emergency Supply Checklist — Core Supplies",
        tags: ["supplies", "checklist", "bag", "syringes", "biohazard", "gloves"],
        sourcePages: [63],
        contentHtml:
          '<p class="body-text">Keep this list in the clinician’s bag and confirm availability in the home at first visit or recert.</p>' +
          '<ul class="criteria-list check"><li>Comfort Kit Meds (check expiration).</li>' +
          '<li>Gloves, alcohol wipes.</li><li>Oral syringes (1 mL, 5 mL).</li>' +
          '<li>SC needles and syringes.</li><li>Medication administration log.</li>' +
          '<li>Laminated family instructions.</li><li>Biohazard bags.</li></ul>'
      },
      {
        id: "supplies-injection",
        title: "Injection Supplies",
        tags: ["injection supplies", "foley", "mouth swabs", "incontinent", "catheter"],
        sourcePages: [64],
        contentHtml:
          '<ul class="criteria-list check"><li>Foley catheter kit (if appropriate).</li>' +
          '<li>Mouth swabs.</li><li>Incontinent supplies.</li></ul>'
      },
      {
        id: "supplies-family",
        title: "Family Support Materials",
        tags: ["family support", "brochure", "what to expect", "when to call", "24/7"],
        sourcePages: [64],
        contentHtml:
          '<ul class="criteria-list check"><li>“What to Expect When Death is Near” brochure.</li>' +
          '<li>“When to Call Hospice” laminated card.</li>' +
          '<li>Contact number for 24/7 hospice support.</li></ul>'
      }
    ]
  },

  /* ============================================================
   * SECTION 9 — FAMILY CONVERSATION STARTERS
   * PDF Section 4, pp. 66-67 (plus bedside scripts relocated from
   * symptom cards, with their own source pages).
   * ============================================================ */
  {
    id: "family",
    title: "Family Conversation Starters",
    description: "Compassionate, ready-to-use phrasing",
    tone: "primary",
    cards: [
      {
        id: "family-starters",
        title: "Conversation Starters",
        tags: ["family", "conversation", "comfort", "goals of care", "compassion"],
        sourcePages: [66, 67],
        contentHtml:
          '<p class="body-text">Use these gentle, clinically accurate phrases to guide discussions.</p>' +
          '<ul class="criteria-list"><li>“What changes have you noticed since our last visit?”</li>' +
          '<li>“Let’s talk about what comfort looks like for your loved one.”</li>' +
          '<li>“These changes may be signs that time is becoming short.”</li>' +
          '<li>“It’s okay to shift our focus from fixing problems to making the time comfortable.”</li>' +
          '<li>“We’re here to support your family every step of the way.”</li></ul>'
      },
      {
        id: "family-bedside-scripts",
        title: "Bedside Reassurance Scripts",
        tags: ["scripts", "reassurance", "bedside", "family education", "dying process"],
        sourcePages: [36, 41, 45, 52, 54],
        contentHtml:
          '<p class="muted">Ready-to-use phrases drawn from the symptom-management section, for reassuring families at the bedside.</p>' +
          '<div class="sub-h">Easing breathing (dyspnea)</div>' +
          '<div class="script-box">This medicine will help ease their breathing and make them feel calmer.</div>' +
          '<div class="sub-h">Terminal secretions (death rattle)</div>' +
          '<div class="script-box">This sound is common and expected at this time. It’s not uncomfortable for your loved one, but we’re here to make sure they’re at peace.</div>' +
          '<div class="sub-h">Terminal agitation</div>' +
          '<div class="script-box">This behavior can be a normal part of the body shutting down. It may look distressing, but we’re making sure they are comfortable and peaceful.</div>' +
          '<div class="sub-h">Fever</div>' +
          '<div class="script-box">The fever is part of the body’s natural response. We’re using comfort-focused measures to help them feel at ease.</div>' +
          '<div class="sub-h">Terminal bleed</div>' +
          '<div class="script-box">We’re focusing on keeping your loved one comfortable right now.</div>'
      }
    ]
  },

  /* ============================================================
   * SECTION 10 — SOURCES / ABOUT THIS TOOLKIT
   * Only the sources already listed in the PDF (no additions).
   * ============================================================ */
  {
    id: "sources",
    title: "Sources / About This Toolkit",
    description: "Transparency & references",
    tone: "primary",
    cards: [
      {
        id: "about",
        title: "About This Toolkit",
        tags: ["about", "disclaimer", "reference", "safety"],
        sourcePages: [1],
        contentHtml:
          '<p class="body-text">This toolkit is adapted from provided hospice clinician pocket toolkit materials for mobile reference. It is intended for clinician convenience and does not replace agency policy, physician orders, individualized clinical judgment, or current documentation requirements.</p>' +
          '<div class="alert alert-blue">For clinician reference only. Follow agency policy, physician orders, current MAR, and clinical judgment.</div>'
      },
      {
        id: "sources-list",
        title: "Sources Cited in the Toolkit",
        tags: ["sources", "references", "CMS", "CFR", "NHPCO", "CAPC"],
        sourcePages: [15, 31, 55, 64, 72, 77, 79],
        contentHtml:
          '<p class="muted">References as listed in the source document, by section.</p>' +
          '<div class="sub-h">Eligibility (p.15)</div>' +
          '<ul class="criteria-list"><li>CMS Medicare Coverage Database — cms.gov/medicare-coverage-database</li></ul>' +
          '<div class="sub-h">Assessment Tools (p.31)</div>' +
          '<ul class="criteria-list"><li>capc.org</li><li>nhpco.org</li><li>advancingexpertcare.org</li></ul>' +
          '<div class="sub-h">Symptom Management (p.55)</div>' +
          '<ul class="criteria-list"><li>palliativedrugs.com</li><li>advancingexpertcare.org</li><li>who.int/publications</li></ul>' +
          '<div class="sub-h">Supplies (p.64)</div>' +
          '<ul class="criteria-list"><li>mypcnow.org/fast-facts</li><li>palliativedrugs.com</li></ul>' +
          '<div class="sub-h">Communication & Documentation (p.68)</div>' +
          '<ul class="criteria-list"><li>advancingexpertcare.org</li><li>nhpco.org</li></ul>' +
          '<div class="sub-h">IDG & Interdisciplinary (p.72)</div>' +
          '<ul class="criteria-list"><li>42 CFR § 418.56 — CMS Hospice CoPs</li><li>nhpco.org</li><li>advancingexpertcare.org</li><li>capc.org</li></ul>' +
          '<div class="sub-h">Field Compliance (p.77, p.79)</div>' +
          '<ul class="criteria-list"><li>CDC Hand Hygiene Guidelines</li><li>WHO Hand Hygiene</li><li>42 CFR §418.60</li><li>42 CFR §418.56(c)</li><li>nhpco.org</li><li>advancingexpertcare.org</li></ul>'
      }
    ]
  }

];
