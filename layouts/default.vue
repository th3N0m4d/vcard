<template>
  <div class="crt-wrapper">
    <AppHeader />
    <!-- #crt-header -->
    <div id="crt-container" class="crt-container">
      <div id="crt-side-box-wrap" class="crt-sticky">
        <div id="crt-side-box">
          <AppProfileSummary
            :full-name="fullName"
            :headline="profile.headline"
            :avatar-url="profile.avatarUrl"
            :social-media-links="profile.socialMediaLinks"
          />
          <!-- .crt-side-box-item -->
        </div>
        <!-- #crt-side-box -->
      </div>
      <!-- #crt-side-box-wrap -->
      <AppSideNav />
      <!-- .crt-nav-wrap -->
      <div class="crt-container-sm">
        <div class="crt-paper-layers">
          <div class="crt-paper clearfix">
            <Nuxt />
            <!-- .crt-paper-cont -->
          </div>
          <!-- .crt-paper -->
        </div>
        <!-- .crt-paper-layers -->
      </div>
      <!-- .crt-container-sm -->
    </div>
    <!-- .crt-container -->
    <div id="crt-sidebar">
      <button id="crt-sidebar-close" class="btn btn-icon btn-light btn-shade">
        <span class="crt-icon crt-icon-close"></span>
      </button>
      <div id="crt-sidebar-inner">
        <nav id="crt-main-nav-sm" class="visible-xs text-center">
          <ul class="clear-list">
            <li><a href="index.html">home</a></li>
            <li><a href="portfolio.html">portfolio</a></li>
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
                <li><a href="single-youtube.html">single youtube</a></li>
                <li><a href="single-vimeo.html">single vimeo</a></li>
                <li>
                  <a href="single-dailymotion.html">single dailymotion</a>
                </li>
                <li><a href="single-soundcloud.html">single soundcloud</a></li>
                <li><a href="single-video.html">single video</a></li>
                <li><a href="single-audio.html">single audio</a></li>
              </ul>
            </li>
            <li><a href="contact.html">contact</a></li>
          </ul>
        </nav>
        <div class="crt-card bg-primary text-center">
          <div class="crt-card-avatar">
            <img
              class="avatar avatar-195"
              src="~/assets/images/uploads/avatar/avatar-195x195.png"
              srcset="~/assets/images/uploads/avatar/avatar-390x390.png 2x"
              width="195"
              height="195"
              alt=""
            />
          </div>
          <div class="crt-card-info">
            <h2 class="text-upper">Ola Lowe</h2>
            <p class="text-muted">Data scientist | Analyzer</p>
            <ul class="crt-social clear-list">
              <li>
                <a><span class="crt-icon crt-icon-facebook"></span></a>
              </li>
              <li>
                <a><span class="crt-icon crt-icon-twitter"></span></a>
              </li>
              <li>
                <a><span class="crt-icon crt-icon-google-plus"></span></a>
              </li>
              <li>
                <a><span class="crt-icon crt-icon-instagram"></span></a>
              </li>
              <li>
                <a><span class="crt-icon crt-icon-pinterest"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <aside class="widget-area">
          <section class="widget widget_search">
            <form role="search" method="get" class="search-form" action="#">
              <label>
                <span class="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  class="search-field"
                  placeholder="Search"
                  value=""
                  name="s"
                />
              </label>
              <button type="submit" class="search-submit">
                <span class="screen-reader-text">Search</span>
                <span class="crt-icon crt-icon-search"></span>
              </button>
            </form>
          </section>
          <section class="widget widget_posts_entries">
            <h2 class="widget-title">popular posts</h2>
            <ul>
              <li>
                <a class="post-image" href="#">
                  <img
                    src="~/assets/images/uploads/blog/img-70x70-01.png"
                    alt=""
                  />
                </a>
                <div class="post-content">
                  <h3>
                    <a href="#">contextual advertising</a>
                  </h3>
                </div>
                <div class="post-category-comment">
                  <a href="#" class="post-category">Work</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
              <li>
                <a class="post-image" href="#">
                  <img
                    src="~/assets/images/uploads/blog/img-70x70-02.jpg"
                    alt=""
                  />
                </a>
                <div class="post-content">
                  <h3>
                    <a href="#">grilling tips for the dog days of summer</a>
                  </h3>
                </div>
                <div class="post-category-comment">
                  <a href="#" class="post-category">Work</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
              <li>
                <a class="post-image" href="#">
                  <img
                    src="~/assets/images/uploads/blog/img-70x70-03.png"
                    alt=""
                  />
                </a>
                <div class="post-content">
                  <h3><a href="#"></a>branding do you know who are</h3>
                </div>
                <div class="post-category-comment">
                  <a href="#" class="post-category">Work</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
            </ul>
          </section>
          <section id="tag_cloud-2" class="widget widget_tag_cloud">
            <h2 class="widget-title">Tags</h2>
            <div class="tagcloud">
              <a
                href="#"
                class="tag-link-5 tag-link-position-1"
                title="1 topic"
                style="font-size: 1em"
                >Audios</a
              >
              <a
                href="#"
                class="tag-link-7 tag-link-position-2"
                title="1 topic"
                style="font-size: 1em"
                >Freelance</a
              >
            </div>
          </section>
          <section id="recent-posts-3" class="widget widget_recent_entries">
            <h4 class="widget-title">Recent Posts</h4>
            <ul>
              <li>
                <a href="#"
                  >Global Travel And Vacations Luxury Travel On A Tight
                  Budget</a
                >
                <div class="post-category-comment">
                  <a href="#" class="post-category">Photography</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
              <li>
                <a href="#">cooking for one</a>
                <div class="post-category-comment">
                  <a href="#" class="post-category">Work</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
              <li>
                <a href="#"
                  >An Ugly Myspace Profile Will Sure Ruin Your Reputation</a
                >
                <div class="post-category-comment">
                  <a href="#" class="post-category">Photography</a>
                  <a href="#" class="post-comments">256 comments</a>
                </div>
              </li>
            </ul>
          </section>
          <section class="widget widget_categories">
            <h4 class="widget-title">post categories</h4>
            <ul>
              <li class="cat-item"><a href="#">Audios</a>5</li>
              <li class="cat-item"><a href="#">Daili Inspiration</a>2</li>
              <li class="cat-item"><a href="#">Freelance</a>27</li>
              <li class="cat-item"><a href="#">Links</a>5</li>
              <li class="cat-item"><a href="#">Mobile</a>2</li>
              <li class="cat-item"><a href="#">Phography</a>27</li>
            </ul>
          </section>
        </aside>
      </div>
      <!-- #crt-sidebar-inner -->
    </div>
    <!-- #crt-sidebar -->
    <AppFooter />
    <!-- #crt-footer -->
    <svg
      id="crt-bg-shape-1"
      class="hidden-sm hidden-xs"
      height="519"
      width="758"
    >
      <polygon class="pol" points="0,455,693,352,173,0,92,0,0,71" />
    </svg>
    <svg
      id="crt-bg-shape-2"
      class="hidden-sm hidden-xs"
      height="536"
      width="633"
    >
      <polygon points="0,0,633,0,633,536" />
    </svg>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  head: {
    htmlAttrs: {
      class:
        'crt crt-side-box-on crt-nav-on crt-nav-type2 crt-main-nav-on crt-sidebar-on crt-layers-1 desktop crt-desktop',
    },
  },
  computed: {
    ...mapGetters(['profile', 'fullName']),
  },
}
</script>
