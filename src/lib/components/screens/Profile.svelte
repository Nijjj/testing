<div class="screen animate-fade-in">
  <div class="profile-header">
    <div class="avatar-huge">AR</div>
    <h2>Alex Rivera</h2>
    <p>alex.rivera@premium.pay</p>
    <div class="qr-mini">QR Code</div>
  </div>
  <div class="menu-list">
    {#each ['Account Settings', 'Payment Methods', 'Security', 'Help & Support', 'About Premium Pay'] as item}
      <div class="menu-item flex-between">
        <span>{item}</span>
        <span style="opacity: 0.3;">›</span>
      </div>
    {/each}
    <div class="menu-item" style="color: #ef4444; border-bottom: none;">Logout</div>
  </div>
</div>
