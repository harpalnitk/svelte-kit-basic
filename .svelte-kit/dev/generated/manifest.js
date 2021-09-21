const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\css-shapes.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\emojis.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\mix.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\index.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\grid-layout\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\twelve-column-system.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid-animated.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\three-column-fluid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\product-listing.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\grid-concept.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\flex-layout\\__layout.reset.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\grid-layout\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\index.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\playground2\\show-hide-pwd.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\playground2\\airplane.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\skeleton.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curves.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\cutout.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\basic.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\playground\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\clock.svelte"),
	() => import("..\\..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\contact-us-responsive.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\web-pages\\three-js.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\fruits.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\basic.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\audio\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\css-js-music-player.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\ProgressBarTime.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\TrackHeading.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\VolumeSlider.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\Controls.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\audio-player\\PlayList.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\testimonial-with-swiper.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\gradient-border-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\gradient-card-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\cube-slider-swiper.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card-d.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\overlapping-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-foldable-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-stack-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\hovering-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\instagram-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-flip-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\contact-info.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glowing-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\product-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\curved-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\player-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glow-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glass.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/charts-with-shapes/index.svelte
	[/^\/charts-with-shapes\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/charts-with-shapes/css-shapes.svelte
	[/^\/charts-with-shapes\/css-shapes\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/charts-with-shapes/pentagon-2.svelte
	[/^\/charts-with-shapes\/pentagon-2\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/charts-with-shapes/pentagon.svelte
	[/^\/charts-with-shapes\/pentagon\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/charts-with-shapes/emojis.svelte
	[/^\/charts-with-shapes\/emojis\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/charts-with-shapes/mix.svelte
	[/^\/charts-with-shapes\/mix\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/svelte-components/index.svelte
	[/^\/svelte-components\/?$/, [c[9], c[10]], []],

	// src/routes/svelte-components/product-filter/index.svelte
	[/^\/svelte-components\/product-filter\/?$/, [c[9], c[11]], []],

	// src/routes/svelte-components/product-filter/bookData.js
	[/^\/svelte-components\/product-filter\/bookData\/?$/],

	// src/routes/svelte-components/product-filter/Book.svelte
	[/^\/svelte-components\/product-filter\/Book\/?$/, [c[9], c[12]], []],

	// src/routes/svelte-components/product-filter/Menu.svelte
	[/^\/svelte-components\/product-filter\/Menu\/?$/, [c[9], c[13]], []],

	// src/routes/svelte-components/autocomplete/index.svelte
	[/^\/svelte-components\/autocomplete\/?$/, [c[9], c[14]], []],

	// src/routes/svelte-components/autocomplete/itemsStore.js
	[/^\/svelte-components\/autocomplete\/itemsStore\/?$/],

	// src/routes/svelte-components/autocomplete/Item.svelte
	[/^\/svelte-components\/autocomplete\/Item\/?$/, [c[9], c[15]], []],

	// src/routes/svelte-components/progress-bar/index.svelte
	[/^\/svelte-components\/progress-bar\/?$/, [c[9], c[16]], []],

	// src/routes/svelte-components/emoji-chat/index.svelte
	[/^\/svelte-components\/emoji-chat\/?$/, [c[9], c[17]], []],

	// src/routes/svelte-components/skill-bars/index.svelte
	[/^\/svelte-components\/skill-bars\/?$/, [c[9], c[18]], []],

	// src/routes/svelte-components/skill-bars/Bar.svelte
	[/^\/svelte-components\/skill-bars\/Bar\/?$/, [c[9], c[19]], []],

	// src/routes/svelte-components/sort-table/index.svelte
	[/^\/svelte-components\/sort-table\/?$/, [c[9], c[20]], []],

	// src/routes/svelte-components/sort-table/personData.js
	[/^\/svelte-components\/sort-table\/personData\/?$/],

	// src/routes/svelte-components/tree-view/index.svelte
	[/^\/svelte-components\/tree-view\/?$/, [c[9], c[21]], []],

	// src/routes/svelte-components/tree-view/TreeView.svelte
	[/^\/svelte-components\/tree-view\/TreeView\/?$/, [c[9], c[22]], []],

	// src/routes/svelte-components/tree-view/treeData.js
	[/^\/svelte-components\/tree-view\/treeData\/?$/],

	// src/routes/svelte-components/calendar/index.svelte
	[/^\/svelte-components\/calendar\/?$/, [c[9], c[23]], []],

	// src/routes/svelte-components/calendar/schedule-store.js
	[/^\/svelte-components\/calendar\/schedule-store\/?$/],

	// src/routes/svelte-components/calendar/Appointment.svelte
	[/^\/svelte-components\/calendar\/Appointment\/?$/, [c[9], c[24]], []],

	// src/routes/svelte-components/calendar/Scheduler.svelte
	[/^\/svelte-components\/calendar\/Scheduler\/?$/, [c[9], c[25]], []],

	// src/routes/svelte-components/calendar/Calendar.svelte
	[/^\/svelte-components\/calendar\/Calendar\/?$/, [c[9], c[26]], []],

	// src/routes/svelte-components/checkbox.svelte
	[/^\/svelte-components\/checkbox\/?$/, [c[9], c[27]], []],

	// src/routes/svelte-components/flip-box/index.svelte
	[/^\/svelte-components\/flip-box\/?$/, [c[9], c[28]], []],

	// src/routes/svelte-components/flip-box/FlashCard.svelte
	[/^\/svelte-components\/flip-box\/FlashCard\/?$/, [c[9], c[29]], []],

	// src/routes/svelte-components/flip-box/vocabData.js
	[/^\/svelte-components\/flip-box\/vocabData\/?$/],

	// src/routes/svelte-components/timeline/index.svelte
	[/^\/svelte-components\/timeline\/?$/, [c[9], c[30]], []],

	// src/routes/svelte-components/timeline/holidaysAPI.js
	[/^\/svelte-components\/timeline\/holidaysAPI\/?$/],

	// src/routes/svelte-components/timeline/histData.js
	[/^\/svelte-components\/timeline\/histData\/?$/],

	// src/routes/svelte-components/timeline/Event.svelte
	[/^\/svelte-components\/timeline\/Event\/?$/, [c[9], c[31]], []],

	// src/routes/svelte-components/pwd-gen/index.svelte
	[/^\/svelte-components\/pwd-gen\/?$/, [c[9], c[32]], []],

	// src/routes/svelte-components/pwd-gen/PasswordGen.svelte
	[/^\/svelte-components\/pwd-gen\/PasswordGen\/?$/, [c[9], c[33]], []],

	// src/routes/svelte-components/pwd-gen/RegForm.svelte
	[/^\/svelte-components\/pwd-gen\/RegForm\/?$/, [c[9], c[34]], []],

	// src/routes/svelte-components/basic.svelte
	[/^\/svelte-components\/basic\/?$/, [c[9], c[35]], []],

	// src/routes/grid-layout/index.svelte
	[/^\/grid-layout\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/grid-layout/twelve-column-system.svelte
	[/^\/grid-layout\/twelve-column-system\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/grid-layout/photo-grid-animated.svelte
	[/^\/grid-layout\/photo-grid-animated\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/grid-layout/three-column-fluid.svelte
	[/^\/grid-layout\/three-column-fluid\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/grid-layout/product-listing.svelte
	[/^\/grid-layout\/product-listing\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/grid-layout/grid-concept.svelte
	[/^\/grid-layout\/grid-concept\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/grid-layout/flex-layout/index.css
	[/^\/grid-layout\/flex-layout\/?$/],

	// src/routes/grid-layout/flex-layout/index.svelte
	[/^\/grid-layout\/flex-layout\/?$/, [c[42], c[43]], []],

	// src/routes/grid-layout/flex-layout/growshrinkbasis.svelte
	[/^\/grid-layout\/flex-layout\/growshrinkbasis\/?$/, [c[42], c[44]], []],

	// src/routes/grid-layout/flex-layout/flowdirection.svelte
	[/^\/grid-layout\/flex-layout\/flowdirection\/?$/, [c[42], c[45]], []],

	// src/routes/grid-layout/flex-layout/aligncontent.svelte
	[/^\/grid-layout\/flex-layout\/aligncontent\/?$/, [c[42], c[46]], []],

	// src/routes/grid-layout/flex-layout/mediaobjects.svelte
	[/^\/grid-layout\/flex-layout\/mediaobjects\/?$/, [c[42], c[47]], []],

	// src/routes/grid-layout/flex-layout/flexshrink.svelte
	[/^\/grid-layout\/flex-layout\/flexshrink\/?$/, [c[42], c[48]], []],

	// src/routes/grid-layout/flex-layout/alignment.svelte
	[/^\/grid-layout\/flex-layout\/alignment\/?$/, [c[42], c[49]], []],

	// src/routes/grid-layout/flex-layout/alignself.svelte
	[/^\/grid-layout\/flex-layout\/alignself\/?$/, [c[42], c[50]], []],

	// src/routes/grid-layout/flex-layout/flexbasis.svelte
	[/^\/grid-layout\/flex-layout\/flexbasis\/?$/, [c[42], c[51]], []],

	// src/routes/grid-layout/flex-layout/holygrail.svelte
	[/^\/grid-layout\/flex-layout\/holygrail\/?$/, [c[42], c[52]], []],

	// src/routes/grid-layout/flex-layout/flexgrow.svelte
	[/^\/grid-layout\/flex-layout\/flexgrow\/?$/, [c[42], c[53]], []],

	// src/routes/grid-layout/flex-layout/flexwrap.svelte
	[/^\/grid-layout\/flex-layout\/flexwrap\/?$/, [c[42], c[54]], []],

	// src/routes/grid-layout/flex-layout/vertical.svelte
	[/^\/grid-layout\/flex-layout\/vertical\/?$/, [c[42], c[55]], []],

	// src/routes/grid-layout/flex-layout/hexagon.svelte
	[/^\/grid-layout\/flex-layout\/hexagon\/?$/, [c[42], c[56]], []],

	// src/routes/grid-layout/flex-layout/justify.svelte
	[/^\/grid-layout\/flex-layout\/justify\/?$/, [c[42], c[57]], []],

	// src/routes/grid-layout/flex-layout/grids.svelte
	[/^\/grid-layout\/flex-layout\/grids\/?$/, [c[42], c[58]], []],

	// src/routes/grid-layout/flex-layout/order.svelte
	[/^\/grid-layout\/flex-layout\/order\/?$/, [c[42], c[59]], []],

	// src/routes/grid-layout/photo-grid.svelte
	[/^\/grid-layout\/photo-grid\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/grid-layout/responsive.svelte
	[/^\/grid-layout\/responsive\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/grid-layout/basic.svelte
	[/^\/grid-layout\/basic\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/playground2/index.svelte
	[/^\/playground2\/?$/, [c[0], c[63]], [c[1]]],

	// src/routes/playground2/neumorphism-button.svelte
	[/^\/playground2\/neumorphism-button\/?$/, [c[0], c[64]], [c[1]]],

	// src/routes/playground2/social-icon-hover.svelte
	[/^\/playground2\/social-icon-hover\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/playground2/circle-text-logo.svelte
	[/^\/playground2\/circle-text-logo\/?$/, [c[0], c[66]], [c[1]]],

	// src/routes/playground2/glowing-checkbox.svelte
	[/^\/playground2\/glowing-checkbox\/?$/, [c[0], c[67]], [c[1]]],

	// src/routes/playground2/li-pseudo-commas.svelte
	[/^\/playground2\/li-pseudo-commas\/?$/, [c[0], c[68]], [c[1]]],

	// src/routes/playground2/loading-squares.svelte
	[/^\/playground2\/loading-squares\/?$/, [c[0], c[69]], [c[1]]],

	// src/routes/playground2/falling-leaves.svelte
	[/^\/playground2\/falling-leaves\/?$/, [c[0], c[70]], [c[1]]],

	// src/routes/playground2/glass-calendar.svelte
	[/^\/playground2\/glass-calendar\/?$/, [c[0], c[71]], [c[1]]],

	// src/routes/playground2/icon-text-anim.svelte
	[/^\/playground2\/icon-text-anim\/?$/, [c[0], c[72]], [c[1]]],

	// src/routes/playground2/magic-line-nav.svelte
	[/^\/playground2\/magic-line-nav\/?$/, [c[0], c[73]], [c[1]]],

	// src/routes/playground2/dropdown-menu.svelte
	[/^\/playground2\/dropdown-menu\/?$/, [c[0], c[74]], [c[1]]],

	// src/routes/playground2/show-hide-pwd.svelte
	[/^\/playground2\/show-hide-pwd\/?$/, [c[0], c[75]], [c[1]]],

	// src/routes/playground2/contact-info.svelte
	[/^\/playground2\/contact-info\/?$/, [c[0], c[76]], [c[1]]],

	// src/routes/playground2/fancy-border.svelte
	[/^\/playground2\/fancy-border\/?$/, [c[0], c[77]], [c[1]]],

	// src/routes/playground2/loading-anim.svelte
	[/^\/playground2\/loading-anim\/?$/, [c[0], c[78]], [c[1]]],

	// src/routes/playground2/abstract-bg.svelte
	[/^\/playground2\/abstract-bg\/?$/, [c[0], c[79]], [c[1]]],

	// src/routes/playground2/indian-flag.svelte
	[/^\/playground2\/indian-flag\/?$/, [c[0], c[80]], [c[1]]],

	// src/routes/playground2/intro-text.svelte
	[/^\/playground2\/intro-text\/?$/, [c[0], c[81]], [c[1]]],

	// src/routes/playground2/light-bulb.svelte
	[/^\/playground2\/light-bulb\/?$/, [c[0], c[82]], [c[1]]],

	// src/routes/playground2/menu-hover.svelte
	[/^\/playground2\/menu-hover\/?$/, [c[0], c[83]], [c[1]]],

	// src/routes/playground2/moving-box.svelte
	[/^\/playground2\/moving-box\/?$/, [c[0], c[84]], [c[1]]],

	// src/routes/playground2/search-box.svelte
	[/^\/playground2\/search-box\/?$/, [c[0], c[85]], [c[1]]],

	// src/routes/playground2/airplane.svelte
	[/^\/playground2\/airplane\/?$/, [c[0], c[86]], [c[1]]],

	// src/routes/playground2/skeleton.svelte
	[/^\/playground2\/skeleton\/?$/, [c[0], c[87]], [c[1]]],

	// src/routes/playground2/curves.svelte
	[/^\/playground2\/curves\/?$/, [c[0], c[88]], [c[1]]],

	// src/routes/playground2/cutout.svelte
	[/^\/playground2\/cutout\/?$/, [c[0], c[89]], [c[1]]],

	// src/routes/playground2/basic.svelte
	[/^\/playground2\/basic\/?$/, [c[0], c[90]], [c[1]]],

	// src/routes/playground/index.svelte
	[/^\/playground\/?$/, [c[0], c[91]], [c[1]]],

	// src/routes/playground/clip-path-animations.svelte
	[/^\/playground\/clip-path-animations\/?$/, [c[0], c[92]], [c[1]]],

	// src/routes/playground/image-fragmentation.svelte
	[/^\/playground\/image-fragmentation\/?$/, [c[0], c[93]], [c[1]]],

	// src/routes/playground/scale-video-scroll.svelte
	[/^\/playground\/scale-video-scroll\/?$/, [c[0], c[94]], [c[1]]],

	// src/routes/playground/ripple-animation.svelte
	[/^\/playground\/ripple-animation\/?$/, [c[0], c[95]], [c[1]]],

	// src/routes/playground/dialog-backdrop.svelte
	[/^\/playground\/dialog-backdrop\/?$/, [c[0], c[96]], [c[1]]],

	// src/routes/playground/rotating-images.svelte
	[/^\/playground\/rotating-images\/?$/, [c[0], c[97]], [c[1]]],

	// src/routes/playground/trignometry-sun.svelte
	[/^\/playground\/trignometry-sun\/?$/, [c[0], c[98]], [c[1]]],

	// src/routes/playground/conic-spinner.svelte
	[/^\/playground\/conic-spinner\/?$/, [c[0], c[99]], [c[1]]],

	// src/routes/playground/creative-menu.svelte
	[/^\/playground\/creative-menu\/?$/, [c[0], c[100]], [c[1]]],

	// src/routes/playground/http-firebase.svelte
	[/^\/playground\/http-firebase\/?$/, [c[0], c[101]], [c[1]]],

	// src/routes/playground/ripple-button.svelte
	[/^\/playground\/ripple-button\/?$/, [c[0], c[102]], [c[1]]],

	// src/routes/playground/shape-outside.svelte
	[/^\/playground\/shape-outside\/?$/, [c[0], c[103]], [c[1]]],

	// src/routes/playground/svg-animation.svelte
	[/^\/playground\/svg-animation\/?$/, [c[0], c[104]], [c[1]]],

	// src/routes/playground/text-emphasis.svelte
	[/^\/playground\/text-emphasis\/?$/, [c[0], c[105]], [c[1]]],

	// src/routes/playground/svg-graphics.svelte
	[/^\/playground\/svg-graphics\/?$/, [c[0], c[106]], [c[1]]],

	// src/routes/playground/css-hexagon.svelte
	[/^\/playground\/css-hexagon\/?$/, [c[0], c[107]], [c[1]]],

	// src/routes/playground/curved-menu.svelte
	[/^\/playground\/curved-menu\/?$/, [c[0], c[108]], [c[1]]],

	// src/routes/playground/star-rating.svelte
	[/^\/playground\/star-rating\/?$/, [c[0], c[109]], [c[1]]],

	// src/routes/playground/water-drops.svelte
	[/^\/playground\/water-drops\/?$/, [c[0], c[110]], [c[1]]],

	// src/routes/playground/box-shadow.svelte
	[/^\/playground\/box-shadow\/?$/, [c[0], c[111]], [c[1]]],

	// src/routes/playground/calculator.svelte
	[/^\/playground\/calculator\/?$/, [c[0], c[112]], [c[1]]],

	// src/routes/playground/http-store.js
	[/^\/playground\/http-store\/?$/],

	// src/routes/playground/radio-glow.svelte
	[/^\/playground\/radio-glow\/?$/, [c[0], c[113]], [c[1]]],

	// src/routes/playground/rating-bar.svelte
	[/^\/playground\/rating-bar\/?$/, [c[0], c[114]], [c[1]]],

	// src/routes/playground/wavy-text.svelte
	[/^\/playground\/wavy-text\/?$/, [c[0], c[115]], [c[1]]],

	// src/routes/playground/particle.svelte
	[/^\/playground\/particle\/?$/, [c[0], c[116]], [c[1]]],

	// src/routes/playground/shadows.svelte
	[/^\/playground\/shadows\/?$/, [c[0], c[117]], [c[1]]],

	// src/routes/playground/tweened.svelte
	[/^\/playground\/tweened\/?$/, [c[0], c[118]], [c[1]]],

	// src/routes/playground/liquid.svelte
	[/^\/playground\/liquid\/?$/, [c[0], c[119]], [c[1]]],

	// src/routes/playground/spring.svelte
	[/^\/playground\/spring\/?$/, [c[0], c[120]], [c[1]]],

	// src/routes/playground/basic.svelte
	[/^\/playground\/basic\/?$/, [c[0], c[121]], [c[1]]],

	// src/routes/playground/clock.svelte
	[/^\/playground\/clock\/?$/, [c[0], c[122]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[123]], [c[1]]],

	// src/routes/web-pages/index.svelte
	[/^\/web-pages\/?$/, [c[124], c[125]], []],

	// src/routes/web-pages/contact-us-responsive.svelte
	[/^\/web-pages\/contact-us-responsive\/?$/, [c[124], c[126]], []],

	// src/routes/web-pages/personal-portfolio/index.svelte
	[/^\/web-pages\/personal-portfolio\/?$/, [c[124], c[127]], []],

	// src/routes/web-pages/personal-portfolio/resume.svelte
	[/^\/web-pages\/personal-portfolio\/resume\/?$/, [c[124], c[128]], []],

	// src/routes/web-pages/admin-dashboard.svelte
	[/^\/web-pages\/admin-dashboard\/?$/, [c[124], c[129]], []],

	// src/routes/web-pages/full-page-tabs/index.svelte
	[/^\/web-pages\/full-page-tabs\/?$/, [c[124], c[130]], []],

	// src/routes/web-pages/full-page-tabs/NewsPageContent.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPageContent\/?$/, [c[124], c[131]], []],

	// src/routes/web-pages/full-page-tabs/ContactPage.svelte
	[/^\/web-pages\/full-page-tabs\/ContactPage\/?$/, [c[124], c[132]], []],

	// src/routes/web-pages/full-page-tabs/AboutPage.svelte
	[/^\/web-pages\/full-page-tabs\/AboutPage\/?$/, [c[124], c[133]], []],

	// src/routes/web-pages/full-page-tabs/HomePage.svelte
	[/^\/web-pages\/full-page-tabs\/HomePage\/?$/, [c[124], c[134]], []],

	// src/routes/web-pages/full-page-tabs/NewsPage.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPage\/?$/, [c[124], c[135]], []],

	// src/routes/web-pages/full-page-tabs/Footer.svelte
	[/^\/web-pages\/full-page-tabs\/Footer\/?$/, [c[124], c[136]], []],

	// src/routes/web-pages/advanced-flex/index.svelte
	[/^\/web-pages\/advanced-flex\/?$/, [c[124], c[137]], []],

	// src/routes/web-pages/advanced-flex/sass/main.scss
	[/^\/web-pages\/advanced-flex\/sass\/main\/?$/],

	// src/routes/web-pages/advanced-grid/index.svelte
	[/^\/web-pages\/advanced-grid\/?$/, [c[124], c[138]], []],

	// src/routes/web-pages/advanced-grid/sass/main.scss
	[/^\/web-pages\/advanced-grid\/sass\/main\/?$/],

	// src/routes/web-pages/dropdown-menu.svelte
	[/^\/web-pages\/dropdown-menu\/?$/, [c[124], c[139]], []],

	// src/routes/web-pages/advanced-css/index.svelte
	[/^\/web-pages\/advanced-css\/?$/, [c[124], c[140]], []],

	// src/routes/web-pages/advanced-css/fonts/material-icons/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2
	[/^\/web-pages\/advanced-css\/fonts\/material-icons\/flUhRq6tzZclQEJ-Vdg-IuiaDsNc\/?$/],

	// src/routes/web-pages/advanced-css/main.scss
	[/^\/web-pages\/advanced-css\/main\/?$/],

	// src/routes/web-pages/contact-us.svelte
	[/^\/web-pages\/contact-us\/?$/, [c[124], c[141]], []],

	// src/routes/web-pages/e-commerce.svelte
	[/^\/web-pages\/e-commerce\/?$/, [c[124], c[142]], []],

	// src/routes/web-pages/light-dark.svelte
	[/^\/web-pages\/light-dark\/?$/, [c[124], c[143]], []],

	// src/routes/web-pages/three-js.svelte
	[/^\/web-pages\/three-js\/?$/, [c[124], c[144]], []],

	// src/routes/web-pages/fruits.svelte
	[/^\/web-pages\/fruits\/?$/, [c[124], c[145]], []],

	// src/routes/web-pages/basic.svelte
	[/^\/web-pages\/basic\/?$/, [c[124], c[146]], []],

	// src/routes/images/index.svelte
	[/^\/images\/?$/, [c[0], c[147]], [c[1]]],

	// src/routes/images/images-para-two-column.svelte
	[/^\/images\/images-para-two-column\/?$/, [c[0], c[148]], [c[1]]],

	// src/routes/images/image-blob-paint-all.svelte
	[/^\/images\/image-blob-paint-all\/?$/, [c[0], c[149]], [c[1]]],

	// src/routes/images/portfolio-gallery/index.svelte
	[/^\/images\/portfolio-gallery\/?$/, [c[0], c[150]], [c[1]]],

	// src/routes/images/portfolio-gallery/ImageCard.svelte
	[/^\/images\/portfolio-gallery\/ImageCard\/?$/, [c[0], c[151]], [c[1]]],

	// src/routes/images/portfolio-gallery/Gallery.svelte
	[/^\/images\/portfolio-gallery\/Gallery\/?$/, [c[0], c[152]], [c[1]]],

	// src/routes/images/portfolio-gallery/imgData.js
	[/^\/images\/portfolio-gallery\/imgData\/?$/],

	// src/routes/images/image-blob-paint.svelte
	[/^\/images\/image-blob-paint\/?$/, [c[0], c[153]], [c[1]]],

	// src/routes/images/overlay-content.svelte
	[/^\/images\/overlay-content\/?$/, [c[0], c[154]], [c[1]]],

	// src/routes/images/image-paint.svelte
	[/^\/images\/image-paint\/?$/, [c[0], c[155]], [c[1]]],

	// src/routes/images/slideshow/index.svelte
	[/^\/images\/slideshow\/?$/, [c[0], c[156]], [c[1]]],

	// src/routes/images/slideshow/slideData.js
	[/^\/images\/slideshow\/slideData\/?$/],

	// src/routes/images/slideshow/Slide.svelte
	[/^\/images\/slideshow\/Slide\/?$/, [c[0], c[157]], [c[1]]],

	// src/routes/images/slideshow/Dot.svelte
	[/^\/images\/slideshow\/Dot\/?$/, [c[0], c[158]], [c[1]]],

	// src/routes/images/gallery/index.svelte
	[/^\/images\/gallery\/?$/, [c[0], c[159]], [c[1]]],

	// src/routes/images/gallery/ImageDisplay.svelte
	[/^\/images\/gallery\/ImageDisplay\/?$/, [c[0], c[160]], [c[1]]],

	// src/routes/images/gallery/Thumbnail.svelte
	[/^\/images\/gallery\/Thumbnail\/?$/, [c[0], c[161]], [c[1]]],

	// src/routes/images/gallery/imageData.js
	[/^\/images\/gallery\/imageData\/?$/],

	// src/routes/images/gallery/Caption.svelte
	[/^\/images\/gallery\/Caption\/?$/, [c[0], c[162]], [c[1]]],

	// src/routes/images/gallery/Gallery.svelte
	[/^\/images\/gallery\/Gallery\/?$/, [c[0], c[163]], [c[1]]],

	// src/routes/images/gallery/Slide.svelte
	[/^\/images\/gallery\/Slide\/?$/, [c[0], c[164]], [c[1]]],

	// src/routes/videos/index.svelte
	[/^\/videos\/?$/, [c[0], c[165]], [c[1]]],

	// src/routes/videos/video-text.svelte
	[/^\/videos\/video-text\/?$/, [c[0], c[166]], [c[1]]],

	// src/routes/videos/basic.svelte
	[/^\/videos\/basic\/?$/, [c[0], c[167]], [c[1]]],

	// src/routes/audio/index.svelte
	[/^\/audio\/?$/, [c[0], c[168]], [c[1]]],

	// src/routes/audio/css-js-music-player.svelte
	[/^\/audio\/css-js-music-player\/?$/, [c[0], c[169]], [c[1]]],

	// src/routes/audio/audio-player/index.svelte
	[/^\/audio\/audio-player\/?$/, [c[0], c[170]], [c[1]]],

	// src/routes/audio/audio-player/ProgressBarTime.svelte
	[/^\/audio\/audio-player\/ProgressBarTime\/?$/, [c[0], c[171]], [c[1]]],

	// src/routes/audio/audio-player/TrackHeading.svelte
	[/^\/audio\/audio-player\/TrackHeading\/?$/, [c[0], c[172]], [c[1]]],

	// src/routes/audio/audio-player/VolumeSlider.svelte
	[/^\/audio\/audio-player\/VolumeSlider\/?$/, [c[0], c[173]], [c[1]]],

	// src/routes/audio/audio-player/Controls.svelte
	[/^\/audio\/audio-player\/Controls\/?$/, [c[0], c[174]], [c[1]]],

	// src/routes/audio/audio-player/PlayList.svelte
	[/^\/audio\/audio-player\/PlayList\/?$/, [c[0], c[175]], [c[1]]],

	// src/routes/audio/audioData.js
	[/^\/audio\/audioData\/?$/],

	// src/routes/audio/basic.svelte
	[/^\/audio\/basic\/?$/, [c[0], c[176]], [c[1]]],

	// src/routes/cards/index.svelte
	[/^\/cards\/?$/, [c[0], c[177]], [c[1]]],

	// src/routes/cards/testimonial-with-swiper.svelte
	[/^\/cards\/testimonial-with-swiper\/?$/, [c[0], c[178]], [c[1]]],

	// src/routes/cards/gradient-border-card.svelte
	[/^\/cards\/gradient-border-card\/?$/, [c[0], c[179]], [c[1]]],

	// src/routes/cards/gradient-card-shadow.svelte
	[/^\/cards\/gradient-card-shadow\/?$/, [c[0], c[180]], [c[1]]],

	// src/routes/cards/cube-slider-swiper.svelte
	[/^\/cards\/cube-slider-swiper\/?$/, [c[0], c[181]], [c[1]]],

	// src/routes/cards/neumorphic-card-d.svelte
	[/^\/cards\/neumorphic-card-d\/?$/, [c[0], c[182]], [c[1]]],

	// src/routes/cards/overlapping-cards.svelte
	[/^\/cards\/overlapping-cards\/?$/, [c[0], c[183]], [c[1]]],

	// src/routes/cards/3d-foldable-card.svelte
	[/^\/cards\/3d-foldable-card\/?$/, [c[0], c[184]], [c[1]]],

	// src/routes/cards/neumorphic-card.svelte
	[/^\/cards\/neumorphic-card\/?$/, [c[0], c[185]], [c[1]]],

	// src/routes/cards/3d-stack-cards.svelte
	[/^\/cards\/3d-stack-cards\/?$/, [c[0], c[186]], [c[1]]],

	// src/routes/cards/hovering-cards.svelte
	[/^\/cards\/hovering-cards\/?$/, [c[0], c[187]], [c[1]]],

	// src/routes/cards/instagram-card.svelte
	[/^\/cards\/instagram-card\/?$/, [c[0], c[188]], [c[1]]],

	// src/routes/cards/profile-hover.svelte
	[/^\/cards\/profile-hover\/?$/, [c[0], c[189]], [c[1]]],

	// src/routes/cards/3d-flip-card.svelte
	[/^\/cards\/3d-flip-card\/?$/, [c[0], c[190]], [c[1]]],

	// src/routes/cards/contact-info.svelte
	[/^\/cards\/contact-info\/?$/, [c[0], c[191]], [c[1]]],

	// src/routes/cards/glowing-card.svelte
	[/^\/cards\/glowing-card\/?$/, [c[0], c[192]], [c[1]]],

	// src/routes/cards/product-card.svelte
	[/^\/cards\/product-card\/?$/, [c[0], c[193]], [c[1]]],

	// src/routes/cards/profile-card.svelte
	[/^\/cards\/profile-card\/?$/, [c[0], c[194]], [c[1]]],

	// src/routes/cards/curved-card.svelte
	[/^\/cards\/curved-card\/?$/, [c[0], c[195]], [c[1]]],

	// src/routes/cards/glass-hover.svelte
	[/^\/cards\/glass-hover\/?$/, [c[0], c[196]], [c[1]]],

	// src/routes/cards/player-card.svelte
	[/^\/cards\/player-card\/?$/, [c[0], c[197]], [c[1]]],

	// src/routes/cards/glass-card.svelte
	[/^\/cards\/glass-card\/?$/, [c[0], c[198]], [c[1]]],

	// src/routes/cards/glow-card.svelte
	[/^\/cards\/glow-card\/?$/, [c[0], c[199]], [c[1]]],

	// src/routes/cards/basic.svelte
	[/^\/cards\/basic\/?$/, [c[0], c[200]], [c[1]]],

	// src/routes/cards/glass.svelte
	[/^\/cards\/glass\/?$/, [c[0], c[201]], [c[1]]],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[202]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];