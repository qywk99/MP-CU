const app = getApp();

Page({
    data: {
        code1: '<template>\n  <ui-sys>\n    ...业务代码\n  </ui-sys>\n</template>',
        code2: '<template>\n  <ui-sys bg="bg-white">\n    ...业务代码\n  </ui-sys>\n</template>',
        code3: '<template>\n  <ui-sys img="....">\n    ...业务代码\n  </ui-sys>\n</template>',
        code4: '<template>\n  <ui-sys bg="bg-none" img="....">\n    ...业务代码\n  </ui-sys>\n</template>'
    },
    onLoad() {
        this.setCuData('name' , '234234')
        console.log(this.getCuData("name"))
    },
    
    tapNative() {
        //'/pages/parameter/parameter?component=ui-sys'
    }
})
