<script>
  import { Send, Scan, History, User } from 'lucide-svelte';
</script>

<div class="screen animate-fade-in">
  <div class="header-gradient">
    <div class="flex-between" style="padding: 20px;">
      <div>
        <p style="color: rgba(255,255,255,0.8);">Good morning,</p>
        <h1 style="color: white;">Alex Rivera</h1>
      </div>
      <div class="avatar-small">AR</div>
    </div>
    
    <div class="balance-card">
      <p>Total Balance</p>
      <h2>$4,250.50</h2>
      <div class="card-tag">Premium Member</div>
    </div>
  </div>

  <div class="content-area">
    <div class="quick-actions">
      <div class="action-item"><div class="icon-box"><Send /></div><span>Send</span></div>
      <div class="action-item"><div class="icon-box"><Scan /></div><span>Scan</span></div>
      <div class="action-item"><div class="icon-box"><History /></div><span>Bills</span></div>
      <div class="action-item"><div class="icon-box"><User /></div><span>Request</span></div>
    </div>

    <div class="section">
      <div class="flex-between">
        <h2>Recent Activity</h2>
        <button class="text-button">See All</button>
      </div>
      <div class="transaction-list">
        {#each [
          { name: 'Apple Store', date: 'Today, 2:45 PM', amount: '-$199.00', icon: '🍎' },
          { name: 'Starbucks', date: 'Yesterday, 9:10 AM', amount: '-$12.50', icon: '☕' },
          { name: 'Salary Credit', date: 'May 1, 2026', amount: '+$3,500.00', icon: '💰', color: '#10b981' },
        ] as tx}
          <div class="transaction-item card">
            <div class="flex-center" style="width: 44px; height: 44px; background: #f1f5f9; border-radius: 12px; font-size: 20px;">
              {tx.icon}
            </div>
            <div style="flex: 1; margin-left: 12px;">
              <h3 style="font-size: 15px; font-weight: 600;">{tx.name}</h3>
              <p style="font-size: 12px;">{tx.date}</p>
            </div>
            <div style="font-weight: 700; color: {tx.color || 'inherit'};">{tx.amount}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
