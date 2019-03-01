<template>
  <main>
    <section class="full-width">
      <div
        class="page-title-header background-image"
        style="background-image:url(src/assets/Images/header-image2.png)"
      >
        <h3 class="title">
          <span class="big-text">Welcome</span> To Ave
        </h3>
        <h4 class="sub-header">Sign in or Register</h4>
      </div>
    </section>
    <section class="signup-section small-width">
      <div class="columns">
        <div class="left-column">
          <h2 class="header-text">Sign in</h2>
          <form class="sign-in">
            <input name="email" type="email" required placeholder="Your Email.">
            <input name="password" type="password" required placeholder="Your password.">
            <div class="button-line columns">
              <div class="left-column">
                <button type="submit" class="stylish-button">Sign in</button>
              </div>
              <div class="right-column">
                <div class="forgotten-password">
                  <a class="highlight-text">
                    Forgot your Password
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="right-column">
          <form class="sign-up">
            <h2 class="header-text">Register</h2>

            <input name="email" type="email" required placeholder="Your Email.">
            <input name="password" type="password" required placeholder="Your password.">
            <input name="password-confirm" type="password" required placeholder="Confirm password.">
            <div class="block newsletter-line">
              <div class="newsletter-checkbox">
                <input name="newsletter" type="checkbox">
              </div>

              <label class="newsletter-text" for="newsletter">
                Sign up for exclusive updates, discounts, new arrivals,
                contests, and more!
              </label>
            </div>
            <div class="button-line columns">
              <div class="left-column">
                <button type="submit" class="stylish-button">Create account</button>
              </div>
              <div class="right-column">
                <div class="forgotten-password privacy">
                  <a>
                    By clicking 'Create Account', you agree to our
                    <span class="highlight-text">
                      Privacy Policy
                      <i class="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
