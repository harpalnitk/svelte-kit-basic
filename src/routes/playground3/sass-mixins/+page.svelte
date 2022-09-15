<main class="flex-center">
    <div class="scrollable">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati adipisci repellendus nostrum praesentium, est doloremque eaque quo quibusdam ullam modi quasi voluptatibus deleniti aut exercitationem animi pariatur, incidunt id quam delectus excepturi dignissimos vel explicabo mollitia? Corporis quis molestiae ut, dolorum est quisquam ad expedita, impedit nesciunt sapiente ullam culpa. Consequatur itaque assumenda sapiente velit nemo expedita modi illo. Aperiam et sit blanditiis quos expedita. Omnis cumque iusto modi fugiat delectus recusandae nisi corporis sequi voluptas? Fugit necessitatibus quo sint, totam, sit beatae ipsam dignissimos cum, commodi repudiandae vero placeat perferendis esse distinctio odit ratione. Tenetur rerum eum quas commodi.
    </div>
    <div class="thick-but-otherwise-default-scrollable">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati adipisci repellendus nostrum praesentium, est doloremque eaque quo quibusdam ullam modi quasi voluptatibus deleniti aut exercitationem animi pariatur, incidunt id quam delectus excepturi dignissimos vel explicabo mollitia? Corporis quis molestiae ut, dolorum est quisquam ad expedita, impedit nesciunt sapiente ullam culpa. Consequatur itaque assumenda sapiente velit nemo expedita modi illo. Aperiam et sit blanditiis quos expedita. Omnis cumque iusto modi fugiat delectus recusandae nisi corporis sequi voluptas? Fugit necessitatibus quo sint, totam, sit beatae ipsam dignissimos cum, commodi repudiandae vero placeat perferendis esse distinctio odit ratione. Tenetur rerum eum quas commodi.
    </div>
    <div class="custom-colors-scrollable">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati adipisci repellendus nostrum praesentium, est doloremque eaque quo quibusdam ullam modi quasi voluptatibus deleniti aut exercitationem animi pariatur, incidunt id quam delectus excepturi dignissimos vel explicabo mollitia? Corporis quis molestiae ut, dolorum est quisquam ad expedita, impedit nesciunt sapiente ullam culpa. Consequatur itaque assumenda sapiente velit nemo expedita modi illo. Aperiam et sit blanditiis quos expedita. Omnis cumque iusto modi fugiat delectus recusandae nisi corporis sequi voluptas? Fugit necessitatibus quo sint, totam, sit beatae ipsam dignissimos cum, commodi repudiandae vero placeat perferendis esse distinctio odit ratione. Tenetur rerum eum quas commodi.
    </div>
    <div class="totally-custom-scrollable">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati adipisci repellendus nostrum praesentium, est doloremque eaque quo quibusdam ullam modi quasi voluptatibus deleniti aut exercitationem animi pariatur, incidunt id quam delectus excepturi dignissimos vel explicabo mollitia? Corporis quis molestiae ut, dolorum est quisquam ad expedita, impedit nesciunt sapiente ullam culpa. Consequatur itaque assumenda sapiente velit nemo expedita modi illo. Aperiam et sit blanditiis quos expedita. Omnis cumque iusto modi fugiat delectus recusandae nisi corporis sequi voluptas? Fugit necessitatibus quo sint, totam, sit beatae ipsam dignissimos cum, commodi repudiandae vero placeat perferendis esse distinctio odit ratione. Tenetur rerum eum quas commodi.
    </div>
</main>


<style lang='scss'>
    main{
        flex-direction: column;
    }
@mixin scrollbars(
  $size: 10px,
  $foreground-color: #eee,
  $background-color: #333
) {
  // For Google Chrome
  &::-webkit-scrollbar {
    width: $size;
    height: $size;
  }
  &::-webkit-scrollbar-thumb {
    background: $foreground-color;
  }
  &::-webkit-scrollbar-track {
    background: $background-color;
  }

  // Standard version (Firefox only for now)
  scrollbar-color: $foreground-color $background-color;
}


// USAGE


.scrollable {
  @include scrollbars;
}

.thick-but-otherwise-default-scrollable {
  // I can skip $b and $c because they are second and third
  @include scrollbars(30px);
}

.custom-colors-scrollable {
  // I can skip the first param if all the others are named.
  @include scrollbars($foreground-color: orange, $background-color: limegreen);
}

.totally-custom-scrollable {
  @include scrollbars(20px, red, pink);
}



div{
    max-height: 200px;
    width: 50%;
    border: 1px solid gray;
    padding: 1rem;
    margin: 1rem auto;
    overflow: scroll;
}

</style>