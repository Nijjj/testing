<script>
  import { Home, Scan, CreditCard, History, User } from 'lucide-svelte';
</script>

<nav style="position: fixed; bottom: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px); border-top: 1px solid rgba(226, 232, 240, 0.5); padding: 12px 24px; display: flex; justify-content: space-between; align-items: center; z-index: 100;">
  {#each [{icon: Home, label: 'Home'}, {icon: Scan, label: 'Scan'}, {icon: CreditCard, label: 'Pay'}, {icon: History, label: 'History'}, {icon: User, label: 'Profile'}] as item}
    <button style="border: none; background: none; display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--text-secondary); cursor: pointer;">
      <svelte:component this={item.icon} size={22} />
      <span style="font-size: 10px;">{item.label}</span>
    </button>
  {/each}
</nav>

<div style="height: 80px;"></div> <!-- Spacer -->
