<template>
  <div class="home">
    <br>
    <div id='home-box'><br>
      <b style='font-size:3em;color:yellow'>H<span style='color:blue'>O</span><span style='color:white'>M</span><span style='color:red'>E</span></b>
      <div class='content'> <br><br>
        <h1>WELCOME TO THE COSMOS</h1>
        <p>
          Cosmology is the study of the cosmos, and in its broadest sense covers a variety of very different approaches:
           scientific, religious and philosophical. All cosmologies have in common an attempt to understand the implicit
           order within the whole of being.In this way, most religions and philosophical systems have a cosmology.
        </p><br><br>
      </div>
      <br> <br>
      <h2>EXPLORE OUR =></h2>
      <br>
      <router-link to="/solarSystem/earth">
        <button class='hBtn'>Earth</button>
      </router-link>
      <router-link to="/solarSystem/earth">
        <button class='hBtn'>Moon</button>
      </router-link>
      <router-link to="/solarSystem/earth">
        <button class='hBtn'>Sun</button>
      </router-link> <br> <br>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.home{
  color: white;
  background: rgb(112,115,102);
  background: linear-gradient(292deg, rgba(112,115,102,0.9977124638918067) 1%, rgba(2,0,36,1) 90%);
  background-position:center;
  background-repeat: repeat;
}

#home-box {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-image: url('../../public/pics/gal.png');
  background-position:center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-size: 1.3em;
  color: azure;
  margin:10vw;
  margin-top:-4vh;
  margin-bottom:-20vw;
  min-height: 93.5vh;
}

.content{
  background: black;
  opacity: 0.5;
}
.hBtn{
  margin-right: 5vw;
  margin-left: 5vw;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 0.5vw;
  background:transparent;
  color: azure;
  padding-bottom: 0.5vw;
  border-radius: 10%;
  filter: saturate(100%);
  border:2px solid cyan;
}

.hBtn:hover{
  background:white;
  color: blue;
  border-radius: 0%;
  border:1px dashed crimson;
  filter: saturate(900%);
  cursor: pointer;
  transition: all 1s;
}
</style>
