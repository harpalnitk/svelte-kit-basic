<script>
	import BasicPage from '$lib/components/UI/BasicPage.svelte';
</script>

<BasicPage title="Media Objects" path="/grid-layout/flex-layout" />

<main>
	<div class="container">
		<div class="media-object">
		  <img src="/img/misc/squirrel.jpg" class="figure" alt="Cute squirrel">
		  <div class="media-body">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tenetur iure est! Corporis iusto quos, vitae asperiores ad, voluptatum quia error iure modi inventore quibusdam possimus alias, odit nam voluptates eos. Consequuntur, porro! Quo, nam aliquam sunt aperiam, optio ducimus delectus, a blanditiis hic, totam eum asperiores similique id nemo.</p>
			<p>By Charlesjsharp (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons</p>
		  </div>
		</div>
		<div class="media-object">
		  <img src="/img/misc/squirrel.jpg" class="figure" alt="Cute squirrel">
		  <div class="media-body">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illum, animi quis dolorem quae similique ex ullam eum labore quia veniam ducimus rerum aut nesciunt necessitatibus autem fugit perferendis. Laboriosam, dolorum quos nihil repellat quasi in. Explicabo in quos iste aliquam cum dolor iure doloribus aut, dolorem dicta optio dignissimos mollitia repudiandae sit, adipisci beatae voluptatem. Optio magni consequuntur enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officia maxime veniam, error! Quo repellat quidem aut officiis explicabo voluptatum, quis, vel cum exercitationem accusamus eveniet atque aliquid. Explicabo, odio?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis consectetur dolorem adipisci est, nemo voluptatibus aliquam ratione saepe laborum natus! Omnis tenetur iusto, modi nam ea doloribus suscipit. Explicabo, fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tenetur iure est! Corporis iusto quos, vitae asperiores ad, voluptatum quia error iure modi inventore quibusdam possimus alias, odit nam voluptates eos. Consequuntur, porro! Quo, nam aliquam sunt aperiam, optio ducimus delectus, a blanditiis hic, totam eum asperiores similique id nemo.</p>
			<div class="container">
			  <div class="half">Like</div>
			  <div class="half">Comment</div>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quis dicta voluptatibus nisi itaque tempora maxime vel debitis ex dolores ut nostrum, iste adipisci, labore odit corporis atque incidunt quos! Debitis voluptates magni beatae quo voluptatibus accusamus suscipit magnam fugiat amet. Est dolorem corporis dignissimos! Incidunt voluptates, magnam neque consectetur odio sunt quis minus. Libero nobis voluptatum delectus laborum minima ut magni, assumenda odit dolorem corporis, inventore eligendi at, repudiandae ex qui ea doloremque repellendus a nesciunt id beatae fugiat.</p>
			<p>By Charlesjsharp (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons</p>
		  </div>
		</div>
	  </div>
</main>

<style lang="scss">
	@import '../../../../styles/vars';
	@import '../index';
	
.media-object {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: flex-start;
}

.media-object .figure {
  margin-right: 20px;
  flex: 1 0 40%;
  max-width: 400px;
}

.media-object .media-body {
  flex: 1 1 auto;
}

</style>
