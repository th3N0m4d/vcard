<template>
  <header id="crt-header">
    <div class="crt-head-inner crt-container">
      <div class="crt-container-sm">
        <div class="crt-head-row">
          <div id="crt-head-col1" class="crt-head-col text-left">
            <NuxtLink id="crt-logo" class="crt-logo" to="/">
              <!-- <img
                src="~/assets/images/uploads/brand/logo.svg"
                alt="certy resume"
              /> -->
              <span>🖖 Hello world!</span>
            </NuxtLink>
          </div>
          <div id="crt-head-col2" class="crt-head-col text-right">
            <div class="crt-nav-container crt-container hidden-sm hidden-xs">
              <nav id="crt-main-nav">
                <ul class="clear-list">
                  <li><NuxtLink to="/">home</NuxtLink></li>
                  <!-- <li><a href="portfolio.html">portfolio</a></li>
                  <li class="has-sub-menu">
                    <a href="#">pages</a>
                    <ul class="sub-menu">
                      <li><a href="typography.html">typography</a></li>
                      <li><a href="components.html">components</a></li>
                      <li><a href="search.html">search</a></li>
                      <li><a href="404.html">404</a></li>
                    </ul>
                  </li>
                  <li class="has-sub-menu">
                    <a href="category.html">blog</a>
                    <ul class="sub-menu">
                      <li><a href="single.html">single</a></li>
                      <li><a href="single-image.html">single image</a></li>
                      <li><a href="single-slider.html">single slider</a></li>
                      <li>
                        <a href="single-youtube.html">single youtube</a>
                      </li>
                      <li><a href="single-vimeo.html">single vimeo</a></li>
                      <li>
                        <a href="single-dailymotion.html">single dailymotion</a>
                      </li>
                      <li>
                        <a href="single-soundcloud.html">single soundcloud</a>
                      </li>
                      <li><a href="single-video.html">single video</a></li>
                      <li><a href="single-audio.html">single audio</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">contact</a></li> -->
                </ul>
              </nav>
            </div>
          </div>
          <div id="crt-head-col3" class="crt-head-col text-right">
            <button id="crt-sidebar-btn" class="btn btn-icon btn-shade">
              <span class="crt-icon crt-icon-side-bar-icon"></span>
            </button>
          </div>
        </div>
      </div>
      <!-- .crt-head-inner -->
    </div>
    <nav id="crt-nav-sm" class="crt-nav hidden-lg hidden-md">
      <ul class="clear-list">
        <li>
          <NuxtLink to="/" data-tooltip="Home"
            ><img
              class="avatar avatar-42"
              src="~/assets/images/uploads/avatar/avatar-42x42.png"
              srcset="~/assets/images/uploads/avatar/avatar-84x84.png 2x"
              alt=""
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" data-tooltip="Experience"
            ><span class="crt-icon crt-icon-experience"></span
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio" data-tooltip="Portfolio"
            ><span class="crt-icon crt-icon-portfolio"></span
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/references" data-tooltip="References"
            ><span class="crt-icon crt-icon-references"></span
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" data-tooltip="Contact"
            ><span class="crt-icon crt-icon-contact"></span
          ></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" data-tooltip="Blog"
            ><span class="crt-icon crt-icon-blog"></span
          ></NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- #crt-nav-sm -->
  </header>
</template>
