<template>
  <div class="SideBanner"></div>
</template>

<style type="scss" scoped>
  .SideBanner {
    height: 100%;
    min-height: 120px;
    width: 50%;
    position: relative;
    background-image: url('/img/authBanner.webp');
    background-size: cover;
  }

  .SideBanner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #625be3d3;
  }

  @media only screen and (max-width: 1240px) {
    .SideBanner {
      display: none;
    }
  }
</style>