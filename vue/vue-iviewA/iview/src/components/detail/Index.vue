<template>
  <div class="index">
    {{message}}
    <div class="lists">
      <ul>
        <li v-for="item in items" :key="item">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      message: '新增用户',
      items: [
        {
          name: 'jessXu',
          sex: 'boy'
        },
        {
          name: 'jessXu2',
          sex: 'boy'
        },
        {
          name: 'jessXu3',
          sex: 'boy'
        },
        {
          name: 'jessXu4',
          sex: 'boy'
        }
      ]
    }
  }
}
</script>

