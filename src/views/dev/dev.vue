<template>
  <div>
    <header id="header">
      <h1>DEV</h1>
    </header>
    <!-- <img src="../../assets/imgs/vue-demo.png" style="height:200px;width:200px;"/>-->
    <el-alert title="成功提示的文案" type="success"></el-alert> 
    <section style="margin-top:60px;">
      <h2>
        <i class="fa fa-quora" aria-hidden="true"></i> USERS
      </h2>
      <el-button>ADD</el-button>
      <template v-for="(item,index) in userList">
        <el-button :key="index" @click="setCurrentUser(item)">{{ item.name }} {{ item.age }}</el-button>
      </template>

      <p>
        {{ currentUser }}
      </p>
      <quill-editor ref="myTextEditor"
                    v-model="content"
                    :options="editorOption">
      </quill-editor>
    </section>

  </div>
</template>

<script>
import * as Headroom from 'headroom.js';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
// import request from '@/utils/request';
import { quillEditor,Quill } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// import { container, ImageExtend } from 'quill-image-extend-module';
// import ImageResize from 'quill-image-resize-module';
// Quill.register('modules/ImageExtend', ImageExtend);
// Quill.register('modules/ImageResize', ImageResize);

console.log(Quill);

// 工具栏配置
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],       
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],  
  [{'indent': '-1'}, {'indent': '+1'}],        
  [{'direction': 'rtl'}],                       

  [{'size': ['small', false, 'large', 'huge']}], 
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}], 
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']               
];



export default {
  compoments:{
    quillEditor
  },
  data() {
    return {
      viewDialog:true,
      person:{
        subjects:[]
      },
      subjects:[{ id:1,name:'AAA' },{ id:2,name:'BBB' },{ id:3,name:'CCC' },{ id:4,name:'DDD' }],
      content: '<h2>I am Example</h2>',
      editorOption:{
          modules:{
              toolbar:toolbarOptions
          }
      }
    };
  },
  computed: {
    ...mapGetters([
      'userList',
      'currentUser'
    ]),

    editor() {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  methods: {
    ...mapActions([
      'getUsers',
      'setCurrentUser'
    ])
  },
  mounted() {

    // request.get('data/data.json').then(({ data })=>console.log(data));

    // this.$store.dispatch('getUsers');

    this.getUsers();

    this.$nextTick(()=>{

      var header = document.getElementById('header');
      var headroom = new Headroom(header, {
        "tolerance": 5,
        "offset": 90,
        "classes": {
          "initial": "animated",
          "pinned": "slideDown",
          "unpinned": "slideUp"
        }
      });
      headroom.init();
    });
  }
};
</script>

<style scoped lang="css">
  #header{
    position: fixed;
    /* position: static; */
    /* position: sticky; */
    z-index: 10;
    right: 0;
    left: 0;
    top: -20px;
    width:100%;
    background:#ddd;
    border:1px solid #ccc;
  }
  h1 {
    color: slategrey;
  }
  .quill-editor{
    text-align: left;
    height:900px;
  }

.header--fixed {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    top: -20px;
}

.slide {
    -webkit-transition: all .5s linear;
    -moz-transition: all .5s linear;
    -o-transition: all .5s linear;
    transition: all .5s linear
}

.slide--reset {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
}

.slide--up {
    -webkit-transform: translateY(-4em);
    -ms-transform: translateY(-4em);
    transform: translateY(-4em)
}

.slide--down {
    -webkit-transform: translateY(4em);
    -ms-transform: translateY(4em);
    transform: translateY(4em)
}

.animated {
    -webkit-animation-duration: .5s;
    -moz-animation-duration: .5s;
    -o-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes slideDown {
    0% {
        -webkit-transform: translateY(-4em)
    }
    100% {
        -webkit-transform: translateY(0)
    }
}

@-moz-keyframes slideDown {
    0% {
        -moz-transform: translateY(-4em)
    }
    100% {
        -moz-transform: translateY(0)
    }
}

@-o-keyframes slideDown {
    0% {
        -o-transform: translateY(-4em)
    }
    100% {
        -o-transform: translateY(0)
    }
}

@keyframes slideDown {
    0% {
        transform: translateY(-4em)
    }
    100% {
        transform: translateY(0)
    }
}

.animated.slideDown {
    -webkit-animation-name: slideDown;
    -moz-animation-name: slideDown;
    -o-animation-name: slideDown;
    animation-name: slideDown
}

@-webkit-keyframes slideUp {
    0% {
        -webkit-transform: translateY(0)
    }
    100% {
        -webkit-transform: translateY(-4em)
    }
}

@-moz-keyframes slideUp {
    0% {
        -moz-transform: translateY(0)
    }
    100% {
        -moz-transform: translateY(-4em)
    }
}

@-o-keyframes slideUp {
    0% {
        -o-transform: translateY(0)
    }
    100% {
        -o-transform: translateY(-4em)
    }
}

@keyframes slideUp {
    0% {
        transform: translateY(0)
    }
    100% {
        transform: translateY(-4em)
    }
}

.animated.slideUp {
    -webkit-animation-name: slideUp;
    -moz-animation-name: slideUp;
    -o-animation-name: slideUp;
    animation-name: slideUp
}

</style>