<template>
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a><li><router-link class="link" :to="{name: 'home'}">Home</router-link></li></a>
      <a><li><router-link class="link" :to="{name: 'about'}">About</router-link></li></a>
      <a><li><router-link class="link" :to="{name: 'projects'}">Projects</router-link></li></a>
      <a><li><router-link class="link" :to="{name: 'education'}">Education</router-link></li></a>
      <a><li><router-link class="link" :to="{name: 'contact'}">Contact</router-link></li></a>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
a
{
  text-decoration: none;
  color: #737171;
  transition: color 0.3s ease;

  &:hover {
    color: #e68021;
  }
}

#menuToggle
{
  display: block;
  position: relative;
  top: 30px;
  left: 50px;
  
  z-index: 1;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; 
  z-index: 2; 
  -webkit-touch-callout: none;
}

#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #ccc;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #ccc;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #181818;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>