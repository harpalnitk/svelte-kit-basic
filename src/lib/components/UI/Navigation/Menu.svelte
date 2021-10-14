<script>
  import { page } from '$app/stores';
 // $: console.log('segment in menu', segment);
</script>


<nav class="menu-controller">
  <a aria-current="{$page.path === '/' ? 'page' : undefined}" href="/">Home</a>
  <a aria-current="{$page.path === '/about' ? 'page' : undefined}" href="/about">About</a>
  <a aria-current="{$page.path === '/contact' ? 'page' : undefined}" href="/contact">Contact</a>
  <a aria-current="{$page.path === '/timeline' ? 'page' : undefined}" href="/timeline">Timeline</a>
  <a aria-current="{$page.path === '/product-filter' ? 'page' : undefined}" href="/product-filter">Product-Filter</a>
  <a aria-current="{$page.path === '/dashboard' ? 'page' : undefined}" href="/dashboard">Dashboard</a>
  <a aria-current="{$page.path === '/auth' ? 'auth' : undefined}" href="/auth">Login</a>
  
</nav>

<style lang="scss">
   @import '../../../../styles/vars';
  .menu-controller {
    text-transform: uppercase;
    color: $text-bg-primary;
    display: none;
    a {
      &:hover {
        color: $text-bg-primary-hover;
      }
    }
  }
  @media (min-width: 640px) {
    .menu-controller {
      display: flex;
      align-self: center;

      a:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }

  [aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100%);
		height: 2px;
		background-color: $primary-color-dark;
		display: block;
		bottom: -15px;
	}
</style>
