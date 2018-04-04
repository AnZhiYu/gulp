//引入glup模块
var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var imgmin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
/*var sass = require("gulp-sass");*/

//插件应用
//压缩图片
gulp.task("imgmin",function(){
	return gulp.src("images/*")
			   .pipe( imgmin() )
			   .pipe( gulp.dest("distImg") );
})
//布置任务 ：  将src下的scss文件转成css文件,存放到dist下
gulp.task("sass",function(){
	return gulp.src( "src/style.scss" )
			   .pipe( sass() )
			   .pipe( gulp.dest("dist") );
})
//布置任务 ： 将 src下的style.css 文件压缩    
gulp.task("cssmin",function(){
	return gulp.src( "src/style.css" )
			   .pipe( cssmin() )
			   .pipe( gulp.dest("dist") );
})

//压缩css文件后并重命名
gulp.task("rename",function(){
	return gulp.src( "src/style.css" )
			   .pipe( cssmin() )
			   .pipe( rename("style.min.css") )
			   .pipe( gulp.dest("dist") );
})

//压缩js文件 并重命名
gulp.task( "uglify",function(){
	return gulp.src("src/sport6.js")
			   .pipe( uglify() )
			   .pipe( rename("sport.min.js") )
			   .pipe( gulp.dest( "dist" ) );
} )

//文件合并 ：将src下的css文件 合并一个all.css
gulp.task("concat",function(){
	return gulp.src(["src/1.css","src/2.css","src/style.css"])
			   .pipe( concat("all.css") )
			   .pipe( cssmin() )
			   .pipe( gulp.dest("dist") );
})

//布置一个默认任务  task()
//第一个参数 ： 任务名称   第二个参数 ：是一个数组   该任务依赖的其他任务  第三个参数 ： 回调函数
gulp.task("default",["say","dance"],function(){
	console.log("default任务执行");
})

//布置任务
gulp.task("say",["dance"],function(){
	console.log("say任务执行");
})

gulp.task("dance",function(){
	console.log("dance任务执行");
})

//src()  源文件路径    dest()目标文件路径    pipe() 管道方法  表示下一步

//布置任务 ： 将src目录下的index.html  复制到dest目录下
gulp.task("copyHtml",function(){
	return gulp.src("src/index.html")
			   .pipe( gulp.dest("dist") );
})
//布置任务 ： 将lib下的js文件  复制到  js目录下
gulp.task("copyJs",function(){
	return gulp.src("lib/*.js")
			   .pipe( gulp.dest("lib/js") )
})

//布置任务：将src下的css文件和lib下的css文件   拷贝到  dist下的css目录下
gulp.task("copyCss",function(){
	return gulp.src(["src/*.css","lib/*.css"])
			   .pipe( gulp.dest("dist/css") );
})

//布置任务 ： 将 lib下的所有文件  拷贝到 dist下的all中  *
gulp.task("copyAll",function(){
	return gulp.src("lib/*/**")
               .pipe( gulp.dest("dist/all") );		
})

//布置任务 :  监听  src下的index.html 文件  如果该文件有改动，自动将文件内容复制到 dist中的index.html中
gulp.task("watchHtml",function(){
	return gulp.watch("src/index.html",["copyHtml"]);
})
