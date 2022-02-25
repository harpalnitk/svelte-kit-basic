const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\square-chart-with-mask-and-svg.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\paint-generative-pattern.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\how-to-draw-svg-shapes.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\rounded-corner-shapes2.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\rounded-corner-shapes.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\clip-path-animations.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\mask-border-basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\trignometry-sun.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\polygon-border.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\shape-outside.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\svg-animation.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\svg-graphics.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\css-hexagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\mask-border.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\css-shapes.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\css-blob.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\pentagon.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\triangle.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\cutout.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\emojis.svelte"),
	() => import("..\\..\\..\\src\\routes\\charts-with-shapes\\mix.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\square-button-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\link-hover-effects.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\neumorphism-button.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\toggle-light-dark.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\glowing-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\show-hide-pwd-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\yes-no-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\Book.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\product-filter\\Menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\sleek-checkbox.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\show_hide_pwd.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\smiley-toggle.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\all-buttons2.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\autocomplete\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\autocomplete\\Item.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\progress-bar\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\all-buttons.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\emoji-chat\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\radio-dark.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\radio-glow.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\search-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\skill-bars\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\skill-bars\\Bar.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\sort-table\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\svelte-components\\data-list.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\grid-layout\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\layout-without-media-query.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\twelve-column-system.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\expand-section-grid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\photo-grid-animated.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\three-column-fluid.svelte"),
	() => import("..\\..\\..\\src\\routes\\grid-layout\\auto-filling-grid.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\playground2\\neumorphism-loading-bars.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\circular-ring-loading.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\glassmorphism-loading.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\magic-line-nav-below.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\vertical-expand-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curved-magic-menu-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\neumorphism-loading.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curved-magic-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\rotate-earth-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\social-icon-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\cartoon-eye-move.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\circle-text-logo.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\circular-loading.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-squares.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\menu-icon-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\three-dots-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\water-drop-logo.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\dropdown-menu2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\falling-leaves.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\glowing-text-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\icon-text-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\magic-line-nav.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\nine-dots-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\spiral-loading.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\circular-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\conic-spinner.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\creative-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\dropdown-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\happy-diwali2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\keyboard-keys.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-plane.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\text-emphasis.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\3d-anim-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\bounce-balls.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\contact-info.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\glowing-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\happy-diwali.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\light-effect.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\corner-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\cursor-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curved-menu.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\indian-flag.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\loading-bar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\squid-games.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\water-drops.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\intro-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\light-bulb.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\menu-hover.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\moving-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\text-cubes.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\truck-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\christmas.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\wavy-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\airplane.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\eye-move.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\skeleton.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\tea-cup.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\tweened.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\curves.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\stairs.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground2\\rain.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\cartesian-system-css.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\linear-range-mapping.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\rare-css-properties.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\claymorphism-login.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\glassmorphism-list.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\neumorphism-in-css.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\claymorphism-list.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\random-particles.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\circles-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\sass-mixins.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\animations.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\card-list.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground3\\color-use.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\3D-social-media-icon.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\before-after-pseudo.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\icon-glassmorphism.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\star-rating-icons.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\li-pseudo-commas.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\ripple-animation.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\countdown-timer.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\diagnol-stripes.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\dialog-backdrop.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\gradient-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\fancy-ribbon-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\glass-calendar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\rare-html-tags.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\abstract-bg-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\ambient-light.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\full-calendar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\http-firebase.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\ball-balance.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\calculator-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\calculator-3.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\fancy-border.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\fancy-ribbon.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\abstract-bg.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\apple-music.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\star-rating.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\thunderbolt.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\box-shadow.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\calculator.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\rating-bar.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\search-box.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\paper-bg.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\particle.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\bg-anim.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\clock-2.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\shadows.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\liquid.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\spring.svelte"),
	() => import("..\\..\\..\\src\\routes\\playground\\basic.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\web-pages\\services-page.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\sticky-header.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\advanced-css\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\whatsapp-web.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\contact-us.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\e-commerce.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\light-dark.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\newsletter.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\auth-page.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\404-page.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\three-js.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\fruits.svelte"),
	() => import("..\\..\\..\\src\\routes\\web-pages\\basic.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\images-para-two-column.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-blob-paint-all.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-fragmentation.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\ImageCard.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\portfolio-gallery\\Gallery.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-blob-paint.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-with-text.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\overlay-content.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\rotating-images.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\text-portrait.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-paint.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\image-pixel.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\Slide.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\slideshow\\Dot.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\ImageDisplay.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Thumbnail.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Caption.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Gallery.svelte"),
	() => import("..\\..\\..\\src\\routes\\images\\gallery\\Slide.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\scale-video-scroll.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\video-slider.svelte"),
	() => import("..\\..\\..\\src\\routes\\videos\\video-text.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\cards\\light-dark-switch-card.svelte"),
	() => import("..\\..\\..\\src\\routes\\cards\\3d-flip-product-card.svelte"),
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
	() => import("..\\..\\..\\src\\routes\\cards\\book.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/charts-with-shapes/index.svelte
	[/^\/charts-with-shapes\/?$/, [c[3], c[4]], []],

	// src/routes/charts-with-shapes/square-chart-with-mask-and-svg.svelte
	[/^\/charts-with-shapes\/square-chart-with-mask-and-svg\/?$/, [c[3], c[5]], []],

	// src/routes/charts-with-shapes/paint-generative-pattern.svelte
	[/^\/charts-with-shapes\/paint-generative-pattern\/?$/, [c[3], c[6]], []],

	// src/routes/charts-with-shapes/how-to-draw-svg-shapes.svelte
	[/^\/charts-with-shapes\/how-to-draw-svg-shapes\/?$/, [c[3], c[7]], []],

	// src/routes/charts-with-shapes/rounded-corner-shapes2.svelte
	[/^\/charts-with-shapes\/rounded-corner-shapes2\/?$/, [c[3], c[8]], []],

	// src/routes/charts-with-shapes/rounded-corner-shapes.svelte
	[/^\/charts-with-shapes\/rounded-corner-shapes\/?$/, [c[3], c[9]], []],

	// src/routes/charts-with-shapes/clip-path-animations.svelte
	[/^\/charts-with-shapes\/clip-path-animations\/?$/, [c[3], c[10]], []],

	// src/routes/charts-with-shapes/mask-border-basic.svelte
	[/^\/charts-with-shapes\/mask-border-basic\/?$/, [c[3], c[11]], []],

	// src/routes/charts-with-shapes/trignometry-sun.svelte
	[/^\/charts-with-shapes\/trignometry-sun\/?$/, [c[3], c[12]], []],

	// src/routes/charts-with-shapes/polygon-border.svelte
	[/^\/charts-with-shapes\/polygon-border\/?$/, [c[3], c[13]], []],

	// src/routes/charts-with-shapes/shape-outside.svelte
	[/^\/charts-with-shapes\/shape-outside\/?$/, [c[3], c[14]], []],

	// src/routes/charts-with-shapes/svg-animation.svelte
	[/^\/charts-with-shapes\/svg-animation\/?$/, [c[3], c[15]], []],

	// src/routes/charts-with-shapes/svg-graphics.svelte
	[/^\/charts-with-shapes\/svg-graphics\/?$/, [c[3], c[16]], []],

	// src/routes/charts-with-shapes/css-hexagon.svelte
	[/^\/charts-with-shapes\/css-hexagon\/?$/, [c[3], c[17]], []],

	// src/routes/charts-with-shapes/mask-border.svelte
	[/^\/charts-with-shapes\/mask-border\/?$/, [c[3], c[18]], []],

	// src/routes/charts-with-shapes/css-shapes.svelte
	[/^\/charts-with-shapes\/css-shapes\/?$/, [c[3], c[19]], []],

	// src/routes/charts-with-shapes/pentagon-2.svelte
	[/^\/charts-with-shapes\/pentagon-2\/?$/, [c[3], c[20]], []],

	// src/routes/charts-with-shapes/css-blob.svelte
	[/^\/charts-with-shapes\/css-blob\/?$/, [c[3], c[21]], []],

	// src/routes/charts-with-shapes/pentagon.svelte
	[/^\/charts-with-shapes\/pentagon\/?$/, [c[3], c[22]], []],

	// src/routes/charts-with-shapes/triangle.svelte
	[/^\/charts-with-shapes\/triangle\/?$/, [c[3], c[23]], []],

	// src/routes/charts-with-shapes/cutout.svelte
	[/^\/charts-with-shapes\/cutout\/?$/, [c[3], c[24]], []],

	// src/routes/charts-with-shapes/emojis.svelte
	[/^\/charts-with-shapes\/emojis\/?$/, [c[3], c[25]], []],

	// src/routes/charts-with-shapes/mix.svelte
	[/^\/charts-with-shapes\/mix\/?$/, [c[3], c[26]], []],

	// src/routes/svelte-components/index.svelte
	[/^\/svelte-components\/?$/, [c[27], c[28]], []],

	// src/routes/svelte-components/square-button-checkbox.svelte
	[/^\/svelte-components\/square-button-checkbox\/?$/, [c[27], c[29]], []],

	// src/routes/svelte-components/link-hover-effects.svelte
	[/^\/svelte-components\/link-hover-effects\/?$/, [c[27], c[30]], []],

	// src/routes/svelte-components/neumorphism-button.svelte
	[/^\/svelte-components\/neumorphism-button\/?$/, [c[27], c[31]], []],

	// src/routes/svelte-components/toggle-light-dark.svelte
	[/^\/svelte-components\/toggle-light-dark\/?$/, [c[27], c[32]], []],

	// src/routes/svelte-components/glowing-checkbox.svelte
	[/^\/svelte-components\/glowing-checkbox\/?$/, [c[27], c[33]], []],

	// src/routes/svelte-components/show-hide-pwd-2.svelte
	[/^\/svelte-components\/show-hide-pwd-2\/?$/, [c[27], c[34]], []],

	// src/routes/svelte-components/yes-no-checkbox.svelte
	[/^\/svelte-components\/yes-no-checkbox\/?$/, [c[27], c[35]], []],

	// src/routes/svelte-components/product-filter/index.svelte
	[/^\/svelte-components\/product-filter\/?$/, [c[27], c[36]], []],

	,

	// src/routes/svelte-components/product-filter/Book.svelte
	[/^\/svelte-components\/product-filter\/Book\/?$/, [c[27], c[37]], []],

	// src/routes/svelte-components/product-filter/Menu.svelte
	[/^\/svelte-components\/product-filter\/Menu\/?$/, [c[27], c[38]], []],

	// src/routes/svelte-components/sleek-checkbox.svelte
	[/^\/svelte-components\/sleek-checkbox\/?$/, [c[27], c[39]], []],

	// src/routes/svelte-components/show_hide_pwd.svelte
	[/^\/svelte-components\/show_hide_pwd\/?$/, [c[27], c[40]], []],

	// src/routes/svelte-components/smiley-toggle.svelte
	[/^\/svelte-components\/smiley-toggle\/?$/, [c[27], c[41]], []],

	// src/routes/svelte-components/all-buttons2.svelte
	[/^\/svelte-components\/all-buttons2\/?$/, [c[27], c[42]], []],

	// src/routes/svelte-components/autocomplete/index.svelte
	[/^\/svelte-components\/autocomplete\/?$/, [c[27], c[43]], []],

	,

	// src/routes/svelte-components/autocomplete/Item.svelte
	[/^\/svelte-components\/autocomplete\/Item\/?$/, [c[27], c[44]], []],

	// src/routes/svelte-components/progress-bar/index.svelte
	[/^\/svelte-components\/progress-bar\/?$/, [c[27], c[45]], []],

	// src/routes/svelte-components/all-buttons.svelte
	[/^\/svelte-components\/all-buttons\/?$/, [c[27], c[46]], []],

	// src/routes/svelte-components/emoji-chat/index.svelte
	[/^\/svelte-components\/emoji-chat\/?$/, [c[27], c[47]], []],

	// src/routes/svelte-components/radio-dark.svelte
	[/^\/svelte-components\/radio-dark\/?$/, [c[27], c[48]], []],

	// src/routes/svelte-components/radio-glow.svelte
	[/^\/svelte-components\/radio-glow\/?$/, [c[27], c[49]], []],

	// src/routes/svelte-components/search-box.svelte
	[/^\/svelte-components\/search-box\/?$/, [c[27], c[50]], []],

	// src/routes/svelte-components/skill-bars/index.svelte
	[/^\/svelte-components\/skill-bars\/?$/, [c[27], c[51]], []],

	// src/routes/svelte-components/skill-bars/Bar.svelte
	[/^\/svelte-components\/skill-bars\/Bar\/?$/, [c[27], c[52]], []],

	// src/routes/svelte-components/sort-table/index.svelte
	[/^\/svelte-components\/sort-table\/?$/, [c[27], c[53]], []],

	,

	// src/routes/svelte-components/data-list.svelte
	[/^\/svelte-components\/data-list\/?$/, [c[27], c[54]], []],

	// src/routes/svelte-components/tree-view/index.svelte
	[/^\/svelte-components\/tree-view\/?$/, [c[27], c[55]], []],

	// src/routes/svelte-components/tree-view/TreeView.svelte
	[/^\/svelte-components\/tree-view\/TreeView\/?$/, [c[27], c[56]], []],

	,

	// src/routes/svelte-components/calendar/index.svelte
	[/^\/svelte-components\/calendar\/?$/, [c[27], c[57]], []],

	,

	// src/routes/svelte-components/calendar/Appointment.svelte
	[/^\/svelte-components\/calendar\/Appointment\/?$/, [c[27], c[58]], []],

	// src/routes/svelte-components/calendar/Scheduler.svelte
	[/^\/svelte-components\/calendar\/Scheduler\/?$/, [c[27], c[59]], []],

	// src/routes/svelte-components/calendar/Calendar.svelte
	[/^\/svelte-components\/calendar\/Calendar\/?$/, [c[27], c[60]], []],

	// src/routes/svelte-components/checkbox.svelte
	[/^\/svelte-components\/checkbox\/?$/, [c[27], c[61]], []],

	// src/routes/svelte-components/flip-box/index.svelte
	[/^\/svelte-components\/flip-box\/?$/, [c[27], c[62]], []],

	// src/routes/svelte-components/flip-box/FlashCard.svelte
	[/^\/svelte-components\/flip-box\/FlashCard\/?$/, [c[27], c[63]], []],

	,

	// src/routes/svelte-components/timeline/index.svelte
	[/^\/svelte-components\/timeline\/?$/, [c[27], c[64]], []],

	,

	,

	// src/routes/svelte-components/timeline/Event.svelte
	[/^\/svelte-components\/timeline\/Event\/?$/, [c[27], c[65]], []],

	// src/routes/svelte-components/pwd-gen/index.svelte
	[/^\/svelte-components\/pwd-gen\/?$/, [c[27], c[66]], []],

	// src/routes/svelte-components/pwd-gen/PasswordGen.svelte
	[/^\/svelte-components\/pwd-gen\/PasswordGen\/?$/, [c[27], c[67]], []],

	// src/routes/svelte-components/pwd-gen/RegForm.svelte
	[/^\/svelte-components\/pwd-gen\/RegForm\/?$/, [c[27], c[68]], []],

	// src/routes/grid-layout/index.svelte
	[/^\/grid-layout\/?$/, [c[69], c[70]], []],

	// src/routes/grid-layout/layout-without-media-query.svelte
	[/^\/grid-layout\/layout-without-media-query\/?$/, [c[69], c[71]], []],

	// src/routes/grid-layout/twelve-column-system.svelte
	[/^\/grid-layout\/twelve-column-system\/?$/, [c[69], c[72]], []],

	// src/routes/grid-layout/expand-section-grid.svelte
	[/^\/grid-layout\/expand-section-grid\/?$/, [c[69], c[73]], []],

	// src/routes/grid-layout/photo-grid-animated.svelte
	[/^\/grid-layout\/photo-grid-animated\/?$/, [c[69], c[74]], []],

	// src/routes/grid-layout/three-column-fluid.svelte
	[/^\/grid-layout\/three-column-fluid\/?$/, [c[69], c[75]], []],

	// src/routes/grid-layout/auto-filling-grid.svelte
	[/^\/grid-layout\/auto-filling-grid\/?$/, [c[69], c[76]], []],

	// src/routes/grid-layout/product-listing.svelte
	[/^\/grid-layout\/product-listing\/?$/, [c[69], c[77]], []],

	// src/routes/grid-layout/grid-concept.svelte
	[/^\/grid-layout\/grid-concept\/?$/, [c[69], c[78]], []],

	,

	// src/routes/grid-layout/flex-layout/index.svelte
	[/^\/grid-layout\/flex-layout\/?$/, [c[69], c[79]], []],

	// src/routes/grid-layout/flex-layout/growshrinkbasis.svelte
	[/^\/grid-layout\/flex-layout\/growshrinkbasis\/?$/, [c[69], c[80]], []],

	// src/routes/grid-layout/flex-layout/flowdirection.svelte
	[/^\/grid-layout\/flex-layout\/flowdirection\/?$/, [c[69], c[81]], []],

	// src/routes/grid-layout/flex-layout/aligncontent.svelte
	[/^\/grid-layout\/flex-layout\/aligncontent\/?$/, [c[69], c[82]], []],

	// src/routes/grid-layout/flex-layout/mediaobjects.svelte
	[/^\/grid-layout\/flex-layout\/mediaobjects\/?$/, [c[69], c[83]], []],

	// src/routes/grid-layout/flex-layout/flexshrink.svelte
	[/^\/grid-layout\/flex-layout\/flexshrink\/?$/, [c[69], c[84]], []],

	// src/routes/grid-layout/flex-layout/alignment.svelte
	[/^\/grid-layout\/flex-layout\/alignment\/?$/, [c[69], c[85]], []],

	// src/routes/grid-layout/flex-layout/alignself.svelte
	[/^\/grid-layout\/flex-layout\/alignself\/?$/, [c[69], c[86]], []],

	// src/routes/grid-layout/flex-layout/flexbasis.svelte
	[/^\/grid-layout\/flex-layout\/flexbasis\/?$/, [c[69], c[87]], []],

	// src/routes/grid-layout/flex-layout/holygrail.svelte
	[/^\/grid-layout\/flex-layout\/holygrail\/?$/, [c[69], c[88]], []],

	// src/routes/grid-layout/flex-layout/flexgrow.svelte
	[/^\/grid-layout\/flex-layout\/flexgrow\/?$/, [c[69], c[89]], []],

	// src/routes/grid-layout/flex-layout/flexwrap.svelte
	[/^\/grid-layout\/flex-layout\/flexwrap\/?$/, [c[69], c[90]], []],

	// src/routes/grid-layout/flex-layout/vertical.svelte
	[/^\/grid-layout\/flex-layout\/vertical\/?$/, [c[69], c[91]], []],

	// src/routes/grid-layout/flex-layout/hexagon.svelte
	[/^\/grid-layout\/flex-layout\/hexagon\/?$/, [c[69], c[92]], []],

	// src/routes/grid-layout/flex-layout/justify.svelte
	[/^\/grid-layout\/flex-layout\/justify\/?$/, [c[69], c[93]], []],

	// src/routes/grid-layout/flex-layout/grids.svelte
	[/^\/grid-layout\/flex-layout\/grids\/?$/, [c[69], c[94]], []],

	// src/routes/grid-layout/flex-layout/order.svelte
	[/^\/grid-layout\/flex-layout\/order\/?$/, [c[69], c[95]], []],

	// src/routes/grid-layout/photo-grid.svelte
	[/^\/grid-layout\/photo-grid\/?$/, [c[69], c[96]], []],

	// src/routes/grid-layout/responsive.svelte
	[/^\/grid-layout\/responsive\/?$/, [c[69], c[97]], []],

	// src/routes/playground2/index.svelte
	[/^\/playground2\/?$/, [c[98], c[99]], []],

	// src/routes/playground2/neumorphism-loading-bars.svelte
	[/^\/playground2\/neumorphism-loading-bars\/?$/, [c[98], c[100]], []],

	// src/routes/playground2/circular-ring-loading.svelte
	[/^\/playground2\/circular-ring-loading\/?$/, [c[98], c[101]], []],

	// src/routes/playground2/glassmorphism-loading.svelte
	[/^\/playground2\/glassmorphism-loading\/?$/, [c[98], c[102]], []],

	// src/routes/playground2/magic-line-nav-below.svelte
	[/^\/playground2\/magic-line-nav-below\/?$/, [c[98], c[103]], []],

	// src/routes/playground2/vertical-expand-menu.svelte
	[/^\/playground2\/vertical-expand-menu\/?$/, [c[98], c[104]], []],

	// src/routes/playground2/curved-magic-menu-2.svelte
	[/^\/playground2\/curved-magic-menu-2\/?$/, [c[98], c[105]], []],

	// src/routes/playground2/neumorphism-loading.svelte
	[/^\/playground2\/neumorphism-loading\/?$/, [c[98], c[106]], []],

	// src/routes/playground2/curved-magic-menu.svelte
	[/^\/playground2\/curved-magic-menu\/?$/, [c[98], c[107]], []],

	// src/routes/playground2/rotate-earth-text.svelte
	[/^\/playground2\/rotate-earth-text\/?$/, [c[98], c[108]], []],

	// src/routes/playground2/social-icon-hover.svelte
	[/^\/playground2\/social-icon-hover\/?$/, [c[98], c[109]], []],

	// src/routes/playground2/cartoon-eye-move.svelte
	[/^\/playground2\/cartoon-eye-move\/?$/, [c[98], c[110]], []],

	// src/routes/playground2/circle-text-logo.svelte
	[/^\/playground2\/circle-text-logo\/?$/, [c[98], c[111]], []],

	// src/routes/playground2/circular-loading.svelte
	[/^\/playground2\/circular-loading\/?$/, [c[98], c[112]], []],

	// src/routes/playground2/loading-squares.svelte
	[/^\/playground2\/loading-squares\/?$/, [c[98], c[113]], []],

	// src/routes/playground2/menu-icon-hover.svelte
	[/^\/playground2\/menu-icon-hover\/?$/, [c[98], c[114]], []],

	// src/routes/playground2/three-dots-menu.svelte
	[/^\/playground2\/three-dots-menu\/?$/, [c[98], c[115]], []],

	// src/routes/playground2/water-drop-logo.svelte
	[/^\/playground2\/water-drop-logo\/?$/, [c[98], c[116]], []],

	// src/routes/playground2/dropdown-menu2.svelte
	[/^\/playground2\/dropdown-menu2\/?$/, [c[98], c[117]], []],

	// src/routes/playground2/falling-leaves.svelte
	[/^\/playground2\/falling-leaves\/?$/, [c[98], c[118]], []],

	// src/routes/playground2/glowing-text-2.svelte
	[/^\/playground2\/glowing-text-2\/?$/, [c[98], c[119]], []],

	// src/routes/playground2/icon-text-anim.svelte
	[/^\/playground2\/icon-text-anim\/?$/, [c[98], c[120]], []],

	// src/routes/playground2/magic-line-nav.svelte
	[/^\/playground2\/magic-line-nav\/?$/, [c[98], c[121]], []],

	// src/routes/playground2/nine-dots-menu.svelte
	[/^\/playground2\/nine-dots-menu\/?$/, [c[98], c[122]], []],

	// src/routes/playground2/spiral-loading.svelte
	[/^\/playground2\/spiral-loading\/?$/, [c[98], c[123]], []],

	// src/routes/playground2/circular-menu.svelte
	[/^\/playground2\/circular-menu\/?$/, [c[98], c[124]], []],

	// src/routes/playground2/conic-spinner.svelte
	[/^\/playground2\/conic-spinner\/?$/, [c[98], c[125]], []],

	// src/routes/playground2/creative-menu.svelte
	[/^\/playground2\/creative-menu\/?$/, [c[98], c[126]], []],

	// src/routes/playground2/dropdown-menu.svelte
	[/^\/playground2\/dropdown-menu\/?$/, [c[98], c[127]], []],

	// src/routes/playground2/happy-diwali2.svelte
	[/^\/playground2\/happy-diwali2\/?$/, [c[98], c[128]], []],

	// src/routes/playground2/keyboard-keys.svelte
	[/^\/playground2\/keyboard-keys\/?$/, [c[98], c[129]], []],

	// src/routes/playground2/loading-plane.svelte
	[/^\/playground2\/loading-plane\/?$/, [c[98], c[130]], []],

	// src/routes/playground2/text-emphasis.svelte
	[/^\/playground2\/text-emphasis\/?$/, [c[98], c[131]], []],

	// src/routes/playground2/3d-anim-text.svelte
	[/^\/playground2\/3d-anim-text\/?$/, [c[98], c[132]], []],

	// src/routes/playground2/bounce-balls.svelte
	[/^\/playground2\/bounce-balls\/?$/, [c[98], c[133]], []],

	// src/routes/playground2/contact-info.svelte
	[/^\/playground2\/contact-info\/?$/, [c[98], c[134]], []],

	// src/routes/playground2/glowing-text.svelte
	[/^\/playground2\/glowing-text\/?$/, [c[98], c[135]], []],

	// src/routes/playground2/happy-diwali.svelte
	[/^\/playground2\/happy-diwali\/?$/, [c[98], c[136]], []],

	// src/routes/playground2/light-effect.svelte
	[/^\/playground2\/light-effect\/?$/, [c[98], c[137]], []],

	// src/routes/playground2/loading-anim.svelte
	[/^\/playground2\/loading-anim\/?$/, [c[98], c[138]], []],

	// src/routes/playground2/corner-text.svelte
	[/^\/playground2\/corner-text\/?$/, [c[98], c[139]], []],

	// src/routes/playground2/cursor-text.svelte
	[/^\/playground2\/cursor-text\/?$/, [c[98], c[140]], []],

	// src/routes/playground2/curved-menu.svelte
	[/^\/playground2\/curved-menu\/?$/, [c[98], c[141]], []],

	// src/routes/playground2/indian-flag.svelte
	[/^\/playground2\/indian-flag\/?$/, [c[98], c[142]], []],

	// src/routes/playground2/loading-bar.svelte
	[/^\/playground2\/loading-bar\/?$/, [c[98], c[143]], []],

	// src/routes/playground2/squid-games.svelte
	[/^\/playground2\/squid-games\/?$/, [c[98], c[144]], []],

	// src/routes/playground2/water-drops.svelte
	[/^\/playground2\/water-drops\/?$/, [c[98], c[145]], []],

	// src/routes/playground2/intro-text.svelte
	[/^\/playground2\/intro-text\/?$/, [c[98], c[146]], []],

	// src/routes/playground2/light-bulb.svelte
	[/^\/playground2\/light-bulb\/?$/, [c[98], c[147]], []],

	// src/routes/playground2/menu-hover.svelte
	[/^\/playground2\/menu-hover\/?$/, [c[98], c[148]], []],

	// src/routes/playground2/moving-box.svelte
	[/^\/playground2\/moving-box\/?$/, [c[98], c[149]], []],

	// src/routes/playground2/text-cubes.svelte
	[/^\/playground2\/text-cubes\/?$/, [c[98], c[150]], []],

	// src/routes/playground2/truck-anim.svelte
	[/^\/playground2\/truck-anim\/?$/, [c[98], c[151]], []],

	// src/routes/playground2/christmas.svelte
	[/^\/playground2\/christmas\/?$/, [c[98], c[152]], []],

	// src/routes/playground2/wavy-text.svelte
	[/^\/playground2\/wavy-text\/?$/, [c[98], c[153]], []],

	// src/routes/playground2/airplane.svelte
	[/^\/playground2\/airplane\/?$/, [c[98], c[154]], []],

	// src/routes/playground2/eye-move.svelte
	[/^\/playground2\/eye-move\/?$/, [c[98], c[155]], []],

	// src/routes/playground2/skeleton.svelte
	[/^\/playground2\/skeleton\/?$/, [c[98], c[156]], []],

	// src/routes/playground2/tea-cup.svelte
	[/^\/playground2\/tea-cup\/?$/, [c[98], c[157]], []],

	// src/routes/playground2/tweened.svelte
	[/^\/playground2\/tweened\/?$/, [c[98], c[158]], []],

	// src/routes/playground2/curves.svelte
	[/^\/playground2\/curves\/?$/, [c[98], c[159]], []],

	// src/routes/playground2/stairs.svelte
	[/^\/playground2\/stairs\/?$/, [c[98], c[160]], []],

	// src/routes/playground2/rain.svelte
	[/^\/playground2\/rain\/?$/, [c[98], c[161]], []],

	// src/routes/playground3/index.svelte
	[/^\/playground3\/?$/, [c[162], c[163]], []],

	// src/routes/playground3/cartesian-system-css.svelte
	[/^\/playground3\/cartesian-system-css\/?$/, [c[162], c[164]], []],

	// src/routes/playground3/linear-range-mapping.svelte
	[/^\/playground3\/linear-range-mapping\/?$/, [c[162], c[165]], []],

	// src/routes/playground3/rare-css-properties.svelte
	[/^\/playground3\/rare-css-properties\/?$/, [c[162], c[166]], []],

	// src/routes/playground3/claymorphism-login.svelte
	[/^\/playground3\/claymorphism-login\/?$/, [c[162], c[167]], []],

	// src/routes/playground3/glassmorphism-list.svelte
	[/^\/playground3\/glassmorphism-list\/?$/, [c[162], c[168]], []],

	// src/routes/playground3/neumorphism-in-css.svelte
	[/^\/playground3\/neumorphism-in-css\/?$/, [c[162], c[169]], []],

	// src/routes/playground3/claymorphism-list.svelte
	[/^\/playground3\/claymorphism-list\/?$/, [c[162], c[170]], []],

	// src/routes/playground3/random-particles.svelte
	[/^\/playground3\/random-particles\/?$/, [c[162], c[171]], []],

	// src/routes/playground3/circles-anim.svelte
	[/^\/playground3\/circles-anim\/?$/, [c[162], c[172]], []],

	// src/routes/playground3/sass-mixins.svelte
	[/^\/playground3\/sass-mixins\/?$/, [c[162], c[173]], []],

	// src/routes/playground3/animations.svelte
	[/^\/playground3\/animations\/?$/, [c[162], c[174]], []],

	// src/routes/playground3/card-list.svelte
	[/^\/playground3\/card-list\/?$/, [c[162], c[175]], []],

	// src/routes/playground3/color-use.svelte
	[/^\/playground3\/color-use\/?$/, [c[162], c[176]], []],

	// src/routes/playground/index.svelte
	[/^\/playground\/?$/, [c[177], c[178]], []],

	// src/routes/playground/3D-social-media-icon.svelte
	[/^\/playground\/3D-social-media-icon\/?$/, [c[177], c[179]], []],

	// src/routes/playground/before-after-pseudo.svelte
	[/^\/playground\/before-after-pseudo\/?$/, [c[177], c[180]], []],

	// src/routes/playground/icon-glassmorphism.svelte
	[/^\/playground\/icon-glassmorphism\/?$/, [c[177], c[181]], []],

	// src/routes/playground/star-rating-icons.svelte
	[/^\/playground\/star-rating-icons\/?$/, [c[177], c[182]], []],

	// src/routes/playground/li-pseudo-commas.svelte
	[/^\/playground\/li-pseudo-commas\/?$/, [c[177], c[183]], []],

	// src/routes/playground/ripple-animation.svelte
	[/^\/playground\/ripple-animation\/?$/, [c[177], c[184]], []],

	// src/routes/playground/countdown-timer.svelte
	[/^\/playground\/countdown-timer\/?$/, [c[177], c[185]], []],

	// src/routes/playground/diagnol-stripes.svelte
	[/^\/playground\/diagnol-stripes\/?$/, [c[177], c[186]], []],

	// src/routes/playground/dialog-backdrop.svelte
	[/^\/playground\/dialog-backdrop\/?$/, [c[177], c[187]], []],

	// src/routes/playground/gradient-shadow.svelte
	[/^\/playground\/gradient-shadow\/?$/, [c[177], c[188]], []],

	// src/routes/playground/fancy-ribbon-2.svelte
	[/^\/playground\/fancy-ribbon-2\/?$/, [c[177], c[189]], []],

	// src/routes/playground/glass-calendar.svelte
	[/^\/playground\/glass-calendar\/?$/, [c[177], c[190]], []],

	// src/routes/playground/rare-html-tags.svelte
	[/^\/playground\/rare-html-tags\/?$/, [c[177], c[191]], []],

	// src/routes/playground/abstract-bg-2.svelte
	[/^\/playground\/abstract-bg-2\/?$/, [c[177], c[192]], []],

	// src/routes/playground/ambient-light.svelte
	[/^\/playground\/ambient-light\/?$/, [c[177], c[193]], []],

	// src/routes/playground/full-calendar.svelte
	[/^\/playground\/full-calendar\/?$/, [c[177], c[194]], []],

	// src/routes/playground/http-firebase.svelte
	[/^\/playground\/http-firebase\/?$/, [c[177], c[195]], []],

	// src/routes/playground/ball-balance.svelte
	[/^\/playground\/ball-balance\/?$/, [c[177], c[196]], []],

	// src/routes/playground/calculator-2.svelte
	[/^\/playground\/calculator-2\/?$/, [c[177], c[197]], []],

	// src/routes/playground/calculator-3.svelte
	[/^\/playground\/calculator-3\/?$/, [c[177], c[198]], []],

	// src/routes/playground/fancy-border.svelte
	[/^\/playground\/fancy-border\/?$/, [c[177], c[199]], []],

	// src/routes/playground/fancy-ribbon.svelte
	[/^\/playground\/fancy-ribbon\/?$/, [c[177], c[200]], []],

	// src/routes/playground/abstract-bg.svelte
	[/^\/playground\/abstract-bg\/?$/, [c[177], c[201]], []],

	// src/routes/playground/apple-music.svelte
	[/^\/playground\/apple-music\/?$/, [c[177], c[202]], []],

	// src/routes/playground/star-rating.svelte
	[/^\/playground\/star-rating\/?$/, [c[177], c[203]], []],

	// src/routes/playground/thunderbolt.svelte
	[/^\/playground\/thunderbolt\/?$/, [c[177], c[204]], []],

	// src/routes/playground/box-shadow.svelte
	[/^\/playground\/box-shadow\/?$/, [c[177], c[205]], []],

	// src/routes/playground/calculator.svelte
	[/^\/playground\/calculator\/?$/, [c[177], c[206]], []],

	,

	// src/routes/playground/rating-bar.svelte
	[/^\/playground\/rating-bar\/?$/, [c[177], c[207]], []],

	// src/routes/playground/search-box.svelte
	[/^\/playground\/search-box\/?$/, [c[177], c[208]], []],

	// src/routes/playground/paper-bg.svelte
	[/^\/playground\/paper-bg\/?$/, [c[177], c[209]], []],

	// src/routes/playground/particle.svelte
	[/^\/playground\/particle\/?$/, [c[177], c[210]], []],

	// src/routes/playground/bg-anim.svelte
	[/^\/playground\/bg-anim\/?$/, [c[177], c[211]], []],

	// src/routes/playground/clock-2.svelte
	[/^\/playground\/clock-2\/?$/, [c[177], c[212]], []],

	// src/routes/playground/shadows.svelte
	[/^\/playground\/shadows\/?$/, [c[177], c[213]], []],

	// src/routes/playground/liquid.svelte
	[/^\/playground\/liquid\/?$/, [c[177], c[214]], []],

	// src/routes/playground/spring.svelte
	[/^\/playground\/spring\/?$/, [c[177], c[215]], []],

	// src/routes/playground/basic.svelte
	[/^\/playground\/basic\/?$/, [c[177], c[216]], []],

	// src/routes/playground/clock.svelte
	[/^\/playground\/clock\/?$/, [c[177], c[217]], []],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[218]], [c[1]]],

	// src/routes/web-pages/index.svelte
	[/^\/web-pages\/?$/, [c[219], c[220]], []],

	// src/routes/web-pages/personal-portfolio/index.svelte
	[/^\/web-pages\/personal-portfolio\/?$/, [c[219], c[221]], []],

	// src/routes/web-pages/personal-portfolio/resume.svelte
	[/^\/web-pages\/personal-portfolio\/resume\/?$/, [c[219], c[222]], []],

	// src/routes/web-pages/admin-dashboard.svelte
	[/^\/web-pages\/admin-dashboard\/?$/, [c[219], c[223]], []],

	// src/routes/web-pages/full-page-tabs/index.svelte
	[/^\/web-pages\/full-page-tabs\/?$/, [c[219], c[224]], []],

	// src/routes/web-pages/full-page-tabs/NewsPageContent.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPageContent\/?$/, [c[219], c[225]], []],

	// src/routes/web-pages/full-page-tabs/ContactPage.svelte
	[/^\/web-pages\/full-page-tabs\/ContactPage\/?$/, [c[219], c[226]], []],

	// src/routes/web-pages/full-page-tabs/AboutPage.svelte
	[/^\/web-pages\/full-page-tabs\/AboutPage\/?$/, [c[219], c[227]], []],

	// src/routes/web-pages/full-page-tabs/HomePage.svelte
	[/^\/web-pages\/full-page-tabs\/HomePage\/?$/, [c[219], c[228]], []],

	// src/routes/web-pages/full-page-tabs/NewsPage.svelte
	[/^\/web-pages\/full-page-tabs\/NewsPage\/?$/, [c[219], c[229]], []],

	// src/routes/web-pages/full-page-tabs/Footer.svelte
	[/^\/web-pages\/full-page-tabs\/Footer\/?$/, [c[219], c[230]], []],

	// src/routes/web-pages/advanced-flex/index.svelte
	[/^\/web-pages\/advanced-flex\/?$/, [c[219], c[231]], []],

	,

	// src/routes/web-pages/advanced-grid/index.svelte
	[/^\/web-pages\/advanced-grid\/?$/, [c[219], c[232]], []],

	,

	// src/routes/web-pages/dropdown-menu.svelte
	[/^\/web-pages\/dropdown-menu\/?$/, [c[219], c[233]], []],

	// src/routes/web-pages/services-page.svelte
	[/^\/web-pages\/services-page\/?$/, [c[219], c[234]], []],

	// src/routes/web-pages/sticky-header.svelte
	[/^\/web-pages\/sticky-header\/?$/, [c[219], c[235]], []],

	// src/routes/web-pages/advanced-css/index.svelte
	[/^\/web-pages\/advanced-css\/?$/, [c[219], c[236]], []],

	,

	,

	// src/routes/web-pages/whatsapp-web.svelte
	[/^\/web-pages\/whatsapp-web\/?$/, [c[219], c[237]], []],

	// src/routes/web-pages/contact-us.svelte
	[/^\/web-pages\/contact-us\/?$/, [c[219], c[238]], []],

	// src/routes/web-pages/e-commerce.svelte
	[/^\/web-pages\/e-commerce\/?$/, [c[219], c[239]], []],

	// src/routes/web-pages/light-dark.svelte
	[/^\/web-pages\/light-dark\/?$/, [c[219], c[240]], []],

	// src/routes/web-pages/newsletter.svelte
	[/^\/web-pages\/newsletter\/?$/, [c[219], c[241]], []],

	// src/routes/web-pages/auth-page.svelte
	[/^\/web-pages\/auth-page\/?$/, [c[219], c[242]], []],

	// src/routes/web-pages/404-page.svelte
	[/^\/web-pages\/404-page\/?$/, [c[219], c[243]], []],

	// src/routes/web-pages/three-js.svelte
	[/^\/web-pages\/three-js\/?$/, [c[219], c[244]], []],

	// src/routes/web-pages/fruits.svelte
	[/^\/web-pages\/fruits\/?$/, [c[219], c[245]], []],

	// src/routes/web-pages/basic.svelte
	[/^\/web-pages\/basic\/?$/, [c[219], c[246]], []],

	// src/routes/images/index.svelte
	[/^\/images\/?$/, [c[247], c[248]], []],

	// src/routes/images/images-para-two-column.svelte
	[/^\/images\/images-para-two-column\/?$/, [c[247], c[249]], []],

	// src/routes/images/image-blob-paint-all.svelte
	[/^\/images\/image-blob-paint-all\/?$/, [c[247], c[250]], []],

	// src/routes/images/image-fragmentation.svelte
	[/^\/images\/image-fragmentation\/?$/, [c[247], c[251]], []],

	// src/routes/images/portfolio-gallery/index.svelte
	[/^\/images\/portfolio-gallery\/?$/, [c[247], c[252]], []],

	// src/routes/images/portfolio-gallery/ImageCard.svelte
	[/^\/images\/portfolio-gallery\/ImageCard\/?$/, [c[247], c[253]], []],

	// src/routes/images/portfolio-gallery/Gallery.svelte
	[/^\/images\/portfolio-gallery\/Gallery\/?$/, [c[247], c[254]], []],

	,

	// src/routes/images/image-blob-paint.svelte
	[/^\/images\/image-blob-paint\/?$/, [c[247], c[255]], []],

	// src/routes/images/image-with-text.svelte
	[/^\/images\/image-with-text\/?$/, [c[247], c[256]], []],

	// src/routes/images/overlay-content.svelte
	[/^\/images\/overlay-content\/?$/, [c[247], c[257]], []],

	// src/routes/images/rotating-images.svelte
	[/^\/images\/rotating-images\/?$/, [c[247], c[258]], []],

	// src/routes/images/text-portrait.svelte
	[/^\/images\/text-portrait\/?$/, [c[247], c[259]], []],

	// src/routes/images/image-paint.svelte
	[/^\/images\/image-paint\/?$/, [c[247], c[260]], []],

	// src/routes/images/image-pixel.svelte
	[/^\/images\/image-pixel\/?$/, [c[247], c[261]], []],

	// src/routes/images/slideshow/index.svelte
	[/^\/images\/slideshow\/?$/, [c[247], c[262]], []],

	,

	// src/routes/images/slideshow/Slide.svelte
	[/^\/images\/slideshow\/Slide\/?$/, [c[247], c[263]], []],

	// src/routes/images/slideshow/Dot.svelte
	[/^\/images\/slideshow\/Dot\/?$/, [c[247], c[264]], []],

	// src/routes/images/gallery/index.svelte
	[/^\/images\/gallery\/?$/, [c[247], c[265]], []],

	// src/routes/images/gallery/ImageDisplay.svelte
	[/^\/images\/gallery\/ImageDisplay\/?$/, [c[247], c[266]], []],

	// src/routes/images/gallery/Thumbnail.svelte
	[/^\/images\/gallery\/Thumbnail\/?$/, [c[247], c[267]], []],

	,

	// src/routes/images/gallery/Caption.svelte
	[/^\/images\/gallery\/Caption\/?$/, [c[247], c[268]], []],

	// src/routes/images/gallery/Gallery.svelte
	[/^\/images\/gallery\/Gallery\/?$/, [c[247], c[269]], []],

	// src/routes/images/gallery/Slide.svelte
	[/^\/images\/gallery\/Slide\/?$/, [c[247], c[270]], []],

	// src/routes/videos/index.svelte
	[/^\/videos\/?$/, [c[271], c[272]], []],

	// src/routes/videos/scale-video-scroll.svelte
	[/^\/videos\/scale-video-scroll\/?$/, [c[271], c[273]], []],

	// src/routes/videos/video-slider.svelte
	[/^\/videos\/video-slider\/?$/, [c[271], c[274]], []],

	// src/routes/videos/video-text.svelte
	[/^\/videos\/video-text\/?$/, [c[271], c[275]], []],

	// src/routes/audio/index.svelte
	[/^\/audio\/?$/, [c[276], c[277]], []],

	// src/routes/audio/css-js-music-player.svelte
	[/^\/audio\/css-js-music-player\/?$/, [c[276], c[278]], []],

	// src/routes/audio/audio-player/index.svelte
	[/^\/audio\/audio-player\/?$/, [c[276], c[279]], []],

	// src/routes/audio/audio-player/ProgressBarTime.svelte
	[/^\/audio\/audio-player\/ProgressBarTime\/?$/, [c[276], c[280]], []],

	// src/routes/audio/audio-player/TrackHeading.svelte
	[/^\/audio\/audio-player\/TrackHeading\/?$/, [c[276], c[281]], []],

	// src/routes/audio/audio-player/VolumeSlider.svelte
	[/^\/audio\/audio-player\/VolumeSlider\/?$/, [c[276], c[282]], []],

	// src/routes/audio/audio-player/Controls.svelte
	[/^\/audio\/audio-player\/Controls\/?$/, [c[276], c[283]], []],

	// src/routes/audio/audio-player/PlayList.svelte
	[/^\/audio\/audio-player\/PlayList\/?$/, [c[276], c[284]], []],

	,

	// src/routes/cards/index.svelte
	[/^\/cards\/?$/, [c[285], c[286]], []],

	// src/routes/cards/testimonial-with-swiper.svelte
	[/^\/cards\/testimonial-with-swiper\/?$/, [c[285], c[287]], []],

	// src/routes/cards/light-dark-switch-card.svelte
	[/^\/cards\/light-dark-switch-card\/?$/, [c[285], c[288]], []],

	// src/routes/cards/3d-flip-product-card.svelte
	[/^\/cards\/3d-flip-product-card\/?$/, [c[285], c[289]], []],

	// src/routes/cards/gradient-border-card.svelte
	[/^\/cards\/gradient-border-card\/?$/, [c[285], c[290]], []],

	// src/routes/cards/gradient-card-shadow.svelte
	[/^\/cards\/gradient-card-shadow\/?$/, [c[285], c[291]], []],

	// src/routes/cards/cube-slider-swiper.svelte
	[/^\/cards\/cube-slider-swiper\/?$/, [c[285], c[292]], []],

	// src/routes/cards/neumorphic-card-d.svelte
	[/^\/cards\/neumorphic-card-d\/?$/, [c[285], c[293]], []],

	// src/routes/cards/neumorphic-card-l.svelte
	[/^\/cards\/neumorphic-card-l\/?$/, [c[285], c[294]], []],

	// src/routes/cards/overlapping-cards.svelte
	[/^\/cards\/overlapping-cards\/?$/, [c[285], c[295]], []],

	// src/routes/cards/3d-foldable-card.svelte
	[/^\/cards\/3d-foldable-card\/?$/, [c[285], c[296]], []],

	// src/routes/cards/card-border-anim.svelte
	[/^\/cards\/card-border-anim\/?$/, [c[285], c[297]], []],

	// src/routes/cards/image-hover-card.svelte
	[/^\/cards\/image-hover-card\/?$/, [c[285], c[298]], []],

	// src/routes/cards/weird-shape-card.svelte
	[/^\/cards\/weird-shape-card\/?$/, [c[285], c[299]], []],

	// src/routes/cards/neumorphic-card.svelte
	[/^\/cards\/neumorphic-card\/?$/, [c[285], c[300]], []],

	// src/routes/cards/3d-stack-cards.svelte
	[/^\/cards\/3d-stack-cards\/?$/, [c[285], c[301]], []],

	// src/routes/cards/hovering-cards.svelte
	[/^\/cards\/hovering-cards\/?$/, [c[285], c[302]], []],

	// src/routes/cards/instagram-card.svelte
	[/^\/cards\/instagram-card\/?$/, [c[285], c[303]], []],

	// src/routes/cards/3d-flip-card2.svelte
	[/^\/cards\/3d-flip-card2\/?$/, [c[285], c[304]], []],

	// src/routes/cards/profile-hover.svelte
	[/^\/cards\/profile-hover\/?$/, [c[285], c[305]], []],

	// src/routes/cards/3d-flip-card.svelte
	[/^\/cards\/3d-flip-card\/?$/, [c[285], c[306]], []],

	// src/routes/cards/contact-info.svelte
	[/^\/cards\/contact-info\/?$/, [c[285], c[307]], []],

	// src/routes/cards/glowing-card.svelte
	[/^\/cards\/glowing-card\/?$/, [c[285], c[308]], []],

	// src/routes/cards/hexagon-card.svelte
	[/^\/cards\/hexagon-card\/?$/, [c[285], c[309]], []],

	// src/routes/cards/product-card.svelte
	[/^\/cards\/product-card\/?$/, [c[285], c[310]], []],

	// src/routes/cards/profile-card.svelte
	[/^\/cards\/profile-card\/?$/, [c[285], c[311]], []],

	// src/routes/cards/curved-card.svelte
	[/^\/cards\/curved-card\/?$/, [c[285], c[312]], []],

	// src/routes/cards/glass-hover.svelte
	[/^\/cards\/glass-hover\/?$/, [c[285], c[313]], []],

	// src/routes/cards/player-card.svelte
	[/^\/cards\/player-card\/?$/, [c[285], c[314]], []],

	// src/routes/cards/glass-card.svelte
	[/^\/cards\/glass-card\/?$/, [c[285], c[315]], []],

	// src/routes/cards/glow-card.svelte
	[/^\/cards\/glow-card\/?$/, [c[285], c[316]], []],

	// src/routes/cards/glass.svelte
	[/^\/cards\/glass\/?$/, [c[285], c[317]], []],

	// src/routes/cards/book.svelte
	[/^\/cards\/book\/?$/, [c[285], c[318]], []],

	// src/routes/auth/index.svelte
	[/^\/auth\/?$/, [c[0], c[319]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];