/*global module:true */
module.exports=function(grunt){
    //less插件构建的配置信息
    grunt.initConfig({
        sprite:{
            files:{
                src:['images/*.png'],
                dest:'dist/bundle.png',
                destCss:'dist/sprite.css'
            }
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-spritesmith');

    //定义构建的任务清单
    grunt.registerTask('default',['sprite']);
    
}