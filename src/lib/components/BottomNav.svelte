<script>
  import { Home, Scan, Send, History, User } from 'lucide-svelte';

  let { activeTab, setActiveTab } = $props();

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'scan', icon: Scan, label: 'Scan' },
    { id: 'pay', icon: Send, label: 'Pay' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];
</script>

<nav class="bottom-nav">
  {#each tabs as tab}
    {@const Icon = tab.icon}
    <button
      class="nav-item {activeTab === tab.id ? 'active' : ''}"
      onclick={() => setActiveTab(tab.id)}
    >
      <Icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
      <span>{tab.label}</span>
    </button>
  {/each}
</nav>
