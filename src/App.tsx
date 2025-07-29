import React, { useState } from 'react';
import { Building2, Send, FileText } from 'lucide-react';
import { FormSection } from './components/FormSection';
import { FormField } from './components/FormField';
import { Input } from './components/Input';
import { Select } from './components/Select';
import { Textarea } from './components/Textarea';
import { RadioGroup } from './components/RadioGroup';
import { CheckboxGroup } from './components/CheckboxGroup';

function App() {
  const [formData, setFormData] = useState({
    // Basic company data
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyStage: '',
    website: '',
    linkedin: '',
    industry: '',
    
    // Team and current phase
    teamSize: '',
    annualRevenue: '',
    hasProduct: '',
    productDescription: '',
    
    // Goals and needs
    mainReasons: [] as string[],
    painPoint: '',
    futureGoals: '',
    priority: '',
    
    // Technical details
    hasTechnicalTeam: '',
    preferredTechnologies: '',
    hasIdeas: '',
    timeframe: '',
    
    // Budget and cooperation
    budget: '',
    previousExperience: '',
    
    // Additional comments
    additionalComments: ''
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
  };

  return (
    <div className="min-h-screen vera-gradient-light">
      {/* Header */}
      <div className="vera-gradient-dark vera-shadow border-b border-vera-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <img 
              src="/vera it - logo_transparent.png" 
              alt="VERA IT Logo" 
              className="h-12 sm:h-16 w-auto"
            />
            <div>
              <p className="text-vera-accent font-medium">Neue Kunden Formular</p>
            </div>
          </div>
          
          <div className="bg-vera-primary/30 border-l-4 border-vera-accent p-4 sm:p-6 rounded-r-lg backdrop-blur-sm">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <FileText className="w-5 h-5 text-vera-accent mt-0.5" />
              <div>
                <p className="text-vera-text-light leading-relaxed">
                  Bitte nehmen Sie sich 5–10 Minuten Zeit, um dieses Formular auszufüllen. 
                  Basierend auf Ihren Antworten wird sich unser Team auf das erste Gespräch vorbereiten 
                  und bewerten, wie wir Ihnen am besten helfen können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <form onSubmit={handleSubmit} className="bg-vera-primary/40 backdrop-blur-sm rounded-xl sm:rounded-2xl vera-shadow-lg p-4 sm:p-6 md:p-8 border border-vera-accent/20">
          
          {/* Section 1: Basic Company Data */}
          <FormSection title="1. GRUNDLEGENDE UNTERNEHMENSDATEN UND KONTAKTPERSON">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField label="1.1. Vor- und Nachname" required>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </FormField>
              
              <FormField label="1.2. E-Mail-Adresse" required>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </FormField>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField label="1.3. Telefonnummer" description="Optional">
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </FormField>
              
              <FormField label="1.4. Firmenname" required>
                <Input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                />
              </FormField>
            </div>
            
            <FormField label="1.5. Befindet sich das Unternehmen in der Gründungsphase?">
              <RadioGroup
                name="companyStage"
                value={formData.companyStage}
                onChange={(value) => handleInputChange('companyStage', value)}
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'dazwischen', label: 'Etwas dazwischen (z.B. wir arbeiten bereits, aber das Unternehmen ist noch nicht formal registriert)' }
                ]}
              />
            </FormField>
            
            <FormField label="1.6. Firmen-Website (falls vorhanden)" description='Beispiel: www.meinefirma.com (Falls Sie keine Website haben – schreiben Sie "noch keine")'>
              <Input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="www.meinefirma.com"
              />
            </FormField>
            
            <FormField label="1.7. LinkedIn-Profil des Unternehmens (falls vorhanden)" description="Optional">
              <Input
                type="url"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/company/..."
              />
            </FormField>
            
            <FormField label="1.8. Was ist Ihre Tätigkeit / Branche?" description="Kurze Beschreibung in einem Satz (Beispiel: Herstellung von Naturkosmetik, Online-Bildung, SaaS für Logistik usw.)">
              <Input
                type="text"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                placeholder="Kurze Beschreibung Ihrer Branche..."
              />
            </FormField>
          </FormSection>

          {/* Section 2: Team and Current Phase */}
          <FormSection title="2. INFORMATIONEN ÜBER DAS TEAM UND DIE AKTUELLE PHASE">
            <FormField label="2.1. Wie viele Teammitglieder haben Sie derzeit (Angestellte oder Mitarbeiter)?">
              <RadioGroup
                name="teamSize"
                value={formData.teamSize}
                onChange={(value) => handleInputChange('teamSize', value)}
                options={[
                  { value: '1', label: '1' },
                  { value: '2-5', label: '2–5' },
                  { value: '6-10', label: '6–10' },
                  { value: '11-20', label: '11–20' },
                  { value: '21+', label: '21+' }
                ]}
              />
            </FormField>
            
            <FormField label="2.2. Wie hoch war Ihr Jahresumsatz im vergangenen Jahr?" description='Falls das Unternehmen neu ist, können Sie "Unternehmen in Gründung" markieren.'>
              <RadioGroup
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={(value) => handleInputChange('annualRevenue', value)}
                options={[
                  { value: 'gruendung', label: 'Unternehmen in Gründung / noch kein Umsatz' },
                  { value: 'unter-10k', label: 'Weniger als 10.000 EUR' },
                  { value: '10k-30k', label: '10.000 – 30.000 EUR' },
                  { value: '30k-100k', label: '30.000 – 100.000 EUR' },
                  { value: '100k-250k', label: '100.000 – 250.000 EUR' },
                  { value: '250k-500k', label: '250.000 – 500.000 EUR' },
                  { value: 'ueber-500k', label: 'Mehr als 500.000 EUR' }
                ]}
              />
            </FormField>
            
            <FormField label="2.3. Haben Sie ein konkretes Produkt, eine Anwendung oder Website, die bereits funktioniert?">
              <RadioGroup
                name="hasProduct"
                value={formData.hasProduct}
                onChange={(value) => handleInputChange('hasProduct', value)}
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'entwicklung', label: 'In Entwicklung' }
                ]}
              />
            </FormField>
            
            {formData.hasProduct === 'ja' && (
              <FormField label="Falls ja – geben Sie einen Link oder eine kurze Beschreibung ein:">
                <Textarea
                  value={formData.productDescription}
                  onChange={(e) => handleInputChange('productDescription', e.target.value)}
                  placeholder="Link oder Beschreibung Ihres Produkts..."
                />
              </FormField>
            )}
          </FormSection>

          {/* Section 3: Goals and Needs */}
          <FormSection title="3. ZIELE UND BEDÜRFNISSE">
            <FormField label="3.1. Was ist der Hauptgrund, warum Sie sich an VERA IT gewandt haben?" description="(Sie können mehrere Optionen markieren)">
              <CheckboxGroup
                name="mainReasons"
                values={formData.mainReasons}
                onChange={(values) => handleInputChange('mainReasons', values)}
                options={[
                  { value: 'software-entwicklung', label: 'Entwicklung von Softwarelösungen (Web, mobile Anwendung usw.)' },
                  { value: 'digitale-transformation', label: 'Digitale Transformation des Geschäfts' },
                  { value: 'digitale-strategie', label: 'Beratung zur digitalen Strategie' },
                  { value: 'automatisierung', label: 'Prozessautomatisierung' },
                  { value: 'verkaufssteigerung', label: 'Verkaufssteigerung durch digitale Kanäle' },
                  { value: 'branding-design', label: 'Branding und UI/UX Design' },
                  { value: 'website', label: 'Erstellung oder Verbesserung der Website' },
                  { value: 'cloud-devops', label: 'Cloud-Migration / DevOps / Technischer Support' }
                ]}
              />
              <FormField label="Anderes:">
                <Input
                  type="text"
                  placeholder="Bitte spezifizieren..."
                />
              </FormField>
            </FormField>
            
            <FormField label="3.2. Was ist derzeit Ihre größte Herausforderung (sog. 'Pain Point')?">
              <Textarea
                value={formData.painPoint}
                onChange={(e) => handleInputChange('painPoint', e.target.value)}
                placeholder="Kurze Textantwort (bis zu 500 Zeichen)"
                maxLength={500}
              />
            </FormField>
            
            <FormField label="3.3. Wo möchten Sie in 12 Monaten stehen (in digitaler Hinsicht)?">
              <Textarea
                value={formData.futureGoals}
                onChange={(e) => handleInputChange('futureGoals', e.target.value)}
                placeholder="Kurze Textantwort (bis zu 500 Zeichen)"
                maxLength={500}
              />
            </FormField>
            
            <FormField label="3.4. Was ist Ihnen im Moment wichtiger?">
              <RadioGroup
                name="priority"
                value={formData.priority}
                onChange={(value) => handleInputChange('priority', value)}
                options={[
                  { value: 'umsatzsteigerung', label: 'Umsatzsteigerung' },
                  { value: 'kostensenkung', label: 'Kostensenkung' },
                  { value: 'optimierung', label: 'Geschäftsoptimierung' },
                  { value: 'markteinführung', label: 'Schnellerer Markteintritt' },
                  { value: 'branding', label: 'Branding und Positionierung' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Section 4: Technical Details */}
          <FormSection title="4. TECHNISCHE DETAILS UND ERWARTUNGEN">
            <FormField label="4.1. Haben Sie bereits ein technisches Team oder Partner (z.B. Programmierer, Designer)?">
              <RadioGroup
                name="hasTechnicalTeam"
                value={formData.hasTechnicalTeam}
                onChange={(value) => handleInputChange('hasTechnicalTeam', value)}
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'teilweise', label: 'Teilweise (z.B. wir haben gelegentlich Freelancer)' }
                ]}
              />
            </FormField>
            
            <FormField label="4.2. Bevorzugen Sie bestimmte Technologien?" description='(Beispiel: React, Next.js, WordPress, Laravel, Python… oder "nicht sicher")'>
              <Input
                type="text"
                value={formData.preferredTechnologies}
                onChange={(e) => handleInputChange('preferredTechnologies', e.target.value)}
                placeholder="z.B. React, WordPress, oder 'nicht sicher'"
              />
            </FormField>
            
            <FormField label="4.3. Haben Sie bereits Ideen/Skizzen/Beispiele für Lösungen, die Sie entwickeln möchten?">
              <RadioGroup
                name="hasIdeas"
                value={formData.hasIdeas}
                onChange={(value) => handleInputChange('hasIdeas', value)}
                options={[
                  { value: 'ja', label: 'Ja (möglich, Link hinzuzufügen oder Datei hochzuladen)' },
                  { value: 'nein', label: 'Noch nicht, wir erwarten Hilfe von Ihnen' },
                  { value: 'teilweise', label: 'Teilweise – wir haben eine Vision' }
                ]}
              />
            </FormField>
            
            <FormField label="4.4. Was ist der ungefähre Zeitrahmen für den Projektstart?">
              <RadioGroup
                name="timeframe"
                value={formData.timeframe}
                onChange={(value) => handleInputChange('timeframe', value)}
                options={[
                  { value: 'sofort', label: 'Sofort' },
                  { value: '4-wochen', label: 'In den nächsten 4 Wochen' },
                  { value: '2-3-monate', label: 'In den nächsten 2–3 Monaten' },
                  { value: 'spaeter', label: 'Später als 3 Monate' },
                  { value: 'unbekannt', label: 'Wissen wir noch nicht' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Section 5: Budget and Cooperation */}
          <FormSection title="5. BUDGET UND KOOPERATION">
            <FormField label="5.1. Haben Sie ein ungefähres Budget für das Projekt?" description="Die Information ist vertraulich und dient nur unserer internen Bewertung und Lösungsempfehlung.">
              <RadioGroup
                name="budget"
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                options={[
                  { value: 'bis-3k', label: 'Bis 3.000 EUR' },
                  { value: '3k-7k', label: '3.000 – 7.000 EUR' },
                  { value: '7k-15k', label: '7.000 – 15.000 EUR' },
                  { value: '15k-30k', label: '15.000 – 30.000 EUR' },
                  { value: '30k-50k', label: '30.000 – 50.000 EUR' },
                  { value: 'ueber-50k', label: '50.000+ EUR' },
                  { value: 'kein-budget', label: 'Haben noch kein klares Budget' },
                  { value: 'vorschlag-erwartet', label: 'Erwarten Vorschlag von Ihrer Seite' }
                ]}
              />
            </FormField>
            
            <FormField label="5.2. Haben Sie bereits mit IT-Unternehmen oder Agenturen gearbeitet?">
              <RadioGroup
                name="previousExperience"
                value={formData.previousExperience}
                onChange={(value) => handleInputChange('previousExperience', value)}
                options={[
                  { value: 'ja', label: 'Ja' },
                  { value: 'nein', label: 'Nein' },
                  { value: 'teilweise', label: 'Teilweise (z.B. Einzelpersonen, Freelancer)' }
                ]}
              />
            </FormField>
          </FormSection>

          {/* Section 6: Additional Comments */}
          <FormSection title="6. ZUSÄTZLICHE FRAGEN / KOMMENTARE">
            <FormField label="6.1. Haben Sie noch etwas, was Sie vor dem ersten Gespräch mit uns teilen möchten?">
              <Textarea
                value={formData.additionalComments}
                onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                placeholder="Offenes Feld für Texteingabe..."
                className="min-h-[150px]"
              />
            </FormField>
          </FormSection>

          {/* Submit Button */}
          <div className="mt-12 pt-8 border-t border-vera-accent/30">
            <div className="bg-vera-primary/30 border-l-4 border-vera-accent p-6 rounded-r-lg mb-8 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-vera-accent rounded-full flex items-center justify-center vera-glow">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-vera-accent">ENDE DES FORMULARS</h3>
                  <p className="text-vera-text-light mt-1 leading-relaxed">
                    Vielen Dank für Ihre Zeit! Basierend auf Ihren Antworten werden wir uns so schnell wie möglich melden, 
                    um ein Gespräch zu vereinbaren und zu sehen, ob und wie wir eine erfolgreiche Zusammenarbeit erreichen können.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
            <button
               type="submit"
               className="vera-gradient-button hover:opacity-90 text-vera-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 vera-glow hover:vera-glow transform hover:-translate-y-1 hover:scale-105 min-h-[48px] w-full sm:w-auto"
             >
                <Send className="w-5 h-5" />
                <span>Formular absenden</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;