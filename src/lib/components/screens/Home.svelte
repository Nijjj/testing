<script>
  import { Send, Scan, History, User } from 'lucide-svelte';
  import { formatCurrency } from '$lib/utils';
</script>

<div class="screen">
  <header class="flex-between" style="margin-bottom: 24px;">
    <div>
      <p style="color: var(--text-secondary); margin: 0; font-size: 14px;">Good morning,</p>
      <h1 style="margin: 0; font-size: 24px;">Alex Rivera</h1>
    </div>
    <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--primary-gradient); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">AR</div>
  </header>

  <div class="card" style="background: var(--primary-gradient); color: white; margin-bottom: 24px;">
    <p style="opacity: 0.9; margin: 0 0 8px 0; font-size: 14px;">Total Available Balance</p>
    <h2 style="margin: 0; font-size: 32px; font-weight: 700;">{formatCurrency(125050.25)}</h2>
    <div style="margin-top: 16px; background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 8px; display: inline-block; font-size: 12px;">Premium Account</div>
  </div>

  <div class="quick-actions" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px;">
    {#each [{icon: Send, label: 'Send'}, {icon: Scan, label: 'Scan'}, {icon: History, label: 'Bills'}, {icon: User, label: 'Request'}] as action}
      <div class="flex-center" style="flex-direction: column; gap: 8px;">
        <div class="flex-center" style="width: 56px; height: 56px; border-radius: 20px; background: white; box-shadow: var(--shadow-sm); cursor: pointer;">
          <svelte:component this={action.icon} size={24} color="#4f46e5" />
        </div>
        <span style="font-size: 12px; color: var(--text-secondary);">{action.label}</span>
      </div>
    {/each}
  </div>

  <section>
    <div class="flex-between" style="margin-bottom: 16px;">
      <h3 style="margin: 0; font-size: 18px;">Recent Activity</h3>
      <button style="border: none; background: none; color: #4f46e5; font-weight: 600; cursor: pointer;">See All</button>
    </div>
    <div class="transaction-list" style="display: flex; flex-direction: column; gap: 12px;">
      {#each [
        { name: 'Apple Store', date: 'Today, 2:45 PM', amount: 1990.00, type: 'debit', icon: '🍎' },
        { name: 'Coffee Shop', date: 'Yesterday, 9:10 AM', amount: 125.50, type: 'debit', icon: '☕' },
        { name: 'Salary Credit', date: 'May 1, 2026', amount: 35000.00, type: 'credit', icon: '💰' },
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
  </section>
</div>
