<template>
  <div id="app">
    <header>
      <h1>Lívia Almeida</h1>
      <h2>Front End Developer</h2>
    </header>
    <div class="view">
      <nav id="nav">
        <router-link to="/">Sobre</router-link>
        <router-link to="/experience">Experiência</router-link>
        <router-link to="/knowledge">Conhecimento</router-link>
      </nav>
      <div class="router-view">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '~@/assets/scss/reset.scss';

$header-size: 9*$m;
$nav-width: 14*$m;

html, body, #app, .view {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

  * {
    box-sizing: border-box;
  }
}

header {
  width: 100%;
  height: $header-size;
  position: fixed;
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

.view {
  display: flex;
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
