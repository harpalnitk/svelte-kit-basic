const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\polygon-border.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\css-shapes.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\emojis.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\mix.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\vertical-expand-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\toggle-light-dark.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\yes-no-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\Book.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\Menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\autocomplete\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\autocomplete\\Item.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\progress-bar\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\emoji-chat\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\skill-bars\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\skill-bars\\Bar.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\sort-table\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\tree-view\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\tree-view\\TreeView.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\calendar\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\calendar\\Appointment.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\calendar\\Scheduler.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\calendar\\Calendar.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\flip-box\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\flip-box\\FlashCard.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\timeline\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\timeline\\Event.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\pwd-gen\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\pwd-gen\\PasswordGen.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\pwd-gen\\RegForm.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\twelve-column-system.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid-animated.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\three-column-fluid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\product-listing.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\grid-concept.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\growshrinkbasis.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\flowdirection.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\aligncontent.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\mediaobjects.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\flexshrink.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\alignment.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\alignself.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\flexbasis.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\holygrail.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\flexgrow.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\flexwrap.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\vertical.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\hexagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\justify.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\grids.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\order.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\responsive.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\before-after-pseudo.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\neumorphism-button.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\social-icon-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\circle-text-logo.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\glowing-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\li-pseudo-commas.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-squares.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\falling-leaves.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\glass-calendar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\icon-text-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\magic-line-nav.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\dropdown-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-plane.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\show-hide-pwd.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\3d-anim-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\contact-info.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\fancy-border.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\abstract-bg.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\indian-flag.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\intro-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\light-bulb.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\menu-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\moving-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\search-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\truck-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\airplane.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\eye-move.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\skeleton.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curves.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\cutout.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\random-particles.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\circles-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\clip-path-animations.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\image-fragmentation.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\scale-video-scroll.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\ripple-animation.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\dialog-backdrop.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\rotating-images.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\trignometry-sun.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\conic-spinner.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\creative-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\http-firebase.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\ripple-button.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\shape-outside.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\svg-animation.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\text-emphasis.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\svg-graphics.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\css-hexagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\curved-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\star-rating.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\water-drops.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\box-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\calculator.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\radio-glow.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\rating-bar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\wavy-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\particle.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\shadows.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\tweened.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\liquid.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\spring.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\clock.svelte"),
	() => import("..\\..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\personal-portfolio\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\personal-portfolio\\resume.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\admin-dashboard.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\NewsPageContent.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\ContactPage.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\AboutPage.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\HomePage.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\NewsPage.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\full-page-tabs\\Footer.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\advanced-flex\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\advanced-grid\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\dropdown-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\advanced-css\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\contact-us.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\e-commerce.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\light-dark.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\auth-page.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\three-js.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\fruits.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\images-para-two-column.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-blob-paint-all.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\ImageCard.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\Gallery.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-blob-paint.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\overlay-content.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-paint.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\Slide.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\Dot.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\ImageDisplay.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Thumbnail.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Caption.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Gallery.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Slide.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\video-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\css-js-music-player.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\ProgressBarTime.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\TrackHeading.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\VolumeSlider.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\Controls.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\PlayList.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\testimonial-with-swiper.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\gradient-border-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\gradient-card-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\cube-slider-swiper.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card-d.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card-l.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\overlapping-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-foldable-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\card-border-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\image-hover-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\weird-shape-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-stack-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\hovering-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\instagram-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-flip-card2.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-flip-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\contact-info.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glowing-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\hexagon-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\product-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\curved-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\player-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glow-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/charts-with-shapes/index.svelte
	[/^\/charts-with-shapes\/?$/, [c[3], c[4]], []],

	// src/routes/charts-with-shapes/polygon-border.svelte
	[/^\/charts-with-shapes\/polygon-border\/?$/, [c[3], c[5]], []],

	// src/routes/charts-with-shapes/css-shapes.svelte
	[/^\/charts-with-shapes\/css-shapes\/?$/, [c[3], c[6]], []],

	// src/routes/charts-with-shapes/pentagon-2.svelte
	[/^\/charts-with-shapes\/pentagon-2\/?$/, [c[3], c[7]], []],

	// src/routes/charts-with-shapes/pentagon.svelte
	[/^\/charts-with-shapes\/pentagon\/?$/, [c[3], c[8]], []],

	// src/routes/charts-with-shapes/emojis.svelte
	[/^\/charts-with-shapes\/emojis\/?$/, [c[3], c[9]], []],

	// src/routes/charts-with-shapes/mix.svelte
	[/^\/charts-with-shapes\/mix\/?$/, [c[3], c[10]], []],

	// src/routes/svelte-components/index.svelte
	[/^\/svelte-components\/?$/, [c[11], c[12]], []],

	// src/routes/svelte-components/vertical-expand-menu.svelte
	[/^\/svelte-components\/vertical-expand-menu\/?$/, [c[11], c[13]], []],

	// src/routes/svelte-components/toggle-light-dark.svelte
	[/^\/svelte-components\/toggle-light-dark\/?$/, [c[11], c[14]], []],

	// src/routes/svelte-components/yes-no-checkbox.svelte
	[/^\/svelte-components\/yes-no-checkbox\/?$/, [c[11], c[15]], []],

	// src/routes/svelte-components/product-filter/index.svelte
	[/^\/svelte-components\/product-filter\/?$/, [c[11], c[16]], []],

	// src/routes/svelte-components/product-filter/bookData.js
	[/^\/svelte-components\/product-filter\/bookData\/?$/],

	// src/routes/svelte-components/product-filter/Book.svelte
	[/^\/svelte-components\/product-filter\/Book\/?$/, [c[11], c[17]], []],

	// src/routes/svelte-components/product-filter/Menu.svelte
	[/^\/svelte-components\/product-filter\/Menu\/?$/, [c[11], c[18]], []],

	// src/routes/svelte-components/autocomplete/index.svelte
	[/^\/svelte-components\/autocomplete\/?$/, [c[11], c[19]], []],

	// src/routes/svelte-components/autocomplete/itemsStore.js
	[/^\/svelte-components\/autocomplete\/itemsStore\/?$/],

	// src/routes/svelte-components/autocomplete/Item.svelte
	[/^\/svelte-components\/autocomplete\/Item\/?$/, [c[11], c[20]], []],

	// src/routes/svelte-components/progress-bar/index.svelte
	[/^\/svelte-components\/progress-bar\/?$/, [c[11], c[21]], []],

	// src/routes/svelte-components/emoji-chat/index.svelte
	[/^\/svelte-components\/emoji-chat\/?$/, [c[11], c[22]], []],

	// src/routes/svelte-components/skill-bars/index.svelte
	[/^\/svelte-components\/skill-bars\/?$/, [c[11], c[23]], []],

	// src/routes/svelte-components/skill-bars/Bar.svelte
	[/^\/svelte-components\/skill-bars\/Bar\/?$/, [c[11], c[24]], []],

	// src/routes/svelte-components/sort-table/index.svelte
	[/^\/svelte-components\/sort-table\/?$/, [c[11], c[25]], []],

	// src/routes/svelte-components/sort-table/personData.js
	[/^\/svelte-components\/sort-table\/personData\/?$/],

	// src/routes/svelte-components/tree-view/index.svelte
	[/^\/svelte-components\/tree-view\/?$/, [c[11], c[26]], []],

	// src/routes/svelte-components/tree-view/TreeView.svelte
	[/^\/svelte-components\/tree-view\/TreeView\/?$/, [c[11], c[27]], []],

	// src/routes/svelte-components/tree-view/treeData.js
	[/^\/svelte-components\/tree-view\/treeData\/?$/],

	// src/routes/svelte-components/calendar/index.svelte
	[/^\/svelte-components\/calendar\/?$/, [c[11], c[28]], []],

	// src/routes/svelte-components/calendar/schedule-store.js
	[/^\/svelte-components\/calendar\/schedule-store\/?$/],

	// src/routes/svelte-components/calendar/Appointment.svelte
	[/^\/svelte-components\/calendar\/Appointment\/?$/, [c[11], c[29]], []],

	// src/routes/svelte-components/calendar/Scheduler.svelte
	[/^\/svelte-components\/calendar\/Scheduler\/?$/, [c[11], c[30]], []],

	// src/routes/svelte-components/calendar/Calendar.svelte
	[/^\/svelte-components\/calendar\/Calendar\/?$/, [c[11], c[31]], []],

	// src/routes/svelte-components/checkbox.svelte
	[/^\/svelte-components\/checkbox\/?$/, [c[11], c[32]], []],

	// src/routes/svelte-components/flip-box/index.svelte
	[/^\/svelte-components\/flip-box\/?$/, [c[11], c[33]], []],

	// src/routes/svelte-components/flip-box/FlashCard.svelte
	[/^\/svelte-components\/flip-box\/FlashCard\/?$/, [c[11], c[34]], []],

	// src/routes/svelte-components/flip-box/vocabData.js
	[/^\/svelte-components\/flip-box\/vocabData\/?$/],

	// src/routes/svelte-components/timeline/index.svelte
	[/^\/svelte-components\/timeline\/?$/, [c[11], c[35]], []],

	// src/routes/svelte-components/timeline/holidaysAPI.js
	[/^\/svelte-components\/timeline\/holidaysAPI\/?$/],

	// src/routes/svelte-components/timeline/histData.js
	[/^\/svelte-components\/timeline\/histData\/?$/],

	// src/routes/svelte-components/timeline/Event.svelte
	[/^\/svelte-components\/timeline\/Event\/?$/, [c[11], c[36]], []],

	// src/routes/svelte-components/pwd-gen/index.svelte
	[/^\/svelte-components\/pwd-gen\/?$/, [c[11], c[37]], []],

	// src/routes/svelte-components/pwd-gen/PasswordGen.svelte
	[/^\/svelte-components\/pwd-gen\/PasswordGen\/?$/, [c[11], c[38]], []],

	// src/routes/svelte-components/pwd-gen/RegForm.svelte
	[/^\/svelte-components\/pwd-gen\/RegForm\/?$/, [c[11], c[39]], []],

	// src/routes/svelte-components/basic.svelte
	[/^\/svelte-components\/basic\/?$/, [c[11], c[40]], []],

	// src/routes/grid-layout/index.svelte
	[/^\/grid-layout\/?$/, [c[41], c[42]], []],

	// src/routes/grid-layout/twelve-column-system.svelte
	[/^\/grid-layout\/twelve-column-system\/?$/, [c[41], c[43]], []],

	// src/routes/grid-layout/photo-grid-animated.svelte
	[/^\/grid-layout\/photo-grid-animated\/?$/, [c[41], c[44]], []],

	// src/routes/grid-layout/three-column-fluid.svelte
	[/^\/grid-layout\/three-column-fluid\/?$/, [c[41], c[45]], []],

	// src/routes/grid-layout/product-listing.svelte
	[/^\/grid-layout\/product-listing\/?$/, [c[41], c[46]], []],

	// src/routes/grid-layout/grid-concept.svelte
	[/^\/grid-layout\/grid-concept\/?$/, [c[41], c[47]], []],

	// src/routes/grid-layout/flex-layout/index.css
	[/^\/grid-layout\/flex-layout\/?$/],

	// src/routes/grid-layout/flex-layout/index.svelte
	[/^\/grid-layout\/flex-layout\/?$/, [c[41], c[48]], []],

	// src/routes/grid-layout/flex-layout/growshrinkbasis.svelte
	[/^\/grid-layout\/flex-layout\/growshrinkbasis\/?$/, [c[41], c[49]], []],

	// src/routes/grid-layout/flex-layout/flowdirection.svelte
	[/^\/grid-layout\/flex-layout\/flowdirection\/?$/, [c[41], c[50]], []],

	// src/routes/grid-layout/flex-layout/aligncontent.svelte
	[/^\/grid-layout\/flex-layout\/aligncontent\/?$/, [c[41], c[51]], []],

	// src/routes/grid-layout/flex-layout/mediaobjects.svelte
	[/^\/grid-layout\/flex-layout\/mediaobjects\/?$/, [c[41], c[52]], []],

	// src/routes/grid-layout/flex-layout/flexshrink.svelte
	[/^\/grid-layout\/flex-layout\/flexshrink\/?$/, [c[41], c[53]], []],

	// src/routes/grid-layout/flex-layout/alignment.svelte
	[/^\/grid-layout\/flex-layout\/alignment\/?$/, [c[41], c[54]], []],

	// src/routes/grid-layout/flex-layout/alignself.svelte
	[/^\/grid-layout\/flex-layout\/alignself\/?$/, [c[41], c[55]], []],

	// src/routes/grid-layout/flex-layout/flexbasis.svelte
	[/^\/grid-layout\/flex-layout\/flexbasis\/?$/, [c[41], c[56]], []],

	// src/routes/grid-layout/flex-layout/holygrail.svelte
	[/^\/grid-layout\/flex-layout\/holygrail\/?$/, [c[41], c[57]], []],

	// src/routes/grid-layout/flex-layout/flexgrow.svelte
	[/^\/grid-layout\/flex-layout\/flexgrow\/?$/, [c[41], c[58]], []],

	// src/routes/grid-layout/flex-layout/flexwrap.svelte
	[/^\/grid-layout\/flex-layout\/flexwrap\/?$/, [c[41], c[59]], []],

	// src/routes/grid-layout/flex-layout/vertical.svelte
	[/^\/grid-layout\/flex-layout\/vertical\/?$/, [c[41], c[60]], []],

	// src/routes/grid-layout/flex-layout/hexagon.svelte
	[/^\/grid-layout\/flex-layout\/hexagon\/?$/, [c[41], c[61]], []],

	// src/routes/grid-layout/flex-layout/justify.svelte
	[/^\/grid-layout\/flex-layout\/justify\/?$/, [c[41], c[62]], []],

	// src/routes/grid-layout/flex-layout/grids.svelte
	[/^\/grid-layout\/flex-layout\/grids\/?$/, [c[41], c[63]], []],

	// src/routes/grid-layout/flex-layout/order.svelte
	[/^\/grid-layout\/flex-layout\/order\/?$/, [c[41], c[64]], []],

	// src/routes/grid-layout/photo-grid.svelte
	[/^\/grid-layout\/photo-grid\/?$/, [c[41], c[65]], []],

	// src/routes/grid-layout/responsive.svelte
	[/^\/grid-layout\/responsive\/?$/, [c[41], c[66]], []],

	// src/routes/playground2/index.svelte
	[/^\/playground2\/?$/, [c[67], c[68]], []],

	// src/routes/playground2/before-after-pseudo.svelte
	[/^\/playground2\/before-after-pseudo\/?$/, [c[67], c[69]], []],

	// src/routes/playground2/neumorphism-button.svelte
	[/^\/playground2\/neumorphism-button\/?$/, [c[67], c[70]], []],

	// src/routes/playground2/social-icon-hover.svelte
	[/^\/playground2\/social-icon-hover\/?$/, [c[67], c[71]], []],

	// src/routes/playground2/circle-text-logo.svelte
	[/^\/playground2\/circle-text-logo\/?$/, [c[67], c[72]], []],

	// src/routes/playground2/glowing-checkbox.svelte
	[/^\/playground2\/glowing-checkbox\/?$/, [c[67], c[73]], []],

	// src/routes/playground2/li-pseudo-commas.svelte
	[/^\/playground2\/li-pseudo-commas\/?$/, [c[67], c[74]], []],

	// src/routes/playground2/loading-squares.svelte
	[/^\/playground2\/loading-squares\/?$/, [c[67], c[75]], []],

	// src/routes/playground2/falling-leaves.svelte
	[/^\/playground2\/falling-leaves\/?$/, [c[67], c[76]], []],

	// src/routes/playground2/glass-calendar.svelte
	[/^\/playground2\/glass-calendar\/?$/, [c[67], c[77]], []],

	// src/routes/playground2/icon-text-anim.svelte
	[/^\/playground2\/icon-text-anim\/?$/, [c[67], c[78]], []],

	// src/routes/playground2/magic-line-nav.svelte
	[/^\/playground2\/magic-line-nav\/?$/, [c[67], c[79]], []],

	// src/routes/playground2/dropdown-menu.svelte
	[/^\/playground2\/dropdown-menu\/?$/, [c[67], c[80]], []],

	// src/routes/playground2/loading-plane.svelte
	[/^\/playground2\/loading-plane\/?$/, [c[67], c[81]], []],

	// src/routes/playground2/show-hide-pwd.svelte
	[/^\/playground2\/show-hide-pwd\/?$/, [c[67], c[82]], []],

	// src/routes/playground2/3d-anim-text.svelte
	[/^\/playground2\/3d-anim-text\/?$/, [c[67], c[83]], []],

	// src/routes/playground2/contact-info.svelte
	[/^\/playground2\/contact-info\/?$/, [c[67], c[84]], []],

	// src/routes/playground2/fancy-border.svelte
	[/^\/playground2\/fancy-border\/?$/, [c[67], c[85]], []],

	// src/routes/playground2/loading-anim.svelte
	[/^\/playground2\/loading-anim\/?$/, [c[67], c[86]], []],

	// src/routes/playground2/abstract-bg.svelte
	[/^\/playground2\/abstract-bg\/?$/, [c[67], c[87]], []],

	// src/routes/playground2/indian-flag.svelte
	[/^\/playground2\/indian-flag\/?$/, [c[67], c[88]], []],

	// src/routes/playground2/intro-text.svelte
	[/^\/playground2\/intro-text\/?$/, [c[67], c[89]], []],

	// src/routes/playground2/light-bulb.svelte
	[/^\/playground2\/light-bulb\/?$/, [c[67], c[90]], []],

	// src/routes/playground2/menu-hover.svelte
	[/^\/playground2\/menu-hover\/?$/, [c[67], c[91]], []],

	// src/routes/playground2/moving-box.svelte
	[/^\/playground2\/moving-box\/?$/, [c[67], c[92]], []],

	// src/routes/playground2/search-box.svelte
	[/^\/playground2\/search-box\/?$/, [c[67], c[93]], []],

	// src/routes/playground2/truck-anim.svelte
	[/^\/playground2\/truck-anim\/?$/, [c[67], c[94]], []],

	// src/routes/playground2/airplane.svelte
	[/^\/playground2\/airplane\/?$/, [c[67], c[95]], []],

	// src/routes/playground2/eye-move.svelte
	[/^\/playground2\/eye-move\/?$/, [c[67], c[96]], []],

	// src/routes/playground2/skeleton.svelte
	[/^\/playground2\/skeleton\/?$/, [c[67], c[97]], []],

	// src/routes/playground2/curves.svelte
	[/^\/playground2\/curves\/?$/, [c[67], c[98]], []],

	// src/routes/playground2/cutout.svelte
	[/^\/playground2\/cutout\/?$/, [c[67], c[99]], []],

	// src/routes/playground3/index.svelte
	[/^\/playground3\/?$/, [c[100], c[101]], []],

	// src/routes/playground3/random-particles.svelte
	[/^\/playground3\/random-particles\/?$/, [c[100], c[102]], []],

	// src/routes/playground3/circles-anim.svelte
	[/^\/playground3\/circles-anim\/?$/, [c[100], c[103]], []],

	// src/routes/playground3/basic.svelte
	[/^\/playground3\/basic\/?$/, [c[100], c[104]], []],

	// src/routes/playground/index.svelte
	[/^\/playground\/?$/, [c[105], c[106]], []],

	// src/routes/playground/clip-path-animations.svelte
	[/^\/playground\/clip-path-animations\/?$/, [c[105], c[107]], []],

	// src/routes/playground/image-fragmentation.svelte
	[/^\/playground\/image-fragmentation\/?$/, [c[105], c[108]], []],

	// src/routes/playground/scale-video-scroll.svelte
	[/^\/playground\/scale-video-scroll\/?$/, [c[105], c[109]], []],

	// src/routes/playground/ripple-animation.svelte
	[/^\/playground\/ripple-animation\/?$/, [c[105], c[110]], []],

	// src/routes/playground/dialog-backdrop.svelte
	[/^\/playground\/dialog-backdrop\/?$/, [c[105], c[111]], []],

	// src/routes/playground/rotating-images.svelte
	[/^\/playground\/rotating-images\/?$/, [c[105], c[112]], []],

	// src/routes/playground/trignometry-sun.svelte
	[/^\/playground\/trignometry-sun\/?$/, [c[105], c[113]], []],

	// src/routes/playground/conic-spinner.svelte
	[/^\/playground\/conic-spinner\/?$/, [c[105], c[114]], []],

	// src/routes/playground/creative-menu.svelte
	[/^\/playground\/creative-menu\/?$/, [c[105], c[115]], []],

	// src/routes/playground/http-firebase.svelte
	[/^\/playground\/http-firebase\/?$/, [c[105], c[116]], []],

	// src/routes/playground/ripple-button.svelte
	[/^\/playground\/ripple-button\/?$/, [c[105], c[117]], []],

	// src/routes/playground/shape-outside.svelte
	[/^\/playground\/shape-outside\/?$/, [c[105], c[118]], []],

	// src/routes/playground/svg-animation.svelte
	[/^\/playground\/svg-animation\/?$/, [c[105], c[119]], []],

	// src/routes/playground/text-emphasis.svelte
	[/^\/playground\/text-emphasis\/?$/, [c[105], c[120]], []],

	// src/routes/playground/svg-graphics.svelte
	[/^\/playground\/svg-graphics\/?$/, [c[105], c[121]], []],

	// src/routes/playground/css-hexagon.svelte
	[/^\/playground\/css-hexagon\/?$/, [c[105], c[122]], []],

	// src/routes/playground/curved-menu.svelte
	[/^\/playground\/curved-menu\/?$/, [c[105], c[123]], []],

	// src/routes/playground/star-rating.svelte
	[/^\/playground\/star-rating\/?$/, [c[105], c[124]], []],

	// src/routes/playground/water-drops.svelte
	[/^\/playground\/water-drops\/?$/, [c[105], c[125]], []],

	// src/routes/playground/box-shadow.svelte
	[/^\/playground\/box-shadow\/?$/, [c[105], c[126]], []],

	// src/routes/playground/calculator.svelte
	[/^\/playground\/calculator\/?$/, [c[105], c[127]], []],

	// src/routes/playground/http-store.js
	[/^\/playground\/http-store\/?$/],

	// src/routes/playground/radio-glow.svelte
	[/^\/playground\/radio-glow\/?$/, [c[105], c[128]], []],

	// src/routes/playground/rating-bar.svelte
	[/^\/playground\/rating-bar\/?$/, [c[105], c[129]], []],

	// src/routes/playground/wavy-text.svelte
	[/^\/playground\/wavy-text\/?$/, [c[105], c[130]], []],

	// src/routes/playground/particle.svelte
	[/^\/playground\/particle\/?$/, [c[105], c[131]], []],

	// src/routes/playground/shadows.svelte
	[/^\/playground\/shadows\/?$/, [c[105], c[132]], []],

	// src/routes/playground/tweened.svelte
	[/^\/playground\/tweened\/?$/, [c[105], c[133]], []],

	// src/routes/playground/liquid.svelte
	[/^\/playground\/liquid\/?$/, [c[105], c[134]], []],

	// src/routes/playground/spring.svelte
	[/^\/playground\/spring\/?$/, [c[105], c[135]], []],

	// src/routes/playground/clock.svelte
	[/^\/playground\/clock\/?$/, [c[105], c[136]], []],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[137]], [c[1]]],

	// src/routes/web-pages/index.svelte
	[/^\/web-pages\/?$/, [c[138], c[139]], []],

	// src/routes/web-pages/personal-portfolio/index.svelte
	[/^\/web-pages\/personal-portfolio\/?$/, [c[138], c[140]], []],

	// src/routes/web-pages/personal-portfolio/resume.svelte
	[/^\/web-pages\/personal-portfolio\/resume\/?$/, [c[138], c[141]], []],

	// src/routes/web-pages/admin-dashboard.svelte
	[/^\/web-pages\/admin-dashboard\/?$/, [c[138], c[142]], []],

	// src/routes/web-pages/full-page-tabs/index.svelte
	[/^\/web-pages\/full-page-tabs\/?$/, [c[138], c[143]], []],

	// src/routes/web-pages/full-page-tabs/NewsPageContent.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPageContent\/?$/, [c[138], c[144]], []],

	// src/routes/web-pages/full-page-tabs/ContactPage.svelte
	[/^\/web-pages\/full-page-tabs\/ContactPage\/?$/, [c[138], c[145]], []],

	// src/routes/web-pages/full-page-tabs/AboutPage.svelte
	[/^\/web-pages\/full-page-tabs\/AboutPage\/?$/, [c[138], c[146]], []],

	// src/routes/web-pages/full-page-tabs/HomePage.svelte
	[/^\/web-pages\/full-page-tabs\/HomePage\/?$/, [c[138], c[147]], []],

	// src/routes/web-pages/full-page-tabs/NewsPage.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPage\/?$/, [c[138], c[148]], []],

	// src/routes/web-pages/full-page-tabs/Footer.svelte
	[/^\/web-pages\/full-page-tabs\/Footer\/?$/, [c[138], c[149]], []],

	// src/routes/web-pages/advanced-flex/index.svelte
	[/^\/web-pages\/advanced-flex\/?$/, [c[138], c[150]], []],

	// src/routes/web-pages/advanced-flex/sass/main.scss
	[/^\/web-pages\/advanced-flex\/sass\/main\/?$/],

	// src/routes/web-pages/advanced-grid/index.svelte
	[/^\/web-pages\/advanced-grid\/?$/, [c[138], c[151]], []],

	// src/routes/web-pages/advanced-grid/sass/main.scss
	[/^\/web-pages\/advanced-grid\/sass\/main\/?$/],

	// src/routes/web-pages/dropdown-menu.svelte
	[/^\/web-pages\/dropdown-menu\/?$/, [c[138], c[152]], []],

	// src/routes/web-pages/advanced-css/index.svelte
	[/^\/web-pages\/advanced-css\/?$/, [c[138], c[153]], []],

	// src/routes/web-pages/advanced-css/fonts/material-icons/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2
	[/^\/web-pages\/advanced-css\/fonts\/material-icons\/flUhRq6tzZclQEJ-Vdg-IuiaDsNc\/?$/],

	// src/routes/web-pages/advanced-css/main.scss
	[/^\/web-pages\/advanced-css\/main\/?$/],

	// src/routes/web-pages/contact-us.svelte
	[/^\/web-pages\/contact-us\/?$/, [c[138], c[154]], []],

	// src/routes/web-pages/e-commerce.svelte
	[/^\/web-pages\/e-commerce\/?$/, [c[138], c[155]], []],

	// src/routes/web-pages/light-dark.svelte
	[/^\/web-pages\/light-dark\/?$/, [c[138], c[156]], []],

	// src/routes/web-pages/auth-page.svelte
	[/^\/web-pages\/auth-page\/?$/, [c[138], c[157]], []],

	// src/routes/web-pages/three-js.svelte
	[/^\/web-pages\/three-js\/?$/, [c[138], c[158]], []],

	// src/routes/web-pages/fruits.svelte
	[/^\/web-pages\/fruits\/?$/, [c[138], c[159]], []],

	// src/routes/web-pages/basic.svelte
	[/^\/web-pages\/basic\/?$/, [c[138], c[160]], []],

	// src/routes/images/index.svelte
	[/^\/images\/?$/, [c[161], c[162]], []],

	// src/routes/images/images-para-two-column.svelte
	[/^\/images\/images-para-two-column\/?$/, [c[161], c[163]], []],

	// src/routes/images/image-blob-paint-all.svelte
	[/^\/images\/image-blob-paint-all\/?$/, [c[161], c[164]], []],

	// src/routes/images/portfolio-gallery/index.svelte
	[/^\/images\/portfolio-gallery\/?$/, [c[161], c[165]], []],

	// src/routes/images/portfolio-gallery/ImageCard.svelte
	[/^\/images\/portfolio-gallery\/ImageCard\/?$/, [c[161], c[166]], []],

	// src/routes/images/portfolio-gallery/Gallery.svelte
	[/^\/images\/portfolio-gallery\/Gallery\/?$/, [c[161], c[167]], []],

	// src/routes/images/portfolio-gallery/imgData.js
	[/^\/images\/portfolio-gallery\/imgData\/?$/],

	// src/routes/images/image-blob-paint.svelte
	[/^\/images\/image-blob-paint\/?$/, [c[161], c[168]], []],

	// src/routes/images/overlay-content.svelte
	[/^\/images\/overlay-content\/?$/, [c[161], c[169]], []],

	// src/routes/images/image-paint.svelte
	[/^\/images\/image-paint\/?$/, [c[161], c[170]], []],

	// src/routes/images/slideshow/index.svelte
	[/^\/images\/slideshow\/?$/, [c[161], c[171]], []],

	// src/routes/images/slideshow/slideData.js
	[/^\/images\/slideshow\/slideData\/?$/],

	// src/routes/images/slideshow/Slide.svelte
	[/^\/images\/slideshow\/Slide\/?$/, [c[161], c[172]], []],

	// src/routes/images/slideshow/Dot.svelte
	[/^\/images\/slideshow\/Dot\/?$/, [c[161], c[173]], []],

	// src/routes/images/gallery/index.svelte
	[/^\/images\/gallery\/?$/, [c[161], c[174]], []],

	// src/routes/images/gallery/ImageDisplay.svelte
	[/^\/images\/gallery\/ImageDisplay\/?$/, [c[161], c[175]], []],

	// src/routes/images/gallery/Thumbnail.svelte
	[/^\/images\/gallery\/Thumbnail\/?$/, [c[161], c[176]], []],

	// src/routes/images/gallery/imageData.js
	[/^\/images\/gallery\/imageData\/?$/],

	// src/routes/images/gallery/Caption.svelte
	[/^\/images\/gallery\/Caption\/?$/, [c[161], c[177]], []],

	// src/routes/images/gallery/Gallery.svelte
	[/^\/images\/gallery\/Gallery\/?$/, [c[161], c[178]], []],

	// src/routes/images/gallery/Slide.svelte
	[/^\/images\/gallery\/Slide\/?$/, [c[161], c[179]], []],

	// src/routes/videos/index.svelte
	[/^\/videos\/?$/, [c[0], c[180]], [c[1]]],

	// src/routes/videos/video-text.svelte
	[/^\/videos\/video-text\/?$/, [c[0], c[181]], [c[1]]],

	// src/routes/videos/basic.svelte
	[/^\/videos\/basic\/?$/, [c[0], c[182]], [c[1]]],

	// src/routes/audio/index.svelte
	[/^\/audio\/?$/, [c[183], c[184]], []],

	// src/routes/audio/css-js-music-player.svelte
	[/^\/audio\/css-js-music-player\/?$/, [c[183], c[185]], []],

	// src/routes/audio/audio-player/index.svelte
	[/^\/audio\/audio-player\/?$/, [c[183], c[186]], []],

	// src/routes/audio/audio-player/ProgressBarTime.svelte
	[/^\/audio\/audio-player\/ProgressBarTime\/?$/, [c[183], c[187]], []],

	// src/routes/audio/audio-player/TrackHeading.svelte
	[/^\/audio\/audio-player\/TrackHeading\/?$/, [c[183], c[188]], []],

	// src/routes/audio/audio-player/VolumeSlider.svelte
	[/^\/audio\/audio-player\/VolumeSlider\/?$/, [c[183], c[189]], []],

	// src/routes/audio/audio-player/Controls.svelte
	[/^\/audio\/audio-player\/Controls\/?$/, [c[183], c[190]], []],

	// src/routes/audio/audio-player/PlayList.svelte
	[/^\/audio\/audio-player\/PlayList\/?$/, [c[183], c[191]], []],

	// src/routes/audio/audioData.js
	[/^\/audio\/audioData\/?$/],

	// src/routes/cards/index.svelte
	[/^\/cards\/?$/, [c[192], c[193]], []],

	// src/routes/cards/testimonial-with-swiper.svelte
	[/^\/cards\/testimonial-with-swiper\/?$/, [c[192], c[194]], []],

	// src/routes/cards/gradient-border-card.svelte
	[/^\/cards\/gradient-border-card\/?$/, [c[192], c[195]], []],

	// src/routes/cards/gradient-card-shadow.svelte
	[/^\/cards\/gradient-card-shadow\/?$/, [c[192], c[196]], []],

	// src/routes/cards/cube-slider-swiper.svelte
	[/^\/cards\/cube-slider-swiper\/?$/, [c[192], c[197]], []],

	// src/routes/cards/neumorphic-card-d.svelte
	[/^\/cards\/neumorphic-card-d\/?$/, [c[192], c[198]], []],

	// src/routes/cards/neumorphic-card-l.svelte
	[/^\/cards\/neumorphic-card-l\/?$/, [c[192], c[199]], []],

	// src/routes/cards/overlapping-cards.svelte
	[/^\/cards\/overlapping-cards\/?$/, [c[192], c[200]], []],

	// src/routes/cards/3d-foldable-card.svelte
	[/^\/cards\/3d-foldable-card\/?$/, [c[192], c[201]], []],

	// src/routes/cards/card-border-anim.svelte
	[/^\/cards\/card-border-anim\/?$/, [c[192], c[202]], []],

	// src/routes/cards/image-hover-card.svelte
	[/^\/cards\/image-hover-card\/?$/, [c[192], c[203]], []],

	// src/routes/cards/weird-shape-card.svelte
	[/^\/cards\/weird-shape-card\/?$/, [c[192], c[204]], []],

	// src/routes/cards/neumorphic-card.svelte
	[/^\/cards\/neumorphic-card\/?$/, [c[192], c[205]], []],

	// src/routes/cards/3d-stack-cards.svelte
	[/^\/cards\/3d-stack-cards\/?$/, [c[192], c[206]], []],

	// src/routes/cards/hovering-cards.svelte
	[/^\/cards\/hovering-cards\/?$/, [c[192], c[207]], []],

	// src/routes/cards/instagram-card.svelte
	[/^\/cards\/instagram-card\/?$/, [c[192], c[208]], []],

	// src/routes/cards/3d-flip-card2.svelte
	[/^\/cards\/3d-flip-card2\/?$/, [c[192], c[209]], []],

	// src/routes/cards/profile-hover.svelte
	[/^\/cards\/profile-hover\/?$/, [c[192], c[210]], []],

	// src/routes/cards/3d-flip-card.svelte
	[/^\/cards\/3d-flip-card\/?$/, [c[192], c[211]], []],

	// src/routes/cards/contact-info.svelte
	[/^\/cards\/contact-info\/?$/, [c[192], c[212]], []],

	// src/routes/cards/glowing-card.svelte
	[/^\/cards\/glowing-card\/?$/, [c[192], c[213]], []],

	// src/routes/cards/hexagon-card.svelte
	[/^\/cards\/hexagon-card\/?$/, [c[192], c[214]], []],

	// src/routes/cards/product-card.svelte
	[/^\/cards\/product-card\/?$/, [c[192], c[215]], []],

	// src/routes/cards/profile-card.svelte
	[/^\/cards\/profile-card\/?$/, [c[192], c[216]], []],

	// src/routes/cards/curved-card.svelte
	[/^\/cards\/curved-card\/?$/, [c[192], c[217]], []],

	// src/routes/cards/glass-hover.svelte
	[/^\/cards\/glass-hover\/?$/, [c[192], c[218]], []],

	// src/routes/cards/player-card.svelte
	[/^\/cards\/player-card\/?$/, [c[192], c[219]], []],

	// src/routes/cards/glass-card.svelte
	[/^\/cards\/glass-card\/?$/, [c[192], c[220]], []],

	// src/routes/cards/glow-card.svelte
	[/^\/cards\/glow-card\/?$/, [c[192], c[221]], []],

	// src/routes/cards/glass.svelte
	[/^\/cards\/glass\/?$/, [c[192], c[222]], []],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[223]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];