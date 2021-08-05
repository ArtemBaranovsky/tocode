<template>
  <Posts-list :posts="posts" />
</template>

<script>
export default {
  name: "index.vue",
  layout: 'admin',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1-st post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eius eligendi eos eum iure nihil, numquam obcaecati perspiciatis voluptate voluptatibus. A animi assumenda dolor ea excepturi magnam neque officiis perferendis?',
          img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg?__cf_chl_managed_tk__=pmd_0d44acf3b8e81474fe3a8a34e2f5bf7c875c4642-1627638228-0-gqNtZGzNAuKjcnBszQZO'
        },
        {
          id: 2,
          title: '2-nd post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3-rd post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://cdn.shopify.com/s/files/1/0526/8740/5250/products/thundercap-calming-cap-action4.jpg'
        }
      ]
    }
  }
}
</script>
