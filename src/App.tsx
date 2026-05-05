import React, { useState } from 'react';
import { Home, Scan, Send, History, User } from 'lucide-react';

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'scan', icon: Scan, label: 'Scan' },
    { id: 'pay', icon: Send, label: 'Pay' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Screens ---

const HomeScreen = () => (
  <div className="screen animate-fade-in">
    <div className="header-gradient">
      <div className="flex-between" style={{ padding: '20px' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Good morning,</p>
          <h1 style={{ color: 'white' }}>Alex Rivera</h1>
        </div>
        <div className="avatar-small">AR</div>
      </div>
      
      <div className="balance-card">
        <p>Total Balance</p>
        <h2>$4,250.50</h2>
        <div className="card-tag">Premium Member</div>
      </div>
    </div>

    <div className="content-area">
      <div className="quick-actions">
        <div className="action-item"><div className="icon-box"><Send /></div><span>Send</span></div>
        <div className="action-item"><div className="icon-box"><Scan /></div><span>Scan</span></div>
        <div className="action-item"><div className="icon-box"><History /></div><span>Bills</span></div>
        <div className="action-item"><div className="icon-box"><User /></div><span>Request</span></div>
      </div>

      <div className="section">
        <div className="flex-between">
          <h2>Recent Activity</h2>
          <button className="text-button">See All</button>
        </div>
        <div className="transaction-list">
          {[
            { name: 'Apple Store', date: 'Today, 2:45 PM', amount: '-$199.00', icon: '🍎' },
            { name: 'Starbucks', date: 'Yesterday, 9:10 AM', amount: '-$12.50', icon: '☕' },
            { name: 'Salary Credit', date: 'May 1, 2026', amount: '+$3,500.00', icon: '💰', color: '#10b981' },
          ].map((tx, i) => (
            <div key={i} className="transaction-item card">
              <div className="flex-center" style={{ width: '44px', height: '44px', background: '#f1f5f9', borderRadius: '12px', fontSize: '20px' }}>
                {tx.icon}
              </div>
              <div style={{ flex: 1, marginLeft: '12px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '600' }}>{tx.name}</h3>
                <p style={{ fontSize: '12px' }}>{tx.date}</p>
              </div>
              <div style={{ fontWeight: '700', color: tx.color || 'inherit' }}>{tx.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ScanScreen = () => (
  <div className="screen animate-fade-in scanner-bg">
    <div className="scanner-overlay">
      <div className="scanner-frame">
        <div className="corner tl"></div>
        <div className="corner tr"></div>
        <div className="corner bl"></div>
        <div className="corner br"></div>
        <div className="scanner-line"></div>
      </div>
      <p className="scanner-text">Align QR code within the frame</p>
    </div>
  </div>
);

const PayScreen = () => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [amount, setAmount] = useState('');

  if (selectedContact) {
    return (
      <div className="screen animate-slide-up" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <button onClick={() => setSelectedContact(null)} className="text-button" style={{ alignSelf: 'flex-start', marginBottom: '40px' }}>← Back</button>
        
        <div className="flex-center" style={{ flexDirection: 'column', flex: 1 }}>
          <div className="avatar-huge">{selectedContact[0]}</div>
          <h2 style={{ marginTop: '16px' }}>Paying {selectedContact}</h2>
          <p>alex.rivera@premium.pay</p>
          
          <div className="amount-input" style={{ marginTop: '60px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '48px', fontWeight: '700' }}>$</span>
            <input 
              type="number" 
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ fontSize: '64px', fontWeight: '800', border: 'none', outline: 'none', width: '200px', background: 'transparent' }} 
              autoFocus
            />
          </div>
          <input 
            type="text" 
            placeholder="Add a note (optional)" 
            style={{ marginTop: '20px', background: '#f1f5f9', border: 'none', padding: '12px 20px', borderRadius: '100px', width: '260px', textAlign: 'center', outline: 'none' }}
          />
        </div>
        
        <button 
          className="pay-button"
          disabled={!amount}
          onClick={() => {
            alert(`Paid $${amount} to ${selectedContact} successfully!`);
            setSelectedContact(null);
            setAmount('');
          }}
        >
          Pay Securely
        </button>
      </div>
    );
  }

  return (
    <div className="screen animate-fade-in" style={{ padding: '20px' }}>
      <h1>Send Money</h1>
      <div className="search-bar card flex-between" style={{ marginTop: '20px', padding: '12px 16px' }}>
        <input type="text" placeholder="Search name, phone or UPI ID" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '15px' }} />
      </div>
      <div className="section" style={{ marginTop: '30px' }}>
        <h2>Recent Contacts</h2>
        <div className="contact-grid">
          {['Sarah', 'John', 'Emma', 'Michael'].map(name => (
            <div key={name} className="contact-item" onClick={() => setSelectedContact(name)}>
              <div className="avatar-large">{name[0]}</div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryScreen = () => (
  <div className="screen animate-fade-in" style={{ padding: '20px' }}>
    <h1>Transaction History</h1>
    <div className="filter-chips">
      {['All', 'Sent', 'Received', 'Failed'].map(f => (
        <span key={f} className={`chip ${f === 'All' ? 'active' : ''}`}>{f}</span>
      ))}
    </div>
    <div className="transaction-list" style={{ marginTop: '20px' }}>
      {Array(5).fill(0).map((_, i) => (
        <div key={i} className="transaction-item card" style={{ marginBottom: '12px' }}>
          <div className="flex-center" style={{ width: '44px', height: '44px', background: '#f1f5f9', borderRadius: '12px' }}>💸</div>
          <div style={{ flex: 1, marginLeft: '12px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600' }}>Payment to Merchant</h3>
            <p style={{ fontSize: '12px' }}>May {5-i}, 2026</p>
          </div>
          <div style={{ fontWeight: '700' }}>-$45.00</div>
        </div>
      ))}
    </div>
  </div>
);

const ProfileScreen = () => (
  <div className="screen animate-fade-in">
    <div className="profile-header">
      <div className="avatar-huge">AR</div>
      <h2>Alex Rivera</h2>
      <p>alex.rivera@premium.pay</p>
      <div className="qr-mini">QR Code</div>
    </div>
    <div className="menu-list">
      {['Account Settings', 'Payment Methods', 'Security', 'Help & Support', 'About Premium Pay'].map(item => (
        <div key={item} className="menu-item flex-between">
          <span>{item}</span>
          <span style={{ opacity: 0.3 }}>›</span>
        </div>
      ))}
      <div className="menu-item" style={{ color: '#ef4444', borderBottom: 'none' }}>Logout</div>
    </div>
  </div>
);

// --- Main App ---

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen />;
      case 'scan': return <ScanScreen />;
      case 'pay': return <PayScreen />;
      case 'history': return <HistoryScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      <main className="main-content">
        {renderScreen()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
