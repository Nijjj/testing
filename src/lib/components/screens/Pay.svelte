<script>
  let selectedContact = $state(null);
  let amount = $state('');

  function handleBack() {
    selectedContact = null;
  }

  function handlePay() {
    alert(`Paid $${amount} to ${selectedContact} successfully!`);
    selectedContact = null;
    amount = '';
  }
</script>

{#if selectedContact}
  <div class="screen animate-slide-up" style="padding: 20px; display: flex; flex-direction: column; height: 100%;">
    <button onclick={handleBack} class="text-button" style="align-self: flex-start; margin-bottom: 40px;">← Back</button>
    
    <div class="flex-center" style="flex-direction: column; flex: 1;">
      <div class="avatar-huge">{selectedContact[0]}</div>
      <h2 style="margin-top: 16px;">Paying {selectedContact}</h2>
      <p>alex.rivera@premium.pay</p>
      
      <div class="amount-input" style="margin-top: 60px; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 48px; font-weight: 700;">$</span>
        <input 
          type="number" 
          placeholder="0"
          bind:value={amount}
          style="font-size: 64px; font-weight: 800; border: none; outline: none; width: 200px; background: transparent;" 
          autofocus
        />
      </div>
      <input 
        type="text" 
        placeholder="Add a note (optional)" 
        style="margin-top: 20px; background: #f1f5f9; border: none; padding: 12px 20px; border-radius: 100px; width: 260px; text-align: center; outline: none;"
      />
    </div>
    
    <button 
      class="pay-button"
      disabled={!amount}
      onclick={handlePay}
    >
      Pay Securely
    </button>
  </div>
{:else}
  <div class="screen animate-fade-in" style="padding: 20px;">
    <h1>Send Money</h1>
    <div class="search-bar card flex-between" style="margin-top: 20px; padding: 12px 16px;">
      <input type="text" placeholder="Search name, phone or UPI ID" style="border: none; outline: none; width: 100%; font-size: 15px;" />
    </div>
    <div class="section" style="margin-top: 30px;">
      <h2>Recent Contacts</h2>
      <div class="contact-grid">
        {#each ['Sarah', 'John', 'Emma', 'Michael'] as name}
          <button class="contact-item" style="background: none; border: none; cursor: pointer;" onclick={() => selectedContact = name}>
            <div class="avatar-large">{name[0]}</div>
            <span>{name}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}
