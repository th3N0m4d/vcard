<template>
  <div id="crt-nav-wrap" class="hidden-sm hidden-xs">
    <div id="crt-nav-inner">
      <div class="crt-nav-cont">
        <div id="crt-nav-scroll">
          <nav id="crt-nav" class="crt-nav">
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
              <!-- <li>
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
              </li> -->
            </ul>
          </nav>
        </div>
        <div id="crt-nav-tools" class="hidden">
          <span class="crt-icon crt-icon-dots-three-horizontal"></span>
          <button id="crt-nav-arrow" class="clear-btn">
            <span class="crt-icon crt-icon-chevron-thin-down"></span>
          </button>
        </div>
      </div>
      <div class="crt-nav-btm"></div>
    </div>
  </div>
</template>
