<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Hexagon" path="/grid-layout/flex-layout" />

<main>
    <div>
        <div id="hexagon-1" class="hexagon">1</div>
        <div id="hexagon-2" class="hexagon">2</div>
        <div id="hexagon-3" class="hexagon">3</div>
        <div id="hexagon-4" class="hexagon">4</div>
        <div id="hexagon-5" class="hexagon">5</div>
      </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
    .hexagon {
          position: absolute;
          width: 100px;
          height: 55px;
          text-align: center;
          line-height: 55px;
          background: rgba(255, 255, 255, 0.3);
          position: relative;
        }
        .hexagon:before {
          content: "";
          position: absolute;
          top: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 25px solid rgba(255, 255, 255, 0.3);
        }
        .hexagon:after {
          content: "";
          position: absolute;
          bottom: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-top: 25px solid rgba(255, 255, 255, 0.3);
        }

        #hexagon-1 {
          top: 50px;
          left: 50px;
        }

        #hexagon-2 {
          top: 75px;
          left: 100px;
        }

        #hexagon-3 {
          top: 20px;
          left: 200px;
        }

        #hexagon-4 {
          top: 45px;
          left: 250px;
        }

        #hexagon-5 {
          top: 70px;
          left: 200px;
        }
</style>