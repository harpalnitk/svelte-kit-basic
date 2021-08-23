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
	() => import("..\\..\\..\\src\\routes\\portfolio-gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\search-dropdown\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\full-page-tabs\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\product-filter\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\audio-player\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\autocomplete\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\progress-bar\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\twelve-column-system.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid-animated.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\three-column-fluid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\product-listing.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\responsive.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\social-icon-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\abstract-bg.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\image-paint.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\indian-flag.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\search-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\cutout.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\emoji-chat\\index.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\playground\\wavy-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\particle.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\shadows.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\tweened.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\liquid.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\spring.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\clock.svelte"),
	() => import("..\\..\\..\\src\\routes\\skill-bars\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\sort-table\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\slideshow\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\tree-view\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\personal-portfolio\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\personal-portfolio\\resume.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\personal-portfolio.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\fruits.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\calendar\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\flip-box\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\timeline\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\contact\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\pwd-gen\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\images-para-two-column.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\overlay-content.svelte"),
	() => import("..\\..\\..\\src\\routes\\about\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\testimonial-with-swiper.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\gradient-card-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card-d.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\overlapping-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\neumorphic-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-stack-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\hovering-cards.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\instagram-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\contact-info.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\glowing-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\product-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\profile-card.svelte"),
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

	// src/routes/portfolio-gallery/index.svelte
	[/^\/portfolio-gallery\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/search-dropdown/index.svelte
	[/^\/search-dropdown\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/full-page-tabs/index.svelte
	[/^\/full-page-tabs\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/product-filter/index.svelte
	[/^\/product-filter\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/audio-player/index.svelte
	[/^\/audio-player\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/autocomplete/index.svelte
	[/^\/autocomplete\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/progress-bar/index.svelte
	[/^\/progress-bar\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/grid-layout/index.svelte
	[/^\/grid-layout\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/grid-layout/twelve-column-system.svelte
	[/^\/grid-layout\/twelve-column-system\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/grid-layout/photo-grid-animated.svelte
	[/^\/grid-layout\/photo-grid-animated\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/grid-layout/three-column-fluid.svelte
	[/^\/grid-layout\/three-column-fluid\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/grid-layout/product-listing.svelte
	[/^\/grid-layout\/product-listing\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/grid-layout/photo-grid.svelte
	[/^\/grid-layout\/photo-grid\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/grid-layout/responsive.svelte
	[/^\/grid-layout\/responsive\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/playground2/index.svelte
	[/^\/playground2\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/playground2/social-icon-hover.svelte
	[/^\/playground2\/social-icon-hover\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/playground2/abstract-bg.svelte
	[/^\/playground2\/abstract-bg\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/playground2/image-paint.svelte
	[/^\/playground2\/image-paint\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/playground2/indian-flag.svelte
	[/^\/playground2\/indian-flag\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/playground2/search-box.svelte
	[/^\/playground2\/search-box\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/playground2/cutout.svelte
	[/^\/playground2\/cutout\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/playground2/basic.svelte
	[/^\/playground2\/basic\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/emoji-chat/index.svelte
	[/^\/emoji-chat\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/playground/index.svelte
	[/^\/playground\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/playground/clip-path-animations.svelte
	[/^\/playground\/clip-path-animations\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/playground/image-fragmentation.svelte
	[/^\/playground\/image-fragmentation\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/playground/scale-video-scroll.svelte
	[/^\/playground\/scale-video-scroll\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/playground/ripple-animation.svelte
	[/^\/playground\/ripple-animation\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/playground/dialog-backdrop.svelte
	[/^\/playground\/dialog-backdrop\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/playground/rotating-images.svelte
	[/^\/playground\/rotating-images\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/playground/trignometry-sun.svelte
	[/^\/playground\/trignometry-sun\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/playground/conic-spinner.svelte
	[/^\/playground\/conic-spinner\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/playground/creative-menu.svelte
	[/^\/playground\/creative-menu\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/playground/http-firebase.svelte
	[/^\/playground\/http-firebase\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/playground/ripple-button.svelte
	[/^\/playground\/ripple-button\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/playground/shape-outside.svelte
	[/^\/playground\/shape-outside\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/playground/svg-animation.svelte
	[/^\/playground\/svg-animation\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/playground/text-emphasis.svelte
	[/^\/playground\/text-emphasis\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/playground/svg-graphics.svelte
	[/^\/playground\/svg-graphics\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/playground/css-hexagon.svelte
	[/^\/playground\/css-hexagon\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/playground/curved-menu.svelte
	[/^\/playground\/curved-menu\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/playground/star-rating.svelte
	[/^\/playground\/star-rating\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/playground/water-drops.svelte
	[/^\/playground\/water-drops\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/playground/box-shadow.svelte
	[/^\/playground\/box-shadow\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/playground/calculator.svelte
	[/^\/playground\/calculator\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/playground/http-store.js
	[/^\/playground\/http-store\/?$/],

	// src/routes/playground/radio-glow.svelte
	[/^\/playground\/radio-glow\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/playground/wavy-text.svelte
	[/^\/playground\/wavy-text\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/playground/particle.svelte
	[/^\/playground\/particle\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/playground/shadows.svelte
	[/^\/playground\/shadows\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/playground/tweened.svelte
	[/^\/playground\/tweened\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/playground/liquid.svelte
	[/^\/playground\/liquid\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/playground/spring.svelte
	[/^\/playground\/spring\/?$/, [c[0], c[60]], [c[1]]],

	// src/routes/playground/basic.svelte
	[/^\/playground\/basic\/?$/, [c[0], c[61]], [c[1]]],

	// src/routes/playground/clock.svelte
	[/^\/playground\/clock\/?$/, [c[0], c[62]], [c[1]]],

	// src/routes/skill-bars/index.svelte
	[/^\/skill-bars\/?$/, [c[0], c[63]], [c[1]]],

	// src/routes/sort-table/index.svelte
	[/^\/sort-table\/?$/, [c[0], c[64]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[65]], [c[1]]],

	// src/routes/slideshow/index.svelte
	[/^\/slideshow\/?$/, [c[0], c[66]], [c[1]]],

	// src/routes/tree-view/index.svelte
	[/^\/tree-view\/?$/, [c[0], c[67]], [c[1]]],

	// src/routes/web-pages/index.svelte
	[/^\/web-pages\/?$/, [c[68], c[69]], []],

	// src/routes/web-pages/personal-portfolio/index.svelte
	[/^\/web-pages\/personal-portfolio\/?$/, [c[68], c[70]], []],

	// src/routes/web-pages/personal-portfolio/resume.svelte
	[/^\/web-pages\/personal-portfolio\/resume\/?$/, [c[68], c[71]], []],

	// src/routes/web-pages/personal-portfolio.svelte
	[/^\/web-pages\/personal-portfolio\/?$/, [c[68], c[72]], []],

	// src/routes/web-pages/fruits.svelte
	[/^\/web-pages\/fruits\/?$/, [c[68], c[73]], []],

	// src/routes/web-pages/basic.svelte
	[/^\/web-pages\/basic\/?$/, [c[68], c[74]], []],

	// src/routes/calendar/index.svelte
	[/^\/calendar\/?$/, [c[0], c[75]], [c[1]]],

	// src/routes/flip-box/index.svelte
	[/^\/flip-box\/?$/, [c[0], c[76]], [c[1]]],

	// src/routes/timeline/index.svelte
	[/^\/timeline\/?$/, [c[0], c[77]], [c[1]]],

	// src/routes/contact/index.svelte
	[/^\/contact\/?$/, [c[0], c[78]], [c[1]]],

	// src/routes/gallery/index.svelte
	[/^\/gallery\/?$/, [c[0], c[79]], [c[1]]],

	// src/routes/pwd-gen/index.svelte
	[/^\/pwd-gen\/?$/, [c[0], c[80]], [c[1]]],

	// src/routes/images/index.svelte
	[/^\/images\/?$/, [c[0], c[81]], [c[1]]],

	// src/routes/images/images-para-two-column.svelte
	[/^\/images\/images-para-two-column\/?$/, [c[0], c[82]], [c[1]]],

	// src/routes/images/overlay-content.svelte
	[/^\/images\/overlay-content\/?$/, [c[0], c[83]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[84]], [c[1]]],

	// src/routes/cards/index.svelte
	[/^\/cards\/?$/, [c[0], c[85]], [c[1]]],

	// src/routes/cards/testimonial-with-swiper.svelte
	[/^\/cards\/testimonial-with-swiper\/?$/, [c[0], c[86]], [c[1]]],

	// src/routes/cards/gradient-card-shadow.svelte
	[/^\/cards\/gradient-card-shadow\/?$/, [c[0], c[87]], [c[1]]],

	// src/routes/cards/neumorphic-card-d.svelte
	[/^\/cards\/neumorphic-card-d\/?$/, [c[0], c[88]], [c[1]]],

	// src/routes/cards/overlapping-cards.svelte
	[/^\/cards\/overlapping-cards\/?$/, [c[0], c[89]], [c[1]]],

	// src/routes/cards/neumorphic-card.svelte
	[/^\/cards\/neumorphic-card\/?$/, [c[0], c[90]], [c[1]]],

	// src/routes/cards/3d-stack-cards.svelte
	[/^\/cards\/3d-stack-cards\/?$/, [c[0], c[91]], [c[1]]],

	// src/routes/cards/hovering-cards.svelte
	[/^\/cards\/hovering-cards\/?$/, [c[0], c[92]], [c[1]]],

	// src/routes/cards/instagram-card.svelte
	[/^\/cards\/instagram-card\/?$/, [c[0], c[93]], [c[1]]],

	// src/routes/cards/profile-hover.svelte
	[/^\/cards\/profile-hover\/?$/, [c[0], c[94]], [c[1]]],

	// src/routes/cards/contact-info.svelte
	[/^\/cards\/contact-info\/?$/, [c[0], c[95]], [c[1]]],

	// src/routes/cards/glowing-card.svelte
	[/^\/cards\/glowing-card\/?$/, [c[0], c[96]], [c[1]]],

	// src/routes/cards/product-card.svelte
	[/^\/cards\/product-card\/?$/, [c[0], c[97]], [c[1]]],

	// src/routes/cards/profile-card.svelte
	[/^\/cards\/profile-card\/?$/, [c[0], c[98]], [c[1]]],

	// src/routes/cards/glass-hover.svelte
	[/^\/cards\/glass-hover\/?$/, [c[0], c[99]], [c[1]]],

	// src/routes/cards/player-card.svelte
	[/^\/cards\/player-card\/?$/, [c[0], c[100]], [c[1]]],

	// src/routes/cards/glass-card.svelte
	[/^\/cards\/glass-card\/?$/, [c[0], c[101]], [c[1]]],

	// src/routes/cards/glow-card.svelte
	[/^\/cards\/glow-card\/?$/, [c[0], c[102]], [c[1]]],

	// src/routes/cards/basic.svelte
	[/^\/cards\/basic\/?$/, [c[0], c[103]], [c[1]]],

	// src/routes/cards/glass.svelte
	[/^\/cards\/glass\/?$/, [c[0], c[104]], [c[1]]],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[105]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];