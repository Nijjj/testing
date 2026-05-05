<div class="screen animate-fade-in" style="padding: 20px;">
  <h1>Transaction History</h1>
  <div class="filter-chips">
    {#each ['All', 'Sent', 'Received', 'Failed'] as f}
      <span class="chip {f === 'All' ? 'active' : ''}">{f}</span>
    {/each}
  </div>
  <div class="transaction-list" style="margin-top: 20px;">
    {#each Array(5) as _, i}
      <div class="transaction-item card" style="margin-bottom: 12px;">
        <div class="flex-center" style="width: 44px; height: 44px; background: #f1f5f9; border-radius: 12px;">💸</div>
        <div style="flex: 1; margin-left: 12px;">
          <h3 style="font-size: 15px; font-weight: 600;">Payment to Merchant</h3>
          <p style="font-size: 12px;">May {5-i}, 2026</p>
        </div>
        <div style="font-weight: 700;">-$45.00</div>
      </div>
    {/each}
  </div>
</div>
