import React, { useState, useEffect } from 'react';
import FactorSection from './FactorSection';

function RiskCalculator() {
  const [scores, setScores] = useState({
    threatAgentFactors: 0,
    vulnerabilityFactors: 0,
    technicalImpact: 0,
    businessImpact: 0,
    likelihoodScore: 0,
    impactScore: 0,
    overallRisk: 'Note',
  });

  useEffect(() => {
    calculateScore(); }, [scores.threatAgentFactors, scores.vulnerabilityFactors, scores.technicalImpact, scores.businessImpact]); // Dependencies

  const handleFactorUpdate = (factorCategory, newValue) => {
    console.log(factorCategory,newValue);
    setScores(prevScores => ({
      ...prevScores,
      [factorCategory]: parseInt(newValue),
    }));
    console.log(scores);
  };

  const calculateScore = () => {
    const threatAgentAverage = scores.threatAgentFactors;
    const vulnerabilityAverage = scores.vulnerabilityFactors;
    const technicalImpactAverage = scores.technicalImpact;
    const businessImpactAverage = scores.businessImpact;

    const likelihoodScore = (threatAgentAverage + vulnerabilityAverage) / 2;
    const impactScore = (technicalImpactAverage + businessImpactAverage) / 2;

    let overallRisk = 'Low';
    if (likelihoodScore + impactScore > 10) {
      overallRisk = 'Medium';
    }
    if (likelihoodScore + impactScore > 15) {
      overallRisk = 'High';
    }

    // Now setting all scores at once
    setScores(prevScores => ({
      ...prevScores,
      likelihoodScore: likelihoodScore,
      impactScore: impactScore,
      overallRisk: overallRisk
    }));
  };

  const threatAgentFactors = [
    {
      id: "sl",
      name: "Skill Level",
      options: [
        { label: "No Technical Skills", value: "1" },
        { label: "Some Technical Skills", value: "3" },
        { label: "Advanced Computer User", value: "5" },
        { label: "Network And Programming Skills", value: "6" },
        { label: "Security Penetration Skills", value: "9" }
      ]
    },
    {
      id: "motive",
      name: "Motive",
      options: [
        { label: "Low Or No Reward", value: "1" },
        { label: "Possible Reward", value: "4" },
        { label: "High Reward", value: "9" }
      ]
    },
    {
      id: "oppor",
      name: "Opportunity",
      options: [
        { label: "Full Access/Expensive Resources Required", value: "0" },
        { label: "Special Access Or Resources Required", value: "4" },
        { label: "Some Access Or Resources Required", value: "7" },
        { label: "No Access Or Resources Required", value: "9" }
      ]
    },
    {
      id: "size",
      name: "Size",
      options: [
        { label: "Developers", value: "2" },
        { label: "System Administrators", value: "2" },
        { label: "Intranet Users", value: "4" },
        { label: "Partners", value: "5" },
        { label: "Authenticated Users", value: "6" },
        { label: "Anonymous Internet Users", value: "9" }
      ]
    }
  ];
  const vulnerabilityFactors = [
    {
      id: "eod",
      name: "Ease of Discovery",
      options: [
        { label: "Practically impossible", value: "1" },
        { label: "Difficult", value: "3" },
        { label: "Easy", value: "7" },
        { label: "Automated Tools available", value: "9" }
      ]
    },
    {
      id: "eoe",
      name: "Ease of Exploit",
      options: [
        { label: "Theoretical", value: "1" },
        { label: "Difficult", value: "3" },
        { label: "Easy", value: "5" },
        { label: "Automated Tools available", value: "9" }
      ]
    },
    {
      id: "aware",
      name: "Awareness",
      options: [
        { label: "Unknown", value: "1" },
        { label: "Hidden", value: "4" },
        { label: "Obvious", value: "6" },
        { label: "Public Knowledge", value: "9" }
      ]
    },
    {
      id: "intrude",
      name: "Intrusion Detection",
      options: [
        { label: "Active Detection In Application", value: "1" },
        { label: "Logged And Reviewed", value: "4" },
        { label: "Logged Without Review", value: "8" },
        { label: "Not Logged", value: "9" }
      ]
    },
  ];

  const technicalImpact = [
    {
      id: "loc",
      name: "Loss Of Confidentiality",
      options: [
        { label: "Minimal non-sensitive data disclosed", value: "2" },
        { label: "Minimal critical data disclosed", value: "6" },
        { label: "Extensive non-sensitive data disclosed", value: "6" },
        { label: "Extensive critical data disclosed", value: "7" },
        { label: "All Data Disclosed", value: "9" }
      ]
    },
    {
      id: "loi",
      name: "Loss Of Integrity",
      options: [
        { label: "Minimal Slightly Corrupt Data", value: "1" },
        { label: "Minimal Seriously Corrupt Data", value: "3" },
        { label: "Extensive Slightly Corrupt Data", value: "5" },
        { label: "Extensive Seriously Corrupt Data", value: "7" },
        { label: "All Data Totally Corrupt", value: "9" }
      ]
    },
    {
      id: "loa",
      name: "Loss Of Availability",
      options: [
        { label: "Minimal Secondary Services Interrupted", value: "1" },
        { label: "Minimal Primary Services Interrupted", value: "5" },
        { label: "Extensive Secondary Services Interrupted", value: "5" },
        { label: "Extensive Primary Services Interrupted", value: "7" },
        { label: "All Services Completely Lost", value: "9" }
      ]
    },
    {
      id: "loacc",
      name: "Loss of Accountability",
      options: [
        { label: "Fully Traceable", value: "1" },
        { label: "Possibly Traceable", value: "7" },
        { label: "Completely Anonymous", value: "9" }
      ]
    },
  ];

  const businessImpact = [
    {
      id: "finan",
      name: "Financial Damage",
      options: [
        { label: "Less Than The Cost To Fix The Vulnerability", value: "1" },
        { label: "Minor Effect On Annual Profit", value: "3" },
        { label: "Significant Effect On Annual Profit", value: "7" },
        { label: "Bankruptcy", value: "9" }
      ]
    },
    {
      id: "reput",
      name: "Reputation Damage",
      options: [
        { label: "Minimal Damage", value: "1" },
        { label: "Loss Of Major Accounts", value: "4" },
        { label: "Loss Of Goodwill", value: "5" },
        { label: "Brand Damage", value: "9" }
      ]
    },
    {
      id: "comply",
      name: "Non-compliance",
      options: [
        { label: "Minor Violation", value: "2" },
        { label: "Clear Violation", value: "5" },
        { label: "High Profile Violation", value: "7" }
      ]
    },
    {
      id: "privacy",
      name: "Privacy Violation",
      options: [
        { label: "One Individual", value: "3" },
        { label: "Hundreds Of People", value: "5" },
        { label: "Thousands Of People", value: "7" },
        { label: "Millions Of People", value: "9" }
      ]
    },
  ];

  return (
    <div className="risk-calculator container">
      <FactorSection title="Threat Agent Factors" factors={threatAgentFactors} onUpdate={handleFactorUpdate} />
      <FactorSection title="Vulnerability Factors" factors={vulnerabilityFactors} onUpdate={handleFactorUpdate} />
      <FactorSection title="Technical Impact" factors={technicalImpact} onUpdate={handleFactorUpdate} />
      <FactorSection title="Business Impact" factors={businessImpact} onUpdate={handleFactorUpdate} />

      <div className="result-section">
        <h2>Calculation Results</h2>
        <p>Likelihood Score: {scores.likelihoodScore}</p>
        <p>Impact Score: {scores.impactScore}</p>
        <p>Overall Risk: {scores.overallRisk}</p>
      </div>
    </div>
  );
}

export default RiskCalculator;
