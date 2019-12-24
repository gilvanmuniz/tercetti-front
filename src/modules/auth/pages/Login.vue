<template>
  <div class="envolucro">
    <div class="login-page">
      <div class="acesseLogin">
        <p :class="{mostrar:!showDiv}" id="acesse">Acesse sua empresa</p>
      <button :class="{mostrar:!showDiv}" id="mostra" @click="showDiv = !showDiv">
        <img src="../../../assets/images/senha.png" alt=""></button>
      </div>
      <div class="login" :class="{mostrar: showDiv}">
        <form @submit.prevent="submit()">
          <div class="form-group">
            <input
              required
              type="text"
              v-model="form.username"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              placeholder="Senha"
              class="form-control"
              v-model="form.password"
            />
          </div>
          <button class="btn btn-secondary">Entrar</button>
        </form>
      </div>
      <!-- fim div login-->
      <div class="conteudo">
         <div class="clip_frame grpelem" id="u94">
        <!-- image -->
        <img
          class="block"
          id="u94_img"
          src="../../../assets/images/logosemfundo.png?crc=3871584604"
          alt
          data-heightwidthratio="0.1761006289308176"
          data-image-width="318"
          data-image-height="56"
        />
      </div>
      <div class="texto">
         <div class="clearfix grpelem" id="u117-6">
          <!-- content -->
          <h4>Administrar sua empresa nunca foi tão fácil.</h4>
         </div><!--clearfix end-->
         <div class="clearfix grpelem" id="u121-5">
            <!-- content -->
            <p>
            Não somos apenas um software de gestão,
           </p>
           <p id="frase2">
             <span id="u121-2">somos uma tecnologia em administração.</span>
           </p>
         </div><!--clearfix end-->
      </div><!--texto class end -->

      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    showDiv: true
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer o login')
      }
    }
  },
  showMenu () {
    this.showDiv = !this.showDiv
  }
}
</script>

<style scoped lang="scss">
.envolucro {
  background-image: url("../../../assets/images/25060.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .login-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .acesseLogin{
      display: flex;
      align-items: center;
      margin-top:-1%;
      margin-bottom: 10%;
      float: right;
      margin-left: 75%;
    }
    #acesse{
      // margin-top: 0.1%;
      margin-right: 6px;
      font-size: 14px;
      color:white;
      margin-top:7%;
    }
    #mostra{
      background-color:white;
      img{
        width: 20px;
        height: 25px;
      }
    }
    .mostrar{
      display: none;
    }
    form {
      display: flex;
      margin-top: -20%;
      margin-bottom:10%;
      margin-right: -50%;
      margin-left:35%;
      input{ height: 28px;}
      button {
        height: 30px;
        color:rgb(73, 73, 73);
        background-color: #cacaca;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
    }
    p {
      color: aliceblue;
    }
    .card {
      width: 100%;
    }
    .conteudo{
      display: flex;
      justify-content: center;
      width: 70%;
      .clip_frame{
        margin-left:5%;
        margin-right:-4%;
         .block {
            width:82%;
         }
      }
      .texto {
             color: white;
             #frase2{
               margin-top: -5%;
             }
         }
    }
    h4{
      color: white;
    }
  }
}
</style>
