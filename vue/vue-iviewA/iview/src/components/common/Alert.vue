<template>
  <div class="alert">
    {{msg}}
    </br>
    <Button type="primary" @click="hidden">ok</Button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {

    }
  },
  props: ['msg'],
  methods: {
    hidden () {
      this.$emit('fromChild', false)
    }
  }
}
</script>

<style scoped>
.alert{
  font-size: 30px;
  text-align: center;
  width: 300px;
  height: 200px;
  border: 1px solid #aaa;
  border-radius: 5px;
  position: fixed;
  background-color: bisque;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
}
</style>


