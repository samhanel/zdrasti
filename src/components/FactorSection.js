import React from 'react';

function FactorSection({ title, factors, onUpdate }) {
  const handleSelectChange = (e, factorName) => {
    onUpdate(factorName, e.target.value);
  };

  return (
    <div className="factor-section container">
      <h2>{title}</h2>
      <hr />
      {factors.map((factor, index) => (
        <div key={index} className="row">
          <div className="col-4">{factor.name}</div>
          <div className="col-8">
            <select
              id={factor.id}
              className="form-control"
              onChange={(e) => handleSelectChange(e, factor.name)}
            >
              {factor.options.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FactorSection;
