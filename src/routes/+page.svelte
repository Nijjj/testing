<script>
  import BottomNav from '$lib/components/BottomNav.svelte';
  import Home from '$lib/components/screens/Home.svelte';
  import Scan from '$lib/components/screens/Scan.svelte';
  import Pay from '$lib/components/screens/Pay.svelte';
  import History from '$lib/components/screens/History.svelte';
  import Profile from '$lib/components/screens/Profile.svelte';

  let activeTab = $state('home');

  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<div class="app-container">
  <main class="main-content">
    {#if activeTab === 'home'}
      <Home />
    {:else if activeTab === 'scan'}
      <Scan />
    {:else if activeTab === 'pay'}
      <Pay />
    {:else if activeTab === 'history'}
      <History />
    {:else if activeTab === 'profile'}
      <Profile />
    {/if}
  </main>
  
  <BottomNav {activeTab} {setActiveTab} />
</div>
