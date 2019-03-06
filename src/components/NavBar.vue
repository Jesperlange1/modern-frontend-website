<template>
  <header>
    <nav class="nav topnav">
      <div class="small-width">
        <ul>
          <li class="currency">
            Currency:
            <select class="select item item2">
              <option value="GBP">GBP</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
            </select>
          </li>
          <li class="float-right">
            <div @click="activateNavbar" class="register-link item">
              <router-link to="/signup" class="btn">Register</router-link>
            </div>

            <div @click="activateNavbar" class="sign-in-link item">
              <router-link to="/signup" class="btn">Sign in</router-link>
            </div>
            <div class="shopping-cart-link item btn hidden-xs">
              <a href="#">
                <i class="fa fa-shopping-cart"></i> empty
                <i class="fa fa-angle-down"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mobile-menu-line visible-xs">
      <div class="burger-menu" @click="activateNavbar">
        <i class="fa fa-bars"></i>
      </div>
      <div class="shopping-cart-link item btn">
        <a href="#">
          <i class="fa fa-shopping-cart"></i> empty
          <i class="fa fa-angle-down"></i>
        </a>
      </div>
    </div>
    <nav class="nav bottomnav medium-width" :class="{'hidden-xs': activeNavbar}">
      
      <router-link to="/" class="brand item btn">
        <img @click="activateNavbar" src="../assets/logo.png" alt="Avenue Fashion logo">
      </router-link>
      <div class="float-right flex">
        <ul class="menu-point item">
          <li class="menu-point-header">
            <a class="btn" href="#">Mens
              <br>
              <i class="fa fa-angle-down"></i>
            </a>
            <div class="menu-point-hover-box">
              <div class="top-hover-box">
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Casuals</h4>
                  </li>
                  <li @click="activateNavbar" class="menu-point-category-item">
                    <router-link to="/product/0">Jackets</router-link>
                  </li>
                  <li @click="activateNavbar" class="menu-point-category-item">
                    <router-link to="/product/0">Hoodies & Sweatshirts</router-link>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Polo Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Sportswear</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Trousers & Chinos</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>T-Shirts</a>
                  </li>
                </ul>
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Formal</h4>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Suits</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Trousers</a>
                  </li>
                </ul>
              </div>
              <ul class="menu-point-offer hidden-xs">
                <li class="offer">
                  <a href>
                    <span class="offer-header">AUTUMN SALE!</span>
                    <br>
                    <span class="offer-text">UP TO 50% OFF</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul class="menu-point item">
          <li class="menu-point-header">
            <a class="btn" href="#">WOMENS
              <br>
              <i class="fa fa-angle-down"></i>
            </a>
            <div class="menu-point-hover-box">
              <div class="top-hover-box">
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Casuals</h4>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Hoodies & Sweatshirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Polo Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Sportswear</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Trousers & Chinos</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>T-Shirts</a>
                  </li>
                </ul>
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Formal</h4>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Suits</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a @click="activateNavbar" href>Trousers</a>
                  </li>
                </ul>
              </div>
              <ul class="menu-point-offer hidden-xs">
                <li class="offer">
                  <a href>
                    <span class="offer-header">AUTUMN SALE!</span>
                    <br>
                    <span class="offer-text">UP TO 50% OFF</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul class="menu-point item">
          <li @click="activateNavbar" class="menu-point-header">
            <router-link class="btn" to="/brand">The Brand</router-link>
          </li>
        </ul>
        <ul class="menu-point item">
          <li class="menu-point-header">
            <a class="btn" href="#">LOCAL STORES
              <br>
              <i class="fa fa-angle-down"></i>
            </a>
          </li>
        </ul>
        <ul class="menu-point item">
          <li class="menu-point-header">
            <a class="btn" href="#">LOOK BOOK
              <br>
              <i class="fa fa-angle-down"></i>
            </a>
            <div class="menu-point-hover-box">
              <ul class="menu-point-category">
                <li class="menu-point-category-header">
                  <h4 @click="activateNavbar" href>look books</h4>
                </li>
                <li class="menu-point-category-item">
                  <a @click="activateNavbar" href>Men's</a>
                </li>
                <li class="menu-point-category-item">
                  <a @click="activateNavbar" href>Women's</a>
                </li>
                <li class="menu-point-category-item">
                  <a @click="activateNavbar" href>Your's</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="search-bar item">
          <form name="search-form">
            <input class="search-field" type="text" placeholder="Search...">
            <button @click="activateNavbar" class="search-button" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      activeNavbar: true
    };
  },
  computed: {
    //activeNavbar: true
  },
  methods: {
    activateNavbar: function(e) {
      if (this.activeNavbar) {
        this.activeNavbar = false;
      } else {
        this.activeNavbar = true;
      }
    }
  }
};
</script>
