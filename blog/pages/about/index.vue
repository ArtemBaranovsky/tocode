<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog: </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad, aperiam asperiores consectetur dicta distinctio doloremque eius enim exercitationem, nemo obcaecati perspiciatis praesentium quis suscipit unde vel voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad, aperiam asperiores consectetur dicta distinctio doloremque eius enim exercitationem, nemo obcaecati perspiciatis praesentium quis suscipit unde vel voluptate voluptatibus.</p>
        <no-ssr>
          <Intro title="Lorem ipsum dolor sit amet" />
          <img src="@/assets/img/about.jpg" alt="">
        </no-ssr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad, aperiam asperiores consectetur dicta distinctio doloremque eius enim exercitationem, nemo obcaecati perspiciatis praesentium quis suscipit unde vel voluptate voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad, aperiam asperiores consectetur dicta distinctio doloremque eius enim exercitationem, nemo obcaecati perspiciatis praesentium quis suscipit unde vel voluptate voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, ad, aperiam asperiores consectetur dicta distinctio doloremque eius enim exercitationem, nemo obcaecati perspiciatis praesentium quis suscipit unde vel voluptate voluptatibus.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>


<script>
import intro from '@/components/UI/Intro'
export default {
  name: "index",
  components : { intro }

}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>
