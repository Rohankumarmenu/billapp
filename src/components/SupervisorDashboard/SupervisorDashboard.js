
import React, { useState, useEffect } from 'react';
import './SupervisorDashboard.css'; 

const SupervisorDashboard = () => {
  const [allBills, setAllBills] = useState([]);
  const [allClerks, setAllClerks] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const fakeAllBillsData = [
        { id: 1, amount: 50 },
        { id: 2, amount: 75 },
        { id: 3, amount: 100 },
      ];
      setAllBills(fakeAllBillsData);
    }, 1000);
    setTimeout(() => {
      const fakeAllClerksData = [
        { id: 1, name: 'Clerk 1', totalSales: 200 },
        { id: 2, name: 'Clerk 2', totalSales: 150 },
        { id: 3, name: 'Clerk 3', totalSales: 180 },
      ];
      setAllClerks(fakeAllClerksData);
    }, 1500);

    setTimeout(() => {
      const fakePaymentSummary = 225;
      setPaymentSummary(fakePaymentSummary);
    }, 2000);
  }, []);

  const viewAllBillsSummary = () => {
    alert('Viewing Summary of All Bills');
    console.log(allBills);
  };

  const viewAllClerks = () => {
    alert(`All Clerks: ${allClerks.map((clerk) => clerk.name).join(', ')}`);

  };

  const viewPaymentSummary = () => {
    alert(`Payment Summary: $${paymentSummary}`);

  };

  return (
    <div className="supervisor-dashboard">
      <h2>Supervisor Dashboard</h2>

      <div className="dashboard-section">
        <h3>View Summary of All Bills</h3>
        <button className="button" onClick={viewAllBillsSummary}>
          View All Bills Summary
        </button>
      </div>

      <div className="dashboard-section">
        <h3>View All Clerks</h3>
        <button className="button" onClick={viewAllClerks}>
          View All Clerks
        </button>
      </div>

      <div className="dashboard-section">
        <h3>View Payment Summary</h3>
        <button className="button" onClick={viewPaymentSummary}>
          View Payment Summary
        </button>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
