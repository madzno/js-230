$(function () {
  let posts = [{
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    tag: ['Food', 'Travel', 'Fashion']
  }, {
    title: 'Post with no tags',
    published: 'June 2, 2023',
    body: 'This is a post with no tags property'
  }];

  let postTemplate = Handlebars.compile($('#post').html());
  let tagsTemplate = Handlebars.compile($('#tags').html());

  Handlebars.registerPartial('tags', $('#tags').html());

  $(document.body).append(postTemplate({ posts: posts }));
});
