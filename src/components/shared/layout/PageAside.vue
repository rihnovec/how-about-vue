<script setup lang="ts">

</script>

<template>
  <aside class="page-aside">
    <div class="page-aside__content">
      <div class="page-aside__header">
        <slot name="header"></slot>
      </div>
      <div class="page-aside__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .page-aside {
    width: 40%;
    max-width: 640px;
    background-color: #F5F7F9;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .page-aside__content {
    flex-grow: 1;
    max-height: 711px;
    padding: 48px 83px 48px 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .page-aside__footer {
    font-size: 16px;
    line-height: 100%;
    font-weight: 300;
    color: #969899;
  }

  @media screen and (max-width: 992px) {
    .page-aside {
      display: none;
    }
  }
</style>