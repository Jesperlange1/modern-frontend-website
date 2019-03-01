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
            <div class="register-link item">
              <router-link to="/signup" class="btn">Register</router-link>
            </div>

            <div class="sign-in-link item">
              <router-link to="/signup" class="btn">Sign in</router-link>
            </div>
            <div class="shopping-cart-link item btn">
              <a href="#">
                <i class="fa fa-shopping-cart"></i> empty
                <i class="fa fa-angle-down"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="nav bottomnav medium-width">
      <router-link to="/" class="brand item btn">
        <img src="src/assets/logo.png" alt="Avenue Fashion logo">
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
                  <li class="menu-point-category-item">
                    <router-link to="/product:1">Jackets</router-link>
                  </li>
                  <li class="menu-point-category-item">
                    <router-link to="/">Hoodies & Sweatshirts</router-link>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Polo Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Sportswear</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Trousers & Chinos</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>T-Shirts</a>
                  </li>
                </ul>
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Formal</h4>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Suits</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Trousers</a>
                  </li>
                </ul>
              </div>
              <ul class="menu-point-offer">
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
                    <a href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Hoodies & Sweatshirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Polo Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Sportswear</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Trousers & Chinos</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>T-Shirts</a>
                  </li>
                </ul>
                <ul class="menu-point-category">
                  <li class="menu-point-category-header">
                    <h4>Formal</h4>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Jackets</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Shirts</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Suits</a>
                  </li>
                  <li class="menu-point-category-item">
                    <a href>Trousers</a>
                  </li>
                </ul>
              </div>
              <ul class="menu-point-offer">
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
                <a href>look books</a>
              </li>
              <li class="menu-point-category-item">
                <a href>Men's</a>
              </li>
              <li class="menu-point-category-item">
                <a href>Women's</a>
              </li>
              <li class="menu-point-category-item">
                <a href>Your's</a>
              </li>
            </ul>
          </div>
          </li>          
        </ul>
        <div class="search-bar item">
          <form name="search-form">
            <input class="search-field" type="text" placeholder="Search...">
            <button class="search-button" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {};
var clickEle = document.getElementsByClassName("menu-point-header");
console.log(clickEle);
for (var i = 0; i < clickEle.length; i++) {
  clickEle[i].onclick = function() {
    var ele = this;
    var box = ele.nextElementSibling;
    console.log(box.className);
  };
}

/* $(document).ready(function() {
        $(".menu-point-header").click(function() {
          var ele = this;
          var box = $(ele).siblings(".menu-point-hover-box");

          console.log(box);
          if ($(box).hasClass("hidden")) {
            $(".menu-point-hover-box").addClass("hidden");
            $(box).removeClass("hidden");
          } else {
            
            $(box).addClass("hidden");
          }
        });
        $(".menu-point-hover-box").mouseleave(function(){
          var box = this;
          $(box).addClass("hidden");
        })
      });*/
</script>
