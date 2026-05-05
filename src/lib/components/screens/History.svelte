<script>
  import { formatCurrency } from '$lib/utils';
</script>

<div class="screen">
  <header style="margin-bottom: 24px;">
    <h1 style="margin: 0; font-size: 24px;">History</h1>
    <p style="color: var(--text-secondary); margin: 4px 0 0 0;">Your recent transactions</p>
  </header>

  <div class="transaction-list" style="display: flex; flex-direction: column; gap: 16px;">
    {#each [
      { name: 'Apple Store', date: 'Today, 2:45 PM', amount: 1990.00, type: 'debit', icon: '🍎' },
      { name: 'Coffee Shop', date: 'Yesterday, 9:10 AM', amount: 125.50, type: 'debit', icon: '☕' },
      { name: 'Salary Credit', date: 'May 1, 2026', amount: 35000.00, type: 'credit', icon: '💰' },
      { name: 'Amazon India', date: 'April 28, 2026', amount: 2499.00, type: 'debit', icon: '📦' },
      { name: 'Zomato', date: 'April 27, 2026', amount: 450.00, type: 'debit', icon: '🍕' },
    ] as tx}
      <div class="card" style="display: flex; align-items: center; padding: 16px;">
        <div class="flex-center" style="width: 48px; height: 48px; background: #f1f5f9; border-radius: 16px; font-size: 20px;">{tx.icon}</div>
        <div style="flex: 1; margin-left: 16px;">
          <h4 style="margin: 0; font-size: 15px;">{tx.name}</h4>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-secondary);">{tx.date}</p>
        </div>
        <div style="font-weight: 600; color: {tx.type === 'debit' ? '#ef4444' : '#10b981'};">
          {tx.type === 'credit' ? '+' : '-'}{formatCurrency(tx.amount)}
        </div>
      </div>
    {/each}
  </div>
</div>
