<template>
  <div class="skeleton-box skeleton-element rounded-2xl min-h-full" />
</template>

<style>
.skeleton-box {
  position: relative;
  height: 400px;
  width: 100%;
}

.skeleton-element {
  background-color: #dedede;
  overflow: hidden;

  &::before {
    position: absolute;
    margin-bottom: 5px;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255,255,255, 0) 0,
      rgba(255,255,255, 0.4) 50%,
      rgba(255,255,255, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }
}
</style>
