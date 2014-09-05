var gulp = require('gulp'),
    port = 4000,
    lrport = 9088,
    tinylr;

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: lrport}));
  app.use(express.static(__dirname + '/src'));
  app.listen(port);
});

gulp.task('livereload', function() {
    tinylr = require('tiny-lr')();
    tinylr.listen(lrport);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname + 'src/', event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('watch', function() {
  gulp.watch('src/**/*', notifyLiveReload);
});

gulp.task('default', ['express', 'livereload', 'watch'], function() {
  console.log("Running @ http://localhost:" + port);
});
