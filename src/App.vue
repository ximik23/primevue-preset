<template>
  <div class="card flex gap-2 m-4">
    <Button label='text' severity='success'/>
    <Button label='text' severity='help'/>
    <Button label='text' severity='warn'/>
    <Button label='text' severity='danger'/>
    <p>123321</p>
  </div>
</template>

<script>
  export default {
    mounted() {
      document.title = this.$store.state.title;
    },
    data() {
      return {
      }
    },
  };
</script>
