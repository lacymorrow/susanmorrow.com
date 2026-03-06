import React, { useState } from 'react';

const ReceiptGenerator = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfService: '',
    diagnosisCode: '',
    charge: '',
    payment: '',
    balanceDue: '',
    nextAppointment: '',
    // Service codes
    services: {
      '90791': false,
      '90832': false,
      '90834': false,
      '90837': false,
      '90846': false,
      '90847': false,
      '90853': false,
      '90849_group': false,
      '90849_crisis': false,
      '90840': false
    },
    // Place of service
    placeOfService: '',
    // Length of session
    sessionLength: ''
  });

  const serviceOptions = {
    '90791': 'Diagnostic Evaluation',
    '90832': 'Brief Individual Therapy/30 minutes with patient and/or family member',
    '90834': 'Intermediate Individual Therapy - 45 minutes',
    '90837': 'Extended Individual Therapy - 50 minutes',
    '90846': 'Family Therapy - patient not present',
    '90847': 'Family Therapy - patient present',
    '90853': 'Group Therapy',
    '90849_group': 'Multiple Family Group Therapy',
    '90849_crisis': 'Psychotherapy for Crisis - first 50 minutes',
    '90840': 'Crisis Psychotherapy - 30 minute add on'
  };

  const placeOptions = ['Office', 'Hospital', 'Other'];
  const sessionLengthOptions = ['30', '50', '90', '90+', 'Other'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (serviceCode) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceCode]: !prev.services[serviceCode]
      }
    }));
  };

  const generatePDF = () => {
    // Create receipt content for printing
    const receiptContent = generateReceiptHTML();
    
    // Open new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(receiptContent);
    printWindow.document.close();
    
    // Auto-trigger print dialog
    printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
    };
  };

  const generateReceiptHTML = () => {
    const selectedServices = Object.entries(formData.services)
      .filter(([code, selected]) => selected)
      .map(([code, _]) => ({ code, service: serviceOptions[code] }));

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt - ${formData.patientName}</title>
        <style>
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.4;
          }
          .header-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .field-group {
            margin-bottom: 15px;
          }
          .field-label {
            font-weight: bold;
            margin-right: 10px;
          }
          .underline {
            border-bottom: 1px solid #000;
            display: inline-block;
            min-width: 200px;
            padding-bottom: 2px;
          }
          .table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
          }
          .table th, .table td {
            border: 2px solid #000;
            padding: 8px;
            text-align: center;
            font-weight: bold;
          }
          .services-section {
            margin: 20px 0;
          }
          .service-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
          }
          .checkbox {
            width: 15px;
            height: 15px;
            border: 2px solid #000;
            margin-right: 10px;
            display: inline-block;
            text-align: center;
            line-height: 11px;
            font-weight: bold;
          }
          .provider-box {
            border: 3px solid #000;
            padding: 15px;
            text-align: center;
            margin: 20px 0;
            border-radius: 10px;
          }
          .provider-name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          .bottom-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 30px;
          }
          .signature-section {
            flex: 1;
            margin-right: 20px;
          }
          .next-appointment {
            flex: 1;
            text-align: center;
          }
          .notice {
            margin-top: 20px;
            font-size: 12px;
            text-align: center;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="header-row">
          <div class="field-group">
            <span class="field-label">Patient Name:</span>
            <span class="underline">${formData.patientName}</span>
          </div>
          <div class="field-group">
            <span class="field-label">Date Of Service:</span>
            <span class="underline">${formData.dateOfService}</span>
          </div>
        </div>
        
        <div class="field-group">
          <span class="field-label">Diagnosis Code: (DSM-IV)</span>
          <span class="underline">${formData.diagnosisCode}</span>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>Charge</th>
              <th>Payment</th>
              <th>Balance Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${formData.charge}</td>
              <td>${formData.payment}</td>
              <td>${formData.balanceDue}</td>
            </tr>
          </tbody>
        </table>

        <div class="services-section">
          <div style="display: flex; margin-bottom: 10px;">
            <span class="field-label" style="margin-right: 20px;">Code</span>
            <span class="field-label">Service</span>
          </div>
          ${Object.entries(serviceOptions).map(([code, service]) => `
            <div class="service-item">
              <span class="checkbox">${formData.services[code] ? '✓' : ''}</span>
              <span style="margin-right: 15px; font-weight: bold;">${code.replace('_group', '').replace('_crisis', '')}</span>
              <span>${service}</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; margin: 20px 0;">
          <div>
            <span class="field-label">Place of Service:</span>
            ${placeOptions.map(option => `
              <span class="checkbox" style="margin: 0 5px;">${formData.placeOfService === option ? '✓' : ''}</span>
              <span style="margin-right: 15px;">${option}</span>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <span class="field-label">Length of Session:</span>
          ${sessionLengthOptions.map(option => `
            <span class="checkbox" style="margin: 0 5px;">${formData.sessionLength === option ? '✓' : ''}</span>
            <span style="margin-right: 15px;">${option}</span>
          `).join('')}
        </div>

        <div class="provider-box">
          <div class="provider-name">SUSAN MORROW, MSW, LCSW</div>
          <div>429 E Worthington Ave.</div>
          <div>Charlotte, NC 28203</div>
          <div>(704) 332-5153</div>
          <div>susan@susanmorrow.us</div>
          <div style="margin-top: 10px;">
            <div>NC License #C000821 &nbsp;&nbsp; Tax ID #56-175-76-22</div>
            <div>NPI #1649486390</div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="signature-section">
            <span class="field-label">Provider's Signature</span>
            <div class="underline" style="min-width: 300px; margin-top: 10px; height: 40px;"></div>
          </div>
          
          <div class="next-appointment">
            <span class="field-label">Next Appointment:</span>
            <div class="underline" style="min-width: 250px; margin-top: 10px;">${formData.nextAppointment}</div>
          </div>
        </div>

        <div class="notice">
          If you are unable to keep this appointment, please give 48 hours notice<br>
          or a charge may be made for your reserved time.
        </div>

        <div class="no-print" style="margin-top: 30px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #007cba; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Print Receipt
          </button>
          <button onclick="window.close()" style="padding: 10px 20px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">
            Close
          </button>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
      <form onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
        
        {/* Patient Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Patient Name:
            </label>
            <input
              type="text"
              value={formData.patientName}
              onChange={(e) => handleInputChange('patientName', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Date of Service:
            </label>
            <input
              type="date"
              value={formData.dateOfService}
              onChange={(e) => handleInputChange('dateOfService', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Diagnosis Code (DSM-IV):
          </label>
          <input
            type="text"
            value={formData.diagnosisCode}
            onChange={(e) => handleInputChange('diagnosisCode', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="e.g., 309.0"
            required
          />
        </div>

        {/* Financial Information */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Charge:
            </label>
            <input
              type="text"
              value={formData.charge}
              onChange={(e) => handleInputChange('charge', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="$150.00"
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Payment:
            </label>
            <input
              type="text"
              value={formData.payment}
              onChange={(e) => handleInputChange('payment', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="$150.00"
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Balance Due:
            </label>
            <input
              type="text"
              value={formData.balanceDue}
              onChange={(e) => handleInputChange('balanceDue', e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
              placeholder="$0.00"
            />
          </div>
        </div>

        {/* Service Codes */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '1rem' }}>
            Service Codes:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
            {Object.entries(serviceOptions).map(([code, service]) => (
              <label key={code} style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.services[code]}
                  onChange={() => handleServiceChange(code)}
                  style={{ marginRight: '10px', marginTop: '2px' }}
                />
                <span style={{ fontWeight: 'bold', marginRight: '10px', minWidth: '60px' }}>
                  {code.replace('_group', '').replace('_crisis', '')}
                </span>
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Place of Service */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Place of Service:
          </label>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {placeOptions.map(option => (
              <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="placeOfService"
                  value={option}
                  checked={formData.placeOfService === option}
                  onChange={(e) => handleInputChange('placeOfService', e.target.value)}
                  style={{ marginRight: '5px' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Length of Session */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Length of Session:
          </label>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {sessionLengthOptions.map(option => (
              <label key={option} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="sessionLength"
                  value={option}
                  checked={formData.sessionLength === option}
                  onChange={(e) => handleInputChange('sessionLength', e.target.value)}
                  style={{ marginRight: '5px' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Next Appointment */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Next Appointment (optional):
          </label>
          <input
            type="text"
            value={formData.nextAppointment}
            onChange={(e) => handleInputChange('nextAppointment', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
            placeholder="e.g., Monday, March 13, 2026 at 2:00 PM"
          />
        </div>

        {/* Generate Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              background: '#007cba',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Generate Receipt
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReceiptGenerator;