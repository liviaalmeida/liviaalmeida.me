<template>
  <div id="app">
    <header>
      <h1>Lívia Almeida</h1>
      <h2>Front End Developer</h2>
    </header>
    <div class="desktop">
      <nav id="nav">
        <router-link to="/">Sobre</router-link>
        <router-link to="/experience">Experiência</router-link>
        <router-link to="/knowledge">Conhecimento</router-link>
      </nav>
      <div class="router-view">
        <router-view/>
      </div>
    </div>
    <div class="mobile">
      <router-view name="mobile" />
    </div>
  </div>
</template>

<style lang="scss">
@import '~@/assets/scss/reset.scss';

$header-size: 9*$m;
$nav-width: 14*$m;

html, body, #app, .desktop {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
    box-sizing: border-box;
  }
}

@media only screen and (min-height: 450px) {
	.desktop { display: flex; }
  .mobile { display: none; }
}

@media only screen and (max-height: 450px) and (min-width: 500px) {
	.desktop { display: none; }
  .mobile { display: flex; }
}

@media only screen and (max-width: 500px) {
	.desktop { display: none; }
  .mobile { display: flex; }
}

.desktop {
  .columns {
    display: flex;
    height: 100%;
    width: 100%;

    @for $i from 1 through 10 {
			.column-#{$i} {
        width: $i*10%;
      }
    }
    
    .column {
      margin: 6*$m 8*$m 6*$m;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}

.mobile {
  .column {
    margin: $header-size 3*$m 0;
    padding-top: 2*$m;

    > * {
      margin-bottom: 6*$m;
    }
  }
}

header {
  width: 100%;
  height: $header-size;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2*$m 0;
  background-color: $purple-main;
  color: $white;
  font-family: BebasNeue;
  font-weight: 600;

  h1 {
    font-size: 3.5*$m;
  }

  h2 {
    font-size: 2.5*$m;
  }
}

nav {
  width: $nav-width;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: $purple-secondary;
  color: $purple-main;
  padding-top: 15*$m;

    a {
      text-decoration: none;
      font-weight: bold;
      color: $purple-main;
      font-family: BebasNeue;
      font-size: 2.2*$m;
      padding: 0 3*$m 0 $m;

      &.router-link-exact-active {
        border-right: 0.4*$m solid $purple-main;
      }
  }
}

.router-view {
  margin-top: $header-size;
  margin-left: $nav-width;
  width: 100%;
  max-width: 100%;
}

</style>
